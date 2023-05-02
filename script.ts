import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // const users = await prisma.user.findMany();
  await prisma.user.deleteMany();

  const users = await prisma.user.createMany({
    data: [{
      name: "Arman",
      email: "armandobelara@gmail.com",
      age: 33,
    }, {
      name: "Eds",
      email: "elbaselonia@gmail.com",
      age: 33,
    }]
  });

  console.log(users);
}

main()
  .catch(e => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
