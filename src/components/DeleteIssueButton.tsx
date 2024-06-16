import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import useDeleteIssue from "../hooks/useDeleteIssue";

const DeleteIssueButton = ({ issueId }: { issueId: string }) => {
  const navigate = useNavigate();
  const { deleteIssue } = useDeleteIssue();

  const handleDeleteIssue = async () => {
    const success = await deleteIssue(issueId);
    if (success) {
      navigate("/issues");
    }
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete Issue</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this issue? This action cannot be
          undone.
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              onClick={() => handleDeleteIssue()}
              variant="solid"
              color="red"
            >
              Delete Issue
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
