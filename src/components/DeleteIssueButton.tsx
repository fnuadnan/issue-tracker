import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import useDeleteIssue from "../hooks/useDeleteIssue";

const DeleteIssueButton = ({ issueId }: { issueId: string }) => {
  const { deleteIssue, error, setError } = useDeleteIssue(); // Import the custom hook

  // Handle the deletion of the issue
  const handleDeleteIssue = async () => {
    const success = await deleteIssue(issueId);
    if (success) {
      navigate("/issues");
    }
  };

  // Navigate to the issues list page after deleting the issue
  const navigate = useNavigate();

  return (
    <>
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
      {error && (
        <AlertDialog.Root open={error} onOpenChange={() => setError(false)}>
          <AlertDialog.Content>
            <AlertDialog.Title>Error</AlertDialog.Title>
            <AlertDialog.Description>
              This issue could not be deleted.
            </AlertDialog.Description>
            <Flex justify="end" mt="4">
              <Button
                onClick={() => setError(false)}
                color="gray"
                variant="soft"
              >
                OK
              </Button>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      )}
    </>
  );
};

export default DeleteIssueButton;
