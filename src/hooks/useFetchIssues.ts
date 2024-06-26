import { useEffect, useState } from "react";
import { IssueFormData, SortField, Status } from "../entities/entities";
import APIClient from "../services/api-client";

const apiClient = new APIClient<IssueFormData>("/issues");

const useFetchIssues = (status?: Status, orderBy?: SortField) => {
  const [issues, setIssues] = useState<IssueFormData[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();

        // Append status and orderBy to the query string if they are provided
        if (status) {
          params.append("status", status);
        }
        if (orderBy) {
          params.append("orderBy", orderBy);
        }

        // Construct the query string
        const query = params.toString() ? `?${params.toString()}` : "";

        // Fetching data from the API using the constructed query
        const data = await apiClient.get(query);

        setIssues(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("An unexpected error occurred.");
      }
    };

    fetchData();
  }, [status, orderBy]); // Depend on status and orderBy to refetch when they change

  return { loading, error, issues };
};

export default useFetchIssues;
