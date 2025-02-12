import { Router } from 'express';
import { BookRoutes } from './books/routes';
import { ContentBookRoutes } from './contentBook/routes';
import { ContentChapterRoutes } from './contentChapter/routes';
import { ImageBookRoutes } from './imageBook/routes';

export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        router.use('/api/book', BookRoutes.routes);
        router.use('/api/content-book', ContentBookRoutes.routes);
        router.use('/api/content-chapter', ContentChapterRoutes.routes);
        router.use('/api/image-book', ImageBookRoutes.routes);

        return router;
    }
}