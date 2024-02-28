import { Router } from "express";
import { getAllBooks, createBook, updateBook, deleteBook, getBook } from "../controllers/bookController.js";
const router = Router();
router.route("/:id").get(getBook).patch(updateBook).delete(deleteBook);
router.route("/").get(getAllBooks).post(createBook);
export default router;
