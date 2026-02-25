import { useState } from "react";
import ProjectDetailHeader from "../components/ProjectDetailHeader";
import Overview from "../components/Overview";

const ProjectDetailPage = () => {
  const [tab, setTab] = useState<"overview" | "list" | "calendar" | "board">("overview");

  return (
    <div className="min-h-screen bg-white px-12 py-6">
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

      <div className="mt-6">
        {tab === "overview" && <Overview />}
        {tab === "list" && <div>리스트</div>}
        {tab === "calendar" && <div>캘린더</div>}
        {tab === "board" && <div>보드</div>}
      </div>
    </div>
  );
};
export default ProjectDetailPage;
