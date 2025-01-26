import { CreateContentBookDto, UpdateContentBookDto } from "../dtos";
import { ContentBookEntity } from "../entities/contentBook.entity";

export abstract class ContentBookRepository {
    abstract create(contentBookDto: CreateContentBookDto): Promise<ContentBookEntity>;

    abstract getAll(): Promise<ContentBookEntity[]>;

    abstract findById(id: string): Promise<ContentBookEntity>;
    abstract updateById(updateContentBookDto: UpdateContentBookDto): Promise<ContentBookEntity>;
    abstract deleteById(id: string): Promise<ContentBookEntity>;
}