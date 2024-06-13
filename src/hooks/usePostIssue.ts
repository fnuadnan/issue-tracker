import { useState } from "react";
import { IssueForm, NewIssueForm } from "../entities/entities";
import APIClient from "../services/api-client";

const apiclient = new APIClient<IssueForm>("/issues");

const useIssues = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // post issue form data
  const handleSend = async (input: NewIssueForm) => {
    try {
      setLoading(true);
      await apiclient.post(input);
      setLoading(false);
      return true; // Indicate success
    } catch (error) {
      setLoading(false);
      setError("An unexpected error occurred.");
      return false; // Indicate failure
    }
  };

  return { loading, handleSend, error };
};

export default useIssues;
