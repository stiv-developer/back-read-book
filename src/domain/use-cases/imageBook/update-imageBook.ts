import { UpdateImageBookDto } from "../../dtos/imageBook/update-imageBook.dto";
import { ImageBookEntity } from "../../entities/imageBook.entity";
import { ImageBookRepository } from "../../repositories/imageBook.repository";


export interface UpdateImageBookUseCase {
    execute(dto: UpdateImageBookDto): Promise<ImageBookEntity>;
}

export class UpdateImageBook implements UpdateImageBookUseCase {

    constructor(
        private readonly repository: ImageBookRepository
    ){}

    execute(dto: UpdateImageBookDto): Promise<ImageBookEntity> {
        return this.repository.updateById(dto);
    }
    
}