import "easymde/dist/easymde.min.css";
import { Helmet } from "react-helmet-async";
import IssueForm from "../components/IssueForm";

const NewIssuePage = () => {
  return (
    <>
      <Helmet>
        <title>New Issue</title>
        <meta name="description" content="Create a new issue in the system." />
        <meta name="keywords" content="new, issue, project management" />
      </Helmet>
      <IssueForm />
    </>
  );
};

export default NewIssuePage;
