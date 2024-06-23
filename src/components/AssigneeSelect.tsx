import { Select } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { IssueFormData } from "../entities/entities";
import useIssue from "../hooks/useIssue";
import useUsers from "../hooks/useUsers";

const AssigneeSelect = ({ issue }: { issue: IssueFormData }) => {
  const { users, error, isLoading } = useUsers();
  const { updateIssue } = useIssue();

  if (isLoading) return <Skeleton />;

  if (error) return null;

  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || ""} // if we dont have a user id, set to empty string to show placeholder  text
        onValueChange={(userId: string | null) => {
          if (!userId || userId === " ") userId = null; // if we dont have a user id or string is empty, set to null
          updateIssue({ ...issue, assignedToUserId: userId }); // update the issue with the new user id
        }}
      >
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value=" ">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default AssigneeSelect;
