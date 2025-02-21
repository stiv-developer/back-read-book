import { TranslationEntity } from "../../entities/translations.entity";
import { TranslationRepository } from "../../repositories/translations.repository";

export interface GetTranslationsUseCase {
    execute(): Promise<TranslationEntity[]>;
}

export class GetTranslations implements GetTranslationsUseCase {
    constructor(
        private readonly repository: TranslationRepository,
    ) { }

    execute(): Promise<TranslationEntity[]> {
        return this.repository.getAll();
    }
}