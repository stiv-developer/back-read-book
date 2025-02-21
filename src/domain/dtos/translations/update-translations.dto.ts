

export class UpdateTranslationsDto {
    private constructor(
        public readonly id: string,
        public readonly word: string,
        public readonly translations: {
            [key: string]: { words: string[]; audio?: string };
        },
        public readonly audio?: string,
    ){}

    getValues(){
        const returnObj: { [key: string]: any } = {};

        if(this.word) returnObj.word = this.word;
        if(this.translations) returnObj.translations = this.translations;
        if(this.audio) returnObj.audio = this.audio;

        return returnObj
    }

    static create(props: { [key: string]: any }): [string?, UpdateTranslationsDto?] {
        console.log('Received props:', props);
        const {id, word, translations, audio} = props;

        if(!id){
            console.error('Id is required');
            return ['Id is required', undefined];
        }
        if (!word) {
            console.error('Word is required');
            return ['Word is required', undefined];
        }

        if (translations !== undefined) {
            if (typeof translations !== 'object' || Array.isArray(translations)) {
                console.error('Translations must be an object with language keys');
                return ['Translations must be an object with language keys', undefined];
            }

            for (const lang in translations) {
                if (!translations[lang].words || !Array.isArray(translations[lang].words)) {
                    console.error(`Translations for "${lang}" must contain an array of words`);
                    return [`Translations for "${lang}" must contain an array of words`, undefined];
                }
            }
        }

        return [undefined, new UpdateTranslationsDto(id, word, translations, audio)];
    }
}