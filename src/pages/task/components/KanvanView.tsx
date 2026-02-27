import type { Task, TaskStatus } from "../../../types/task";

type Props = { task: Task[] };

const columns: { key: TaskStatus; title: string }[] = [
  { key: "inProgress", title: "진행 중" },
  { key: "todo", title: "진행 예정" },
  { key: "done", title: "완료" },
  { key: "blocked", title: "지연" },
];

const statusColor: Record<TaskStatus, string> = {
  todo: "bg-gray-600",
  inProgress: "bg-[#1bb54f]",
  done: "bg-[#4269E9]",
  blocked: "bg-[#dd4040]",
};

const KanvanView = ({ task }: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4 px-12 pt-1">
      {columns.map((col) => {
        const items = task.filter((t) => t.status === col.key);
        return (
          <div
            key={col.key}
            className="bg-gray-100 rounded-xl p-3 min-h-[520px]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${statusColor[col.key]}`} />
                <span className="text-body1 text-gray-900">{col.title}</span>
                <span className="text-body2 text-gray-600">{items.length}</span>
              </div>
              <button className="text-gray-500 hover:text-gray-900">+</button>
            </div>

            <div className="space-y-3">
              {items.map((t) => (
                <div
                  key={t.id}
                  className="rounded-xl border border-gray-300 p-4"
                >
                  <div className="text-h4 text-gray-900">{t.title}</div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-caption px-2 py-1 rounded-full bg-gray-200 text-gray-700">
                      {t.priority === "high" ? "높음" : t.priority === "normal" ? "보통" : "낮음"}
                    </span>
                  </div>
                </div>
              ))}

              {items.length === 0 && <div className="text-caption text-gray-600 py-8 text-center">항목 없음</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default KanvanView;
