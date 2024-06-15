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

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
