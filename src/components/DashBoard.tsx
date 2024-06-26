import { Flex, Grid } from "@radix-ui/themes";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import useFetchIssueSummary from "../hooks/useFetchIssueSummary";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";

const DashBoard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  // Fetch the issue summary
  const { summary } = useFetchIssueSummary();

  // Get the current page from the URL
  const page = parseInt(searchParams.get("page") || "1", 10); // default to 1 if the page is not set

  // Function to handle page changes
  const onPageChange = (page: number) => {
    searchParams.set("page", page.toString());
    navigate("?" + searchParams.toString());
  };

  return (
    <>
      <Helmet>
        <title>Issue Tracler - Dashboard</title>
      </Helmet>
      <Grid gap="5" columns={{ initial: "1", md: "2" }}>
        <Flex gap="5" direction="column">
          <IssueSummary
            open={summary.open}
            inProgress={summary.closed}
            closed={summary.closed}
          />
          <IssueChart
            open={summary.open}
            inProgress={summary.closed}
            closed={summary.closed}
          />
        </Flex>
        <LatestIssues />
      </Grid>
    </>
  );
};

export default DashBoard;
