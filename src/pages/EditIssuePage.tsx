import { Helmet } from "react-helmet-async";
import IssueForm from "../components/IssueForm";
import useFetchIssueDetail from "../hooks/useFetchIssueDetail";

const EditIssuePage = () => {
  const { issue, loading } = useFetchIssueDetail();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!issue) {
    return <div>Issue not found.</div>;
  }

  return (
    <>
      <Helmet>
        <title>Edit Issue: {issue.title}</title>
        <meta
          name="description"
          content={`Editing issue: ${issue.title}. Description: ${issue.description}`}
        />
        <meta name="keywords" content="edit, issue, project management" />
      </Helmet>
      <IssueForm issue={issue} />
    </>
  );
};

export default EditIssuePage;
