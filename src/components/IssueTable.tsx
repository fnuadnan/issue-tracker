import { ArrowUpIcon } from "@radix-ui/react-icons";
import { Table } from "@radix-ui/themes";
import { Link, useLocation } from "react-router-dom";
import { IssueFormData } from "../entities/entities";
import IssueStatusBadge from "./IssueStatusBadge";

interface Props {
  orderBy: string;
  issues: IssueFormData[];
}

const IssueTable = ({ issues, orderBy }: Props) => {
  const location = useLocation();

  const columns: { label: string; value: string; className?: string }[] = [
    { label: "Issue", value: "title" },
    { label: "Status", value: "status", className: "hidden md:table-cell" },
    { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
  ];

  // Function to update query parameters with the new orderBy value
  const getUpdatedQueryString = (key: string, value: string) => {
    const params = new URLSearchParams(location.search);
    params.set(key, value);
    return params.toString();
  };

  return (
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
  );
};

export default IssueTable;
