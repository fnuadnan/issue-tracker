import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { UserData } from "../entities/entities";
import APIClient from "../services/api-client";

const AuthButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const apiClient = new APIClient<UserData>("");

  useEffect(() => {
    const generateCustomToken = async () => {
      if (isAuthenticated && user) {
        try {
          const userData: UserData = {
            user_id: user.sub as string,
            name: user.name as string,
            email: user.email as string,
            picture: user.picture as string,
          };
          await apiClient.generateToken(userData);
        } catch (error) {
          console.error("Error generating custom JWT:", error);
        }
      }
    };

    generateCustomToken();
  }, [isAuthenticated, user]);

  const handleLogout = async () => {
    try {
      await apiClient.logout();
      logout({ logoutParams: { returnTo: window.location.origin } });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Log Out</button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  );
};

export default AuthButton;
