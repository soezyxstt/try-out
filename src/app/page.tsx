import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { prisma } from '@/db/prisma';
import Link from 'next/link';

export default async function Home() {
  const tests = await prisma.test.findMany();

  return (
    <main className='h-screen flex justify-center items-center'>
      <div className='max-w-3xl grid grid-cols-1 gap-6 md:gap-8'>
        {['PROSMAN', 'METRO', 'PERPAN'].map((subject) => (
          <Card key={'subject-' + subject}>
            <CardHeader>
              <CardTitle className='capitalize'>
                {subject.toLocaleLowerCase()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {tests
                .filter((t) => t.subject === subject)
                .map((test) => (
                  <Link
                    key={test.id}
                    href={`/${subject.toLocaleLowerCase()}/${test.id}/problems`}
                    className='text-blue-500'
                  >
                    - {test.title}
                  </Link>
                ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
