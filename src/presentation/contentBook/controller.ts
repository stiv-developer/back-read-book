import { CreateContentBookDto, UpdateContentBookDto } from "../../domain";
import { ContentBookRepository } from "../../domain/repositories/contentBook.repository";
import { Request, Response } from 'express';
import { CreateContentBook } from "../../domain/use-cases/contentBook/create-contentBook";
import { UpdateContentBook } from "../../domain/use-cases/contentBook/update-contentBook";

export class ContentBookController {

    constructor(
        private readonly contentBookRepository: ContentBookRepository
    ) { }

    public createContentBook = (req: Request, res: Response) => {
        console.log('Request body:', req.body);

        const [error, createContentBookDto] = CreateContentBookDto.create(req.body);

        if (error) {
            console.error('Error in CreateContentBookDto.create:', error);
            return res.status(400).json({ error });
        }

        new CreateContentBook(this.contentBookRepository)
            .execute(createContentBookDto!)
            .then(contentBook => res.json(contentBook))
            .catch(error => {
                console.error('Error creating content book:', error);
                res.status(400).json({ error: error.message || 'Unknown error' });
            });
    }

    public getAllContentBooks = (req: Request, res: Response) => {
        this.contentBookRepository.getAll()
            .then(contentBooks => res.json(contentBooks))
            .catch(error => {
                console.error('Error getting all content books:', error);
                res.status(400).json({ error: error.message || 'Unknown error' });
            });
    }

    public getContentBookById = (req: Request, res: Response) => {
        const id = req.params.id;
        this.contentBookRepository.findById(id)
            .then(contentBook => res.json(contentBook))
            .catch(error => {
                console.error('Error getting content book by ID:', error);
                res.status(400).json({ error: error.message || 'Unknown error' });
            });
    }

    public deleteContentBook = (req: Request, res: Response) => {
        const id = req.params.id;
        this.contentBookRepository.deleteById(id)
            .then(contentBook => res.json(contentBook))
            .catch(error => {
                console.error('Error deleting content book:', error);
                res.status(400).json({ error: error.message || 'Unknown error' });
            });
    }

    public updateContentBook = (req: Request, res: Response) => {
        const id = req.params.id;
        const [error, updateContentBookDto] = UpdateContentBookDto.create({ ...req.body, id });

        if (error) return res.status(400).json({ error });

        new UpdateContentBook(this.contentBookRepository)
            .execute(updateContentBookDto!)
            .then(contentBook => res.json(contentBook))
            .catch(error => res.status(400).json({ error }));
    }
}