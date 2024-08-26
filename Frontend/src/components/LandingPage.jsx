import React from "react";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import Appbar from "./Appbar";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-100  h-screen">
      <main className="h-full ">
        <Appbar/>
        <div className="flex justify-center pt-40 md:pt-72">
          <div>
            <div className=" font-semibold text-center text-5xl md:text-6xl font-Kanit text-black mb-2">
              Ready to Take the Next Step in Your Career?
            </div>
            <div className=" text-lg md:text-xl  text-center font-Hind text-slate-500 mb-4">
              Create an account today, upload your resume, and get noticed by
              leading employers.
            </div>
            <div className="text-center">
              <Button
                onClick={() => {
                  navigate("/register");
                }}
                style="bg-blue-600  px-6 py-2 hover:bg-blue-500 text-white font-Afacad text-xl rounded-lg "
              >
                Register Yourself
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
