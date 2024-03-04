import BookCard from "../components/BookCard";
import { useFetchBooks } from "../services/queries";
import { BookModel } from "../types/books";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isLoading } = useFetchBooks();
  console.log({ data, isLoading });
  return (
    <div className="py-12">
      <div className="flex h-auto mb-4 items-center justify-between">
        <p>Books List</p>
        <Link to={"/create"}>
          <button className="cursor-pointer">Add book</button>
        </Link>
      </div>
      {isLoading ? (
        <p>{isLoading}</p>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {data?.data?.data.map((book: BookModel) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
