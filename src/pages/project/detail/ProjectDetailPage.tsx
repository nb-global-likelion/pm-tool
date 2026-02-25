import { useState } from "react";
import ProjectDetailHeader from "../components/ProjectDetailHeader";
import Overview from "../components/Overview";
import List from "../components/List";
import type { TaskStatus } from "../../../types/task";

type Tab = "overview" | "list" | "calendar" | "board";

type DetailTaskRow = {
  id: string;
  title: string;
  assignee: string;
  status: TaskStatus;
  dueDate: string; // "2026.02.13"
};

const mockDetailTasks: DetailTaskRow[] = [
  {
    id: "1",
    title: "랜딩 페이지 히어로 섹션 수정",
    assignee: "Nguyen Thi Thao Hien",
    status: "done",
    dueDate: "2026.02.13",
  },
  {
    id: "2",
    title: "랜딩 페이지 히어로 개발",
    assignee: "Dang Tu Minh Nhat",
    status: "inProgress",
    dueDate: "2026.02.13",
  },
  {
    id: "3",
    title: "랜딩 페이지 히어로 섹션 수정",
    assignee: "Nguyen Thi Thao Hien",
    status: "todo",
    dueDate: "2026.02.13",
  },
  {
    id: "4",
    title: "랜딩 페이지 히어로 섹션 수정",
    assignee: "Nguyen Thi Thao Hien",
    status: "blocked",
    dueDate: "2026.02.13",
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
        {tab === "calendar" && <div>캘린더</div>}
        {tab === "board" && <div>보드</div>}
      </div>
    </div>
  );
};
export default ProjectDetailPage;
