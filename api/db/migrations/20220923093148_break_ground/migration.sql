-- CreateTable
CREATE TABLE "Photo" (
    "id" SERIAL NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Photo_photo_key" ON "Photo"("photo");
