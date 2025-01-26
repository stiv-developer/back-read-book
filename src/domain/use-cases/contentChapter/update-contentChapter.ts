import { UpdateContentChapterDto } from "../../dtos/contentChapter/update-contentChapter.dto";
import { ContentChapterEntity } from "../../entities/contentChapter.entity";
import { ContentChapterRepository } from "../../repositories/contentChapter.repository";


export interface UpdateContentChapterUseCase {
    execute(dto: UpdateContentChapterDto): Promise<ContentChapterEntity>;
}

export class UpdateContentChapter implements UpdateContentChapterUseCase {
    constructor(
        private readonly repository: ContentChapterRepository,
    ) { }

    execute(dto: UpdateContentChapterDto): Promise<ContentChapterEntity> {
        return this.repository.updateById(dto);
    }
}

