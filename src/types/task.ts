export type TaskStatus = "todo" | "inProgress" | "done" | "blocked";

export type Priority = "low" | "normal" | "high";

export type Task = {
  id: string;
  title: string;
  file?: string; // ".pdf" | ".docx" | "figma.com" | "https://..."
  priority: Priority;
  dueDate: string; // "YYYY.MM.DD"
  status: TaskStatus;
  assignee?: string;
};
