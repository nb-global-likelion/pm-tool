import { useMemo, useState } from "react";
import ListView from "./components/ListView";
import type { Task } from "./types/types";
import TaskHeader from "./components/TaskHeader";
import Pagination from "../../components/pagination";
import KanvanView from "./components/KanvanView";

type ViewMode = "list" | "kanban";

export default function TasksPage() {
  const [view, setView] = useState<ViewMode>("list");

  // 더미 데이터
  const task = useMemo<Task[]>(
    () => [
      {
        id: "1",
        title: "랜딩 페이지 히어로 섹션 수정",
        file: ".pdf",
        priority: "high",
        dueDate: "2026.02.09",
        status: "done",
      },
      {
        id: "2",
        title: "랜딩 페이지 히어로 섹션 수정",
        file: ".docx",
        priority: "low",
        dueDate: "2026.02.09",
        status: "inProgress",
      },
      {
        id: "3",
        title: "랜딩 페이지 히어로 섹션 수정",
        file: "figma.com",
        priority: "low",
        dueDate: "2026.02.09",
        status: "todo",
      },
      {
        id: "4",
        title: "랜딩 페이지 히어로 섹션 수정",
        file: "https://www.",
        priority: "normal",
        dueDate: "2026.02.09",
        status: "blocked",
      },
      {
        id: "5",
        title: "랜딩 페이지 히어로 섹션 수정",
        file: "https://www.",
        priority: "normal",
        dueDate: "2026.02.09",
        status: "blocked",
      },
      {
        id: "6",
        title: "1332",
        file: "https://www.",
        priority: "normal",
        dueDate: "2026.02.09",
        status: "blocked",
      },
    ],
    [],
  );

  return (
    <div className="bg-white">
      <TaskHeader view={view} onChangeView={setView} />

      {view === "list" ? (
        <>
          <ListView task={task} />
          <Pagination />
        </>
      ) : (
        <KanvanView task={task} />
      )}
    </div>
  );
}
