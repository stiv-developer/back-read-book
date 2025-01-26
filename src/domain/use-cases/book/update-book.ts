import { BookEntity } from "../../entities/book.entity";
import { BookRepository } from "../../repositories/book.repository";
import { UpdateBookDto } from "../../dtos";


export interface UpdateBookUseCase {
    execute(dto:UpdateBookDto): Promise<BookEntity>;
}

export class UpdateBook implements UpdateBookUseCase {
    constructor(
        private readonly repository: BookRepository,
    ) { }

    execute(dto: UpdateBookDto): Promise<BookEntity> {
        return this.repository.updateById(dto);
    }
}