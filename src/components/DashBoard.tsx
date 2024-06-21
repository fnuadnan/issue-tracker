import useFetchIssueSummary from "../hooks/useFetchIssueSummary";
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
    </>
  );
};

export default DashBoard;
