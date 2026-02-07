"use client";

import { Link, useLocation } from "react-router-dom";
import { ClipboardList, Plus, Home } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <ClipboardList className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-foreground">Tarefas</span>
        </Link>

        <div className="flex items-center gap-1">
          <Link
            to="/"
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              isActive("/")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <Home className="h-4 w-4" />
            <span>Inicio</span>
          </Link>
          <Link
            to="/add-task"
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              isActive("/add-task")
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            <Plus className="h-4 w-4" />
            <span>Adicionar</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
