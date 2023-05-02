import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // const users = await prisma.user.findMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: "Arman",
      email: "armandobelara@gmail.com",
      age: 27,
      userPreference: {
        create: {
          emailUpdates: true,
        }
      }
    },
    select: {
      name: true,
      userPreference: {
        select: {
          id: true
        }
      },
    }
  });

  console.log(user);
}

main()
  .catch(e => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
