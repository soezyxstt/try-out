import { prisma } from '@/db/prisma';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Chart from './chart';
import { ChartConfig } from '@/components/ui/chart';

export default async function RPLStats({
  params,
}: {
  params: Promise<{ id: string }>;
  }) {
  const id = (await params).id;
  const questions = await prisma.question.findMany({
    include: {
      answers: true,
      Response: true,
    },
    where: {
      testId: id,
    },
  });

  const responseRecaps = await prisma.responseRecap.findMany({
    include: {
      responses: true,
    },

    where: {
      testId: id,
    },
  });

  const scores = responseRecaps.map((r) =>
    r.responses.reduce((acc, res) => {
      return acc + (res.score || 0);
    }, 0)
  );

  return (
    <Card className='container mx-auto md:py-8 bg-transparent md:bg-gradient-to-b from-cyan-100 via-cyan-50 via-[200px] to-white shadow-none border-none md:shadow-xl'>
      <CardHeader className=''>
        <CardTitle className='text-3xl md:text-5xl'>UAS Prosman 2021</CardTitle>
        <div className='flex gap-4'>
          <Link
            href='problems'
            className='text-blue-500'
          >
            Problems
          </Link>
          <Link
            href='solutions'
            className='text-blue-500'
          >
            Solutions
          </Link>
        </div>
        <div className=''>
          Rata-rata:{' '}
          {(scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2)}
        </div>
      </CardHeader>
      <CardContent className='space-y-4 md:space-y-8'>
        {questions.map((q, i) => {
          const rs: Record<string, number> = {};

          q.Response.forEach((r) => {
            r.answerIds.forEach((a) => {
              if (!rs[a]) {
                rs[a] = 0;
              }

              rs[a] += 1;
            });
          });

          const chartData = q.answers.map((a) => ({
            answer: a.text,
            number: rs[a.id] || 0,
          }));

          const chartConfig: ChartConfig = {
            number: {
              label: 'Number of Responses',
              color: 'hsl(var(--chart-1)',
            },
            label: {
              color: 'hsl(var(--background))',
            },
          };
          return (
            <Chart
              key={q.id}
              chartData={chartData}
              chartConfig={chartConfig}
              title={`${i + 1}. ${q.text}`}
            />
          );
        })}
      </CardContent>
    </Card>
  );
}
