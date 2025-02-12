import { CreateImageBookDto } from "../../dtos/imageBook/create-imageBook.dto";
import { ImageBookEntity } from "../../entities/imageBook.entity";
import { ImageBookRepository } from "../../repositories/imageBook.repository";


export interface CreateImageBookUseCase {
    execute(data: CreateImageBookDto): Promise<ImageBookEntity>;
}

export class CreateImageBook implements CreateImageBookUseCase {
    constructor(
        private readonly repository: ImageBookRepository
    ){}

    execute(dto: CreateImageBookDto): Promise<ImageBookEntity> {
        return this.repository.create(dto);
    }
}