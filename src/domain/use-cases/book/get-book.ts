import { BookEntity } from "../../entities/book.entity";
import { BookRepository } from "../../repositories/book.repository";

export interface GetBookUseCase {
    execute(id: string): Promise<BookEntity>;
}

export class GetBook implements GetBookUseCase {
    constructor(
        private readonly repository: BookRepository,
    ) { }

    execute(id: string): Promise<BookEntity> {
        return this.repository.findById(id);
    }
}