
export class CreateContentChapterDto{
    private constructor(
        public readonly description: string,
        public readonly position: number,
        public readonly contentBookId: string
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateContentChapterDto?] {
        console.log('Received props:', props);
        const { description, position, contentBookId} = props;
        
        if (!description) {
            return ['Description is required', undefined];
        }
        if (typeof position !== 'number') {
            return ['Position must be a number', undefined];
        }

        if (contentBookId && typeof contentBookId !== 'string') {
            return ['Invalid contentBookId', undefined]; // ✅ Validar que bookId sea string si se proporciona
        }

        return [undefined, new CreateContentChapterDto( description, position, contentBookId)];
    }
}