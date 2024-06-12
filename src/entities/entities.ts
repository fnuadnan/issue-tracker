export interface IssueForm {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
}

export interface NewIssueForm {
  title: string;
  description: string;
}
