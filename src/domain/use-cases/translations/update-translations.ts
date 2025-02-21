import { UpdateTranslationsDto } from "../../dtos/translations/update-translations.dto";
import { TranslationEntity } from "../../entities/translations.entity";
import { TranslationRepository } from "../../repositories/translations.repository";

export interface UpdateTranslationUseCase {
    execute(data: UpdateTranslationsDto): Promise<TranslationEntity>;
}

export class UpdateTranslation implements UpdateTranslationUseCase {
    constructor(
        private readonly repository: TranslationRepository,
    ) {
    }

    execute(dto: UpdateTranslationsDto): Promise<TranslationEntity> {
        return this.repository.updateById(dto);
    }
}

