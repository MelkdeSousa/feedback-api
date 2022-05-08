import { IFeedbackDTO } from "../dtos/feedback";

export interface IFeedbackRepository {
    create(data: IFeedbackDTO): Promise<void>;
}