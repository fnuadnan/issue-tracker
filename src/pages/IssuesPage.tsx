import { Flex } from "@radix-ui/themes";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import IssueActions from "../components/IssueActions";
import IssueTable from "../components/IssueTable";
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

  if (loading) {
    return <LoadingIssuesPage />;
  }

  // Function to handle page changes
  const onPageChange = (page: number) => {
    params.set("page", page.toString());
    navigate("?" + params.toString());
  };

  return (
    <Flex direction="column" gap="3">
      {/* Add the Helmet component to set the page title and meta tags */}
      <Helmet>
        <title>Issue Tracker - Issue List</title>
        <meta
          name="description"
          content="A list of all the issues currently available in the system."
        />
        <meta name="keywords" content="issues, status, project management" />
      </Helmet>

      <IssueActions />
      <IssueTable issues={issues} orderBy={orderBy} />
      <Pagination
        totalItems={totalItems}
        currentPage={page}
        itemsPerPage={10}
        onPageChange={onPageChange}
      />
    </Flex>
  );
};

export default IssuesPage;
