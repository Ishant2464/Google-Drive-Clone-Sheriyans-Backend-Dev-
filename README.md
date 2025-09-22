# Drive Clone Backend

Backend application for a Google Drive-style file storage system. Users can register, authenticate, upload/download files, and view file metadata.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup & Installation](#setup--installation)  
- [Environment Variables](#environment-variables)  
- [API Endpoints](#api-endpoints)  
- [Usage](#usage)  
- [Future Roadmap](#future-roadmap)  
- [License](#license)

---

## Features

- User authentication (register/login)  
- Protected routes via middleware  
- File upload (single file) using Multer + Firebase Storage  
- Store file metadata (original name, path, owner ID) in MongoDB  
- File download/access via link  
- Simple front-end views (if applicable) using EJS  

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Server / Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| File Storage | Firebase Storage |
| File Upload Handling | Multer + multer-firebase-storage |
| Environment / Config | dotenv |

---

## Setup & Installation

1. Clone the repository:

git clone https://github.com/<your-username>/Google-Drive-Clone-Sheriyans-Backend-Dev-.git
cd Google-Drive-Clone-Sheriyans-Backend-Dev-

Install dependencies:

npm install


Create environment file:

cp .env.example .env


Add the following environment variables in .env:

PORT=5000
MONGO_URI=<your MongoDB connection string>
FIREBASE_PROJECT_ID=<your firebase project id>
FIREBASE_CLIENT_EMAIL=<firebase client email from serviceAccount JSON>
FIREBASE_PRIVATE_KEY=<firebase private key>
FIREBASE_STORAGE_BUCKET=<your storage bucket name (e.g. drive-8ef11.firebasestorage.app)>


Start the server:

npm start
