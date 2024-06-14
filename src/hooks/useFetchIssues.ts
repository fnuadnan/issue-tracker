import { useEffect, useState } from "react";
import { IssueForm } from "../entities/entities";
import APIClient from "../services/api-client";

const apiClient = new APIClient<IssueForm>("/issues");

const useFetchIssues = () => {
  const [issues, setIssues] = useState<IssueForm[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await apiClient.get();
        setIssues(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("An unexpected error occurred.");
      }
    };
    fetchData();
  }, []);

  return { loading, error, issues };
};

export default useFetchIssues;
