import { ContentBookEntity } from "../../entities/contentBook.entity";
import { ContentBookRepository } from "../../repositories/contentBook.repository";


export interface DeleteContentBookUseCase{
    execute(id: string): Promise<ContentBookEntity>;
}

export class DeleteContentBook implements DeleteContentBookUseCase{
    constructor(
        private readonly repository: ContentBookRepository,
    ){}

    async execute(id: string): Promise<ContentBookEntity> {
        return this.repository.deleteById(id);
    }
}