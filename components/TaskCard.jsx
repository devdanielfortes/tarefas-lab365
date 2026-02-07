"use client";

import { Link } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import { Trash2, Pencil, Check, Circle } from "lucide-react";

export default function TaskCard({ task }) {
  const { removeTask, toggleTask } = useTaskContext();

  const priorityColors = {
    alta: "bg-destructive/10 text-destructive border-destructive/20",
    media: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    baixa: "bg-primary/10 text-primary border-primary/20",
  };

  return (
    <div
      className={`group rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md ${
        task.completed ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => toggleTask(task.id)}
          className="mt-0.5 shrink-0 transition-colors"
          aria-label={task.completed ? "Desmarcar tarefa" : "Marcar como concluida"}
        >
          {task.completed ? (
            <Check className="h-5 w-5 rounded-full bg-primary p-0.5 text-primary-foreground" />
          ) : (
            <Circle className="h-5 w-5 text-muted-foreground hover:text-primary" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3
              className={`font-semibold text-card-foreground truncate ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.title}
            </h3>
            {task.priority && (
              <span
                className={`inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-xs font-medium ${
                  priorityColors[task.priority] || priorityColors.media
                }`}
              >
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
            )}
          </div>
          {task.description && (
            <p
              className={`text-sm text-muted-foreground leading-relaxed line-clamp-2 ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.description}
            </p>
          )}
          {task.createdAt && (
            <p className="mt-2 text-xs text-muted-foreground">
              {new Date(task.createdAt).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <Link
            to={`/edit-task/${task.id}`}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            aria-label="Editar tarefa"
          >
            <Pencil className="h-4 w-4" />
          </Link>
          <button
            onClick={() => removeTask(task.id)}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
            aria-label="Excluir tarefa"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
