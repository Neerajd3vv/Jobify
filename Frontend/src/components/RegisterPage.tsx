import React from "react";
import { useState } from "react";
import Appbar from "./Appbar";
import Inputfield from "./Inputfield";
import Button from "./button";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [resume, setResume] = useState("");

  return (
    <div>
      <Appbar />
      <div className="  min-h-screen flex  justify-center items-center px-3 md:px-0">
        <div className="max-w-2xl w-full border-2 shadow-xl  border-slate-200 shadow- bg-white px-6 py-4 md:px-10 rounded-lg">
          <div>
            <h2 className="mt-6 text-center font-Kanit text-4xl md:text-5xl font-semibold text-gray-900">
              Register Yourself!
            </h2>
            <div className="mt-1 text-center text-lg md:text-xl font-Afacad text-gray-500">
              Join our platform and find your dream job
            </div>
            <div className="py-6">
              <Inputfield
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Name"
                style="bg-slate-100  font-Afacad text-xl px-4 py-4 w-full  rounded-lg "
              />
            </div>
            <div className="pb-6">
              <Inputfield
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="Email address"
                style="bg-slate-100 font-Afacad text-xl px-4 py-4 rounded-lg  w-full "
              />
            </div>
            <div className="pb-6">
              <Inputfield
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="number"
                placeholder="Phone number"
                style="bg-slate-100 font-Afacad text-xl px-4 py-4 rounded-lg  w-full "
              />
            </div>

            <div className="pb-6">
              <Inputfield
                onChange={(e) => {
                  setLinkedin(e.target.value);
                }}
                type="text"
                placeholder="LinkedIn URL"
                style="bg-gray-100 font-Afacad text-xl px-4 py-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="pb-8">
              <div className="block text-sm font-medium text-gray-700">
                Upload Resume
              </div>
              <div className="mt-1 flex justify-center py-5 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        onChange={(e) => {
                          setResume(e.target.value);
                        }}
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <div className="pl-1">or drag and drop</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>{resume}</div>
              <Button  style="bg-blue-700 w-full hover:bg-blue-600 px-6 py-2  text-white font-Afacad text-xl rounded-lg ">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
