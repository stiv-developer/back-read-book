import { ImageBookEntity } from "../../entities/imageBook.entity";
import { ImageBookRepository } from "../../repositories/imageBook.repository";


export interface DeleteImageBookUseCase{
    execute(id: string): Promise<ImageBookEntity>;
}

export class DeleteImageBook implements DeleteImageBookUseCase{

    constructor(
        private readonly repository: ImageBookRepository
    ){}

    async execute(id: string): Promise<ImageBookEntity> {
        return this.repository.deleteById(id);
    }
    
}