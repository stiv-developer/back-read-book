import { Router } from "express";
import { BooksController } from "./controller";
import { BookDatasourceImpl } from "../../infrastructure/datasource/book.datasource.imp";
import { BookRepositoryImpl } from "../../infrastructure/repositories/book.repository.impl";
import { upload } from "../../config/multer.config";

export class BookRoutes{
    static get routes():Router{
        const router = Router();

        // Instancias las depencencias
        const datasource = new BookDatasourceImpl();
        const bookRepository = new BookRepositoryImpl(datasource);
        const bookController = new BooksController(bookRepository);

        // Config routes
        router.get('/', bookController.getAllBooks);
        router.get('/:id', bookController.getBookById);
        router.get('/title/search', bookController.getBookByTitle);
        router.get('/:id/content', bookController.getBookWithContentById);
        
        router.post('/', bookController.createBook);
        router.put('/:id', bookController.updateBook);
        router.delete('/:id', bookController.deleteBook);

        
        return router;
    }
}