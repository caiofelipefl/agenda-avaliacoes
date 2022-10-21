import { PrismaClient } from "@prisma/client";


export default async function handle(req, res) {
  const prismaClient = new PrismaClient();
    const avaliacaoId = req.query.id;
    const convertToInt = parseInt(avaliacaoId)
    const { disciplina, datahora, descritivo } = req.body;
    const avaliacao = await prismaClient.agenda.update({
      where: { id: convertToInt },
      data: { 
        disciplina,
        datahora,
        descritivo
       },
    });
    res.json(post);
  }