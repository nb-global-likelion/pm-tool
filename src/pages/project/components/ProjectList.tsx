import { useNavigate } from "react-router-dom";
import type { Project } from "../../../types/project";
import { STATUS_BADGE_BASE, TASK_STATUS_LABEL, TASK_STATUS_STYLES } from "../../../constants/status";

const mockProjects: Project[] = [
  {
    id: "1",
    title: "랜딩 페이지 히어로 섹션 수정",
    startDate: "2026.02.02",
    endDate: "2026.02.10",
    teamAvatars: [
      "https://i.pravatar.cc/150?img=32",
      "https://i.pravatar.cc/150?img=48",
      "https://i.pravatar.cc/150?img=52",
      "https://i.pravatar.cc/150?img=64",
    ],
    extraTeamCount: 2,
    status: "inProgress",
    progress: 42,
  },
  {
    id: "2",
    title: "랜딩 페이지 히어로 섹션 수정",
    startDate: "2026.02.02",
    endDate: "2026.02.10",
    teamAvatars: [
      "https://i.pravatar.cc/150?img=32",
      "https://i.pravatar.cc/150?img=48",
      "https://i.pravatar.cc/150?img=52",
      "https://i.pravatar.cc/150?img=64",
    ],
    extraTeamCount: 0,
    status: "done",
    progress: 42,
  },
  {
    id: "3",
    title: "랜딩 페이지 히어로 섹션 수정",
    startDate: "2026.02.02",
    endDate: "2026.02.10",
    teamAvatars: [
      "https://i.pravatar.cc/150?img=32",
      "https://i.pravatar.cc/150?img=48",
      "https://i.pravatar.cc/150?img=52",
      "https://i.pravatar.cc/150?img=64",
    ],
    extraTeamCount: 0,
    status: "todo",
    progress: 0,
  },
  {
    id: "4",
    title: "랜딩 페이지 히어로 섹션 수정",
    startDate: "2026.02.02",
    endDate: "2026.02.10",
    teamAvatars: [
      "https://i.pravatar.cc/150?img=32",
      "https://i.pravatar.cc/150?img=48",
      "https://i.pravatar.cc/150?img=52",
      "https://i.pravatar.cc/150?img=64",
    ],
    extraTeamCount: 0,
    status: "blocked",
    progress: 42,
  },
];

const ProjectList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-12 py-2 bg-gray-200 border border-gray-100 h-16 flex items-center">
        <div className="grid grid-cols-[40px_1fr_200px_150px_120px_80px] text-body2 text-gray-600 w-full">
          <div>
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-100"
            />
          </div>
          <span>프로젝트 이름</span>
          <span>기간</span>
          <span>팀원</span>
          <span>상태</span>
          <span>진행률</span>
        </div>
      </div>
      {/* 리스트 내용 */}
      <div className="divide-y divide-gray-200">
        {mockProjects.map((p) => (
          <div
            key={p.id}
            className="h-[76px] px-12 py-4 hover:bg-gray-50 transition flex items-center"
            onClick={() => navigate(`/project/projectId`)}
          >
            <div className="text-body2 grid grid-cols-[40px_1fr_200px_150px_120px_80px] w-full items-center">
              <div>
                <input type="checkbox" />
              </div>
              <span>{p.title}</span>
              <span>
                {p.startDate} ~ {p.endDate}{" "}
              </span>

              {/* 겹치는 팀원 아바타 영역 */}
              <div className="flex -space-x-3 ">
                {p.teamAvatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    className="inline-block h-9 w-9 rounded-full ring-1 ring-white bg-gray-300"
                    src={avatar}
                  />
                ))}
                {p.extraTeamCount > 0 && (
                  <div className="flex items-center justify-center h-9 w-9 rounded-full ring-2 ring-gray-400 bg-gray-100 text-body1 text-gray-600">
                    +{p.extraTeamCount}
                  </div>
                )}
              </div>

              {/* 상태 뱃지 (기존 상수 활용) */}
              <div>
                <span className={`${STATUS_BADGE_BASE} ${TASK_STATUS_STYLES[p.status]}`}>
                  {TASK_STATUS_LABEL[p.status]}
                </span>
              </div>

              {/* 진행률 */}
              <span>{p.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectList;
