import { CreateTranslationsDto } from "../dtos/translations/create-translations.dto";
import { UpdateTranslationsDto } from "../dtos/translations/update-translations.dto";
import { TranslationEntity } from "../entities/translations.entity";

export abstract class TranslationRepository{

    abstract getAll(): Promise<TranslationEntity[]>;
    abstract findById(id: string): Promise<TranslationEntity>;
    
    abstract create(createTranslatinDto: CreateTranslationsDto): Promise<TranslationEntity>; 
    abstract updateById(updateTranslatinDto: UpdateTranslationsDto): Promise<TranslationEntity>; 
    abstract deleteById(id: string): Promise<TranslationEntity>; 
}