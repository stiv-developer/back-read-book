import { BookRepository, CreateBook } from "../../domain";
import { CreateBookDto, UpdateBookDto } from '../../domain/dtos';
import { Request, Response } from 'express';
import { UpdateBook } from "../../domain/use-cases/book/update-book";
import { BookEntity } from "../../domain/entities/book.entity";

export class BooksController {

    constructor(
       private readonly bookRepository: BookRepository
    ) { }

    public createBook = (req: Request, res: Response) => {
        console.log('Request body:', req.body); // Agrega este log
        
        const [error, createBookDto] = CreateBookDto.create(req.body);
        
        if (error) {
            console.error('Error in CreateBookDto.create:', error); // Agrega este log
            return res.status(400).json({ error });
        }

        new CreateBook(this.bookRepository)
            .execute(createBookDto!)
            .then(book => res.json(book))
            .catch(error => {
                console.error('Error creating book:', error); // Agrega este log
                if (error instanceof Error) {
                    res.status(400).json({ error: error.message });
                } else {
                    res.status(400).json({ error: 'Unknown error' });
                }
            });
    }

    public updateBook = (req: Request, res: Response) => {
    
        const id = req.params.id;
        console.log('id',id)
        const [error, updateBookDto] = UpdateBookDto.create({ ...req.body, id });
        
        if (error) return res.status(400).json({ error });

        new UpdateBook(this.bookRepository)
            .execute(updateBookDto!)
            .then(book => res.json(book))
            .catch(error => res.status(400).json({ error }));
    }

    public getAllBooks = (req: Request, res: Response) => {
        this.bookRepository.getAll()
            .then(books => res.json(books))
            .catch(error => {
                console.error('Error getting all books:', error); // Agrega este log
                if (error instanceof Error) {
                    res.status(400).json({ error: error.message });
                } else {
                    res.status(400).json({ error: 'Unknown error' });
                }
            });
    }

    public getBookById = (req: Request, res: Response) => {
        const id = req.params.id;
        this.bookRepository.findById(id)
            .then(book => res.json(book))
            .catch(error => {
                console.error('Error getting book by ID:', error); // Agrega este log
                if (error instanceof Error) {
                    res.status(400).json({ error: error.message });
                } else {
                    res.status(400).json({ error: 'Unknown error' });
                }
            });
    }

    public deleteBook = (req: Request, res: Response) => {
        const id = req.params.id;
        this.bookRepository.deleteById(id)
            .then(book => res.json(book))
            .catch(error => {
                console.error('Error deleting book:', error); // Agrega este log
                res.status(400).json({ error: error.message || 'Unknown error' });
            });
    }

    // public getBookWithContentById = async (req: Request, res: Response) => {
    //     try {
    //         const book = await this.bookRepository.findByIdWithContent(req.params.id);
    //         const bookEntity = BookEntity.fromObject(book);
    //         res.json(bookEntity);
    //     } catch (error) {
    //         if (error instanceof Error) {
    //             res.status(404).json({ error: error.message });
    //         } else {
    //             res.status(404).json({ error: 'Unknown error' });
    //         }
    //     }
    // }

    public getBookWithContentById = (req: Request, res: Response) => {
        const id = req.params.id;
    
        this.bookRepository.findByIdWithContent(id) // Suponiendo que `findByIdWithContent` es un método que maneja el populate
            .then(book => res.json(book))
            .catch(error => {
                console.error('Error getting book with content by ID:', error); // Log de error
                if (error instanceof Error) {
                    res.status(400).json({ error: error.message });
                } else {
                    res.status(400).json({ error: 'Unknown error' });
                }
            });
    };

}