import { BookDatasource, BookEntity, CreateBookDto, UpdateBookDto } from '../../domain';
import Book from '../../data/mongo/models/book.model';
import { Types } from 'mongoose';
import ImageBook from '../../data/mongo/models/imageBook.model';

export class BookDatasourceImpl implements BookDatasource {

    async create(createBookDto: CreateBookDto): Promise<BookEntity> {
        const book = await Book.create({
            title: createBookDto.title,
            author: createBookDto.author,
            img: createBookDto.img,
            star: createBookDto.star,
            contents: createBookDto.contents
        });
        return BookEntity.fromObject(book.toObject());
    }

    async getAll(): Promise<BookEntity[]> {
        const books = await Book.find();

        const booksWithImages = await Promise.all(
            books.map(async book => {
                let imageUrl = "http://localhost:3000/uploads/default.jpg"; // Imagen por defecto
    
                if (book.img) {
                    const imageBook = await ImageBook.findById(book.img);
                    if (imageBook) {
                        imageUrl = `http://localhost:3000/uploads/${imageBook.routeFile}`;
                    }
                }
    
                return BookEntity.fromObject({
                    ...book.toObject(),
                    img: imageUrl // Ahora pasamos la URL correcta
                });
            })
        );
    
        return booksWithImages;
    }

    async findById(id: string): Promise<BookEntity> {
        const book = await Book.findById(id);

        if (!book) {
            throw new Error('Book not found');
        }
        return BookEntity.fromObject(book.toObject());
    }

    async findByTitle(title: string): Promise<BookEntity[]> {
        const books = await Book.find({title: {$regex:title, $options: 'i'} });

        if(books.length === 0){
            throw new Error('No books found');
        }

        // return BookEntity.fromObject(book.toObject());
        return books.map(book => BookEntity.fromObject(book.toObject()));
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
            model: 'ContentBook',
            populate: {
                path: 'chapters',
                 model: 'ContentChapter'
            }
        });

        if (!book) {
            throw new Error('Book not found');
        }

        return BookEntity.fromObject(book.toObject());
    }

}