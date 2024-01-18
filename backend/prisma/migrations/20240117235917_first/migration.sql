-- CreateTable
CREATE TABLE "Url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "short" TEXT NOT NULL,
    "long" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_id_key" ON "Url"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Url_short_key" ON "Url"("short");
