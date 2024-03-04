import { createBook, updateBook } from "./api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { BookModel } from "../types/books";
export function useCreateBook() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: { title: string; year: number; author: string }) =>
      createBook(data),
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.log("error");
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["books"] });
        navigate("/");
      }
    },
  });
}
export function useUpdateBook() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: BookModel) => updateBook(data),
    onSuccess: () => {},
    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["books"] });
        await queryClient.invalidateQueries({
          queryKey: ["todos", { id: variables._id }],
        });
      }
    },
  });
}
