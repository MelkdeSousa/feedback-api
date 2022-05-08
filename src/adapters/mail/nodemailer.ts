import { createTransport, SentMessageInfo, Transporter } from 'nodemailer'

import environment from '../../config/environment';

import { IMailAdapter } from "../../interfaces/adapters/mail";
import { IMailDTO } from "../../interfaces/dtos/mail";

export class NodemailerAdapter implements IMailAdapter {
    private _transport: Transporter<SentMessageInfo>

    constructor() {
        this._transport = createTransport({
            host: environment.mail.MAIL_HOST,
            port: environment.mail.MAIL_PORT,
            auth: {
                user: environment.mail.MAIL_USER,
                pass: environment.mail.MAIL_PASS,
            }
        });
    }

    async send({ subject, body }: IMailDTO): Promise<void> {
        await this._transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Melk de Sousa <melk.desousa@feedget.team>',
            subject,
            html: body,
        })
    }
}