import { ContentBookEntity } from "./contentBook.entity";

export class BookEntity{

    constructor(
        public id: string | undefined,
        public title: string,
        public author: string,
        public image: string,
        public star: number,
        public contents?: ContentBookEntity[]
    ){}

    public static fromObject(object:{[key: string]:any}): BookEntity{

        const { id, title, author, image, star, contents } = object;

        if (!title || typeof title !== 'string') {
            throw new Error('Invalid object properties: title');
        }
        if (!author || typeof author !== 'string') {
            throw new Error('Invalid object properties: author');
        }
        if (!image || typeof image !== 'string') {
            throw new Error('Invalid object properties: image');
        }
        if (typeof star !== 'number' || star < 0 || star > 5) {
            throw new Error('Invalid object properties: star');
        }

        const contentEntities = contents ? contents.map((content: any) => ContentBookEntity.fromObject(content)) : undefined;

        return new BookEntity(id, title, author, image, star, contentEntities);
    }
}