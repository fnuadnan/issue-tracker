import { createBrowserRouter } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import IssueDetailPage from "./pages/IssueDetailPage";
import IssuesPage from "./pages/IssuesPage";
import Layout from "./pages/Layout";
import NewIssuePage from "./pages/NewIssuePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <DashBoard /> },
      { path: "issues", element: <IssuesPage /> },
      { path: "issues/new", element: <NewIssuePage /> },
      { path: "issues/:id", element: <IssueDetailPage /> },
    ],
  },
]);

export default router;
