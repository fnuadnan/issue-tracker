import delay from "delay";
import { useEffect, useState } from "react";
import { IssueForm, NewIssueForm } from "../entities/entities";
import APIClient from "../services/api-client";

const apiclient = new APIClient<IssueForm>("/issues");

const useIssues = () => {
  const [issues, setIssues] = useState<IssueForm[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // get issues on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await apiclient.get();
        await delay(3000);
        setIssues(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("An unexpected error occurred.");
      }
    };
    fetchData();
  }, []);

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

  return { loading, handleSend, error, issues };
};

export default useIssues;
