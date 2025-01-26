import { CreateContentChapterDto } from "../../domain";
import { ContentChapterRepository } from "../../domain/repositories/contentChapter.repository";
import { Request, Response } from 'express';
import { CreateContentChapter } from "../../domain/use-cases/contentChapter/create-contentChapter";
import { UpdateContentChapterDto } from "../../domain/dtos/contentChapter/update-contentChapter.dto";
import { UpdateContentChapter } from "../../domain/use-cases/contentChapter/update-contentChapter";
import { DeleteContentBook } from "../../domain/use-cases/contentBook/delete-contentBook";

export class ContentChapterController {
    constructor(
        private readonly contentChapterRepository: ContentChapterRepository
    ) {}

    public createContentChapter = (req: Request, res: Response) => {
        console.log('Request body:', req.body);

        const [error, createContentChapterDto] = CreateContentChapterDto.create(req.body);

        if (error) {
            console.error('Error in CreateContentChapterDto.create:', error);
            return res.status(400).json({ error });
        }

        new CreateContentChapter(this.contentChapterRepository)
            .execute(createContentChapterDto!)
            .then(contentChapter => res.json(contentChapter))
            .catch(error => {
                console.error('Error creating content chapter:', error);
                res.status(400).json({ error: error.message || 'Unknown error' });
            });
    }

    public updateContentChapter = (req: Request, res: Response) => {
        const id = req.params.id;
        console.log('id',id)
        const [error, updateContentChapterDto] = UpdateContentChapterDto.create({ ...req.body, id });
        
        if (error) return res.status(400).json({ error });

        new UpdateContentChapter(this.contentChapterRepository)
            .execute(updateContentChapterDto!)
            .then(contentChapter => res.json(contentChapter))
            .catch(error => res.status(400).json({ error }));
    }

    public getAllContentChapters = (req: Request, res: Response) => {
        this.contentChapterRepository.getAll()
            .then(contentChapters => res.json(contentChapters))
            .catch(error => {
                console.error('Error getting all content chapters:', error);
                res.status(400).json({ error: error.message || 'Unknown error' });
            });
    }

    public getContentChapterById = (req: Request, res: Response) => {
        const id = req.params.id;
        this.contentChapterRepository.findById(id)
            .then(contentChapter => res.json(contentChapter))
            .catch(error => {
                console.error('Error getting content chapter by ID:', error);
                res.status(400).json({ error: error.message || 'Unknown error' });
            });
    }

    public DeleteContentBook = (req: Request, res: Response) => {
        const id = req.params.id;
        this.contentChapterRepository.deleteById(id)
            .then(contentChapter => res.json(contentChapter))
            .catch(error => {
                console.error('Error deleting content chapter:', error);
                res.status(400).json({ error: error.message || 'Unknown error' });
            });
    }
}