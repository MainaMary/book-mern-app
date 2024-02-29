import axios from "axios";
const baseURL = "http://localhost:5000/books";
export const axiosInstance = axios.create({
  baseURL,
});
const getAllBooks = async () => {
  const response = await axiosInstance("/");
  return response;
};
export { getAllBooks };
