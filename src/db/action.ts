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

    const responses = await Promise.all(
      input.map(async ({ questionId, answers, score }) => {
        const r = await prisma.response.create({
          data: {
            score,
            question: {
              connect: { id: questionId },
            },
            answers,
          },
        });
        console.log(r);
        return r;
      })
    );

    const rC = await prisma.responseRecap.create({
      data: {
        testId,
        responses: {
          connect: [...responses.map((r) => ({ id: r.id }))],
        },
      },
    });

    console.log(rC, responses);

    return { success: true, responses, error: null };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack);
      console.log(error.message);
    }
    console.log(error);
    return { success: false, error: error, responses: null };
  }
}
