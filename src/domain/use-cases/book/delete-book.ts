import { BookEntity } from "../../entities/book.entity";
import { BookRepository } from "../../repositories/book.repository";

export interface DeleteBookUseCase{
    execute(id: string): Promise<BookEntity>;
}

export class DeleteBook implements DeleteBookUseCase{
    constructor(
        private readonly repository: BookRepository,
    ){}

    async execute(id: string): Promise<BookEntity> {
        return this.repository.deleteById(id);
    }
}