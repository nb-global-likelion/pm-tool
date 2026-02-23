import profile from "../assets/image-profile-default.png";

type Status = "online" | "offline" | "away";

const STATUS_LABEL: Record<Status, string> = {
  online: "온라인",
  offline: "오프라인",
  away: "자리비움",
};

type Props = {
  status: Status;
  onChangeStatus: (s: Status) => void;
  onClose: () => void;
};

export default function ProfileDropdown({
  status,
  onChangeStatus,
  onClose,
}: Props) {
  return (
    <div className="px-5 py-6 absolute z-50 left-0 top-full mt-6 w-[260px] rounded-[9px] border border-gray-300 bg-white overflow-hidden">
      {/* Profile summary */}
      <div className="p-4 flex items-center gap-3">
        <img src={profile} alt="profile" className="w-10 h-10 rounded-full" />
        <div className="min-w-0">
          <div className="text-body1 text-gray-900">멋쟁이사자처럼</div>
          <div className="text-caption text-gray-500 truncate">
            likelion@gmail.com
          </div>
        </div>
      </div>
      <div className="px-5">
        <button
          type="button"
          className="text-body1 text-gray-700 hover:text-gray-900"
          onClick={() => {
            // TODO: 프로필 편집
            onClose();
          }}
        >
          프로필 편집
        </button>
      </div>
      <div className="h-px bg-gray-200" />
      {/* Status */}
      <div className="p-4">
        <div className="text-caption text-gray-600 mb-2">상태</div>

        <div className="space-y-2">
          {(["online", "offline", "away"] as Status[]).map((s) => {
            const selected = status === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => onChangeStatus(s)}
                className={[
                  "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition",
                  selected ? "bg-gray-200" : "hover:bg-gray-100",
                ].join(" ")}
              >
                <span
                  className={[
                    "w-2 h-2 rounded-full",
                    s === "online"
                      ? "bg-green-500"
                      : s === "offline"
                        ? "bg-gray-500"
                        : "bg-gray-400",
                  ].join(" ")}
                />
                <span className="text-body2 text-gray-900 font-semibold">
                  {STATUS_LABEL[s]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
