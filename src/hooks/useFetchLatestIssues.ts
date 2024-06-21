import { useEffect, useState } from "react";
import { IssueFormData } from "../entities/entities";
import APIClient from "../services/api-client";

const apiClient = new APIClient<IssueFormData>("/issues");

const useFetchLatestIssues = () => {
  const [issues, setIssues] = useState<IssueFormData[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await apiClient.getLatest();
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

export default useFetchLatestIssues;
