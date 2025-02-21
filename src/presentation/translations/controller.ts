import { CreateTranslationsDto } from "../../domain/dtos/translations/create-translations.dto";
import { TranslationRepository } from "../../domain/repositories/translations.repository";
import { Request, Response } from 'express';
import { CreateTranslations } from "../../domain/use-cases/translations/create-translations";
import { UpdateTranslation } from "../../domain/use-cases/translations/update-translations";
import { UpdateTranslationsDto } from "../../domain/dtos/translations/update-translations.dto";

export class TranslationController {

    constructor(
        private readonly translationRepository: TranslationRepository
    ){}

    public getAllTranslations = (req: Request, res: Response) => {
        this.translationRepository.getAll()
            .then(translations => res.json(translations))
            .catch(error => {
                console.error('Error getting all translations:', error);
                if (error instanceof Error) {
                    res.status(400).json({ error: error.message });
                } else {
                    res.status(400).json({ error: 'Unknown error' });
                }
            })
    }

    public getTranslateById = (req:Request, res: Response) => {
        const id = req.params.id;
        this.translationRepository.findById(id)
            .then(translate => res.json(translate))
            .catch(error => {
                console.error('Error getting translate by ID:', error); // Agrega este log
                if (error instanceof Error) {
                    res.status(400).json({ error: error.message });
                } else {
                    res.status(400).json({ error: 'Unknown error' });
                }
            });
    }

    public createTranslation = (req: Request, res: Response) => {
        const [error, createTranslationDto] = CreateTranslationsDto.create(req.body);

        if (error) {
            return res.status(400).json({ error });
        }

        new CreateTranslations(this.translationRepository)
            .execute(createTranslationDto!)
            .then(translation => res.json(translation))
            .catch(error => res.status(400).json({ error: error.message || 'Unknown error' }));
    }

    public updateTranslation = (req: Request, res: Response) => {
        const id = req.params.id;
        const [error, updateTranslation] = UpdateTranslationsDto.create({ ...req.body, id});

        if (error) return res.status(400).json({ error });

        new UpdateTranslation(this.translationRepository)
            .execute(updateTranslation!)
            .then(translation => res.json(translation))
            .catch(error => res.status(400).json({ error }));

    }

    public deleteTranslation = (req: Request, res: Response) => {
        const id = req.params.id;
        this.translationRepository.deleteById(id)
            .then(translation => res.json(translation))
            .catch(error => {
                console.error('Error deleting translate:', error); // Agrega este log
                res.status(400).json({ error: error.message || 'Unknown error' });
            })
    }
}