"use client";

import { Link } from "react-router-dom";
import { ClipboardList, Plus } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
        <ClipboardList className="h-8 w-8 text-accent-foreground" />
      </div>
      <h2 className="mb-2 text-lg font-semibold text-foreground">
        Nenhuma tarefa ainda
      </h2>
      <p className="mb-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
        Comece adicionando sua primeira tarefa para organizar suas atividades.
      </p>
      <Link
        to="/add-task"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <Plus className="h-4 w-4" />
        Adicionar Tarefa
      </Link>
    </div>
  );
}
