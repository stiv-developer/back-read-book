import { CreateBookDto } from "../dtos";
import { UpdateBookDto } from "../dtos/book/update-book.dto";
import { BookEntity } from "../entities/book.entity";

export abstract class BookDatasource{
    
    abstract create(createBookDto: CreateBookDto): Promise<BookEntity>;

    abstract getAll(): Promise<BookEntity[]>;
    
    abstract findById(id: string): Promise<BookEntity>;
    abstract updateById(updateBookDto: UpdateBookDto): Promise<BookEntity>;
    abstract deleteById(id: string): Promise<BookEntity>;
    abstract findByIdWithContent(id: string): Promise<any>;
}    