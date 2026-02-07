"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskForm({ initialData, onSubmit, submitLabel }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("media");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      setPriority(initialData.priority || "media");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({
      ...(initialData || {}),
      title: title.trim(),
      description: description.trim(),
      priority,
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="title"
          className="text-sm font-medium text-foreground"
        >
          Titulo *
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex: Estudar React Hooks"
          required
          className="rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="description"
          className="text-sm font-medium text-foreground"
        >
          Descricao
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descreva os detalhes da tarefa..."
          rows={4}
          className="rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground outline-none transition-colors resize-none focus:border-ring focus:ring-2 focus:ring-ring/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="priority"
          className="text-sm font-medium text-foreground"
        >
          Prioridade
        </label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-card-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
        >
          <option value="baixa">Baixa</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-ring/20 focus:outline-none"
        >
          {submitLabel || "Salvar"}
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
