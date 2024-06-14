import { Pencil2Icon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
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
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{issue.title}</Heading>
        <Flex gap="3" my="2">
          <IssueStatusBadge status={issue.status} />
          <Text>{new Date(issue.createdAt).toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link to={`/issues/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
