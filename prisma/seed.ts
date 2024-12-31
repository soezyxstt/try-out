import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const a = await prisma.question.findMany({
    include: {
      Response: {
        include: {
         Answer: true,
       }
     }
   }
  });

  const rc = a.map((q) => {
    const rs = q.Response.reduce((acc, r) => {
      const answer = r.Answer[0] ? r.Answer[0].id : '';
      if (!acc[answer]) {
        acc[answer] = [];
      }
      acc[answer].push(r);
      return acc;
    }, {} as Record<string, typeof q.Response>);

    return rs;
  }, {} as Record<string, typeof a>);

  console.log(rc);

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
