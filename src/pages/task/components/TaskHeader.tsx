import IconList from "../../../assets/icon-list.svg";
import IconKanban from "../../../assets/icon-kanban.svg";
import IconFilter from "../../../assets/icon-filter.svg";
import IconSort from "../../../assets/icon-sort.svg";
import IconPlus from "../../../assets/icon-plus.svg";

type ViewMode = "list" | "kanban";

type Props = {
  view: ViewMode;
  onChangeView: (v: ViewMode) => void;
};

const toggleBtnBase =
  "w-11 h-10 rounded-md grid place-items-center border border-gray-300  hover:bg-gray-100 transition";
const toggleBtnActive = "bg-gray-200";

export default function TaskHeader({ view, onChangeView }: Props) {
  return (
    <div className="flex items-center justify-between px-12 py-4 ">
      {/* left */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className={[toggleBtnBase, view === "list" ? toggleBtnActive : ""].join(" ")}
          onClick={() => onChangeView("list")}
          aria-label="list view"
        >
          <img
            src={IconList}
            alt="리스트뷰"
          />
        </button>
        <button
          type="button"
          className={[toggleBtnBase, view === "kanban" ? toggleBtnActive : ""].join(" ")}
          onClick={() => onChangeView("kanban")}
          aria-label="kanban view"
        >
          <img
            src={IconKanban}
            alt="칸반뷰"
          />
        </button>
      </div>

      {/* right */}
      <div className="flex items-center gap-2">
        <button className="flex h-10 px-3 rounded-md border border-gray-300  text-body2 text-gray-700 hover:bg-gray-100 items-center">
          <img
            src={IconFilter}
            alt="필터"
            className="w-5 h-5"
          />
          필터
        </button>
        <button className="flex h-10 px-3 rounded-md border border-gray-300  text-body2 text-gray-700 hover:bg-gray-100 items-center">
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
          업무 추가하기
        </button>
      </div>
    </div>
  );
}
