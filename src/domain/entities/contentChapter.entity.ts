
export class ContentChapterEntity{

    constructor(
        public id: string | undefined,
        public type?: string ,
        public description?: string  ,
        public position?: number  
    ){}

    public static fromObject(object: {[key: string]: any}): ContentChapterEntity {
        const { _id, type, description, position } = object;

        if (_id && typeof _id === 'string') {
            return new ContentChapterEntity(_id);
        }

        if (type !== undefined && typeof type !== 'string') {
            throw new Error('Invalid object properties: type');
        }

        if (description !== undefined && typeof description !== 'string') {
            throw new Error('Invalid object properties: description');
        }

        if (position !== undefined && typeof position !== 'number') {
            throw new Error('Invalid object properties: position');
        }

        return new ContentChapterEntity(_id , type, description,position);
    }
}