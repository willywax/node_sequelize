import BookService from '../services/BookService';
import util from '../utils/Utils';

class BookController {
  static getAllBooks(req, res) {
    BookService.getAllBooks()
      .then((allBooks) => {
        if (allBooks.length > 0) {
          util.setSuccess(200, 'Book retrieved ', allBooks);
        } else {
          util.setSuccess(200, 'No Books found');
        }
        res.status(200).json(util.result());
      })
      .catch((error) => {
        util.setError(404, error);

        return util.send(res);
      });
  }

  static async addBook(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, 'Pleae provide all details ');

      res.status(404).json(util.result());
    }

    const newBook = req.body;

    try {
      const createdBook = await BookService.createBook(newBook);
      console.log(createdBook);
      util.setSuccess(201, 'Book created ', createdBook);
      res.status(201).json(util.result());
    } catch (error) {
      util.setError(404, error);

      res.status(400).json(util.result());
    }
  }

  static async updateBook(req, res) {
    if (!req.body.title || !req.body.price || !req.body.description) {
      util.setError(400, 'Pleae provide all details ');

      res.status(400).json(util.result());
    }

    try {
      const updateBook = await BookService.updateBook(req.params.id, req.body);

      updateBook !== null
        ? util.setSuccess(200, 'Book Updated ', updateBook)
        : util.setError(404, `Can not update Book with id ${req.params.id}`);

      res.status(200).json(util.result());
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAbook(req, res) {
    const { id } = req.params.id;

    console.log(isNaN(id));
    if (!isNaN(id)) {
      util.setError(400, 'Please Input number ');
      return res.status(400).json(util.result());
    }

    try {
      const foundBook = await BookService.getABook(id);

      !foundBook
        ? util.setError(404, `Cannot find book with the id ${id}`)
        : util.setSuccess(200, 'Found Book', theBook);

      res.status(util.result().statusCode).json(util.result());
    } catch (error) {
      util.setError(404, error);

      res.status(util.result().statusCode).json(util.result());
    }
  }

  static async deleteAbook(req, res) {
    const { id } = req.params.id;

    if (!isNaN(id)) {
      util.setError(400, 'Please Input number ');

      res.status(util.result().statusCode).json(util.result());
    }

    try {
      const deletedBook = await BookService.deleteBook(id);

      !deletedBook
        ? util.setError(404, `Cannot find book with the id ${id}`)
        : util.setSuccess(200, 'Book deleted', theBook);

      res.status(util.result().statusCode).json(util.result());
    } catch (error) {
      util.setError(404, error);

      res.status(util.result().statusCode).json(util.result());
    }
  }
}

export default BookController;
