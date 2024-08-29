import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Appbar from "./Appbar";

const LandingPage = () => {
  const navigate = useNavigate();
  const featureArray = [
    { icon: "🚀", title: "Boost Your Career" },
    { icon: "🌟", title: "Stand Out to Employers" },
    { icon: "🔗", title: "Connect with Opportunities" }
  ]
  return (
    <div className="min-h-screen bg-slate-100">
      <Appbar />
      <main className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-center mb-6"
          >
            Ready to Take the Next Step in Your Career?
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-center mb-10 max-w-2xl"
          >
            Create an account today, upload your resume, and get noticed by leading employers.
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => navigate("/register")}
              className="bg-blue-700 text-white hover:bg-blue-600 font-semibold py-3 px-8 rounded-lg text-xl shadow-md"
            >
              Register Now
            </button>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featureArray.map((item, index) => (
            <div key={index} className="bg-white border-2 border-slate-200  p-6 rounded-lg text-center backdrop-filter backdrop-blur-lg">
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-xl font-semibold">{item.title}</div>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default LandingPage;