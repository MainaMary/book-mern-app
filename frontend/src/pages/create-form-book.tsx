import { ChangeEvent, useState } from "react";
import CustomInput from "../components/Input";
import CustomLabel from "../components/Label";
import CustomButton from "../components/Button";
import { FormEvent } from "react";
import { useCreateBook } from "../services/mutation";
const CreateFormBook = () => {
  const [formValues, setFormValues] = useState({
    author: "",
    year: 0,
    title: "",
  });
  const [error, setError] = useState("");
  const { author, year, title } = formValues;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setError("");
    setFormValues({ ...formValues, [name]: value });
  };
  const { mutate, isPending } = useCreateBook();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate({ ...formValues, year: Number(year) });
  };
  return (
    <div className=" w-full lg:w-[60%] my-16 m-auto bg-white p-5 rounded-[10px] shadow-lg shadow-[rgba(0, 0, 0, 0.25)] w-full lg:max-w-[900px]">
      <form
        onSubmit={handleSubmit}
        className=" space-y-2 w-full border-b-[1px] border-gray-300 pb-2"
      >
        <div className="my-4">Add book</div>
        {error && <p className="text-red-400 my-2">{error}</p>}
        <div className="w-full  ">
          <CustomLabel>Name</CustomLabel>
          <CustomInput
            name="title"
            value={title ? title : ""}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="w-full  ">
          <CustomLabel>Author</CustomLabel>
          <CustomInput
            name="author"
            value={author ? author : ""}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="w-full ">
          <CustomLabel>Year</CustomLabel>
          <CustomInput
            name="year"
            value={year ? year : ""}
            onChange={handleChange}
            type="number"
          />
        </div>
        <CustomButton
          disabled={isPending}
          className="bg-purple-500"
          type="submit"
        >
          {isPending ? "Loading" : "Create a book"}
        </CustomButton>
      </form>
    </div>
  );
};

export default CreateFormBook;
