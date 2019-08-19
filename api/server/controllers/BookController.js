import BookService from '../services/BookService';
import Util from '../utils/Utils';

const util = new Util();

class BookController {
  static async getAllBooks(req, res) {
    try {
      const allBooks = await BookService.getAllBooks();
      console.log(allBooks);

      if (allBooks.length > 0) {
        util.setSuccess(200, 'Book retrieved ', allBooks);
      } else {
        util.setSuccess(200, 'No Books found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);

      return util.send(res);
    }
  }

  static async addBook(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, 'Pleae provide all details ');

      return util.send(res);
    }

    const newBook = req.body;

    try {
      const createdBook = await BookService.createBook(newBook);
      util.setSuccess(201, 'Book created ', createdBook);
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async updateBook(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, 'Pleae provide all details ');

      return util.send(res);
    }

    try {
      const updateBook = await BookService.updateBook(req.params.id, req.body);

      updateBook !== null
        ? util.setSuccess(200, 'Book Updated ', updateBook)
        : util.setError(404, `Can not update Book with id ${req.params.id}`);

      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAbook(req, res) {
    const { id } = req.params.id;

    if (!Number(id)) {
      util.setError(400, 'Please Input number ');
      return util.send(res);
    }

    try {
      const foundBook = await BookService.getABook(id);

      !foundBook
        ? util.setError(404, `Cannot find book with the id ${id}`)
        : util.setSuccess(200, 'Found Book', theBook);
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteAbook(req, res) {
    const { id } = req.params.id;

    if (!Number(id)) {
      util.setError(400, 'Please Input number ');
      return util.send(res);
    }

    try {
      const deletedBook = await BookService.deleteBook(id);

      !deletedBook
        ? util.setError(404, `Cannot find book with the id ${id}`)
        : util.setSuccess(200, 'Book deleted', theBook);
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
}

export default BookController;
