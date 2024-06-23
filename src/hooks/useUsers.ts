import { useQuery } from "@tanstack/react-query";
import { User } from "../entities/entities";
import APIClient from "../services/api-client";

const apiClient = new APIClient<User>("/users");

const useUsers = () => {

  const { isLoading, error, data: users } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: apiClient.getUsers,
    staleTime: 1000 * 60 , // 60 s
    retry: 3
  });

  return { isLoading, error, users };
};

export default useUsers;
