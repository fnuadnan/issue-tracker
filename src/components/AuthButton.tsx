import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, DropdownMenu, Text } from "@radix-ui/themes";
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
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar
              className="cursor-pointer"
              src={user?.picture}
              fallback="?"
              size="2"
              radius="full"
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              <Text size="2">{user?.email}</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item onClick={handleLogout}>
              Log Out
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  );
};

export default AuthButton;
