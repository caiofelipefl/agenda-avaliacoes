-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Agenda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "disciplina" TEXT,
    "datahora" TEXT NOT NULL,
    "descritivo" TEXT NOT NULL
);
INSERT INTO "new_Agenda" ("datahora", "descritivo", "disciplina", "id") SELECT "datahora", "descritivo", "disciplina", "id" FROM "Agenda";
DROP TABLE "Agenda";
ALTER TABLE "new_Agenda" RENAME TO "Agenda";
CREATE UNIQUE INDEX "Agenda_disciplina_key" ON "Agenda"("disciplina");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
