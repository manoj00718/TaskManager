🔐 Secure Task Management App
A complete full-stack task management solution built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This application enables users to securely register, log in, and manage their personal tasks with robust JWT-based authentication using access and refresh tokens.

🚀 Key Features
User registration and login system

Authentication via JSON Web Tokens (JWT) with access and refresh tokens

Route protection and automatic token expiry handling

Full CRUD functionality for tasks (Create, Read, Update, Delete)

Secure logout with token invalidation

Clean, responsive user interface for a smooth experience

🧰 Tech Stack
🖥 Frontend (React)
React.js – for building UI components

Axios – for HTTP requests

React Router DOM – for client-side routing

CSS Modules – for scoped and maintainable styling

⚙️ Backend (Node + Express)
Express.js – lightweight backend framework

MongoDB (via Mongoose) – for data persistence

JWT (jsonwebtoken) – for authentication and session handling

Bcrypt – for secure password hashing

Dotenv – to manage environment variables

📦 Setup Instructions (Local Development)
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/secure-task-manager.git
cd secure-task-manager
2️⃣ Configure Environment Variables
Update the .env files in both the server and client directories according to your local or deployment needs.

3️⃣ Start the App
Open two terminal windows:

🖥 Server (Backend)
bash
Copy
Edit
cd server
npm install
npm start
💻 Client (Frontend)
bash
Copy
Edit
cd client
npm install
npm run dev
📝 Notes
Make sure MongoDB is running locally or configure it to connect to your cloud database (e.g., MongoDB Atlas).

Adjust .env files to include your own secret keys and database URIs.