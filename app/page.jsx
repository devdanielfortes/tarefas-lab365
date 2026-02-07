"use client";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { TaskProvider } from "../context/TaskContext";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import AddTaskPage from "../pages/AddTaskPage";
import EditTaskPage from "../pages/EditTaskPage";

export default function Page() {
  return (
    <Router>
      <TaskProvider>
        <div className="flex min-h-screen flex-col bg-background">
          <Navbar />
          <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add-task" element={<AddTaskPage />} />
              <Route path="/edit-task/:id" element={<EditTaskPage />} />
            </Routes>
          </main>
          <footer className="border-t border-border py-4 text-center text-xs text-muted-foreground">
            Gerenciador de Tarefas &mdash; React + Context API + React Router
          </footer>
        </div>
      </TaskProvider>
    </Router>
  );
}
