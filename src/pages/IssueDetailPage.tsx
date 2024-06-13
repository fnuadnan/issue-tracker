import useFetchIssueDetail from "../hooks/useFetchIssueDetail";

const IssueDetailPage = () => {
  const { issue, loading } = useFetchIssueDetail();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!issue) {
    return <div>Issue not found.</div>;
  }

  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{new Date(issue.createdAt).toDateString()}</p>
    </div>
  );
};

export default IssueDetailPage;
