import { prisma } from '@/db/prisma';
import { redirect } from 'next/navigation';

export default async function Page() {
  const test = await prisma.test.findFirst({
    where: {
      subject: 'RPL',
    },
  })

  redirect(`/rpl/${test?.id}/problems`);

  return (
    <div>
      <h1>Page</h1>
    </div>
  );
}