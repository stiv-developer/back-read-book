import { BookDatasource, BookEntity, BookRepository, CreateBookDto, UpdateBookDto } from "../../domain";

export class BookRepositoryImpl implements BookRepository {
    constructor(
        private readonly datasource: BookDatasource
    ){}

    updateById(updateBookDto: UpdateBookDto): Promise<BookEntity> {
        return this.datasource.updateById(updateBookDto);
    }
    create(createBookDto: CreateBookDto): Promise<BookEntity> {
        return this.datasource.create(createBookDto);
    }
    getAll(): Promise<BookEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: string): Promise<BookEntity> {
        return this.datasource.findById(id);
    }

    findByTitle(title: string): Promise<BookEntity[]> {
        return this.datasource.findByTitle(title);
    }
    
    deleteById(id: string): Promise<BookEntity> {
        return this.datasource.deleteById(id);
    }

    findByIdWithContent(id: string): Promise<any> {
        return this.datasource.findByIdWithContent(id);
    }
}