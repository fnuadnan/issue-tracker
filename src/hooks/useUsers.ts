import { useEffect, useState } from "react";
import { User } from "../entities/entities";
import APIClient from "../services/api-client";

const apiClient = new APIClient<User>("/users");

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await apiClient.get();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("An unexpected error occurred.");
      }
    };
    fetchData();
  }, []);

  return { loading, error, users };
};

export default useUsers;
