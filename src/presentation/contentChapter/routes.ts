import { Router } from "express";
import { ContentChapterController } from "./controller";
import { ContentChapterDatasourceImpl } from "../../infrastructure/datasource/contentChapter.datasource.impl";
import { ContentChapterRepositoryImpl } from "../../infrastructure/repositories/contentChapter.repository.impl";

export class ContentChapterRoutes {
    static get routes(): Router {
        const router = Router();

        // Instancias las dependencias
        const datasource = new ContentChapterDatasourceImpl();
        const contentChapterRepository = new ContentChapterRepositoryImpl(datasource);
        const contentChapterController = new ContentChapterController(contentChapterRepository);

        // Config routes
        router.get('/', contentChapterController.getAllContentChapters);
        router.get('/:id', contentChapterController.getContentChapterById);

        router.post('/', contentChapterController.createContentChapter);
        router.put('/:id', contentChapterController.updateContentChapter);
        router.delete('/:id', contentChapterController.DeleteContentBook);

        return router;
    }
}