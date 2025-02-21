import { CreateTranslationsDto } from "../../dtos/translations/create-translations.dto";
import { TranslationEntity } from "../../entities/translations.entity";
import { TranslationRepository } from "../../repositories/translations.repository";


export interface CreateTranslationsUseCase {
    execute(data: CreateTranslationsDto): Promise<TranslationEntity>;
}

export class CreateTranslations implements CreateTranslationsUseCase {
    constructor(
        private readonly repository: TranslationRepository,
    ) {
    }

    execute(dto: CreateTranslationsDto): Promise<TranslationEntity> {
        return this.repository.create(dto);
    }
}