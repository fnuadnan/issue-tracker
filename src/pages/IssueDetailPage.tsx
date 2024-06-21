import { Pencil2Icon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import AssigneeSelect from "../components/AssigneeSelect";
import DeleteIssueButton from "../components/DeleteIssueButton";
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
    <>
      <Helmet>
        <title>{issue.title}</title>
        <meta name="title" content={`Detail of issue ${issue.id}`} />
      </Helmet>
      <Grid columns={{ initial: "1", sm: "5" }} gap="5">
        <Box className="md:col-span-4">
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
          <Flex gap="4" direction="column">
            <AssigneeSelect issue={issue} />
            <Button>
              <Pencil2Icon />
              <Link to={`/issues/${issue.id}/edit`}>Edit Issue</Link>
            </Button>
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      </Grid>
    </>
  );
};

export default IssueDetailPage;
