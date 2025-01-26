
export class CreateContentChapterDto{
    private constructor(
        public readonly type: string,
        public readonly description: string,
        public readonly position: number
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateContentChapterDto?] {
        console.log('Received props:', props);
        const { type, description, position } = props;

        if (!type) {
            return ['Type is required', undefined];
        }
        if (!description) {
            return ['Description is required', undefined];
        }
        if (typeof position !== 'number') {
            return ['Position must be a number', undefined];
        }

        return [undefined, new CreateContentChapterDto(type, description, position)];
    }
}