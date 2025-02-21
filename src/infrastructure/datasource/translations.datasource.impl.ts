import { TranslationDatasource } from "../../domain/datasources/translation.datasource";
import { CreateTranslationsDto } from "../../domain/dtos/translations/create-translations.dto";
import { UpdateTranslationsDto } from "../../domain/dtos/translations/update-translations.dto";
import { TranslationEntity } from "../../domain/entities/translations.entity";
import Translation from '../../data/mongo/models/translations.model';


export class TranslationDatasourceImpl implements TranslationDatasource {

    async create(createTranslationDto: CreateTranslationsDto): Promise<TranslationEntity> {
        console.log("Saving translation:", createTranslationDto);
        const translation = await Translation.create({
            word: createTranslationDto.word,
            translations: createTranslationDto.translations,
            audio: createTranslationDto.audio
        });

        console.log("Saved translation:", translation);

        return TranslationEntity.fromObject(translation.toObject());
    }
    async delete(id: string): Promise<TranslationEntity> {
        const translation = await Translation.findByIdAndDelete(id);
        if (!translation) {
            throw new Error("Translation not found");
        }

        return TranslationEntity.fromObject(translation.toObject());
    }
    async update(updateTranslationDto: UpdateTranslationsDto): Promise<TranslationEntity> {
        const translation = await Translation.findByIdAndUpdate(
            updateTranslationDto.id,
            {
                word: updateTranslationDto.word,
                audio: updateTranslationDto.audio,
                translations: updateTranslationDto.translations
            }, { new: true }
        );

        if(!translation){
            throw new Error('Translation not found');
        }

        return TranslationEntity.fromObject(translation.toObject());
    }
    async getAll(): Promise<TranslationEntity[]> {
        const translations = await Translation.find();

        return translations.map(translation => TranslationEntity.fromObject(translation.toObject()));
    }
    async findById(id: string): Promise<TranslationEntity> {
        const translation = await Translation.findById(id);

        if (!translation) {
            throw new Error('Translation not found')
        }

        return TranslationEntity.fromObject(translation.toObject());
    }

}