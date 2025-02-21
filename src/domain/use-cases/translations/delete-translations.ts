import { TranslationEntity } from "../../entities/translations.entity";
import { TranslationRepository } from "../../repositories/translations.repository";

export interface DeleteTranslationsUseCase {
    execute (id: string): Promise<TranslationEntity>;
}

export class DeleteTranslations implements DeleteTranslationsUseCase {
    constructor(
        private readonly repository: TranslationRepository,
    ) {}

    async execute(id: string): Promise<TranslationEntity> {
        return this.repository.deleteById(id);
    }
}