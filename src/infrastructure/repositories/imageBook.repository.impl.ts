import { ImageBookDatasource } from "../../domain/datasources/imageBook.datasource";
import { CreateImageBookDto } from "../../domain/dtos/imageBook/create-imageBook.dto";
import { UpdateImageBookDto } from "../../domain/dtos/imageBook/update-imageBook.dto";
import { ImageBookEntity } from "../../domain/entities/imageBook.entity";
import { ImageBookRepository } from "../../domain/repositories/imageBook.repository";


export class ImageBookRepositoryImpl implements ImageBookRepository{

    constructor(
        private readonly datasource: ImageBookDatasource
    ){}

    findById(id: any): Promise<ImageBookEntity> {
        return this.datasource.findById(id);
    }

    create(createImageBookDto: CreateImageBookDto): Promise<ImageBookEntity> {
        return this.datasource.create(createImageBookDto);
    }

    updateById(updateImageBookDto: UpdateImageBookDto): Promise<ImageBookEntity> {
        return this.datasource.update(updateImageBookDto)
    }
    
}