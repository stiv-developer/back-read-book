import { CreateContentChapterDto, UpdateContentBookDto } from "../dtos";
import { UpdateContentChapterDto } from "../dtos/contentChapter/update-contentChapter.dto";
import { ContentChapterEntity } from "../entities/contentChapter.entity";

export abstract class ContentChapterRepository {
    abstract create(createContentChapterDto: CreateContentChapterDto): Promise<ContentChapterEntity>;

    abstract getAll(): Promise<ContentChapterEntity[]>;

    abstract findById(id: string): Promise<ContentChapterEntity>;
    abstract updateById(updateContentBookDto: UpdateContentChapterDto): Promise<ContentChapterEntity>
    abstract deleteById(id: string): Promise<ContentChapterEntity>;
}