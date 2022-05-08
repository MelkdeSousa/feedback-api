import { PrismaClient } from "@prisma/client";
import { IFeedbackDTO } from "../../interfaces/dtos/feedback";
import { IFeedbackRepository } from "../../interfaces/repositories/feedback";

export class PrismaFeedbacksRepository implements IFeedbackRepository {
    private _prisma: PrismaClient;

    constructor() {
        this._prisma = new PrismaClient({
            log: ['query', 'info']
        });
    }

    async create({comment, type, screenshot}: IFeedbackDTO): Promise<void> {
        await this._prisma.feedback.create({
            data: {
                comment,
                type,
                screenshot,
                createdAt: new Date(),
            }
        });
    }
}