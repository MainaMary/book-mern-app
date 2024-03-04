import { BookModel } from "../types/books";
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useUpdateBook } from "../services/mutation";
interface Props {
  book: BookModel;
}
const BookCard = ({ book }: Props) => {
  const createBookMutation = useUpdateBook();
  const handleEdit = () => {};
  return (
    <div className="rounded-md py-3 px-4 border shadow-md bg-white">
      <p>{`Author ${book.author}`}</p>
      <p>{`Title ${book.title}`}</p>
      <p>{`Year ${book.year}`}</p>
      <div className="flex gap-2 cursor-pointer my-3">
        <MdModeEdit onClick={handleEdit} />
        <AiFillDelete />
      </div>
    </div>
  );
};

export default BookCard;
