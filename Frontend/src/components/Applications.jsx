import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Appbar from "./Appbar";
import Button from "./Button";
import Sidebar from "./Sidebar";
import _ from "lodash";

function Applications() {
  const [applications, setApplications] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  // Fetching applications
  const fetchApplications = async () => {
    try {
      const res = await fetch("http://localhost:3001/admin/applications");
      if (res.ok) {
        const result = await res.json();
        setApplications(result.Data);
      } else {
        toast.error("Failed to get Applications");
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
        `http://localhost:3001/admin/deleteApplication/${id}`,
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

  // Search functionality
  const fetchSearchedApplications = async (value) => {
    try {
      const res = await fetch("http://localhost:3001/admin/finding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchKeyWord: value }),
      });
      if (res.ok) {
        const result = await res.json();
        setApplications(result.Result);
      } else {
        toast.error("Failed to search applications");
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("Failed to search applications");
    }
  };

  // Debounce search
  const debouncedSearch = useCallback(
    _.debounce((value) => {
      if (value) {
        fetchSearchedApplications(value);
      } else {
        fetchApplications();
      }
    }, 300),
    []
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchKey(value);
    debouncedSearch(value);
  };

  // Initial fetch
  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Appbar />
      <div className="flex">
        <div className="hidden lg:block">
          <Sidebar onChange={handleSearchChange} value={searchKey} />
        </div>
        <div className="flex-1 p-8 lg:p-20">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Applications
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div
                key={app._id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-gray-100 rounded-full p-2 mr-3">
                        <FaUser className="text-gray-600 text-xl" />
                      </div>
                      <div className="font-bold font-Afacad text-2xl text-gray-800">
                        {app.name}
                      </div>
                    </div>
                    <FaRegBookmark className="text-gray-400 hover:text-gray-600 cursor-pointer text-xl transition-colors duration-300" />
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FaEnvelope className="mr-2 text-lg" />
                      <span className="">{app.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaPhone className="mr-2 text-lg" />
                      <span className="text-sm font-mono">{app.phone}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      href={app.linkedin}
                      className="text-blue-600 hover:text-blue-700 flex items-center transition duration-300"
                    >
                      <FaLinkedin className="mr-2 text-2xl" />
                      <span className="text-sm hidden lg:block font-medium">
                        LinkedIn
                      </span>
                    </a>
                    <div className="flex space-x-2">
                      <Button style="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md flex items-center text-gray-700 transition-colors duration-300">
                        <FaDownload className="mr-2 text-sm" /> Resume
                      </Button>
                      <Button
                        onClick={() => onDeleteHandler(app._id)}
                        style="bg-red-50 hover:bg-red-100 px-3 py-2 rounded-md flex items-center text-red-600 transition-colors duration-300"
                      >
                        <MdDelete className="mr-2 text-lg" /> Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;
