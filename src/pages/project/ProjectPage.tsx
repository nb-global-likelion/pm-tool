import Pagination from "../../components/pagination";
import ProjectHeader from "./components/ProjectHeader";
import ProjectCard from "./components/ProjectCard";
import ProjectList from "./components/ProjectList";

const ProjectPage = () => {
  return (
    <div>
      {/* 프로젝트 헤더 */}
      <ProjectHeader />
      {/* 카드 4개 영역 */}
      <ProjectCard />
      {/* 리스트 영역  */}
      <ProjectList />
      {/* 페이지네이션 */}
      <Pagination />
    </div>
  );
};

export default ProjectPage;
