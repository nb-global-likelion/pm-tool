import { STATUS_BADGE_BASE, TASK_STATUS_LABEL, TASK_STATUS_STYLES } from "../../../constants/status";
import IconPlus from "../../../assets/icon-plus-gray.svg";

export default function Overview() {
  // 임시 데이터 (나중에 API 연결)
  const progress = 42;
  const stats = {
    done: 13,
    total: 25,
    weeklyRate: 89,
    blocked: 3,
  };

  const members = [
    { name: "김철수", role: "팀장" },
    { name: "Nguyen Thi Thao Hien ", role: "베트남 마케터" },
    { name: "Dang Tu Minh Nhat", role: "베트남 백엔드 개발자" },
    { name: "Manh Hung", role: "베트남 프론트 개발자" },
    { name: "Hoang Phi", role: "베트남 마케터" },
  ];

  const updateGroups = [
    {
      dot: "primary", // primary | gray
      dateText: "13일, 금",
      metaText: "오늘",
      items: [
        { time: "PM 2:00", title: "랜딩 페이지 히어로 섹션 수정", user: "김민수", status: "done" as const },
        {
          time: "PM 1:30",
          title: "랜딩 페이지 히어로 섹션 수정",
          user: "Nguyen Thi Thao Hien",
          status: "inProgress" as const,
        },
      ],
    },
    {
      dot: "gray",
      dateText: "12일, 목",
      metaText: "1일 전",
      items: [{ time: "PM 2:00", title: "랜딩 페이지 히어로 섹션 수정", user: "김민수", status: "done" as const }],
    },
  ];

  return (
    <div className="grid grid-cols-[1fr_510px] gap-10 px-12 pt-6">
      {/* ================= LEFT ================= */}
      <div className="space-y-15">
        {/* 1. 진행률 */}
        <div>
          <div className="flex items-center justify-between">
            <div className="text-h3 text-gray-900 ">
              프로젝트 진행률
              <span className="ml-2 px-2 py-1 text-body2 text-primary-500 bg-primary-100 rounded-lg">D-12</span>
            </div>
            <div className="text-h3 text-primary-500">{progress}%</div>
          </div>

          <div className="mt-3 h-2 bg-gray-200 rounded-3xl overflow-hidden">
            <div
              className="h-full bg-primary-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* 2. 통계 박스 */}
          <div className="mt-8 rounded-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3">
              <div className="p-5">
                <div className="text-body2 text-gray-900">완료된 작업 수</div>
                <div className="mt-1">
                  <span className="text-primary-500 text-h3">{stats.done}</span>
                  <span className="text-gray-600 text-body1">/{stats.total}</span>
                </div>
              </div>

              <div className="p-5 border-l border-gray-200">
                <div className="text-body2 text-gray-900">이번 주 완료율</div>
                <div className="mt-1 text-h3 text-green-500">{stats.weeklyRate}%</div>
              </div>

              <div className="p-5 border-l border-gray-200">
                <div className="text-body2 text-gray-900">지연 작업 수</div>
                <div className="mt-1 text-h3 text-red-500">{stats.blocked}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 프로젝트 개요 */}
        <div className="space-y-5">
          <div className="text-h3 text-gray-900">프로젝트 개요</div>
          <textarea
            placeholder="프로젝트의 목적 및 주요 내용을 작성해주세요."
            className="w-full min-h-[140px] rounded-xl border border-gray-200 p-5 text-body2 text-gray-900 placeholder:text-gray-400 resize-none focus:outline-none transition"
          />
        </div>

        {/* 4. 프로젝트 역할 */}
        <div className="space-y-5">
          <div className="text-h3 text-gray-900">프로젝트 역할</div>

          <div className="grid grid-cols-3 gap-6">
            <button className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-400 ">
                <img src={IconPlus} />
              </div>
              <span className="text-body1 text-gray-600 hover:text-gray-800">팀원 추가하기</span>
            </button>

            {members.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div className="min-w-0">
                  <div className="text-body1 text-gray-900 truncate">{m.name}</div>
                  <div className="text-body2 text-gray-600 truncate">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="rounded-xl bg-primary-100 p-6">
        <div className="text-h3 text-primary-500">최근 업데이트 사항</div>

        <div className="mt-6 space-y-6">
          {updateGroups.map((g, gi) => (
            <div key={gi}>
              {/* 날짜 헤더 */}
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${g.dot === "primary" ? "bg-primary-500" : "bg-gray-600"}`} />
                <span className="text-h4 text-gray-800">{g.dateText}</span>
                <span className={`text-body2 ${g.dot === "primary" ? "text-primary-500" : "text-gray-600"}`}>
                  {g.metaText}
                </span>
              </div>

              {/* 카드 목록 */}
              <div className="mt-4 space-y-4">
                {g.items.map((u, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-white p-5 shadow-sm"
                  >
                    <div className="text-body2 text-gray-500">{u.time}</div>

                    <div className="mt-2 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-h4 text-gray-900 truncate">{u.title}</div>
                        <div className="text-body1 text-gray-600 mt-3">{u.user}</div>
                      </div>

                      <span className={`${STATUS_BADGE_BASE} ${TASK_STATUS_STYLES[u.status]}`}>
                        {TASK_STATUS_LABEL[u.status]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
