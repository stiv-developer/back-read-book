import { CreateBookDto } from "../../dtos";
import { BookEntity } from "../../entities/book.entity";
import { BookRepository } from "../../repositories/book.repository";

export interface CreateBookUseCase {
    execute(data: CreateBookDto): Promise<BookEntity>;
}

export class CreateBook implements CreateBookUseCase {
    constructor(
        private readonly repository: BookRepository,
    ) {
    }

    execute(dto: CreateBookDto): Promise<BookEntity> {
        return this.repository.create(dto);
    }
}