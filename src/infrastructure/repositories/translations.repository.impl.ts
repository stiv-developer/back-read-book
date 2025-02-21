import { TranslationDatasource } from "../../domain/datasources/translation.datasource";
import { UpdateTranslationsDto } from "../../domain/dtos/translations/update-translations.dto";
import { TranslationRepository } from "../../domain/repositories/translations.repository";


export class TranslationRepositoryImpl implements TranslationRepository{

    constructor(
        private readonly datasource: TranslationDatasource
    ){}

    create(createTranslationDto: UpdateTranslationsDto): Promise<any> {
        return this.datasource.create(createTranslationDto);
    }
    deleteById(id: string): Promise<any> {
        return this.datasource.delete(id);
    }
    getAll(): Promise<any[]> {
        return this.datasource.getAll();
    }
    findById(id: string): Promise<any> {
        return this.datasource.findById(id);
    }
    updateById(updateTranslationDto: UpdateTranslationsDto): Promise<any> {
        return this.datasource.update(updateTranslationDto);
    }
}