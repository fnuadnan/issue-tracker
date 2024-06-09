import { createBrowserRouter } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import IssuesPage from "./pages/IssuesPage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <DashBoard /> },
      { path: "issues", element: <IssuesPage /> },
    ],
  },
]);

export default router;
