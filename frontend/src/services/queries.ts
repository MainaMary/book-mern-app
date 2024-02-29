import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "./api";
export function useFetch() {
  return useQuery({
    queryKey: ["books"],
    queryFn: getAllBooks,
    refetchOnWindowFocus: false,
  });
}
