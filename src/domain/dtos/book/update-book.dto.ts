
export class UpdateBookDto{
    private constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly author: string,
        public readonly img: string,
        public readonly star: number

    ){}

    getValues(){
        const returnObj: { [key: string]: any } = {};

        if (this.title) returnObj.title = this.title;
        if (this.author) returnObj.author = this.author;
        if (this.img) returnObj.img = this.img;
        if (this.star) returnObj.star = this.star;

        return returnObj;
    }

    static create(props: { [key: string]: any}): [string?, UpdateBookDto?]{
        const { id, title, author, img, star } = props;

        if (!id) {
            console.error('ID is required');
            return ['ID is required', undefined];
        }

        if (!title && !author && !img && !star) {
            console.error('At least one field is required');
            return ['At least one field is required', undefined];
        }
        return [undefined, new UpdateBookDto(id, title, author, img, star)];
    }
}

