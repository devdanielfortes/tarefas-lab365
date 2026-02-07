"use client";

import { useTaskContext } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";

export default function AddTaskPage() {
  const { addTask } = useTaskContext();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Adicionar Tarefa</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Preencha os campos para criar uma nova tarefa.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <TaskForm
          onSubmit={(data) => addTask(data)}
          submitLabel="Adicionar Tarefa"
        />
      </div>
    </div>
  );
}
