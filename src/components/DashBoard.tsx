import { Flex, Grid } from "@radix-ui/themes";
import useFetchIssueSummary from "../hooks/useFetchIssueSummary";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";

const DashBoard = () => {
  const { summary } = useFetchIssueSummary();
  return (
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
  );
};

export default DashBoard;
