import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ApplicationCard from "./ApplicationCard";
import BookmarkApplications from "./BookmarkApplications";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { backend_Url } from "@/config";
function Applications() {
  const [applications, setApplications] = useState([]);
  const [savedApplication, setSavedApplication] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [allBookmark, setAllBookmark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function verifyToken() {
      try {
        const res = await fetch(`${backend_Url}/admin/istokensend`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Ensure Bearer scheme is used if applicable
          },
        });
        if (res.ok) {
          fetchApplications();
        } else {
          navigate("/admin");
        }
      } catch (error) {
        console.error("Token verification failed", error);
        toast.error("Something went wrong");
        navigate("/admin");
      }
    }
    verifyToken(); // Correctly calling the verifyToken function
  }, [navigate]);
  // Fetching applications
  const fetchApplications = async () => {
    try {
      const res = await fetch(`${backend_Url}/admin/applications`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.ok) {
        const result = await res.json();
        setApplications(result.Data);
      } else {
        console.log("Failed to fetch applications");
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("Failed to fetch applications");
    }
  };
  // Delete applications
  async function onDeleteHandler(id) {
    try {
      const deleted = await fetch(
        `${backend_Url}/admin/deleteApplication/${id}`,
        { method: "DELETE" }
      );
      if (deleted.ok) {
        setApplications((prev) => prev.filter((app) => app._id !== id));
        toast.success("Deleted Successfully!");
      } else {
        toast.error("Failed to delete!");
      }
    } catch (error) {
      toast.error("Failed to delete!");
    }
  }

  // Delete Bookmarked application
  async function onSavedDeleteHandler(id) {
    try {
      const deleted = await fetch(
        `${backend_Url}/admin/deleteBookmark/${id}`,
        { method: "DELETE" }
      );
      if (deleted.ok) {
        setSavedApplication((prev) => prev.filter((app) => app._id !== id));
        toast.success("Bookmark Deleted Successfully!");
      } else {
        const errorData = await deleted.json();
        toast.error(`Failed to delete: ${errorData.Message}`);
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete bookmark!");
    }
  }

  // Search functionality
  const fetchSearchedApplications = async (searchWord) => {
    try {
      const res = await fetch(`${backend_Url}/admin/finding`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchKeyWord: searchWord }),
      });
      if (res.ok) {
        const result = await res.json();
        setApplications(result.Result);
      } else {
        console.log("No applications found");
      }


      const res2 = await fetch(`${backend_Url}/admin/searchBookmark`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchKeyWord: searchWord }),
      });
      if (res2.ok) {
        const result2 = await res2.json();
        setSavedApplication(result2.Result);
      } else {
        console.log("No applications found");
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("Failed to search applications");
    }
  };

  // Debouncing with help of lodash
  // usecallback to memoise the function so it wont recreate on every re-render unless its dependencies has changed!
  const debouncingSearch = useCallback(
    _.debounce((searchwords) => {
      fetchSearchedApplications(searchwords);
    }, 500),
    [] // Empty array to ensure the debounce function is only created once
  );

  function handleSearchChange(e) {
    const searchWord = e.target.value;
    setSearchKey(searchWord);
    debouncingSearch(searchWord);
  }

  // onBookmarkClick
  async function onBookmarkClick(name, email, phone, linkedin, resume) {

    try {
      const savedAppli = await fetch(`${backend_Url}/admin/bookmark`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          linkedin,
          resume,
        }),
      });
      if (savedAppli.ok) {
        const result = await savedAppli.json();
        if (result.GoodMessage) {
          toast.success(` ${name} Application saved!`);
        } else {
          toast.error(` ${name} Already BookMarked!`);
        }
      } else {
      }
    } catch (error) {
      console.error("error", error);
      toast.error("Error occured!");
    }
  }

  async function onBookmarkButtonClicked() {
    // fetch bookmarked application from backend
    setAllBookmark(true);
    try {
      const savedAppli = await fetch(
        "http://localhost:3001/admin/savedApplications",
        {
          method: "GET",
        }
      );
      if (savedAppli.ok) {
        const result = await savedAppli.json();
        setSavedApplication(result.Saved);
      } else {
        toast.error("No Bookmark's");
      }
    } catch (error) {
      toast.error("Failed to fetch applications");
    }
  }

  async function onAllApplicationButtonClicked() {
    // fetch all Applicationns from backend
    setAllBookmark(false);
    try {
      const res = await fetch(`${backend_Url}/admin/applications`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.ok) {
        const result = await res.json();
        setApplications(result.Data);
      } else {
        toast.error("No Application's Found");
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("Failed to fetch applications");
    }
  }

  function showPdf(resume) {
    window.open(
      `${backend_Url}/Resumes/${resume}`,
      "_blank",
      "noreferrer"
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <Appbar />
      <div className="flex">
        <div>
          <Sidebar
            onBookmarkButtonClicked={onBookmarkButtonClicked}
            onAllApplicationButtonClicked={onAllApplicationButtonClicked}
            onChange={handleSearchChange}
            value={searchKey}
            onClick={fetchSearchedApplications}
          />
        </div>
        <div className="flex-1 p-4 lg:p-20">
          <h1 className=" text-2xl md:text-4xl font-extrabold text-black mb-8">
            APPLICATION'S
          </h1>
          {allBookmark ? (
            savedApplication.length === 0 ? (
              <div className=" text-center font-sans text-4xl  lg:text-6xl">
                No Saved Application's
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedApplication.map((app, index) => (
                  <BookmarkApplications
                    key={index}
                    id={app._id}
                    name={app.name}
                    email={app.email}
                    phone={app.phone}
                    linkedin={app.linkedin}
                    showPdf={() => {
                      showPdf(app.resume);
                    }}
                    onDeleteClick={onSavedDeleteHandler}
                  />
                ))}
              </div>
            )
          ) : applications.length === 0 ? (
            <div className=" text-center font-sans text-4xl  lg:text-6xl">
              No Application's has been created yet!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <ApplicationCard
                  key={index}
                  id={app._id}
                  name={app.name}
                  email={app.email}
                  phone={app.phone}
                  linkedin={app.linkedin}
                  resume={app.resume}
                  showPdf={() => {
                    showPdf(app.resume);
                  }}
                  onDeleteClick={onDeleteHandler}
                  onBookmarkClick={onBookmarkClick}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Applications;
