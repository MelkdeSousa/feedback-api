import { IMailAdapter } from "../interfaces/adapters/mail";
import { IFeedbackDTO } from "../interfaces/dtos/feedback";
import { IFeedbackRepository } from "../interfaces/repositories/feedback";

export class CreateNewFeedbackUseCase {
    constructor(private feedbackRepository: IFeedbackRepository, private mailAdapter: IMailAdapter) { }

    async execute({ comment, type, screenshot }: IFeedbackDTO): Promise<void> {
        await this.feedbackRepository.create({
            comment, type, screenshot
        });

        await this.mailAdapter.send({
            subject: 'Novo feedback',
            body: String.raw`
                <div style="font-family: sans-serif; font-size: 16px; color: #111;">
                    <p>Tipo do feedback: ${type}</p>
                    <p>Comentário: ${comment}</p>
                    <img src="${screenshot}">
                </div>`
        });

        return;
    }
}

