import axios from "axios";
import { BookModel } from "../types/books";
const baseURL = "http://localhost:5000/books";
export const axiosInstance = axios.create({
  baseURL,
});
const getAllBooks = async () => {
  const response = await axiosInstance("/");
  return response;
};
const getBook = async (id: string) => {
  return await axiosInstance(`/${id}`);
};
const createBook = async (data: any) => {
  return axiosInstance.post("/", data);
};
const updateBook = async (data: BookModel) => {
  return axiosInstance.put(`/${data._id}`, data);
};
export { getAllBooks, getBook, createBook, updateBook };
