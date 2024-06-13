import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const IssueActions = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link to="new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssueActions;
