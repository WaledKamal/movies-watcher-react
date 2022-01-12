import axios from "axios";
export const baseURL = "https://api.npoint.io/d49798f1fcd87c244cdd";
export const fetchApi = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
