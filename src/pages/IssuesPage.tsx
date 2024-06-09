import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const IssuesPage = () => {
  return (
    <div>
      <Button>
        <Link to="new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
