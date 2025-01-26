import { CreateContentChapterDto } from "../dtos";
import { UpdateContentChapterDto } from "../dtos/contentChapter/update-contentChapter.dto";
import { ContentChapterEntity } from "../entities/contentChapter.entity";

export abstract class ContentChapterDatasource {
    abstract getAll(): Promise<ContentChapterEntity[]>;
    abstract findById(id: string): Promise<ContentChapterEntity>;
    
    
    abstract create(createContentChapterDto: CreateContentChapterDto): Promise<ContentChapterEntity>;
    abstract updateById(updateContentChapterDto: UpdateContentChapterDto): Promise<ContentChapterEntity>;
    abstract deleteById(id: string): Promise<ContentChapterEntity>;

}