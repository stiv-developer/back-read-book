import { ContentChapterEntity } from "../../entities/contentChapter.entity";
import { ContentChapterRepository } from "../../repositories/contentChapter.repository";


export interface DeleteContentChapterUseCase{
    execute(id: string): Promise<ContentChapterEntity>;
}

export class DeleteContentChapter implements DeleteContentChapterUseCase{
    constructor(
        private readonly repository: ContentChapterRepository,
    ){}

    async execute(id: string): Promise<ContentChapterEntity> {
        return this.repository.deleteById(id);
    }
}