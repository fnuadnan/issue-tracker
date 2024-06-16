import { useState } from "react";
import { IssueFormData } from "../entities/entities";
import APIClient from "../services/api-client";

const apiClient = new APIClient<IssueFormData>("/issues");

const useDeleteIssue = () => {
  const [error, setError] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteIssue = async (id: string) => {
    if (!id) {
      setError(true);
      return false; // Indicate failure
    }
    try {
      setIsDeleting(true);
      await apiClient.delete(id);
      setIsDeleting(false);
      return true; // Indicate success
    } catch (error) {
      setIsDeleting(false);
      setError(true);
      return false; // Indicate failure
    }
  };
  return { deleteIssue, isDeleting, error, setError };
};

export default useDeleteIssue;
