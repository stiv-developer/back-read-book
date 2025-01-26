import { UpdateContentBookDto } from '../dtos/contentBook/update-contentBook.dto';
import { ContentBookEntity } from '../entities/contentBook.entity';

export abstract class ContentBookDatasource {
    
    abstract create(contentBook: any): Promise<ContentBookEntity>;

    abstract getAll(): Promise<ContentBookEntity[]>;

    abstract findById(id: string): Promise<ContentBookEntity>;

    abstract updatedById(updateContentBookDto: UpdateContentBookDto): Promise<ContentBookEntity>;

    abstract deleteById(id: string): Promise<ContentBookEntity>;
}