import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import IssueStatusBadge from "../components/IssueStatusBadge";
import LoadingIssueDetailPage from "../components/LoadingIssueDetailPage";
import useFetchIssueDetail from "../hooks/useFetchIssueDetail";

const IssueDetailPage = () => {
  const { issue, loading } = useFetchIssueDetail();

  if (loading) {
    return <LoadingIssueDetailPage />;
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
      <Card className="prose" mt="4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
