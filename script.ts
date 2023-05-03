import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  /**
   * Create Operations
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
  */

  /**
   * Read Operations
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

  /**
   * Update Operations
  
  const user = await prisma.user.update({
    data: {
      email: "johndoe3@test.com"
    },
    where: {
      email: "johndoe@test.com"
    }
  });

  const user = await prisma.user.updateMany({
    data: {
      name: "Juan"
    },
    where: {
      name: "John"
    }
  });

  const user = await prisma.user.update({
    data: {
      age: {
        increment: 1  //increment, decrement, multiple, divide
      }
    },
    where: {
      email: "marc@test.com"
    }
  });

  const user = await prisma.user.update({
    data: {
      userPreference: {
        create: {   // create, delete, update, upsert
          emailUpdates: true
        }
      }
    },
    where: {
      email: "marc@test.com"
    }
  });

  const user = await prisma.user.update({
    data: {
      userPreference: {
        connect: {    // connect, disconnect
          id: "49214190-7d98-4e44-ba11-9d3481dc3408"
        }
      }
    },
    where: {
      email: "marc@test.com"
    }
  });

  const user = await prisma.user.update({
    data: {
      userPreference: {
        disconnect: true
      }
    },
    where: {
      email: "marc@test.com"
    }
  });
  */

  /**
   * Delete Operations
  const user = await prisma.user.delete({
    where: {
      email: "johndoe3@test.com"
    }
  });

  const user = await prisma.user.deleteMany({
    where: {
      email: "johndoe3@test.com"
    }
  });

  const user = await prisma.user.deleteMany({
    where: {
      age: {
        gt: 30
      }
    }
  });
  */

  // console.log(user);
}

main()
  .catch(e => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
