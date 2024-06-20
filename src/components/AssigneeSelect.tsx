import { Select } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { IssueFormData } from "../entities/entities";
import useIssue from "../hooks/useIssue";
import useUsers from "../hooks/useUsers";

const AssigneeSelect = ({ issue }: { issue: IssueFormData }) => {
  const { users, error, loading } = useUsers();
  const { updateIssue } = useIssue();

  if (loading) return <Skeleton />;

  if (error) return null;

  return (
    <Select.Root
      defaultValue={issue.assignedToUserId || " "}
      onValueChange={(userId: string | null) => {
        if (!userId || userId === " ") userId = null; // if we dont have a user id or string is empty, set to null
        updateIssue({ ...issue, assignedToUserId: userId });
      }}
    >
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value=" ">Unassigned</Select.Item>
          {users.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
