import { BookDatasource, BookEntity, CreateBookDto, UpdateBookDto } from '../../domain';
import Book from '../../data/mongo/models/book.model';
import { Types } from 'mongoose';


export class BookDatasourceImpl implements BookDatasource {

    async create(createBookDto: CreateBookDto): Promise<BookEntity> {
        const book = await Book.create({
            title: createBookDto.title,
            author: createBookDto.author,
            image: createBookDto.img,
            star: createBookDto.star,
            contents: createBookDto.contents
        });
        return BookEntity.fromObject(book.toObject());
    }

    async getAll(): Promise<BookEntity[]> {
        const books = await Book.find();

        return books.map(book => BookEntity.fromObject(book.toObject()));
    }

    async findById(id: string): Promise<BookEntity> {
        const book = await Book.findById(id);

        if (!book) {
            throw new Error('Book not found');
        }
        return BookEntity.fromObject(book.toObject());
    }

    async updateById(updateBookDto: UpdateBookDto): Promise<BookEntity> {

        const book = await Book.findByIdAndUpdate(
            updateBookDto.id,
            {
                title: updateBookDto.title,
                author: updateBookDto.author,
                image: updateBookDto.img,
                star: updateBookDto.star,
            }, { new: true });

        if (!book) {
            throw new Error('Book not found');
        }
        return BookEntity.fromObject(book.toObject());
    }

    async deleteById(id: string): Promise<BookEntity> {
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            throw new Error('Book not found');
        }
        return BookEntity.fromObject(book.toObject());
    }

    async findByIdWithContent(id: string): Promise<BookEntity> {
        console.log('Finding book with ID:', id);
        const book = await Book.findById(id).populate({
            path: 'contents',
            populate: {
                path: 'chapters'
            }
        });

        console.log('Book with populated contents and chapters:', book);

        if (!book) {
            throw new Error('Book not found');
        }

        return BookEntity.fromObject(book.toObject());
    }

}