import useFetchIssueSummary from "../hooks/useFetchIssueSummary";
import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";

const DashBoard = () => {
  const { summary } = useFetchIssueSummary();
  return (
    <>
      <LatestIssues />
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
    </>
  );
};

export default DashBoard;
