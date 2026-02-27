import IconFilter from "../../assets/icon-filter.svg";
import IconSort from "../../assets/icon-sort.svg";
import IconPlus from "../../assets/icon-plus.svg";
import { STATUS_BADGE_BASE, TASK_STATUS_LABEL, TASK_STATUS_STYLES } from "../../constants/status";
import type { Project } from "../../types/project";
import Pagination from "../../components/pagination";
import { useNavigate } from "react-router-dom";

// 임시 데이터
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

const ProjectPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* 프로젝트 헤더 */}
      <div className="flex items-center justify-end px-12 py-6 gap-2 bg-white">
        <button className="flex h-10 px-3 rounded-md border border-gray-300 bg-white text-body2 text-gray-700 hover:bg-gray-100 items-center">
          <img
            src={IconFilter}
            alt="필터"
            className="w-5 h-5"
          />
          필터
        </button>
        <button className="flex h-10 px-3 rounded-md border border-gray-300 bg-white text-body2 text-gray-700 hover:bg-gray-100 items-center">
          <img
            src={IconSort}
            alt="정렬"
            className="w-5 h-5"
          />
          정렬
        </button>
        <button className="flex h-10 px-4 rounded-md bg-primary-500 text-white text-body2 hover:opacity-90 items-center">
          <img
            src={IconPlus}
            alt=""
            className="w-5 h-5"
          />
          프로젝트 추가하기
        </button>
      </div>
      {/*카드 4개 영역 */}
      <div className="grid grid-cols-4 gap-6 px-12 mb-8">
        {/* 전체 프로젝트 */}
        <div className="bg-gray-200 rounded-xl p-6 flex flex-col justify-between h-40">
          <div>
            <div className="text-body1 text-gray-900 font-bold mb-1">이번 달 전체 프로젝트 수</div>
            <div className="text-caption text-gray-500">
              전월 대비 <span className="text-green-500">+3 ↑</span>
            </div>
          </div>
          <div className="text-4xl font-bold text-gray-900 text-right">12</div>
        </div>

        {/* 진행 중 프로젝트 */}
        <div className="bg-[#e8fff2] rounded-2xl p-6 flex flex-col justify-between h-40">
          <div>
            <div className="text-body1 text-gray-900 font-bold mb-1">진행 중 프로젝트</div>
            <div className="text-caption text-gray-500">
              지난 주 대비 <span className="text-green-500">+2 ↑</span>
            </div>
          </div>
          <div className="text-4xl font-bold text-[#1bb54f] text-right">8</div>
        </div>

        {/* 지연 프로젝트 */}
        <div className="bg-[#fff4f4] rounded-2xl p-6 flex flex-col justify-between h-40">
          <div>
            <div className="text-body1 text-gray-900 font-bold mb-1">지연 프로젝트</div>
            <div className="text-caption text-red-500">D+3 이상 1개</div>
          </div>
          <div className="text-4xl font-bold text-[#dd4040] text-right">2</div>
        </div>

        {/* 이번 주 마감 프로젝트 */}
        <div className="bg-primary-100 rounded-2xl p-6 flex flex-col justify-between h-40">
          <div>
            <div className="text-body1 text-gray-900 font-bold mb-1">이번 주 마감 프로젝트</div>
            <div className="text-caption text-gray-500">D-3 이내 2개</div>
          </div>
          <div className="text-4xl font-bold text-primary-500 text-right">4</div>
        </div>
      </div>
      {/* 3. 리스트 뷰 영역  */}

      {/* 리스트 헤더 */}
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
      <Pagination />
    </div>
  );
};

export default ProjectPage;
