
export class UpdateContentBookDto{
    private constructor(
        public readonly id: string,
        public readonly chapterName: string,
        public readonly position: string,
        public readonly contentChapters: string[] = []

    ){}

    getValues(){
        const returnObj: { [key: string]: any } = {};

        if (this.chapterName) returnObj.chapterName = this.chapterName;
        if (this.position) returnObj.position = this.position;
        if (this.contentChapters) returnObj.contentChapters = this.contentChapters;

        return returnObj;
    }

    static create(props: { [key: string]: any}): [string?, UpdateContentBookDto?]{
        const { id, chapterName, position ,contentChapters = []} = props;

        if (!id) {
            console.error('ID is required');
            return ['ID is required', undefined];
        }

        if (!chapterName && !position ) {
            console.error('At least one field is required');
            return ['At least one field is required', undefined];
        }
        return [undefined, new UpdateContentBookDto(id, chapterName, position,contentChapters)];
    }
}