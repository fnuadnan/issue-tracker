import axios from "axios";
import { NewIssueForm, UserData } from "../entities/entities";

const axiosIntance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true, // Ensure cookies are included in cross-site requests
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // get all users
  getUsers = async () => {
    try {
      const res = await axiosIntance.get<T[]>(this.endpoint);
      return res.data;
    } catch (error) {
      console.error("APIClient getUsers error:", error);
      throw error;
    }
  };

  // get all issues
  get = async () => {
    try {
      const res = await axiosIntance.get<T[]>(this.endpoint);
      return res.data;
    } catch (error) {
      console.error("APIClient get error:", error);
      throw error;
    }
  };

  // get issue by id
  getById = async (id: string) => {
    try {
      const res = await axiosIntance.get<T>(this.endpoint + "/" + id);
      return res.data;
    } catch (error) {
      console.error("APIClient getById error:", error);
      throw error;
    }
  };

  // get single object
  getSingle = async () => {
    try {
      const res = await axiosIntance.get<T>(this.endpoint);
      return res.data;
    } catch (error) {
      console.error("APIClient getSingle error:", error);
      throw error;
    }
  };

  // post new issue
  post = async (inputs: NewIssueForm) => {
    try {
      const res = await axiosIntance.post<T>(this.endpoint + "/", inputs);
      return res.data;
    } catch (error) {
      console.error("APIClient post error:", error);
      throw error;
    }
  };

  // update issue by id
  patch = async (id: string, inputs: NewIssueForm) => {
    try {
      const res = await axiosIntance.patch<T>(this.endpoint + "/" + id, inputs);
      return res.data;
    } catch (error) {
      console.error("APIClient patch error:", error);
      throw error;
    }
  };

  // delete issue by id
  delete = async (id: string) => {
    try {
      const res = await axiosIntance.delete<T>(this.endpoint + "/" + id);
      return res.data;
    } catch (error) {
      console.error("APIClient delete error:", error);
      throw error;
    }
  };

  // generate token
  generateToken = async (userData: UserData) => {
    try {
      const res = await axiosIntance.post<T>("/generate-token", userData);
      return res.data;
    } catch (error) {
      console.error("APIClient generateToken error:", error);
      throw error;
    }
  };

  // handle logout
  logout = async () => {
    try {
      const res = await axiosIntance.post<{ message: string }>("/logout");
      return res.data;
    } catch (error) {
      console.error("APIClient logout error:", error);
      throw error;
    }
  };
}

export default APIClient;
