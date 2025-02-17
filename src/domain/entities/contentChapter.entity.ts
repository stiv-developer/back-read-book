
export class ContentChapterEntity{

    constructor(
        public id: string | undefined,
        public description?: string  ,
        public position?: number  
    ){}

    public static fromObject(object: {[key: string]: any}): ContentChapterEntity {
        const { _id, description, position } = object;

        if (_id && typeof _id === 'string') {
            return new ContentChapterEntity(_id);
        }


        if (description !== undefined && typeof description !== 'string') {
            throw new Error('Invalid object properties: description');
        }

        if (position !== undefined && typeof position !== 'number') {
            throw new Error('Invalid object properties: position');
        }

        return new ContentChapterEntity(_id , description,position);
    }
}