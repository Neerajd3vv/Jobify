// RegisterPage.js
import React, { useState } from 'react';
import Appbar from './Appbar';
import Inputfield from './Inputfield';
import Button from './button';
import { toast } from 'react-toastify';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [resume, setResume] = useState(null);
  const [resumeName, setResumeName] = useState('');

  const maxPdfSize = 150 * 1024;

  function onpdfSelected(e) {
    const pdf = e.target.files[0];
    if (pdf.size > maxPdfSize) {
      toast.error('PDF is above 150 kb');
      return;
    }

    setResume(pdf);
    setResumeName(pdf.name);
  }

  async function onSubmitHandler() {
    if (!name || !email || !phone || !linkedin || !resume) {
      toast.error('All fields are required!');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('linkedin', linkedin);
    formData.append('resume', resume);

    try {
      const response = await fetch('http://localhost:3001/user/v1/register', {
        method: 'POST',
        body: formData,
      });

       await response.json();
      if (response.ok) {
        toast.success('User created successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setLinkedin('');
        setResume(null);
        setResumeName('');
      } else {
        toast.error('User creation failed!');
      }
    } catch (error) {
      toast.error('Error in Registration: ' + error.message);
    }
  }

  return (
    <div>
      <Appbar />
      <div className="min-h-screen flex justify-center mt-8 lg:mt-0 items-center px-3 md:px-0">
        <div className="max-w-2xl w-full border-2 shadow-xl border-slate-200 bg-white rounded-lg">
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
                <div className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </div>
                <Inputfield
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  style="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                />
              </div>
              <div className="pb-6">
                <div className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </div>
                <Inputfield
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email address"
                  style="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                />
              </div>
              <div className="pb-6">
                <div className="block text-gray-700 text-sm font-bold mb-2">
                  Phone
                </div>
                <Inputfield
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="Phone number"
                  style="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                />
              </div>
              <div className="pb-6">
                <div className="text-gray-700 text-sm font-bold mb-2">
                  Linkedin
                </div>
                <Inputfield
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  type="text"
                  placeholder="LinkedIn URL"
                  style="block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                />
              </div>
              <div className="pb-8">
                <div className="text-gray-700 text-sm font-bold mb-2">
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
                        d="M28 8H12a4 4 0 00-4 4v32a4 4 0 004 4h32a4 4 0 004-4V16a4 4 0 00-4-4H28z"
                        fill="none"
                      ></path>
                      <path
                        d="M28 8H12a4 4 0 00-4 4v32a4 4 0 004 4h32a4 4 0 004-4V16a4 4 0 00-4-4H28z"
                        fill="none"
                      ></path>
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="resume"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-600"
                      >
                        <span>Upload Resume</span>
                        <input
                          id="resume"
                          name="resume"
                          type="file"
                          accept=".pdf"
                          onChange={onpdfSelected}
                          className="sr-only"
                        />
                      </label>
                    </div>
                    {resume && (
                      <p className="text-sm text-gray-500">{resumeName}</p>
                    )}
                  </div>
                </div>
              </div>
             <Button
                  onClick={onSubmitHandler}
                  style="bg-blue-700 w-full hover:bg-blue-600 px-6 py-2 text-white font-Afacad text-xl rounded-lg"
                >
                  Submit
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
