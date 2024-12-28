'use server';

import { prisma } from './prisma';

export const getQuestions = prisma.question.findMany;
export const getAnswers = prisma.answer.findMany;
export const createResponse = (input: {
  questionId: string;
  score?: number;
  answers: string[];
}) => {
  return prisma.response.create({
    data: input,
  });
};
