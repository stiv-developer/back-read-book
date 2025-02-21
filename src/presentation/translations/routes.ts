import { Router } from "express";
import { TranslationDatasourceImpl } from "../../infrastructure/datasource/translations.datasource.impl";
import { TranslationRepositoryImpl } from "../../infrastructure/repositories/translations.repository.impl";
import { TranslationController } from "./controller";


export class TranslationRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new TranslationDatasourceImpl();
        const translationRepository = new TranslationRepositoryImpl(datasource);
        const translationController = new TranslationController(translationRepository);


        //Config routes
        router.get('/:id', translationController.getTranslateById);
        router.get('/', translationController.getAllTranslations);
        router.post('/', translationController.createTranslation);
        router.put('/:id', translationController.updateTranslation);
        router.delete('/:id', translationController.deleteTranslation);

        return router;
    }
}