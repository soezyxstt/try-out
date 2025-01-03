import { PrismaClient } from '@prisma/client';
import { questions, questions2 } from './data';
const prisma = new PrismaClient();

async function main() {
  const answers = questions2.flatMap((q) => q.answers);
  const answersText = answers.map((a) =>
    a.text.toLowerCase().split(' ').join('').replace(/[^\w\s]/g, '')
  );

  const questionsDB = await prisma.question.findMany({
    include: { answers: true },
  });

  const questionsDBText = questionsDB.map((q) =>
    q.text.toLowerCase().split(' ').join('')
  );

  const asnwersDB = await prisma.answer.findMany();

  const answersDBText = asnwersDB.map((a) =>
    a.text
      .toLowerCase()
      .split(' ')
      .join('')
      .replace(/[^\w\s]/g, '')
  );

  const cleanQuestionsDBText = questionsDBText.map((text) =>
    text.replace(/[^\w\s]/g, '')
  );

  let x = 0
  let y = 0

  for (const q of questions2) {
    const cleanQuestion = q.q
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(' ')
      .join('');
    
    const qq = questionsDB.find((qDB) =>
      qDB.text.toLowerCase().split(' ').join('').replace(/[^\w\s]/g, '') === cleanQuestion
    );

    const ahiw = await prisma.question.update({
      where: { id: qq?.id },
      data: {
        explanation: q.explanation,
      },
    });

    if (!!ahiw) {
      x++
    }

    for (const a of qq?.answers || []) {
      const cleanAnswer = a.text
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(' ')
        .join('');

      const aa = q.answers.find((aDB) =>
        aDB.text
          .toLowerCase()
          .split(' ')
          .join('')
          .replace(/[^\w\s]/g, '') === cleanAnswer
      );

      const ahhiw = await prisma.answer.update({
        where: { id: a?.id },
        data: {
          isCorrect: aa?.isCorrect,
        },
      });
      
      if (!!ahhiw) {
        y++
      }
    }
  }

  console.log(x, y)
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
