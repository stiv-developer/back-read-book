import { ContentBookDto } from "../contentBook/contentBook.dto";

export class BookWithContentDto {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly author: string,
        public readonly img: string,
        public readonly star: number,
        public readonly contents: ContentBookDto[]
    ){}

    static fromObject(obj: any ): BookWithContentDto {
        return new BookWithContentDto(obj.id, obj.title, obj.author, obj.img, obj.star, obj.contents);
    }
}