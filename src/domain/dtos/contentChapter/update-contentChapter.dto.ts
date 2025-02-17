
export class UpdateContentChapterDto{

    private constructor(
        public readonly id: string,
        public readonly description: string,
        public readonly position: number
    ){}

    getValues(){
        const returnObj: { [key: string]: any } = {};

        if (this.description) returnObj.description = this.description;
        if (this.position) returnObj.position = this.position;

        return returnObj;
    }

    static create(props: { [key: string]: any}): [string?, UpdateContentChapterDto?]{
        const { id, type, description, position } = props;

        if (!id) {
            console.error('ID is required');
            return ['ID is required', undefined];
        }
        return [undefined, new UpdateContentChapterDto(id, description, position)];
    }
}