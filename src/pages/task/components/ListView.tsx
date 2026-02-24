import { STATUS_BADGE_BASE, TASK_STATUS_LABEL, TASK_STATUS_STYLES } from "../../../constants/status";
import type { Task } from "../../../types/task";

type Props = { task: Task[] };

const ListView = ({ task }: Props) => {
  return (
    <div className="bg-white overflow-hidden">
      {/* 헤더 */}
      <div className="px-12 py-2 bg-gray-200 border border-gray-100">
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
          <div
            key={t.id}
            className="px-12 py-4 hover:bg-gray-50 transition"
          >
            <div className="text-body2 grid grid-cols-[40px_1fr_180px_120px_120px_120px] items-center">
              <div>
                <input type="checkbox" />
              </div>

              <div>{t.title}</div>

              <div className="text-body2">{t.file ?? "-"}</div>
              <div className="text-body2">
                {t.priority === "high" ? "높음" : t.priority === "normal" ? "보통" : "낮음"}
              </div>

              <span className="text-body2">{t.dueDate}</span>
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
