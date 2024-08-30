import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const IconButton = ({ icon: Icon, onClick, ariaLabel, className }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className={`p-3 rounded-full transition-all duration-300 ${className} hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
  >
    <Icon className="text-lg" />
  </button>
);

export default function BookmarkApplications({
  id,
  name,
  email,
  phone,
  linkedin,
  onDeleteClick,
  showPdf,
}) {
  return (
    <div className="group">
      <div className="relative bg-slate-100 border-slate-200 border-2  rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md group-hover:-translate-y-1">
        <div className="relative p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-slate-300 rounded-full p-3 ">
                <FaUser className="text-white text-xl" />
              </div>
              <div className="font-bold font-Afacad text-3xl text-actualBlack ">
                {name}
              </div>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center space-x-3 group/item hover:text-indigo-600 transition-colors duration-200">
              <FaEnvelope className="text-slate-400" />
              <span className="font-Afacad  text-black text-lg">{email}</span>
            </div>
            <div className="flex items-center space-x-3 group/item hover:text-indigo-600 transition-colors duration-200">
              <FaPhone className="text-slate-400" />
              <span className="font-mono text-lg text-black ">{phone}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-400">
            <a
              href={linkedin}
              className="text-indigo-600 hover:text-indigo-800 flex items-center space-x-2 transition duration-300 group/link"
            >
              <FaLinkedin className="text-xl group-hover/link:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium">LinkedIn Profile</span>
            </a>
            <div className="flex space-x-2">
              <button
                onClick={showPdf}
                className="px-4 py-2 bg-blue-700 text-white rounded-lg flex items-center space-x-2 "
              >
                <FaDownload className="text-sm " />
                <span>Resume</span>
              </button>
              <IconButton
                icon={MdDelete}
                onClick={() => onDeleteClick(id)}
                ariaLabel="Delete application"
                className="text-red-500  hover:text-red-600 hover:bg-red-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
