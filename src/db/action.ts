'use server';

import { prisma } from './prisma';

export async function createResponses({
  input,
  testId,
}: {
  input: { questionId: string; answers: string[]; score: number }[];
  testId: string;
}) {
  try {
    console.log('input length', input.length);
    const responses = await Promise.all(
      input.map(async ({ questionId, answers, score }) => {
        const r = await prisma.response.create({
          data: {
            score,
            question: {
              connect: { id: questionId },
            },
            Answer: {
              connect: answers.map((a) => ({ id: a })),
            }
          },
        });
        return r;
      })
    );

    console.log(responses.length + ' responses created');

    const rc = await prisma.responseRecap.create({
      data: {
        testId,
        responses: {
          connect: [...responses.map((r) => ({ id: r.id }))],
        },
      },
    });

    console.log(rc);

    return { success: true, responses, error: null };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack);
      console.log(error.message);
    }

    return { success: false, error: error, responses: null };
  }
}
