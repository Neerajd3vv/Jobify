import React, { useState } from "react";
import Appbar from "./Appbar";
import Inputfield from "./Inputfield";
import Button from "./Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function AdminDashboardPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // SigninHandler
  async function signinHandler() {
    try {
      const admin = await fetch("http://localhost:3001/admin/admin-signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          password: password.trim(),
        }),
      });
      const result = await admin.json();
      console.log(result);

      if (result.GoodMessage) {
        navigate("/applications");
        toast.success("Welcome Admin!");
      } else if (result.Notfound) {
        toast.error("Please provide correct credentials");
      }
    } catch (error) {
      toast.error("Could not able to signIn");
    }
  }

  return (
    <div>
      <Appbar />
      <div className="min-h-screen  flex items-center pb-48 justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-actualBlack  px-6 py-8 text-white text-center">
            <h1 className="text-4xl font-bold  font-poppins ">Admin Sign In</h1>
            <div className="text-blue-100 mt-2 font-Afacad text-lg">
              Sign in to view all applications
            </div>
          </div>
          <div className="px-6 py-8">
            <div className="mb-6">
              <div
                htmlFor="adminName"
                className="block  text-gray-700 text-sm font-bold mb-2"
              >
                Admin Name
              </div>
              <Inputfield
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Admin Name"
                style="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              />
            </div>
            <div className="mb-6">
              <div
                htmlFor="adminPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Admin Password
              </div>
              <Inputfield
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="text"
                placeholder="Admin Password"
                style="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <Button
                onClick={signinHandler}
                style="bg-blue-700 w-full hover:bg-blue-600 px-6 py-2  text-white font-Afacad text-xl rounded-lg "
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage;
