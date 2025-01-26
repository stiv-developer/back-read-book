import { ContentChapterDatasource } from "../../domain/datasources/contentChapter.datasource";
import { UpdateContentChapterDto } from "../../domain/dtos/contentChapter/update-contentChapter.dto";
import { ContentChapterEntity } from "../../domain/entities/contentChapter.entity";
import { ContentChapterRepository } from "../../domain/repositories/contentChapter.repository";

export class ContentChapterRepositoryImpl implements ContentChapterRepository{

    constructor(
        private readonly datasource: ContentChapterDatasource
    ){}
    updateById(updateContentBookDto: UpdateContentChapterDto): Promise<ContentChapterEntity> {
        return this.datasource.updateById(updateContentBookDto);
    }

    create(contentChapter: any): Promise<ContentChapterEntity> {
        return this.datasource.create(contentChapter);
    }
    getAll(): Promise<ContentChapterEntity[]> {
        return this.datasource.getAll();
    }
    findById(id: string): Promise<ContentChapterEntity> {
        return this.datasource.findById(id);
    }
    deleteById(id: string): Promise<ContentChapterEntity> {
        return this.datasource.deleteById(id);
    }
    
}