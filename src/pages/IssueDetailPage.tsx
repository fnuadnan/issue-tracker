import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import IssueStatusBadge from "../components/IssueStatusBadge";
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
      <Heading>{issue.title}</Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{new Date(issue.createdAt).toDateString()}</Text>
      </Flex>
      <Card>{issue.description}</Card>
    </div>
  );
};

export default IssueDetailPage;
