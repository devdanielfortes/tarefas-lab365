"use client";

import { useParams, useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";

export default function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, editTask } = useTaskContext();

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          Tarefa nao encontrada
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          A tarefa que voce procura nao existe ou foi removida.
        </p>
        <button
          onClick={() => navigate("/")}
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Voltar ao inicio
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Editar Tarefa</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Altere os campos abaixo para atualizar a tarefa.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <TaskForm
          initialData={task}
          onSubmit={(data) => editTask(data)}
          submitLabel="Salvar Alteracoes"
        />
      </div>
    </div>
  );
}
