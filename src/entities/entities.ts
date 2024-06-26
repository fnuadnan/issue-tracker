export interface IssueFormData {
  id: string;
  title: string;
  description: string;
  status: "OPEN" | "CLOSED" | "IN_PROGRESS";
  createdAt: Date;
  assignedToUserId?: string | null;
  assignedTo: any; // come back do this User | null
}

export interface NewIssueForm {
  title: string;
  description: string;
  assignedToUserId?: string | null;
}

export interface UserData {
  user_id: string;
  name: string;
  email: string;
  picture: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
}

export interface IssueSummaryData {
  open: number;
  inProgress: number;
  closed: number;
}

export type Status = "OPEN" | "CLOSED" | "IN_PROGRESS"; // Possible statuses
export type SortField = "createdAt" | "title" | "status"; // Possible sort fields
