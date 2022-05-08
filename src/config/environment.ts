const DATABASE_URL = String(process.env.DATABASE_URL)
const MAIL_HOST = String(process.env.MAIL_HOST)
const MAIL_PORT = Number(process.env.MAIL_PORT)
const MAIL_USER = String(process.env.MAIL_USER)
const MAIL_PASS = String(process.env.MAIL_PASS)
const PORT = String(process.env.PORT)

export default {
    database: {
        DATABASE_URL,
    },
    mail: {
        MAIL_HOST,
        MAIL_PORT,
        MAIL_USER,
        MAIL_PASS,
    },
    app: {
        PORT,
    }
}
