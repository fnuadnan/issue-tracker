import { useState } from "react";
import { useParams } from "react-router-dom";
import { IssueFormData, NewIssueForm } from "../entities/entities";
import APIClient from "../services/api-client";

const apiClient = new APIClient<IssueFormData>("/issues");

const useIssue = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // post issue form data
  const handleSend = async (input: NewIssueForm) => {
    try {
      setLoading(true);
      await apiClient.post(input);
      setLoading(false);
      return true; // Indicate success
    } catch (err) {
      setLoading(false);
      setError("An unexpected error occurred.");
      return false; // Indicate failure
    }
  };

  // update issue form data
  const updateIssue = async (data: NewIssueForm) => {
    if (!id) {
      setError("Invalid issue ID.");
      return false; // Indicate failure
    }

    try {
      setLoading(true);
      await apiClient.patch(id, data);
      setLoading(false);
      return true; // Indicate success
    } catch (err) {
      setLoading(false);
      setError("An unexpected error occurred.");
      return false; // Indicate failure
    }
  };

  return { handleSend, updateIssue, loading, error };
};

export default useIssue;
