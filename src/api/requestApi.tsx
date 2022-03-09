import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export function getRequest(url: string) {
  return axiosClient.get(`/${url}`).then((response) => response);
}

export function postRequest(url: string, payload: any) {
  return axiosClient.post(`/${url}`, payload).then((response) => response);
}
