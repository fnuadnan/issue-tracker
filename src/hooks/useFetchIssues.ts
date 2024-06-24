import { useEffect, useState } from "react";
import { IssueFormData } from "../entities/entities";
import APIClient from "../services/api-client";

type Status = "OPEN" | "CLOSED" | "IN_PROGRESS";

const apiClient = new APIClient<IssueFormData>("/issues");

const useFetchIssues = (status?: Status) => {
  const [issues, setIssues] = useState<IssueFormData[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const query = status ? `?status=${status}` : "";
        const data = await apiClient.get(query);
        setIssues(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("An unexpected error occurred.");
      }
    };
    fetchData();
  }, [status]);

  return { loading, error, issues };
};

export default useFetchIssues;
