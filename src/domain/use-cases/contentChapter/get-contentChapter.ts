import { ContentChapterEntity } from "../../entities/contentChapter.entity";
import { ContentChapterRepository } from "../../repositories/contentChapter.repository";


export interface GetContentChapterUseCase {
    execute(id: string): Promise<ContentChapterEntity>;
}

export class GetContentChapter implements GetContentChapterUseCase {
    constructor(
        private readonly repository: ContentChapterRepository,
    ) { }

    execute(id: string): Promise<ContentChapterEntity> {
        return this.repository.findById(id);
    }
}