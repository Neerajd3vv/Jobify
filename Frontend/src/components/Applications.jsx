import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaFilePdf,
  FaDownload,
  FaEye,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Appbar from "./Appbar";

function Applications() {
  const headings = [
    "APPLICANT NAME",
    "CONTACT",
    "LINKEDIN",
    "RESUME",
    "DELETE ENTRY",
  ];

  // Fetching applications
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    try {
      fetch("http://localhost:3001/admin/applications", {
        method: "GET",
      }).then(async (res) => {
        if (res.ok) {
          const result = await res.json();
          const finalApplicationsArray = result.Data;
          console.log(finalApplicationsArray);
          setApplications(finalApplicationsArray);
        } else {
          toast.error("Failed to get Applications");
        }
      });
    } catch (error) {
      console.error("Error", error);
    }
  }, []);

  // Deleting application
  async function onDeleteHandler(id) {
    try {
      const deleted = await fetch(
        `http://localhost:3001/admin/deleteApplication/${id}`,
        {
          method: "DELETE",
        }
      );
      if (deleted.ok) {
        toast.success("Deleted Successfully!");
        setApplications((prev) =>
          prev.filter((applicaiton) => applicaiton._id !== id)
        );
      } else {
        toast.error("Failed to delete!");
      }
    } catch (error) {
      toast.error("Failed to delete!");
    }
  }

  return (
    <div>
      <Appbar />
      <div className="min-h-screen  py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold  font-poppins mb-6">
            Applications
          </h1>
          <div className="bg-white shadow-sm rounded-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead className="bg-blue-700 text-white font-Actor font-bold">
                  <tr>
                    {headings.map((items, index) => (
                      <th
                        key={index}
                        className="px-6 py-3 text-center  font-medium  uppercase "
                      >
                        {items}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-slate-50 ">
                  {applications.map((app) => (
                    <tr
                      key={app._id}
                      className="border-b-2  border-slate-300  "
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-center ">
                        <div className="flex justify-center">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <FaUser className="h-10 w-10 rounded-full text-gray-300" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {app.name}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap flex justify-center ">
                        <div>
                          <div className="text-sm text-gray-900 flex items-center">
                            <FaEnvelope className="mr-2 text-gray-400" />{" "}
                            {app.email}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center mt-1">
                            <FaPhone className="mr-2 text-gray-400" />{" "}
                            {app.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex justify-center">
                          <div
                            href={app.linkedin}
                            className="text-blue-600   hover:text-blue-900 flex items-center cursor-pointer "
                          >
                            <FaLinkedin className="mr-2" /> Profile
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                        <div className="flex justify-center">
                          <div className="flex gap-4">
                            <button className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 rounded-md flex border-2 border-slate-200 items-center transition-colors duration-200">
                              <FaDownload className="mr-1" /> Download
                            </button>
                            <button className="bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1 rounded-md border-2 border-slate-200 flex items-center transition-colors duration-200">
                              <FaEye className="mr-1" /> View
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <div className="items-center ">
                            <MdDelete
                              onClick={() => {
                                onDeleteHandler(app._id);
                              }}
                              className="text-xl cursor-pointer hover:scale-150"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;
