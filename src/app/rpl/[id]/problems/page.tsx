import { prisma } from '@/db/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QuizForm from '@/app/quiz-form';
import Link from 'next/link';

export default async function RPLProblems({ params: { id } }: { params: { id: string } }) {
  const questions = await prisma.question.findMany({
    include: {
      answers: true,
    },
    where: {
      testId: id,
    },
  });

  const randomizedQuestions = questions.sort(() => Math.random() - 0.5);

  return (
    <Card className='container mx-auto md:py-8 bg-transparent md:bg-gradient-to-b from-cyan-100 via-cyan-50 via-[200px] to-white shadow-none border-none md:shadow-xl'>
      <CardHeader className=''>
        <CardTitle className='text-3xl md:text-5xl'>TO RPL</CardTitle>
        <div className='flex gap-4'>
          <Link
            href='solutions'
            className='text-blue-500'
          >
            Solutions
          </Link>
          <Link
            href='statistics'
            className='text-blue-500'
          >
            Statistics
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <QuizForm questions={randomizedQuestions} />
      </CardContent>
    </Card>
  );
}
