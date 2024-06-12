export interface IssueForm {
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
