import { CreateContentBookDto } from "../../dtos";
import { ContentBookEntity } from "../../entities/contentBook.entity";
import { ContentBookRepository } from "../../repositories/contentBook.repository";


export interface CreateContentBookUseCase {
    execute(data: CreateContentBookDto): Promise<ContentBookEntity>;
}

export class CreateContentBook implements CreateContentBookUseCase {
    constructor(
        private readonly repository: ContentBookRepository,
    ){}

    execute(dto: CreateContentBookDto): Promise<ContentBookEntity>{
        return this.repository.create(dto);
    }
}