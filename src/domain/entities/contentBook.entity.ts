import { ContentChapterEntity } from "./contentChapter.entity";


export class ContentBookEntity {
    constructor(
        public id: string | undefined,
        public chapterName?: string,
        public position?: number,
        public chapters?: ContentChapterEntity[]
    ){}

    public static fromObject(object: {[key: string]:any}): ContentBookEntity {

        const { _id, chapterName, position, chapters} = object;

        if(chapterName !== undefined && typeof chapterName !== 'string'){
            throw new Error('Invalid object properties: chapterName');
        }
        if (position !== undefined && typeof position !== 'number') {
            throw new Error('Invalid object properties: position');
        }

        const chapterEntities = chapters ? chapters.map((chapter: any) => {
            if (typeof chapter === 'string') {
                return new ContentChapterEntity(chapter);
            }
            return ContentChapterEntity.fromObject(chapter);
        }) : undefined;


        return new ContentBookEntity(_id, chapterName, position, chapterEntities);
    }
}