import { ContentBookEntity } from "../../entities/contentBook.entity";
import { ContentBookRepository } from "../../repositories/contentBook.repository";


export interface GetContentBooksUseCase {
    execute(): Promise<ContentBookEntity[]>;
}

export class GetContentBooks implements GetContentBooksUseCase {
    constructor(
        private readonly repository: ContentBookRepository,
    ) { }

    execute(): Promise<ContentBookEntity[]> {
        return this.repository.getAll();
    }
}