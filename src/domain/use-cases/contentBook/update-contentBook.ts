import { UpdateContentBookDto } from "../../dtos";
import { ContentBookEntity } from "../../entities/contentBook.entity";
import { ContentBookRepository } from "../../repositories/contentBook.repository";


export interface UpdateContentBookUseCase {
    execute(dto:UpdateContentBookDto): Promise<ContentBookEntity>;
}

export class UpdateContentBook implements UpdateContentBookUseCase {
    constructor(
        private readonly repository: ContentBookRepository,
    ) { }

    execute(dto: UpdateContentBookDto): Promise<ContentBookEntity> {
        return this.repository.updateById(dto);
    }
}