import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({ data: { name: "Arman"} });
  const users = await prisma.user.findMany();

  console.log(users);
}

main()
  .catch(e => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
