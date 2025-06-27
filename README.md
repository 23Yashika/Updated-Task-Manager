# 📝 Task Manager Web App

A full-stack Task Manager web application where users can register, log in using a username, and manage their daily tasks. The app supports creating, editing, marking as complete, and deleting tasks. Completed and recent tasks are displayed in separate sections.

## 🔧 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)

---

## 🚀 Features

- 🔐 **User Registration & Login** (using just a username or full name)
- ➕ **Add Task** with a title and description
- ✅ **Mark Task as Complete**
- 🖊️ **Edit Tasks**
- 🗑️ **Delete Tasks** 
- 📄 **Recent Tasks** and **Completed Tasks** are shown separately
- 🧠 Smart task form updates for editing (no popups)

---

## 📁 Project Structure

```
task-manager/
├── client/                  # React frontend
│   ├── pages/               # Pages like Login, Register, and TaskDashboard
│   ├── components/          # Reusable UI components (e.g., Task Card)
│   ├── hooks/               # Custom React hooks (loginHook, registerHook, taskHook)
│   └── App.jsx              # Main React App component
│
├── server/                  # Node.js + Express backend
│   ├── controllers/         # Request handlers for user and task operations
│   ├── models/              # Mongoose schemas (User, Task)
│   ├── routes/              # Route definitions for API endpoints
│   ├── app.js               # Express app configuration
│   └── server.js            # Entry point to start the server
│
├── .env                     # Environment variables (e.g., MONGO_URI, PORT)
├── README.md                # Project documentation
└── package.json             # Project dependencies and scripts
```
