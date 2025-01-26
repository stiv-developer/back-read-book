import { BookEntity } from "../../entities/book.entity";
import { BookRepository } from "../../repositories/book.repository";


export interface GetBooksUseCase {
    execute(): Promise<BookEntity[]>;
}

export class GetBooks implements GetBooksUseCase {
    constructor(
        private readonly repository: BookRepository,
    ) { }

    execute(): Promise<BookEntity[]> {
        return this.repository.getAll();
    }
}