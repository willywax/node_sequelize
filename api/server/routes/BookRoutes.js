import { Router } from 'express';
import BookController from '../controllers/BookController';

const router = Router();

router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getAbook);
router.post('/', BookController.addBook);
router.delete('/:id', BookController.deleteAbook);
router.put('/:id', BookController.updateBook);

export default router;
