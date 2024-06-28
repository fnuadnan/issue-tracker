import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import IssueActions from "../components/IssueActions";
import IssueStatusBadge from "../components/IssueStatusBadge";
import LoadingIssuesPage from "../components/LoadingIssuesPage";
import Pagination from "../components/Pagination";
import { SortField, Status } from "../entities/entities";
import useFetchIssues from "../hooks/useFetchIssues";

const IssuesPage = () => {
  // Get the current location and query parameters
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const status = params.get("status") as Status;
  const orderBy = params.get("orderBy") as SortField;
  const page = parseInt(params.get("page") || "1", 10) as number; // default to 1 if the page is not set 10 is

  const { issues, loading, totalItems } = useFetchIssues(status, orderBy, page);
  console.log(totalItems);

  if (loading) {
    return <LoadingIssuesPage />;
  }

  const columns: { label: string; value: string; className?: string }[] = [
    { label: "Issue", value: "title" },
    { label: "Status", value: "status", className: "hidden md:table-cell" },
    { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
  ];

  // Function to update query parameters
  const getUpdatedQueryString = (key: string, value: string) => {
    params.set(key, value);
    return params.toString();
  };

  // Function to handle page changes
  const onPageChange = (page: number) => {
    params.set("page", page.toString());
    navigate("?" + params.toString());
  };

  return (
    <div>
      <Helmet>
        <title>Issue Tracker - Issue List</title>
        <meta
          name="description"
          content="A list of all the issues currently available in the system."
        />
        <meta name="keywords" content="issues, status, project management" />
      </Helmet>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell
                key={column.value}
                className={column.className}
              >
                <Link
                  to={{
                    pathname: location.pathname,
                    search: getUpdatedQueryString("orderBy", column.value),
                  }}
                >
                  {column.label}
                </Link>
                {column.value === orderBy && <ArrowUpIcon className="inline" />}
              </Table.ColumnHeaderCell>
            ))}
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
      <Pagination
        totalItems={totalItems}
        currentPage={page}
        itemsPerPage={10}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default IssuesPage;
