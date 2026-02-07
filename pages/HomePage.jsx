"use client";

import { useState, useMemo } from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";
import EmptyState from "../components/EmptyState";
import { Search, ListFilter } from "lucide-react";

export default function HomePage() {
  const { tasks, loaded } = useTaskContext();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("todas");

  const filteredTasks = useMemo(() => {
    let result = tasks;

    if (search.trim()) {
      const term = search.toLowerCase();
      result = result.filter(
        (task) =>
          task.title.toLowerCase().includes(term) ||
          (task.description && task.description.toLowerCase().includes(term))
      );
    }

    if (filter === "pendentes") {
      result = result.filter((task) => !task.completed);
    } else if (filter === "concluidas") {
      result = result.filter((task) => task.completed);
    }

    return result;
  }, [tasks, search, filter]);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [tasks]);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {tasks.length > 0 && (
        <>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-2xl font-bold text-foreground">{stats.total}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-2xl font-bold text-primary">{stats.pending}</p>
              <p className="text-xs text-muted-foreground">Pendentes</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <p className="text-2xl font-bold text-foreground">{stats.completed}</p>
              <p className="text-xs text-muted-foreground">Concluidas</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar tarefas..."
                className="w-full rounded-lg border border-input bg-card py-2.5 pl-10 pr-4 text-sm text-card-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <div className="relative">
              <ListFilter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="appearance-none rounded-lg border border-input bg-card py-2.5 pl-10 pr-10 text-sm text-card-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
              >
                <option value="todas">Todas</option>
                <option value="pendentes">Pendentes</option>
                <option value="concluidas">Concluidas</option>
              </select>
            </div>
          </div>
        </>
      )}

      {tasks.length === 0 ? (
        <EmptyState />
      ) : filteredTasks.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-sm text-muted-foreground">
            Nenhuma tarefa encontrada com os filtros atuais.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}
