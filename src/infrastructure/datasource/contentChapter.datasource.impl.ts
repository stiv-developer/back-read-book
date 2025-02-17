import contentChapterModel from "../../data/mongo/models/contentChapter.model";
import { ContentChapterDatasource } from "../../domain/datasources/contentChapter.datasource";
import { ContentChapterEntity } from "../../domain/entities/contentChapter.entity";
import  ContentChapter  from '../../data/mongo/models/contentChapter.model';
import ContentBook from "../../data/mongo/models/contentBook.model";
import { CreateContentChapterDto } from "../../domain";
export class ContentChapterDatasourceImpl implements ContentChapterDatasource {

    async create(contentChapter: CreateContentChapterDto): Promise<ContentChapterEntity> {
        
        const contentChapterDoc = await contentChapterModel.create({
            description: contentChapter.description,
            position: contentChapter.position,
            contentBookId: contentChapter.contentBookId
        });
        if(contentChapter.contentBookId){
            await ContentBook.findByIdAndUpdate(contentChapter.contentBookId, {
                $push: { chapters: contentChapterDoc._id}
            });
        }

        return ContentChapterEntity.fromObject(contentChapterDoc.toObject());
    }
    async getAll(): Promise<ContentChapterEntity[]> {
        const contentChapters = await ContentChapter.find();

        return contentChapters.map(contentChapter => ContentChapterEntity.fromObject(contentChapter.toObject()));
    }

    async findById(id: string): Promise<ContentChapterEntity> {
        const contentChapter = await ContentChapter.findById(id);

        if (!contentChapter) {
            throw new Error('ContentChapter not found');
        }
        return ContentChapterEntity.fromObject(contentChapter.toObject());
    }

    async updateById( contentChapter: any): Promise<ContentChapterEntity> {
        const contentChapterDoc = await ContentChapter.findByIdAndUpdate(
            contentChapter.id,
            {
                description: contentChapter.description,
                position: contentChapter.position
            }, { new: true });

            if(!contentChapterDoc){
                throw new Error('ContentChapter not found');
            }
            return ContentChapterEntity.fromObject(contentChapterDoc.toObject());
    }
    async deleteById(id: string): Promise<ContentChapterEntity> {
        
        const contentChapter = await ContentChapter.findByIdAndDelete(id);
        if (!contentChapter) {
            throw new Error('ContentChapter not found');
        }
        return ContentChapterEntity.fromObject(contentChapter.toObject());
    }

}