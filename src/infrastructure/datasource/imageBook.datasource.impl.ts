import { ImageBookDatasource } from "../../domain/datasources/imageBook.datasource";
import { CreateImageBookDto } from "../../domain/dtos/imageBook/create-imageBook.dto";
import { UpdateImageBookDto } from "../../domain/dtos/imageBook/update-imageBook.dto";
import { ImageBookEntity } from "../../domain/entities/imageBook.entity";
import ImageBook from '../../data/mongo/models/imageBook.model';
import { UpdateBookDto } from "../../domain";

export class ImageBookDatasourceImpl implements ImageBookDatasource {

    async create(createImageBook: CreateImageBookDto): Promise<ImageBookEntity> {
        const imageBook = await ImageBook.create({
            nameFile: createImageBook.nameFile,
            routeFile: createImageBook.routeFile,
            size: createImageBook.size
        });
        return ImageBookEntity.fromObject(imageBook.toObject())
    }
    async update(updateImageBookDto: UpdateImageBookDto): Promise<ImageBookEntity> {
        const imageBook = await ImageBook.findByIdAndUpdate(
            updateImageBookDto.id,
            {
                nameFile: updateImageBookDto.nameFile,
                routeFile: updateImageBookDto.routeFile,
                size: updateImageBookDto.size
            }, {new: true}
        )

        if(!imageBook){
            throw new Error('ImageBook not found');
        }

        return ImageBookEntity.fromObject(imageBook.toObject());
    }

    async findById(id: string): Promise<ImageBookEntity> {
        const imageBook = await ImageBook.findById(id);

        if(!imageBook){
            throw new Error('ImageBook not found')
        }

        return ImageBookEntity.fromObject(imageBook.toObject());
    }
    
}