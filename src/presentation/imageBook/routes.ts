import { Router } from "express";
import { ImageBookDatasourceImpl } from "../../infrastructure/datasource/imageBook.datasource.impl";
import { ImageBookController } from "./controller";
import { ImageBookRepositoryImpl } from "../../infrastructure/repositories/imageBook.repository.impl";
import upload from "../../config/upload";

export class ImageBookRoutes {
    static get routes(): Router {
        const router = Router();

        // Instancias las dependencias
        const datasource = new ImageBookDatasourceImpl();
        const imageBookRepository = new ImageBookRepositoryImpl(datasource);
        const imageBookController = new ImageBookController(imageBookRepository);

        // Config routes
        router.get('/:id', imageBookController.getImageBookById);
        router.post('/', upload.single('image'), imageBookController.createImageBook);
        router.put('/:id', imageBookController.updateImageBook);

        return router;
    }
}