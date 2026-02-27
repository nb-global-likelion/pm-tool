import { useEffect, useMemo, useRef, useState } from "react";
import IconChat from "../assets/icon-chat-black.svg";
import IconPlus from "../assets/icon-plus-gray.svg";
import IconArrowLeft from "../assets/icon-arrow-left.svg";
import IconSend from "../assets/icon-send.svg";

interface ChatProps {
  open: boolean;
  onClose: () => void;
}

type Conversation = {
  id: string;
  name: string;
  avatarUrl: string;
  lastMessage: string;
  lastTime: string;
  unreadCount: number;
  status: "online" | "offline";
};

type Message = {
  id: string;
  conversationId: string;
  sender: "me" | "other";
  text: string;
  time: string;
};

const mockConversations: Conversation[] = [
  {
    id: "c1",
    name: "Nguyen Thi Thao Hien",
    avatarUrl: "https://i.pravatar.cc/150?img=32",
    lastMessage: "Xin chào, buổi sáng tốt lành Minh đã đến cô...",
    lastTime: "11:58",
    unreadCount: 0,
    status: "online",
  },
  {
    id: "c2",
    name: "Nguyen Thi Thao Hien",
    avatarUrl: "https://i.pravatar.cc/150?img=48",
    lastMessage: "Xin chào, buổi sáng tốt lành Minh đã đến cô...",
    lastTime: "11:30",
    unreadCount: 1,
    status: "online",
  },
  {
    id: "c3",
    name: "Nguyen Thi Thao Hien",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
    lastMessage: "Xin chào, buổi sáng tốt lành Minh đã đến cô...",
    lastTime: "09:12",
    unreadCount: 1,
    status: "offline",
  },
];

const initialMessages: Message[] = [
  { id: "m1", conversationId: "c1", sender: "me", text: "안녕하세요 좋은 아침입니다 :)", time: "9:30 AM" },
  {
    id: "m2",
    conversationId: "c1",
    sender: "other",
    text: "Xin chào, buổi sáng tốt lành Mình đã đến công ty.",
    time: "9:45 AM",
  },
  {
    id: "m3",
    conversationId: "c1",
    sender: "me",
    text: "오늘 랜딩 페이지 히어로 섹션 작업 수정 작업 부탁드립니다. 타이틀 폰트 크기 키우고 CTA 버튼 색상 변경해주세요.",
    time: "10:28 AM",
  },
  {
    id: "m4",
    conversationId: "c1",
    sender: "other",
    text: "Vâng, em hiểu rồi. Khi nào thì hết hạn?",
    time: "10:30 AM",
  },
];

const Chat = ({ open, onClose }: ChatProps) => {
  const [view, setView] = useState<"list" | "room">("list");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const handleClose = () => {
    setView("list");
    setSelectedId(null);
    onClose();
  };

  const selected = useMemo(() => {
    if (!selectedId) return null;
    return mockConversations.find((c) => c.id === selectedId) ?? null;
  }, [selectedId]);

  const roomMessages = useMemo(() => {
    if (!selectedId) return [];
    return messages.filter((m) => m.conversationId === selectedId);
  }, [messages, selectedId]);

  // room 스크롤 맨 아래
  const bottomRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!open || view !== "room") return;
    bottomRef.current?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
  }, [open, view, roomMessages.length]);

  const enterRoom = (id: string) => {
    setSelectedId(id);
    setView("room");
  };

  const send = () => {
    if (!selectedId) return;
    const text = draft.trim();
    if (!text) return;

    const now = new Date();
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const hh = hours % 12 || 12;
    const time = `${hh}:${minutes} ${ampm}`;

    setMessages((prev) => [...prev, { id: `m_${Date.now()}`, conversationId: selectedId, sender: "me", text, time }]);
    setDraft("");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity ${open ? "bg-black/30 opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={handleClose}
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[560px] bg-white border-l border-gray-300 shadow-xl transform transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/*  LIST VIEW  */}
        {view === "list" && (
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="px-8 py-4 flex items-center gap-2 border-b border-gray-300">
              <img
                src={IconChat}
                className="h-6 w-6"
              />
              <span className="text-h3">Messages</span>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto">
              {mockConversations.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => enterRoom(c.id)}
                  className="w-full p-6 flex items-center gap-3 border-b border-gray-300 hover:bg-gray-50 text-left"
                >
                  {/* Avatar + status */}
                  <div className="relative">
                    <img
                      src={c.avatarUrl}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <span
                      className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white ${
                        c.status === "online" ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                  </div>

                  <div className="min-w-0 flex-1 flex flex-col gap-2">
                    {/* name + time */}
                    <div className="flex items-center justify-between">
                      <span className="text-h4 truncate">{c.name}</span>
                      <span className="text-body1 text-gray-500 whitespace-nowrap">{c.lastTime}</span>
                    </div>

                    {/* last message + unread */}
                    <div className="flex items-center justify-between">
                      <span className="text-body1 text-gray-500 truncate">{c.lastMessage}</span>

                      {c.unreadCount > 0 && (
                        <span className="h-6 min-w-6 px-2 rounded-full bg-gray-900 text-white text-body2 flex items-center justify-center">
                          {c.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ROOM VIEW */}
        {view === "room" && selected && (
          <div className="h-full flex flex-col">
            {/* Room header */}
            <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-300">
              {/* back */}
              <button
                type="button"
                onClick={() => setView("list")}
              >
                <img
                  src={IconArrowLeft}
                  className="h-6 w-6"
                />
              </button>

              <img
                src={selected.avatarUrl}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="min-w-0 flex-1 flex flex-col gap-1">
                <span className="text-body1 truncate">{selected.name}</span>
                <span className="text-caption text-gray-600">평균 응답 시간 3분</span>
              </div>

              <button
                type="button"
                className="h-10 px-4 rounded-lg bg-gray-900 text-white text-body2 hover:bg-gray-800"
              >
                한국어로 번역하기
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-10">
              {roomMessages.map((m) => {
                const mine = m.sender === "me";
                return (
                  <div
                    key={m.id}
                    className={`flex ${mine ? "justify-end" : "justify-start"}`}
                  >
                    <div className="max-w-[75%]">
                      <div className="px-5 py-3 rounded-2xl text-body2 whitespace-pre-wrap bg-gray-200 text-gray-900">
                        {m.text}
                      </div>
                      {/* 시간 + 옵션UI */}
                      <div className="flex gap-2 text-caption text-gray-600">
                        <span className={` ${mine ? "text-right" : "text-left"}`}>{m.time}</span>
                        {/* 번역/원문 보기 (옵션 UI) 번역된거면 번역됨, 탭하여 원문보기가 되고 원문이면 번역됨이 나오도록*/}
                        {!mine && (
                          <button
                            type="button"
                            className="hover:text-gray-800"
                          >
                            번역하기
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-6 border-t border-gray-300">
              <div className="flex items-center gap-4">
                <div className="flex-1 flex items-center border-2 border-gray-300 rounded-xl px-4 h-14">
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") send();
                    }}
                    placeholder="메시지 보내기"
                    className="flex-1 outline-none text-body1"
                  />
                  <button type="button">
                    <img
                      src={IconPlus}
                      className="h-7 w-7"
                    />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={send}
                  className="h-14 w-14 rounded-xl bg-primary-500 flex items-center justify-center"
                  aria-label="send"
                >
                  <img
                    src={IconSend}
                    className="h-8 w-8"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default Chat;
