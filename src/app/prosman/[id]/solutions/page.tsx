import { prisma } from '@/db/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default async function Prosman() {
  const questions = await prisma.question.findMany({
    include: {
      answers: true,
    },
  });

  return (
    <Card className='container mx-auto md:py-8 bg-transparent md:bg-gradient-to-b from-cyan-100 via-cyan-50 via-[200px] to-white shadow-none border-none md:shadow-xl'>
      <CardHeader className=''>
        <CardTitle className='text-3xl md:text-5xl'>UAS Prosman 2021</CardTitle>
        <div className='flex gap-4'>
          <Link
            href='problems'
            className='text-blue-500'
          >
            Tests
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
        {questions.map((question, index) => (
          <div
            className=''
            key={question.id}
          >
            <CardHeader>{`${index + 1}. ${question.text}`}</CardHeader>
            <CardContent>
              <div className='text-green-600'>
                answer:{' '}
                {question.answers.find((a) => a.isCorrect === true)?.text}
              </div>
              <Accordion
                type='single'
                collapsible
                className='mt-4'
              >
                <AccordionItem value='explanation'>
                  <AccordionTrigger className='text-xs italic'>
                    Show Explanation
                  </AccordionTrigger>
                  <AccordionContent className=''>
                    {question.explanation}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            {index !== questions.length - 1 && (
              <Separator className='bg-gray-600' />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
