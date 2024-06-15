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

  getById = async (id: string) => {
    try {
      const res = await axiosIntance.get<T>(this.endpoint + "/" + id);
      return res.data;
    } catch (error) {
      console.error("APIClient getById error:", error);
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

  patch = async (id: string, inputs: NewIssueForm) => {
    try {
      const res = await axiosIntance.patch<T>(this.endpoint + "/" + id, inputs);
      return res.data;
    } catch (error) {
      console.error("APIClient patch error:", error);
      throw error;
    }
  };
}

export default APIClient;
