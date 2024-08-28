import React from "react";
import { useState } from "react";
import Appbar from "./Appbar";
import Inputfield from "./Inputfield";
import Button from "./button";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");

  // Submit button handler
  async function onSubmitHandler() {
    if (!name || !email || !phone || !linkedin) {
      toast.error("All fields are required!");
      return;
    }
    try {
      const newUser = await fetch("http://localhost:3001/user/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          linkedin,
        }),
      });
      const result = await newUser.json();
      if (newUser.ok) {
        toast.success("User created successfully!", {
          className: "Toastify_success",
        });
        setName("");
        setEmail("");
        setPhone("");
        setLinkedin("");
        console.log("Result", result);
      } else {
        toast.error("User creation failed!", {
          className: "Toastify__toast--error",
        });
        console.log("Result", result);
      }
    } catch (error) {
      console.error("Error occured while creating user ", error);
    }
  }

  return (
    <div>
      <Appbar />
      <div className="  min-h-screen flex  justify-center mt-8  lg:mt-0 items-center px-3 md:px-0">
        <div className="max-w-2xl w-full border-2 shadow-xl  border-slate-200 shadow- bg-white  rounded-lg">
          <div>
            <div className="bg-actualBlack py-6 rounded-t-lg">
              <h2 className="mt-6 text-center font-poppins text-4xl md:text-5xl font-bold text-white">
                Register Yourself!
              </h2>
              <div className="mt-2 text-center text-lg md:text-xl font-Afacad text-slate-200">
                Join our platform and find your dream job
              </div>
            </div>
            <div className="p-6">
              <div className="py-6">
                <div
                  htmlFor="adminName"
                  className="block  text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </div>
                <Inputfield
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Name"
                  style="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out "
                />
              </div>
              <div className="pb-6">
              <div
                  htmlFor="adminName"
                  className="block  text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </div>
                <Inputfield
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  placeholder="Email address"
                  style="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                />
              </div>
              <div className="pb-6">
              <div
                  htmlFor="adminName"
                  className="block  text-gray-700 text-sm font-bold mb-2"
                >
                  Phone
                </div>
                <Inputfield
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  type="text"
                  placeholder="Phone number"
                  style="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out "
                />
              </div>

              <div className="pb-6">
              <div
                  className="text-gray-700 text-sm font-bold mb-2"
                >
                  Linkedin
                </div>
                <Inputfield
                  value={linkedin}
                  onChange={(e) => {
                    setLinkedin(e.target.value);
                  }}
                  type="text"
                  placeholder="LinkedIn URL"
                  style="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                />
              </div>
              <div className="pb-8">
              <div
                  className="text-gray-700 text-sm font-bold mb-2"
                >
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
                <Button
                  onClick={onSubmitHandler}
                  style="bg-blue-700 w-full hover:bg-blue-600 px-6 py-2  text-white font-Afacad text-xl rounded-lg "
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
