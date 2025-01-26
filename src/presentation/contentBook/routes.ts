import { Router } from "express";
import { ContentBookController } from "./controller";
import { ContentBookDatasourceImpl } from "../../infrastructure/datasource/contentBook.datasource.impl";
import { ContentBookRepositoryImpl } from "../../infrastructure/repositories/contentBook.repository.impl";

export class ContentBookRoutes {
    static get routes(): Router {
        const router = Router();

        // Instancias las dependencias
        const datasource = new ContentBookDatasourceImpl();
        const contentBookRepository = new ContentBookRepositoryImpl(datasource);
        const contentBookController = new ContentBookController(contentBookRepository);

        // Config routes

        router.get('/', contentBookController.getAllContentBooks);
        router.get('/:id', contentBookController.getContentBookById);

        router.post('/', contentBookController.createContentBook);
        router.put('/:id', contentBookController.updateContentBook);
        router.delete('/:id', contentBookController.deleteContentBook);

        return router;
    }
}