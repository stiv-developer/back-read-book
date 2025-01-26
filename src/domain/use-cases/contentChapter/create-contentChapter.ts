import { CreateContentChapterDto } from "../../dtos";
import { ContentChapterEntity } from "../../entities/contentChapter.entity";
import { ContentChapterRepository } from "../../repositories/contentChapter.repository";


export interface CreateContentChapterUseCase {
    execute(data: CreateContentChapterDto): Promise<ContentChapterEntity>;
}

export class CreateContentChapter implements CreateContentChapterUseCase {
    constructor(
        private readonly repository: ContentChapterRepository,
    ) {
    }

    execute(dto: CreateContentChapterDto): Promise<ContentChapterEntity> {
        return this.repository.create(dto);
    }
}