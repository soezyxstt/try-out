import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // const test = await prisma.test.create({
  //   data: {
  //     title: 'RPL',
  //     description: 'RPL test',
  //     subject: 'RPL',
  //     startTime: new Date(),
  //     endTime: new Date('2025-01-31T23:59:59'),
  //   }
  // })

  // for (const question of questionsRPL) {
  //   const qq = await prisma.question.create({
  //     data: {
  //       text: question.q,
  //       explanation: question.explanation,
  //       points: 1,
  //       type: 'SC',
  //       testId: test.id,
  //     }, 
  //   });

  //   for (const answer of question.answers) {
  //     await prisma.answer.create({
  //       data: {
  //         text: answer.text,
  //         isCorrect: answer.isCorrect,
  //         questionId: qq.id,
  //       },
  //     });
  //   }
  // }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
