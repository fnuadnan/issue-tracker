import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  console.log("PrivateRoutes rendered");
  console.log("isAuthenticated:", isAuthenticated);
  console.log("isLoading:", isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
