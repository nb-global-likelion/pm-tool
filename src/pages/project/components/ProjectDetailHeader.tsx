import { STATUS_BADGE_BASE, TASK_STATUS_LABEL, TASK_STATUS_STYLES } from "../../../constants/status";
import IconFilter from "../../../assets/icon-filter.svg";
import IconSort from "../../../assets/icon-sort.svg";
import IconPlus from "../../../assets/icon-plus.svg";

type Tab = "overview" | "list" | "calendar" | "board";

type Props = {
  title: string;
  period: string;
  tags: string[];
  status: "todo" | "inProgress" | "done" | "blocked";
  avatars: string[];
  extraAvatarCount?: number;

  activeTab: Tab;
  onChangeTab: (tab: Tab) => void;

  onClickFilter?: () => void;
  onClickSort?: () => void;
  onClickAddTask?: () => void;
};

const tabLabel: Record<Tab, string> = {
  overview: "요약",
  list: "리스트",
  calendar: "캘린더",
  board: "보드",
};

const ProjectDetailHeader = ({
  title,
  period,
  tags,
  status,
  avatars,
  extraAvatarCount = 0,
  activeTab,
  onChangeTab,
  onClickFilter,
  onClickSort,
  onClickAddTask,
}: Props) => {
  return (
    <section className="px-12 pt-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-h2 text-gray-900">{title}</h1>
            <span className={`${STATUS_BADGE_BASE} ${TASK_STATUS_STYLES[status]}`}>{TASK_STATUS_LABEL[status]}</span>
          </div>

          <div className="mt-1 text-body2 text-gray-700">{period}</div>

          <div className="mt-2 flex items-center gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="px-2 py-1 rounded-full bg-gray-200 text-body2 text-gray-600"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* avatars */}
        <div className="flex -space-x-2 overflow-hidden">
          {avatars.map((a, idx) => (
            <img
              key={`${a}-${idx}`}
              src={a}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-300"
            />
          ))}
          {extraAvatarCount > 0 && (
            <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-white bg-gray-100 text-xs font-medium text-gray-600">
              +{extraAvatarCount}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between">
        {/* 요약, 리스트, 캘린더, 보드 */}
        <div className="flex items-center gap-6">
          {(Object.keys(tabLabel) as Tab[]).map((tab) => {
            const active = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => onChangeTab(tab)}
                className={[
                  "relative pb-1 text-h3 transition",
                  active ? "text-gray-900" : "text-gray-300 hover:text-gray-500",
                ].join(" ")}
              >
                {tabLabel[tab]}
                {active && <span className="absolute left-0 -bottom-3 h-[2px] w-full bg-gray-900" />}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onClickFilter}
            className="flex h-10 px-3 rounded-md border border-gray-300 text-body2 text-gray-700 hover:bg-gray-100 items-center"
          >
            <img
              src={IconFilter}
              alt="필터"
              className="w-5 h-5"
            />
            필터
          </button>
          <button
            onClick={onClickSort}
            className="flex h-10 px-3 rounded-md border border-gray-300 text-body2 text-gray-700 hover:bg-gray-100 items-center"
          >
            <img
              src={IconSort}
              alt="정렬"
              className="w-5 h-5"
            />
            정렬
          </button>
          <button
            onClick={onClickAddTask}
            className="flex h-10 px-4 rounded-md bg-primary-500 text-white text-body2 hover:opacity-90 items-center"
          >
            <img
              src={IconPlus}
              alt=""
              className="w-5 h-5"
            />
            프로젝트 추가하기
          </button>
        </div>
      </div>

      <div className="mt-3 border-b-2 border-gray-200" />
    </section>
  );
};

export default ProjectDetailHeader;
