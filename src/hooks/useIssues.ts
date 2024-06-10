import { IssueForm } from "../entities/entities";
import APIClient from "../services/api-client";

const apiclient = new APIClient<IssueForm>("/issues");

const useIssues = () => {
  const handleSend = async (input: IssueForm) => {
    try {
      apiclient.post(input);
    } catch (error) {
      console.error("useIssues error:", error);
      throw error;
    }
  };

  return { handleSend };
};

export default useIssues;
