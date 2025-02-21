import { TranslationEntity } from "../../entities/translations.entity";
import { TranslationRepository } from "../../repositories/translations.repository";


export interface GetTranslationUseCase {
    execute(id: string): Promise<TranslationEntity>;
}

export class GetTranslation implements GetTranslationUseCase {
    constructor(
        private readonly repository: TranslationRepository,
    ) { }

    execute(id: string): Promise<TranslationEntity> {
        return this.repository.findById(id);
    }
}