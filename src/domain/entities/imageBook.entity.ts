

export class ImageBookEntity{

    constructor(
        public id: string | undefined,
        public nameFile: string,
        public routeFile: string,
        public size: number,
        public createDate?: Date
    ){}

    public static fromObject(object:{[key: string]:any}): ImageBookEntity{

        const { _id, id = _id?.toString(), nameFile, routeFile, size, createDate } = object;

        if(!nameFile || typeof nameFile !=='string'){
            throw new Error('Invalid object properties: nameFile');
        }

        if (!routeFile || typeof routeFile !== 'string') {
            throw new Error('Invalid object properties: routeFile');
        }
        if (typeof size !== 'number') {
            throw new Error('Invalid object properties: size');
        }
        
        let parsedCreateDate: Date | undefined;
        if (createDate) {
            parsedCreateDate = createDate instanceof Date ? createDate : new Date(createDate);
            if (isNaN(parsedCreateDate.getTime())) {
                throw new Error('Invalid date format for createDate');
            }
        }
        
        return new ImageBookEntity(id, nameFile,  `http://localhost:3000/uploads/${routeFile}`, size, parsedCreateDate);
    }
}