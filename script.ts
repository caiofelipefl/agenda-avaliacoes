import { PrismaClient } from '@prisma/client'

export const prismaClient = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const provas = await prismaClient.agenda.findMany({
    // include: {
    //   posts: true,
    // },
  })
  console.dir(provas, { depth: null })
}

main()
  .then(async () => {
    await prismaClient.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prismaClient.$disconnect()
    process.exit(1)
  })