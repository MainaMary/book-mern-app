import BookModel from "../models/bookModel.js";

const getAllBooks = async (req, res) => {
  try {
    const response = await BookModel.find({});
    return res.status(200).json({ data: response, count: response.length });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
const createBook = async (req, res) => {
  const { author, title, year } = req.body;
  try {
    if (!author || !title || !year) {
      res.status(400).send({
        message: "Please provide all the required values. Author, title, Year",
      });
      return
      }
    const book = await BookModel.create(req.body);
      return  res.status(201).json(book);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
const getBook = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(404).json({ message: `Book with ${id} does not exist. ` });
    }
    const book = await BookModel.findById(id);
   return  res.status(200).json(book);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
const updateBook = async (req, res) => {
  const { author, title, year } = req.body;
  const { id } = req.params;
  try {
    // if (!author || !title || !year) {
    //   res.status(400).send({
    //     message: "Please provide all the required values. Author, title, Year",
    //   });
    // }
    const book = await BookModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!book) {
      res.status(404).send({ message: "Book not found" });
    }
   return  res.status(200).send({ book, message: "Book updated successfully" });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(404).send({ message: `${id} does not exist!` });
    }
    const book = await BookModel.findByIdAndDelete(id);
    if (!book) {
      res.status(404).send({ message: "Book not found" });
    }
    return res.status(200).json({ book, message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
export { getAllBooks, createBook, getBook, updateBook, deleteBook };
