import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Inputfield from "./Inputfield";
import { FaRegBookmark } from "react-icons/fa6";

import Button from "./Button";

export default function  Sidebar () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`h-screen bg-gray-100 border border-r-slate-300 transition-all duration-300 ${
        isOpen ? "w-60" : "w-20"
      }`}
    >
      <div className={`pt-10 flex justify-end ${isOpen ? "pr-3" : "pr-3"}`}>
        <div>
          {isOpen ? (
            <FaChevronLeft
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          ) : (
            <FaChevronRight
              className="cursor-pointer"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          )}
        </div>
      </div>
      <div className={`px-2 mt-10 ${isOpen ? "block" : "hidden"}`}>
        <div className="relative">
          <Inputfield
            placeholder="Search..."
            style="block w-full px-11 py-2 
          }   border border-gray-300  rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none  focus:border-black transition duration-300 ease-in-out"
          />
          <IoSearch className="absolute text-xl left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className={`px-2 mt-3 ${isOpen ? "block" : "hidden"}`}>
        <Button style="bg-black w-full text-white px-3 py-2 rounded-md flex  items-center">
          <FaRegBookmark className="text-md mr-3 " /> Bookmark's
        </Button>
      </div>
    </div>
  );
};

