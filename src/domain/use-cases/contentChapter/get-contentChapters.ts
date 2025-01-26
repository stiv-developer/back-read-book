import { ContentChapterEntity } from "../../entities/contentChapter.entity";
import { ContentChapterRepository } from "../../repositories/contentChapter.repository";


export interface GetContentChaptersUseCase {    
    execute(): Promise<ContentChapterEntity[]>;
}

export class GetContentChaptersUseCase implements GetContentChaptersUseCase {
    constructor(
        private readonly repository: ContentChapterRepository,
    ) { }

    execute(): Promise<ContentChapterEntity[]> {
        return this.repository.getAll();
    }
}