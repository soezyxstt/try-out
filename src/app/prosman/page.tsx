import { prisma } from '@/db/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QuizForm from './quiz-form';

export default async function Prosman() {
  const questions = await prisma.question.findMany({
    select: {
      id: true,
      text: true,
      answers: true,
      explanation: true,
      points: true,
    },
  });

  return (
    <main className='py-8 bg-cyan-100 md:bg-gradient-to-b from-cyan-200 to-blue-100 [background-size:_100vw_100vh] bg-no-repeat bg-fixed'>
      <Card className='container mx-auto md:py-8 bg-transparent md:bg-gradient-to-b from-cyan-100 via-cyan-50 via-[200px] to-white shadow-none border-none md:shadow-xl'>
        <CardHeader>
          <CardTitle className='text-3xl md:text-5xl'>UAS Prosman 2021</CardTitle>
        </CardHeader>
        <CardContent>
          <QuizForm questions={questions} />
        </CardContent>
      </Card>
    </main>
  );
}