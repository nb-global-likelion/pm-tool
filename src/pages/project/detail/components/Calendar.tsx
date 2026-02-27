import { useMemo, useState } from "react";
import type { Task } from "../../../../types/task";
import IconPlus from "../../../../assets/icon-plus-gray.svg";

interface CalendarProps {
  tasks: Task[];
}

const days = ["일", "월", "화", "수", "목", "금", "토"];

const Calender = ({ tasks }: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const calendarDays = useMemo(() => {
    const temp: Date[] = [];
    const first = new Date(year, month, 1);

    const start = new Date(first);
    start.setDate(first.getDate() - first.getDay());

    for (let i = 0; i < 35; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      temp.push(d);
    }

    return temp;
  }, [year, month]);
  const getTasksByDate = (date: Date) => {
    const formatted = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;

    return tasks.filter((task) => task.dueDate === formatted);
  };

  const today = new Date();
  const isSameMonthAsToday = today.getFullYear() === year && today.getMonth() === month;
  const highlightWeekday = isSameMonthAsToday ? today.getDay() : null;

  return (
    <div className="pt-6 px-12">
      {/* 헤더 */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
          className="h-8 w-8 grid place-items-center rounded-md hover:bg-gray-100 text-gray-600"
          aria-label="prev month"
        >
          ◀
        </button>

        <h2 className="text-h3">
          {year}년 {month + 1}월
        </h2>

        <button
          onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
          className="h-8 w-8 grid place-items-center rounded-md hover:bg-gray-100 text-gray-600"
          aria-label="next month"
        >
          ▶
        </button>
      </div>

      {/* 캘린더 프레임 */}
      <div className="border border-gray-300 overflow-hidden">
        {/* 요일 헤더 */}
        <div className="grid grid-cols-7 border-b border-gray-300">
          {days.map((day, i) => {
            const isHighlighted = highlightWeekday === i;
            return (
              <div key={day}>
                <div
                  className={`w-full text-center text-body1 ${isHighlighted ? "bg-primary-500 text-white" : "text-gray-600"}`}
                >
                  {day}
                </div>
              </div>
            );
          })}
        </div>

        {/* 날짜 그리드 */}
        <div className="grid grid-cols-7">
          {calendarDays.map((date, idx) => {
            const isToday =
              date &&
              date.getFullYear() === today.getFullYear() &&
              date.getMonth() === today.getMonth() &&
              date.getDate() === today.getDate();

            const isCurrentMonth = date.getFullYear() === year && date.getMonth() === month;

            const dayTasks = date ? getTasksByDate(date) : [];

            return (
              <div
                key={idx}
                className="relative min-h-[110px] border-r border-b border-gray-200 last:border-r-0 p-2 group"
              >
                {date && (
                  <>
                    <div className="flex justify-between">
                      <button
                        className="h-5 w-5 rounded border border-gray-500 opacity-0 group-hover:opacity-100 hover:bg-gray-50"
                        type="button"
                      >
                        <img src={IconPlus} />
                      </button>
                      <span
                        className={`text-body1 ${isToday ? "text-primary-500" : isCurrentMonth ? "text-gray-600" : "text-gray-400"}`}
                      >
                        {date.getDate()}
                      </span>
                    </div>

                    <div className="mt-4 space-y-1">
                      {dayTasks.map((task) => (
                        <div
                          key={task.id}
                          className="max-w-full truncate rounded-lg border border-gray-200 px-2 py-1 text-caption shadow-sm"
                          title={task.title}
                        >
                          {task.title}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calender;
