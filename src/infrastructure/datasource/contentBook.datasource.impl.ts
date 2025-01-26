import ContentBook from "../../data/mongo/models/contentBook.model";
import { CreateContentBookDto, UpdateContentBookDto } from "../../domain";
import { ContentBookDatasource } from "../../domain/datasources/contentBook.datasource";
import { ContentBookEntity } from "../../domain/entities/contentBook.entity";


export class ContentBookDatasourceImpl implements ContentBookDatasource {

    async create(contentBookDto: CreateContentBookDto): Promise<ContentBookEntity> {
        const contentBookDoc = await ContentBook.create({
            chapterName: contentBookDto.chapterName,
            position: contentBookDto.position,
            chapters: contentBookDto.chapters
        });
        return ContentBookEntity.fromObject(contentBookDoc.toObject());
    }
    
    async getAll(): Promise<ContentBookEntity[]> {
        const contentBooks = await ContentBook.find();
        return contentBooks.map(contentBook => ContentBookEntity.fromObject(contentBook.toObject()));
    }

    async findById(id: string): Promise<ContentBookEntity> {
        const contentBook = await ContentBook.findById(id);

        if (!contentBook) {
            throw new Error('ContentBook not found');
        }
        return ContentBookEntity.fromObject(contentBook.toObject());
    }

    async updatedById( updateContentBook: UpdateContentBookDto): Promise<ContentBookEntity> {
        const contentBookDoc = await ContentBook.findByIdAndUpdate(
            updateContentBook.id,
            {
                chapterName: updateContentBook.chapterName,
                position: updateContentBook.position,
                contentChapters: updateContentBook.contentChapters
            }, { new: true });

        if (!contentBookDoc) {
            throw new Error('ContentBook not found');
        }
        return ContentBookEntity.fromObject(contentBookDoc.toObject());
    }

    async deleteById(id: string): Promise<ContentBookEntity> {
        const contentBook = await ContentBook.findByIdAndDelete(id);

        if (!contentBook) {
            throw new Error('ContentBook not found');
        }
        return ContentBookEntity.fromObject(contentBook.toObject());
    }

}