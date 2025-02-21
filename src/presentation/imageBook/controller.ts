import { CreateImageBookDto } from "../../domain/dtos/imageBook/create-imageBook.dto";
import { ImageBookRepository } from "../../domain/repositories/imageBook.repository";
import { Request, Response } from 'express';
import { CreateImageBook } from "../../domain/use-cases/imageBook/create-imageBook";
import { UpdateImageBookDto } from "../../domain/dtos/imageBook/update-imageBook.dto";
import { UpdateImageBook } from "../../domain/use-cases/imageBook/update-imageBook";

export class ImageBookController {

    constructor(
        private readonly imageBookRepository: ImageBookRepository
    ) { }

    public getAllImageBooks = (req: Request , res:Response) => {
        this.imageBookRepository.getAll()
        .then(imageBooks => res.json(imageBooks))
        .catch(error => {
            console.error('Error getting all image books:', error); // Agrega este log
                if (error instanceof Error) {
                    res.status(400).json({ error: error.message });
                } else {
                    res.status(400).json({ error: 'Unknown error' });
                }
        })
    }

    public createImageBook = (req: Request, res: Response) => {

        if (!req.file) {
            return res.status(400).json({ error: "No image uploaded" });
        }
    
        console.log('Uploaded file:', req.file);
    
        const [error, createImageBookDto] = CreateImageBookDto.create({
            nameFile: req.file.originalname,
            routeFile: req.file.filename,
            size: req.file.size
        });
    
        if (error) {
            return res.status(400).json({ error });
        }
    
        new CreateImageBook(this.imageBookRepository)
            .execute(createImageBookDto!)
            .then(imageBook => res.json(imageBook))
            .catch(error => res.status(400).json({ error: error.message || 'Unknown error' }));
    }

    public updateImageBook = (req: Request, res: Response) => {
        const id = req.params.id;

        const [error, updateImageBookDto] = UpdateImageBookDto.create({ ...req.body, id });

        if (error) return res.status(400).json({ error });

        new UpdateImageBook(this.imageBookRepository)
            .execute(updateImageBookDto!)
            .then(imageBook => res.json(imageBook))
            .catch(error => res.status(400).json({ error }));
    }

    public getImageBookById = (req: Request, res: Response) => {
        const id = req.params.id;

        this.imageBookRepository.findById(id)
            .then(imageBook => res.json(imageBook))
            .catch(error => {
                console.log('Error getting image book by ID: ', error);
                res.status(400).json({ error: error.message || 'Unknown error' });
            });
    }

    public deleteById = (req: Request, res: Response) => {
        const id = req.params.id;

        this.imageBookRepository.deleteById(id)
            .then(imageBook => res.json(imageBook))
            .catch( error =>{
                console.error('Error deleting imageBook:', error); // Agrega este log
                res.status(400).json({ error: error.message || 'Unknown error' });
            })
    }
}