import { Badge } from "@radix-ui/themes";

// Define the Status type
type Status = "OPEN" | "CLOSED" | "IN_PROGRESS";

// Corrected statusMap with proper typing for Badge colors
const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  CLOSED: { label: "Closed", color: "violet" },
  IN_PROGRESS: { label: "In Progress", color: "green" },
};

interface IssueStatusBadgeProps {
  status: Status;
}

const IssueStatusBadge = ({ status }: IssueStatusBadgeProps) => {
  return (
    <div>
      <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
    </div>
  );
};

export default IssueStatusBadge;
