import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import Button from "./Button";
import Inputfield from "./Inputfield";

export default function Sidebar({
  onChange,
  value,
  onBookmarkButtonClicked,
  onAllApplicationButtonClicked,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [whichButton, setWhichButton] = useState("");

  function handleButtonClicked(name) {
    setWhichButton(name);
    if (name === "Bookmark") {
      onBookmarkButtonClicked()
    } else if (name === "allApplications") {
      onAllApplicationButtonClicked()
    }
  }

  return (
    <div>
      {/* default sidebar icon */}
      {!isOpen && (
        <div
          className="fixed top-1/2  left-0 z-40 bg-actualBlack text-white p-2 rounded-r cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <FaChevronRight className="text-lg" />
        </div>
      )}

      {/* Sidebar content */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-100 shadow-lg border-r transition-transform duration-300 z-40 ${
          isOpen ? "translate-x" : "-translate-x-full"
        }`}
      >
        <div className="pt-10 flex justify-end pr-3">
          <FaChevronLeft
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <div className="px-2 mt-10">
          <div className="relative">
            <Inputfield
              value={value}
              onChange={onChange}
              placeholder="Search..."
              style="block w-full px-11 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:border-black transition duration-300 ease-in-out"
            />
            <IoSearch className="absolute text-xl left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="px-2 mt-3">
          <Button
            onClick={() => {
              handleButtonClicked("Bookmark");
            }}
            style={` ${
              whichButton === "Bookmark" ? "bg-blue-700" : "bg-actuaBlack"
            } bg-actualBlack hover:bg-black w-full  text-white px-3 py-2 rounded-md flex items-center`}
          >
            <FaRegBookmark className="text-md mr-3" />
            <div>Bookmark</div>
          </Button>
        </div>

        <div className="px-2 mt-3">
          <Button
            onClick={() => {
              handleButtonClicked("allApplications");
            }}
            style={` ${
              whichButton === "allApplications"
                ? "bg-blue-700"
                : "bg-actualBlack"
            } hover:bg-black w-full text-white px-3 py-2 rounded-md flex items-center justify-center`}
          >
            View All Applications
          </Button>
        </div>
      </div>

      {/* Another div render only if sidebar is open and render a div below the current sidebar, clicking which close the sidebar  */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
