import { STATUS_BADGE_BASE, TASK_STATUS_LABEL, TASK_STATUS_STYLES } from "../../../constants/status";
import type { Task } from "../../../types/task";

type Props = { task: Task[] };

const ListView = ({ task }: Props) => {
  return (
    <div className="overflow-hidden">
      {/* 헤더 */}
      <div className="px-12 py-2 bg-gray-200 border border-gray-100 h-16 flex items-center">
        <div className="grid grid-cols-[40px_1fr_180px_120px_120px_120px] text-body2 text-gray-600 w-full">
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
          <div
            key={t.id}
            className="h-[76px] px-12 py-4 hover:bg-gray-50 transition flex items-center"
          >
            <div className="text-body2 grid grid-cols-[40px_1fr_180px_120px_120px_120px] w-full">
              <div>
                <input type="checkbox" />
              </div>

              <span>{t.title}</span>

              <span>{t.file ?? "-"}</span>
              <span>{t.priority === "high" ? "높음" : t.priority === "normal" ? "보통" : "낮음"}</span>

              <span>{t.dueDate}</span>
              <div>
                <span className={`${STATUS_BADGE_BASE} ${TASK_STATUS_STYLES[t.status]}`}>
                  {TASK_STATUS_LABEL[t.status]}
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
