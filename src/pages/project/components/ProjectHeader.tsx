import IconFilter from "../../../assets/icon-filter.svg";
import IconSort from "../../../assets/icon-sort.svg";
import IconPlus from "../../../assets/icon-plus.svg";

const ProjectHeader = () => {
  return (
    <div className="flex items-center justify-end px-12 py-6 gap-2 ">
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
        프로젝트 추가하기
      </button>
    </div>
  );
};

export default ProjectHeader;
