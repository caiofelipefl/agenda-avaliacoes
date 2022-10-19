-- CreateTable
CREATE TABLE "Agenda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "disciplina" TEXT,
    "datahora" DATETIME NOT NULL,
    "descritivo" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Agenda_disciplina_key" ON "Agenda"("disciplina");
