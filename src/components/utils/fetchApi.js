import axios from "axios";
export const baseURL = "https://api.npoint.io/0c5b2bee26347a7cb374";
export const fetchApi = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
