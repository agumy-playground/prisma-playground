import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

(async () => {
  const user = await prisma.user.create({

    data: {
      email: 'test@prisma.io',
      name: 'test',
      gender: "Male"
    }
  })
  console.log({ user })
})()