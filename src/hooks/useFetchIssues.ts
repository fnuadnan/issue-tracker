import { useEffect, useState } from "react";
import {
  FetchIssuesResponse,
  IssueFormData,
  SortField,
  Status,
} from "../entities/entities";
import APIClient from "../services/api-client";

const apiClient = new APIClient<FetchIssuesResponse>("/issues");

const useFetchIssues = (
  status?: Status,
  orderBy?: SortField,
  page: number = 1
) => {
  const [issues, setIssues] = useState<IssueFormData[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
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
        params.append("page", page.toString()); // Append the page number to the query string

        // Construct the query string
        const query = params.toString() ? `?${params.toString()}` : "";

        // Fetching data from the API using the constructed query
        const data = await apiClient.get(query);

        setTotalItems(data.totalItems);
        setIssues(data.issues);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("An unexpected error occurred.");
      }
    };

    fetchData();
  }, [status, orderBy, page]); // Depend on status and orderBy to refetch when they change

  return { loading, error, issues, totalItems };
};

export default useFetchIssues;
