import { Select } from "@radix-ui/themes";
import { useLocation, useNavigate } from "react-router-dom";

type Status = "OPEN" | "CLOSED" | "IN_PROGRESS";
const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "Closed", value: "CLOSED" },
  { label: "In Progress", value: "IN_PROGRESS" },
];

const IssueStatusFilter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const currentStatus = params.get("status") || "";

  return (
    <Select.Root
      defaultValue={currentStatus}
      onValueChange={(status) => {
        const query = status == " " ? "" : `?status=${status}`;
        navigate({
          pathname: location.pathname,
          search: query,
        });
      }}
    >
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses.map((status, index) => (
          <Select.Item key={status.value || index} value={status.value || " "}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
