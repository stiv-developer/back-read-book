import { CreateTranslationsDto } from "../dtos/translations/create-translations.dto";
import { UpdateTranslationsDto } from "../dtos/translations/update-translations.dto";
import { TranslationEntity } from "../entities/translations.entity";


export abstract class TranslationDatasource {

    abstract create(createTranslationDto: CreateTranslationsDto): Promise<TranslationEntity>;
    abstract delete(id: string): Promise<TranslationEntity>;
    abstract update(updateTranslationDto: UpdateTranslationsDto): Promise<TranslationEntity>;
    abstract getAll(): Promise<TranslationEntity[]>;
    abstract findById(id: string): Promise<TranslationEntity>;
}