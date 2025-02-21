

export class TranslationEntity {
    
    constructor(
        public id: string | undefined,
        public word: string,
        public translations: { [key: string]: { words: string[]; audio?: string } },
        public audio?: string,
    ){}

    public static fromObject(object:{[key: string]:any}): TranslationEntity{

        const { _id, id = _id?.toString(), word,audio, translations } = object;

        if (!word || typeof word !== 'string') {
            throw new Error('Invalid object properties: word'); // ✅ Corrected message
        }
        if (!translations || typeof translations !== 'object' || Array.isArray(translations)) {
            throw new Error('Invalid object properties: translations');
        }

        // Ensure translations values are properly formatted
        const formattedTranslations: { [key: string]: { words: string[]; audio?: string } } = {};

        for (const [lang, value] of Object.entries(translations)) {
            if (!value || typeof value !== 'object' || !Array.isArray((value as { words: string[] }).words)) {
                throw new Error(`Invalid object properties for language: ${lang}`);
            }
            formattedTranslations[lang] = {
                words: (value as { words: string[] }).words,
                audio: (value as { words: string[]; audio?: string }).audio ?? undefined,
            };
        }

        return new TranslationEntity(id, word,formattedTranslations ,audio ?? undefined); // ✅ Use formattedTranslations
    }
}