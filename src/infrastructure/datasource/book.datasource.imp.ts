import { BookDatasource, BookEntity, CreateBookDto, UpdateBookDto } from '../../domain';
import Book from '../../data/mongo/models/book.model';
import ImageBook from '../../data/mongo/models/imageBook.model';

export class BookDatasourceImpl implements BookDatasource {

    async create(createBookDto: CreateBookDto): Promise<BookEntity> {

        const book = await Book.create({
            title: createBookDto.title,
            author: createBookDto.author,
            img: createBookDto.img, // Guardar la URL de la imagen subida
            star: createBookDto.star,
            contents: createBookDto.contents
        });

        return BookEntity.fromObject(book.toObject());
    }

    async getAll(): Promise<BookEntity[]> {
        const books = await Book.find();
        
        return books.map(books => BookEntity.fromObject(books.toObject()));
    }

    async findById(id: string): Promise<BookEntity> {
        const book = await Book.findById(id);

        if (!book) {
            throw new Error('Book not found');
        }
        return BookEntity.fromObject(book.toObject());
    }

    async findByTitle(title: string): Promise<BookEntity[]> {
        const books = await Book.find({ title: { $regex: title, $options: 'i' } });

        if (books.length === 0) {
            throw new Error('No books found');
        }

        // return BookEntity.fromObject(book.toObject());
        return books.map(book => BookEntity.fromObject(book.toObject()));
    }

    async updateById(updateBookDto: UpdateBookDto): Promise<BookEntity> {
        const bookDoc = await Book.findByIdAndUpdate(
            updateBookDto.id,
            {
                title: updateBookDto.title,
                author: updateBookDto.author,
                img: updateBookDto.img,
                star: updateBookDto.star
            }, {new: true });

            if(!bookDoc) {
                throw new Error('Book not found');
            }

        return BookEntity.fromObject(bookDoc.toObject());
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