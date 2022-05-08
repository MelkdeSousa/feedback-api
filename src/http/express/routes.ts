import express from 'express';

import { NodemailerAdapter } from '../../adapters/mail/nodemailer';
import { PrismaFeedbacksRepository } from '../../repositories/prisma/feedback';
import { CreateNewFeedbackUseCase } from '../../use-cases/create-new-feedback-use-case';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerAdapter();

  const createNewFeedbackUseCase = new CreateNewFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter,
  );

  await createNewFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
