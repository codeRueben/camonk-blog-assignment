# CA Monk Blog Assessment

This project is a modern Blog Application built as part of the CA Monk frontend assessment. It features a responsive master-detail layout, full CRUD functionality, and state management using TanStack Query.

## 🛠️ Tech Stack

* **Frontend:** React + TypeScript (Vite)
* **Styling:** Tailwind CSS + shadcn/ui components
* **State Management:** TanStack Query (React Query)
* **Backend:** JSON Server (Mock API)

## 🚀 How to Run the Project

Since this project uses a mock backend (JSON Server) and a frontend (Vite), you must run **two separate terminals**.

### Step 1: Install Dependencies
Open your terminal in the project folder and run:
```bash
npm install

### Step 2: Start the Backend (Terminal 1)
In your first terminal, start the JSON server. This must remain running for data to load.

npm run server
Port: Runs on http://localhost:3001
Data Source: watches db.json

### Step 3: Start the Frontend (Terminal 2)
Open a new terminal tab or window and start the React application.

npm run dev
Port: Runs on http://localhost:5173
Action: Open this link in your browser to view the app.
✨ Features Implemented
View All Blogs: Fetches articles from the backend using TanStack Query.

Master-Detail View: Select a blog from the sidebar to view rich content on the right.

Create New Blog: A polished form (using shadcn/ui) to publish new articles.

Delete Blog: Functionality to remove articles directly from the UI (Trash icon).

Responsive Design: Optimized for different screen sizes with a clean, professional UI.