import { ImageBookEntity } from "../../entities/imageBook.entity";
import { ImageBookRepository } from "../../repositories/imageBook.repository";


export interface GetImageBooksUseCase {
    execute(): Promise<ImageBookEntity[]>
}

export class GetImageBooks implements GetImageBooksUseCase{
    constructor(
        private readonly repository: ImageBookRepository
    ){}

    execute(): Promise<ImageBookEntity[]> {
        return this.repository.getAll();
    }
}