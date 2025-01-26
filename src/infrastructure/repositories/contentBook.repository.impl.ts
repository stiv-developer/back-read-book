import { CreateContentBookDto, UpdateContentBookDto } from "../../domain";
import { ContentBookDatasource } from "../../domain/datasources/contentBook.datasource";
import { ContentBookEntity } from "../../domain/entities/contentBook.entity";
import { ContentBookRepository } from "../../domain/repositories/contentBook.repository";


export class ContentBookRepositoryImpl implements ContentBookRepository{

    constructor(
        private readonly datasource: ContentBookDatasource
    ){}
    updateById(updateContentBookDto: UpdateContentBookDto): Promise<ContentBookEntity> {
        return this.datasource.updatedById(updateContentBookDto);
    }

    create(createContentBookDto: CreateContentBookDto): Promise<ContentBookEntity> {
        return this.datasource.create(createContentBookDto);
    }
    getAll(): Promise<ContentBookEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: string): Promise<ContentBookEntity> {
        return this.datasource.findById(id);
    }
    deleteById(id: string): Promise<ContentBookEntity> {
        return this.datasource.deleteById(id);
    }
    
}