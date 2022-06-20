import axios from "axios";

export const HTTP = axios.create({
  baseURL: "http://109.106.244.198/api",
  headers: {}
});
