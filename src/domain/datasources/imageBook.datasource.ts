import { CreateImageBookDto } from "../dtos/imageBook/create-imageBook.dto";
import { UpdateImageBookDto } from "../dtos/imageBook/update-imageBook.dto";
import { ImageBookEntity } from "../entities/imageBook.entity";


export abstract class ImageBookDatasource{

    abstract create(createImageBook: CreateImageBookDto): Promise<ImageBookEntity>;
    abstract update(updateImageBook: UpdateImageBookDto): Promise<ImageBookEntity>;
    abstract findById(id: string): Promise<ImageBookEntity>;
}