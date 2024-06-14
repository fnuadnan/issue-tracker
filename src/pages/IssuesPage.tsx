import { Table } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import IssueActions from "../components/IssueActions";
import IssueStatusBadge from "../components/IssueStatusBadge";
import LoadingIssuesPage from "../components/LoadingIssuesPage";
import useFetchIssues from "../hooks/useFetchIssues";

const IssuesPage = () => {
  const { issues, loading } = useFetchIssues();

  if (loading) {
    return <LoadingIssuesPage />;
  }

  return (
    <div>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link
                  className="text-violet-600 hover:underline"
                  to={`/issues/${issue.id}`}
                >
                  {issue.title}
                </Link>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {new Date(issue.createdAt).toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
