import axios from "axios";
import { NewIssueForm } from "../entities/entities";

const axiosIntance = axios.create({
  baseURL: "http://localhost:3000",
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = async () => {
    try {
      const res = await axiosIntance.get<T[]>(this.endpoint);
      return res.data;
    } catch (error) {
      console.error("APIClient get error:", error);
      throw error;
    }
  };

  post = async (inputs: NewIssueForm) => {
    try {
      const res = await axiosIntance.post<T>(this.endpoint + "/", inputs);
      return res.data;
    } catch (error) {
      console.error("APIClient post error:", error);
      throw error;
    }
  };
}

export default APIClient;
