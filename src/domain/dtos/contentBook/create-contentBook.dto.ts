import { CreateContentChapterDto } from "../contentChapter/create-contentChapter.dto";

export class CreateContentBookDto {

    private constructor(
        public readonly chapterName: string,
        public readonly position: number,
        public readonly chapters: string[],
        public readonly bookId?: string
    ){}

    static create(props: { [key: string]: any}): [string?, CreateContentBookDto?]{

        const {chapterName, position , chapters, bookId } = props;

        if (!chapterName) {
            console.error('Chapter name is required');
            return ['Chapter name is required', undefined];
        }
        if (typeof position !== 'number') {
            console.error('Position must be a number');
            return ['Position must be a number', undefined];
        }
        if (!Array.isArray(chapters)) {
            return ['Invalid chapters', undefined];
        }

        if (bookId && typeof bookId !== 'string') {
            return ['Invalid bookId', undefined]; // ✅ Validar que bookId sea string si se proporciona
        }

        return [undefined, new CreateContentBookDto(chapterName, position, chapters, bookId)]
    }
}