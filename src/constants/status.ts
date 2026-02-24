import type { TaskStatus } from "../types/task";

// 라벨
export const TASK_STATUS_LABEL: Record<TaskStatus, string> = {
  todo: "진행 예정",
  inProgress: "진행 중",
  done: "완료",
  blocked: "지연",
};

// 스타일
export const TASK_STATUS_STYLES: Record<TaskStatus, string> = {
  todo: "bg-[#ECEFF2] text-[#7B818C]",
  inProgress: "bg-[#e8fff2] text-[#1bb54f]",
  done: "bg-[#F4F7FF] text-[#4269E9]",
  blocked: "bg-[#fff4f4] text-[#dd4040]",
};

// 뱃지 베이스
export const STATUS_BADGE_BASE = "items-center text-body2 px-2 py-1 rounded-lg whitespace-nowrap";
