import { useState } from "react";
import { IssueFormData } from "../entities/entities";
import APIClient from "../services/api-client";

const apiClient = new APIClient<IssueFormData>("/issues");

const useDeleteIssue = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const deleteIssue = async (id: string) => {
    if (!id) {
      setError("Invalid issue ID.");
      return false; // Indicate failure
    }
    try {
      setLoading(true);
      await apiClient.delete(id);
      setLoading(false);
      return true; // Indicate success
    } catch (error) {
      setLoading(false);
      setError("An unexpected error occurred.");
      return false; // Indicate failure
    }
  };
  return { deleteIssue, loading, error };
};

export default useDeleteIssue;
