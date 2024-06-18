export interface IssueFormData {
  id: string;
  title: string;
  description: string;
  status: "OPEN" | "CLOSED" | "IN_PROGRESS";
  createdAt: Date;
}

export interface NewIssueForm {
  title: string;
  description: string;
}

export interface UserData {
  user_id: string;
  name: string;
  email: string;
  picture: string;
}