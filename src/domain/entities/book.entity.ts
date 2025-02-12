import { ContentBookEntity } from "./contentBook.entity";

export class BookEntity{

    constructor(
        public id: string | undefined,
        public title: string,
        public author: string,
        public img: string,
        public star: number,
        public contents?: ContentBookEntity[]
    ){}

    public static fromObject(object:{[key: string]:any}): BookEntity{

        const { _id, id = _id?.toString(), title, author, img, star, contents } = object;

        if (!title || typeof title !== 'string') {
            throw new Error('Invalid object properties: title');
        }
        if (!author || typeof author !== 'string') {
            throw new Error('Invalid object properties: author');
        }
        if (typeof star !== 'number' || star < 0 || star > 5) {
            throw new Error('Invalid object properties: star');
        }

        if (!img || (typeof img !== 'string' && typeof img !== 'object')) {
            throw new Error('Invalid object properties: img');
        }

        const contentEntities = contents ? contents.map((content: any) => ContentBookEntity.fromObject(content)) : undefined;

        return new BookEntity(id, title, author, img, star, contentEntities);
    }
}