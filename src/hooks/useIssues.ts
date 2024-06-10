import { useState } from "react";
import { IssueForm } from "../entities/entities";
import APIClient from "../services/api-client";

const apiclient = new APIClient<IssueForm>("/issues");

const useIssues = () => {
  const [error, setError] = useState("");

  const handleSend = async (input: IssueForm) => {
    try {
      await apiclient.post(input);
    } catch (error) {
      setError("An unexpected error occurred.");
      throw error;
    }
  };

  return { handleSend, error };
};

export default useIssues;
