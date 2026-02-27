import { useState } from "react";

type NotificationItem = {
  id: string;
  name: string;
  avatar: string;
  message: string;
  project: string;
  time: string;
  unread: boolean;
};

const notifications: NotificationItem[] = [
  {
    id: "n1",
    name: "Nguyen Thi Thao Hien",
    avatar: "https://i.pravatar.cc/150?img=25",
    message: "랜딩 페이지 히어로 섹션 수정 업무 검토를 요청했습니다.",
    project: "광고 마감 리뉴얼 프로젝트",
    time: "32분 전",
    unread: true,
  },
  {
    id: "n2",
    name: "김철수",
    avatar: "https://i.pravatar.cc/150?img=32",
    message: "랜딩 페이지 히어로 섹션 수정 업무 검토를 승인했습니다.",
    project: "광고 마감 리뉴얼 프로젝트",
    time: "2월 27일",
    unread: false,
  },
  {
    id: "n3",
    name: "김철수",
    avatar: "https://i.pravatar.cc/150?img=32",
    message: "랜딩 페이지 히어로 섹션 수정 업무 수정을 요청했습니다.",
    project: "광고 마감 리뉴얼 프로젝트",
    time: "2월 24일",
    unread: true,
  },
  {
    id: "n4",
    name: "Nguyen Thi Thao Hien",
    avatar: "https://i.pravatar.cc/150?img=25",
    message: "랜딩 페이지 히어로 섹션 수정 업무가 생성되었습니다.",
    project: "광고 마감 리뉴얼 프로젝트",
    time: "2월 23일",
    unread: true,
  },
  {
    id: "n5",
    name: "김철수",
    avatar: "https://i.pravatar.cc/150?img=32",
    message: "광고 마감 릴뉴얼 프로젝트에 초대되었습니다.",
    project: "광고 마감 리뉴얼 프로젝트",
    time: "2월 23일",
    unread: false,
  },
];

type NotificationTab = "all" | "request" | "unread";

export default function NotificationDropdown() {
  const [activeTab, setActiveTab] = useState<NotificationTab>("all");

  return (
    <div className="absolute right-0 top-full mt-4 z-50 w-[460px] rounded-[9px] border border-gray-300 bg-white overflow-hidden shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
      <div className="px-6 border-b border-gray-200">
        <h2 className="text-h3 text-gray-900 py-6">내 알림</h2>
        <div className="flex items-center gap-3 text-body1 text-gray-500">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`border-b pb-1 ${activeTab === "all" ? "text-gray-900 font-semibold border-gray-900" : "border-transparent"}`}
          >
            전체
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("request")}
            className={`border-b pb-1 ${activeTab === "request" ? "text-gray-900 font-semibold border-gray-900" : "border-transparent"}`}
          >
            요청
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("unread")}
            className={`border-b pb-1 ${activeTab === "unread" ? "text-gray-900 font-semibold border-gray-900" : "border-transparent"}`}
          >
            읽지 않음 (6)
          </button>
        </div>
      </div>

      <div className="max-h-[420px] overflow-y-auto">
        {notifications.map((item) => (
          <button
            key={item.id}
            type="button"
            className="w-full px-5 py-4 text-left border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
          >
            <div className="flex items-start gap-3">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-6 h-6 rounded-full mt-0.5"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-body2 text-gray-900 truncate">{item.name}</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-caption text-gray-500">{item.time}</span>
                    {item.unread && <span className="w-2 h-2 rounded-full bg-primary-500" />}
                  </div>
                </div>
                <p className="text-body1 text-gray-800 mt-1">{item.message}</p>
                <span className="inline-block mt-2 rounded bg-gray-100 px-2 py-0.5 text-caption text-gray-500">
                  {item.project}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
