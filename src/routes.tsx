import { createBrowserRouter } from "react-router-dom";
import IssuesPage from "./pages/IssuesPage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "issues", element: <IssuesPage /> }],
  },
]);

export default router;
