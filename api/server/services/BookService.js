import database from '../src/models';

class BookService {
  static async getAllBooks() {
    try {
      const books = await database.Books.findAll();
      console.log(books);
      return books;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async createBook(newBook) {
    try {
      const createdBook = await database.Books.create(newBook);
      return createdBook;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async updateBook(id, updateBook) {
    try {
      const bookToUpdate = await database.Books.findOne({
        where: { id: Number(id) },
      });

      if (bookToUpdate) {
        await database.Books.update(updateBook, { where: { id: Number(id) } });

        return updateBook;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getABook(id) {
    try {
      return await database.Books.findOne({ where: { id: Number(id) } });
    } catch (error) {
      throw error;
    }
  }

  static async deleteBook(id) {
    try {
      const bookToDelete = await database.Books.findOne({ where: { id: Number(id) } });

      if (bookToDelete) {
        const deleteBook = await database.Books.destroy({ where: { id: Number(id) } });

        return deleteBook;
      }

      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default BookService;
