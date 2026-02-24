import type { Task } from "../types/types";

type Props = { task: Task[] };

const statusLabel: Record<Task["status"], string> = {
  todo: "진행 예정",
  inProgress: "진행 중",
  done: "완료",
  blocked: "지연",
};

const statusStyles: Record<Task["status"], string> = {
  todo: "bg-[#ECEFF2] text-[#7B818C]",
  inProgress: "bg-[#e8fff2] text-[#1bb54f]",
  done: "bg-[#F4F7FF] text-[#4269E9]",
  blocked: "bg-[#fff4f4] text-[#dd4040]",
};

const ListView = ({ task }: Props) => {
  return (
    <div className="bg-white overflow-hidden">
      {/* 헤더 */}
      <div className="px-12 py-2 bg-gray-100 border border-gray-100">
        <div className="grid grid-cols-[40px_1fr_180px_120px_120px_120px] items-center text-body2 text-gray-600">
          <div>
            <input type="checkbox" />
          </div>
          <span>작업 이름</span>
          <span>파일</span>
          <span>우선 순위</span>
          <span>마감일</span>
          <span>상태</span>
        </div>
      </div>
      {/* 내용 */}
      <div className="divide-y divide-gray-200">
        {task.map((t) => (
          <div key={t.id} className="px-12 py-2">
            <div className="grid grid-cols-[40px_1fr_180px_120px_120px_120px] items-center">
              <div>
                <input type="checkbox" />
              </div>

              <div className="text-body2">{t.title}</div>

              <div className="text-body2">{t.file ?? "-"}</div>
              <div className="text-body2">
                {t.priority === "high"
                  ? "높음"
                  : t.priority === "normal"
                    ? "보통"
                    : "낮음"}
              </div>

              <span className="text-body2">{t.dueDate}</span>
              <div>
                <span
                  className={`items-center text-body2 px-2 py-1 rounded-lg whitespace-nowrap ${statusStyles[t.status]}`}
                >
                  {statusLabel[t.status]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListView;
