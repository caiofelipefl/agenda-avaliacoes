// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client";

export default async function handle(req, res) {
  const prismaClient = new PrismaClient();
  const { disciplina, datahora, descritivo } = req.body;

  const result = await prismaClient.agenda.create({
    data: {
      disciplina,
      datahora,
      descritivo
    },
  });
  console.log(result)
  res.json(result);
}