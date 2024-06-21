import { useEffect, useState } from "react";
import { IssueSummaryData } from "../entities/entities";
import APIClient from "../services/api-client";

const apiClient = new APIClient<IssueSummaryData>("/issues/summary");

const useFetchIssueSummary = () => {
  const [summary, setSummary] = useState<IssueSummaryData>({
    open: 0,
    inProgress: 0,
    closed: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        setLoading(true);
        const data = await apiClient.getSingle();
        setSummary(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("An unexpected error occurred.");
      }
    };
    fetchSummary();
  }, []);

  return { summary, loading, error };
};

export default useFetchIssueSummary;
