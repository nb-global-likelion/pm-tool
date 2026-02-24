export type ProjectStatus = "todo" | "inProgress" | "done" | "blocked";

export type Project = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  teamAvatars: string[];
  extraTeamCount: number;
  status: ProjectStatus;
  progress: number;
};
