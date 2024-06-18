import { createBrowserRouter } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import EditIssuePage from "./pages/EditIssuePage";
import IssueDetailPage from "./pages/IssueDetailPage";
import IssuesPage from "./pages/IssuesPage";
import Layout from "./pages/Layout";
import NewIssuePage from "./pages/NewIssuePage";
import PrivateRoutes from "./pages/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <DashBoard /> },
      {
        path: "issues",
        element: <PrivateRoutes />,
        children: [{ index: true, element: <IssuesPage /> }],
      },
      { path: "issues/new", element: <NewIssuePage /> },
      { path: "issues/:id", element: <IssueDetailPage /> },
      { path: "issues/:id/edit", element: <EditIssuePage /> },
    ],
  },
]);

export default router;
