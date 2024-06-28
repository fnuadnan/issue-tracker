import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import useFetchLatestIssues from "../hooks/useFetchLatestIssues";
import IssueStatusBadge from "./IssueStatusBadge";

const LatestIssues = () => {
  const { loading, error, issues } = useFetchLatestIssues();

  if (loading) return <div>loading...</div>;

  if (error) return <p>{error}</p>;

  return (
    <Card>
      <Heading size="4" mb="5">
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {issues?.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" align="start" gap="2">
                    <Link to={`issues/${issue.id}`}>{issue.title}</Link>
                    <IssueStatusBadge status={issue.status} />
                  </Flex>
                  {issue.assignedToUserId && (
                    <Avatar
                      src={issue.assignedTo.image}
                      fallback="?"
                      size="2"
                      radius="full"
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
