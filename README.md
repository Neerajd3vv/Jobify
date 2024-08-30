Overview

Jobify is a web application designed to manage job applications with features for user registration, application management, and administrative oversight. Users can register, submit their job applications, and upload their resumes. Administrators (e.g., HR personnel) can log in to view, manage, and interact with the submitted applications. The application supports real-time search functionality with debouncing and secure authentication using JWT.

Features

User Registration Users can register by providing their name, email, phone number, LinkedIn profile link, and resume.

Admin Login HR administrators can log in to access the application management features.

Application Management Admins can view, download resumes, bookmark, and delete applications.

Real-Time Search Implemented with debouncing for efficient search functionality.

JWT Authentication Ensures secure access for both users and administrators.

Architecture

Frontend

React Utilized for building a dynamic and interactive user interface.

React Router Manages client-side routing and navigation.

Tailwind CSS Provides a modern, responsive design.

React Toastify Delivers user notifications and feedback.

Lodash Assists with debouncing search input for improved performance.

Backend

Node.js with Express Handles HTTP requests and serves as the core of the backend logic.

Multer Manages file uploads, specifically for resumes.

Prisma ORM used for database interactions with PostgreSQL.

JWT Provides secure authentication for both users and admins.

Database

PostgreSQL A relational database used to store user data, applications, and bookmarks.

Functionality

User Features

Registration

Endpoint POST register

Data Required name, email, phone, linkedin, resume

Description Registers a new user and stores their details in the database.

Login

Endpoint POST login

Data Required email, password

Description Authenticates users and returns a JWT token.

Admin Features

Admin Login

Endpoint POST adminlogin

Data Required email, password

Description Authenticates administrators and provides a JWT token for session management.

View Applications

Endpoint GET adminapplications

Headers Authorization Bearer token

Description Retrieves all job applications submitted by users.

Download Resume

Endpoint GET filesresume

Description Allows administrators to download resumes.

Bookmark Application

Endpoint POST adminbookmark

Data Required name, email, phone, linkedin, resume

Description Saves a job application as a bookmark for quick access.

Delete Application

Endpoint DELETE admindeleteApplicationid

Description Deletes a specific job application from the database.

Delete Bookmark

Endpoint DELETE admindeleteBookmarkid

Description Removes a bookmarked application.

Search Applications

Endpoint POST adminfinding

Data Required searchKeyWord

Description Searches for job applications based on the provided keyword, with debouncing.

Search Bookmarks

Endpoint POST adminsearchBookmark

Data Required searchKeyWord

Description Searches for bookmarked applications based on the provided keyword.

Setup and Deployment

Prerequisites

Node.js Ensure Node.js is installed.

PostgreSQL Set up a PostgreSQL database instance.

Installation

Clone the Repository

bash

Copy code

git clone httpsgithub.comyour-repojobify.git

cd jobify

Install Dependencies

bash

Copy code

npm install

Configure Environment Variables Create a .env file in the root directory with the following variables

makefile

Copy code

DATABASE\_URL=your-database-url

JWT\_SECRET=your-jwt-secret

Run Migrations

bash

Copy code

npx prisma migrate dev

Start the Server

bash

Copy code

npm start

Deployment

Frontend Deployed on Vercel. Push changes to the main branch to trigger automatic deployments.

Backend Can be deployed using platforms like Heroku or AWS. Ensure environment variables are set up correctly.

Troubleshooting

404 Errors Verify that all routes are correctly defined and that the application is properly deployed.

Authentication Issues Ensure JWT tokens are correctly issued and validated.

File Uploads Verify that the files directory exists and has the correct permissions for file uploads.
