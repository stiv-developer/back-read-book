import { ContentChapterDto } from "../contentChapter/contentChapter.dto";

export class ContentBookDto {
    constructor(
        public readonly id: string,
        public readonly chapterName: string,
        public readonly position: string,
        public readonly bookId: string
    ){}

    static fromObject(obj: any ): ContentBookDto {
        return new ContentBookDto(obj.id, obj.chapterName, obj.position, obj.bookId);
    }
}