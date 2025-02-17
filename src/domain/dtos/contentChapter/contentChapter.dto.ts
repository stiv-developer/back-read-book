

export class ContentChapterDto {
    constructor(
        public readonly id: string,
        public readonly description: string,
        public readonly position: number
    ){}

    static fromObject(obj: any ): ContentChapterDto {
        return new ContentChapterDto(obj.id, obj.description, obj.position, );
    }
}