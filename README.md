
# Jobify

Overview
Jobify is a web application designed to manage job applications with features for user registration, application management, and administrative oversight. Users can register, submit their job applications, and upload their resumes. Administrators (e.g., HR personnel) can log in to view, manage, and interact with the submitted applications. The application supports real-time search functionality with debouncing and secure authentication using JWT.


# Features

- User Registration: Users can register by providing their name, email, phone number, LinkedIn profile link, and resume.
- Admin Login: HR administrators can log in to access the application management features.
- Application Management: Admins can view, download resumes, bookmark, and delete applications.
- Real-Time Search: Implemented with debouncing for efficient search functionality.
- JWT Authentication: Ensures secure access administrators.


# Architecture

## Frontend
- React: Utilized for building a dynamic and interactive user interface.
- React Router: Manages client-side routing and navigation.
- Tailwind CSS: Provides a modern, responsive design.
- React Toastify: Delivers user notifications and feedback.


## Backend
- Node.js with Express: Handles HTTP requests and serves as the core of the backend logic.
- Multer: Manages to manage resumes uploads
- JWT: Provides secure authentication for both users and admins.
- MongoDb: Used MongoDb to store the all the applications and other stuff.

# Functionality
## User Features
### Registration
- Endpoint: POST /register
- Data Required: name, email, phone, linkedin, resume
- Description: Registers a new user and stores their details.

## Admin Features
### Admin Login
- Endpoint: POST /admin/login
- Data Required: email, password
- Description: Authenticates admins and provides a JWT token.


### View Applications
- Endpoint: GET /admin/applications
- Headers: Authorization: Bearer <token>
- Description: Retrieves all job applications.


### Download Resume
- Endpoint: GET /files/:resume
- Description: Allows resume downloads.

### Bookmark Application
- Endpoint: POST /admin/bookmark
- Data Required: name, email, phone, linkedin, resume
- Description: Retrieves all job applications.


### Delete Application
- Endpoint: DELETE /admin/deleteApplication/:id
- Description: Deletes a job application.


### Delete Bookmark
- Endpoint: DELETE /admin/deleteBookmark/:id
- Description: Removes a bookmarked application.


### Search Applications
- Endpoint: POST /admin/finding
- Data Required: searchKeyWord
- Description: Searches applications with debouncing.


### Search Bookmarks
- Endpoint: POST /admin/searchBookmark
- Data Required: searchKeyWord
- Description: Searches bookmarked applications.


# Setup and Deployment

## Prerequisites
- Node.js: Ensure Node.js is installed.
- MongoDB: Get a mongo db connection url





# Installation

Clone the Repository:


```bash
git clone https://github.com/Neerajd3vv/Jobify.git
cd jobify

```
Install Dependencies:

```bash
npm install

```    
Configure Backend Environment Variables: Create a .env inside your Backend dir


```bash
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret


```  
Configure Frontend Environment Variables: Create a .env inside your Frontend dir


```bash
VITE_RENDER_BACKEND_URL=your-backend-url


```  
Start Backend


```bash
node index.js


```  
Start Frontend


```bash
npm run dev


```  

