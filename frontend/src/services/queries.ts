import { useQuery } from "@tanstack/react-query";
import { getAllBooks, getBook } from "./api";
export function useFetchBooks() {
  return useQuery({
    queryKey: ["books"],
    queryFn: getAllBooks,
    refetchOnWindowFocus: false,
  });
}
export function useFetchBook() {
  return useQuery({
    queryKey: ["books"],
    queryFn: (id: string) => getBook(id),
    refetchOnWindowFocus: false,
  });
}
