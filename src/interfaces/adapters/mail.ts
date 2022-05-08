import { IMailDTO } from "../dtos/mail";

export interface IMailAdapter {
    send(data: IMailDTO): Promise<void>;
}