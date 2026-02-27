const Pagination = () => {
  return (
    <div className="py-4 flex items-center justify-center gap-2">
      <button className="w-7 h-7 ">‹</button>
      <button className="w-7 h-7 rounded-md border border-gray-300 bg-gray-200 text-caption">1</button>
      <button className="w-7 h-7 rounded-md border border-gray-300 text-caption">2</button>
      <button className="w-7 h-7 rounded-md border border-gray-300 text-caption">3</button>
      <button className="w-7 h-7">›</button>
    </div>
  );
};
export default Pagination;
