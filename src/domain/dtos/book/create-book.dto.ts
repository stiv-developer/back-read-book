export class CreateBookDto {

    private constructor(
        public readonly title: string,
        public readonly author: string,
        public readonly img: string,
        public readonly star: number,
        public readonly contents: string[]
    ) { }

    static create(props: { [key: string]: any }): [string?, CreateBookDto?] {
        console.log('Received props:', props); // Agrega este log
        const { title, author, img, star, contents } = props;

        if (!title) {
            console.error('Title is required');
            return ['Title is required', undefined];
        }
        if (!author) {
            console.error('Author is required');
            return ['Author is required', undefined];
        }
        if (!img || (typeof img !== 'string' && typeof img !== 'object')) {
            throw new Error('Invalid object properties: img');
        }
        if (typeof star !== 'number' || star < 0 || star > 5) {
            console.error('Star rating must be a number between 0 and 5');
            return ['Star rating must be a number between 0 and 5', undefined];
        }

        if(!Array.isArray(contents)){
            return ['Invalid contents', undefined];
        }

        return [undefined, new CreateBookDto(title, author, img, star, contents)];
    }
}