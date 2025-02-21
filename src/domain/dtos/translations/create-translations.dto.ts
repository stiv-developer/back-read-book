

export class CreateTranslationsDto {
    private constructor(
        public readonly word: string,
        public readonly translations: {
            [key: string]: { words: string[]; audio?: string };
        },
        public readonly audio?: string,
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateTranslationsDto?] {
        console.log('Received props:', props);
        const { word, audio, translations } = props;

        if (!word) {
            console.error('Word is required');
            return ['Word is required', undefined];
        }

        if (!translations || typeof translations !== 'object' || Array.isArray(translations)) {
            console.error('Translations is required and must be an object');
            return ['Translations is required and must be an object', undefined]; // ✅ Fixed message
        }

        for (const lang in translations) {
            if (!translations[lang].words || !Array.isArray(translations[lang].words)) {
                console.error(`Invalid object properties for language: ${lang}`);
                return [`Invalid object properties for language: ${lang}`, undefined];    
            }
        }

        return [undefined, new CreateTranslationsDto(word, translations, audio)];
    }
}