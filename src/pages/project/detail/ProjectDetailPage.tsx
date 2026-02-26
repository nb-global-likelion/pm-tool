import { useState } from "react";
import ProjectDetailHeader from "../components/ProjectDetailHeader";
import Overview from "../components/Overview";
import List from "../components/List";
import type { Task } from "../../../types/task";
import Board from "../components/Board";
import Calender from "../components/Calendar";

type Tab = "overview" | "list" | "calendar" | "board";

// task.ts의 Task를 사용하는데 API 작업되면 Project용 업무.ts를 다시 만들고 연결
const mockDetailTasks: Task[] = [
  {
    id: "1",
    title: "랜딩 페이지 히어로 섹션 수정",
    assignee: "김민수",
    status: "done",
    dueDate: "2026.02.15",
    priority: "normal",
  },
  {
    id: "2",
    title: "랜딩 페이지 히어로 개발",
    assignee: "Dang Tu Minh Nhat",
    status: "inProgress",
    dueDate: "2026.02.17",
    priority: "high",
  },
  {
    id: "3",
    title: "랜딩 페이지 히어로 섹션 수정",
    assignee: "Nguyen Thi Thao Hien",
    status: "todo",
    dueDate: "2026.02.02",
    priority: "low",
  },
  {
    id: "4",
    title: "랜딩 페이지 히어로 섹션 수정",
    assignee: "Nguyen Thi Thao Hien",
    status: "blocked",
    dueDate: "2026.03.03",
    priority: "normal",
  },
  {
    id: "5",
    title: "랜딩 페이지 히어로 섹션 수정",
    assignee: "김민수",
    status: "done",
    dueDate: "2026.02.28",
    priority: "high",
  },
];

const ProjectDetailPage = () => {
  const [tab, setTab] = useState<Tab>("overview");
  return (
    <div className="min-h-screen">
      <ProjectDetailHeader
        title="랜딩 페이지 히어로 섹션 수정"
        status="inProgress"
        period="2026.02.02 - 2026.03.10"
        tags={["개발", "마케팅"]}
        avatars={["url1", "url2", "url3", "url4"]}
        extraAvatarCount={2}
        activeTab={tab}
        onChangeTab={setTab}
      />

      <div>
        {tab === "overview" && <Overview />}
        {tab === "list" && <List tasks={mockDetailTasks} />}
        {tab === "calendar" && <Calender tasks={mockDetailTasks} />}
        {tab === "board" && <Board tasks={mockDetailTasks} />}
      </div>
    </div>
  );
};
export default ProjectDetailPage;
