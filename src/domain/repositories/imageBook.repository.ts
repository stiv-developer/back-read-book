import { CreateImageBookDto } from "../dtos/imageBook/create-imageBook.dto";
import { UpdateImageBookDto } from "../dtos/imageBook/update-imageBook.dto";
import { ImageBookEntity } from "../entities/imageBook.entity";


export abstract class ImageBookRepository {

    abstract getAll(): Promise<ImageBookEntity[]>;

    abstract findById(id:any): Promise<ImageBookEntity>;

    abstract create(createImageBookDto:CreateImageBookDto): Promise<ImageBookEntity>;
    abstract updateById(updateImageBookDto:UpdateImageBookDto): Promise<ImageBookEntity>;
    abstract deleteById(id: string): Promise<ImageBookEntity>;
}