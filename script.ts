import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // const users = await prisma.user.findMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({
    data: [{
      name: "John",
      email: "johndoe@test.com",
      age: 33,
    }, {
      name: "John",
      email: "johndoe1@test.com",
      age: 30,
    }, {
      name: "John",
      email: "johndoe2@test.com",
      age: 27,
    }, {
      name: "Marc",
      email: "marc@test.com",
      age: 33,
    }]
  });

  /* Read Operations
  const user = await prisma.user.findUnique({
    where: {
      email: "armandobelara@gmail.com"
    }
  });

  const user = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 33,
        name: "Arman"
      }
    }
  });

  const user = await prisma.user.findFirst({
    where: {
      name: "Arman"
    }
  });

  const user = await prisma.user.findMany({
    where: {
      name: "Arman"
    }
  });

  const users = await prisma.user.findMany({
    where: {
      name: "Arman"
    },
    distinct: ["name", "age"],
  });

  const users = await prisma.user.findMany({
    where: {
      name: "Arman"
    },
    orderBy: {
      age: "desc"
    },
    take: 2,
    skip: 1
  });

  const users = await prisma.user.findMany({
    where: {
      name: {
        not: "Arman"
      }
    }
  });

  const users = await prisma.user.findMany({
    where: {
      name: {
        in: ["Arman", "Eds"]
      }
    }
  });

  const users = await prisma.user.findMany({
    where: {
      name: {
        notIn: ["Arman", "Eds"]
      }
    }
  });

  const users = await prisma.user.findMany({
    where: {
      name: "Arman",
      age: { gt: 30 } //lt, lte, gt, gte
    }
  });

  const users = await prisma.user.findMany({
    where: {
      email: { contains: "@gmail.com" }   //contains, startsWith, endsWith
    }
  });

  const users = await prisma.user.findMany({
    where: {
      AND: [ {email: { contains: "@test.com" }}, {name: "Marc"} ]   //AND, OR, NOT
    },
  });

  const users = await prisma.user.findMany({
    where: {
      userPreference: {
        emailUpdates: true
      }
    },
  });

  const users = await prisma.user.findMany({
    where: {
      writtenPosts: {
        some: {   // every, none, some
          title: "Test"
        }
      }
    },
  });

  const users = await prisma.post.findMany({
    where: {
      author: {
        is: {
          age: 27,
        },
      }
    },
  });
  */

  // console.log(users);
}

main()
  .catch(e => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
