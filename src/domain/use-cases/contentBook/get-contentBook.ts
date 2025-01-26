import { ContentBookEntity } from "../../entities/contentBook.entity";
import { ContentBookRepository } from "../../repositories/contentBook.repository";


export interface GetContentBookUseCase {
    execute(id: string): Promise<ContentBookEntity>;
}

export class GetContentBook implements GetContentBookUseCase {
    constructor(
        private readonly repository: ContentBookRepository,
    ) { }

    execute(id: string): Promise<ContentBookEntity> {
        return this.repository.findById(id);
    }
}