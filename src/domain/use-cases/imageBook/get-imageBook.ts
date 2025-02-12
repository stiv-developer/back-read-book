import { ImageBookEntity } from "../../entities/imageBook.entity";
import { ImageBookRepository } from "../../repositories/imageBook.repository";

export interface GetImageBookUseCase {
    execute(id: string): Promise<ImageBookEntity>;
}

export class GetImageBook implements GetImageBookUseCase{

    constructor(
        private readonly repository: ImageBookRepository
    ){}

    execute(id: string): Promise<ImageBookEntity> {
        return this.repository.findById(id);
    }

}