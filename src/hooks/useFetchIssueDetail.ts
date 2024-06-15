import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IssueFormData } from "../entities/entities";
import APIClient from "../services/api-client";

const apiClient = new APIClient<IssueFormData>("/issues");

const useFetchIssueDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [issue, setIssue] = useState<IssueFormData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("Invalid issue ID.");
      return;
    }

    const fetchIssue = async () => {
      try {
        setLoading(true);
        const data = await apiClient.getById(id);
        setIssue(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("An unexpected error occurred.");
      }
    };
    fetchIssue();
  }, [id]);

  return { issue, loading, error };
};

export default useFetchIssueDetail;
