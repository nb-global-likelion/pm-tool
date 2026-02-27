const ProjectCard = () => {
  return (
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
  );
};

export default ProjectCard;
