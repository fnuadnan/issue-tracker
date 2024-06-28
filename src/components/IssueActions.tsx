import { Button, Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueActions = () => {
  return (
    <Flex justify="between">
      <IssueStatusFilter />
      <Button>
        <Link to="new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
