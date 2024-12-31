/*
  Warnings:

  - You are about to drop the column `answers` on the `responses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "answers" ADD COLUMN     "responseId" TEXT;

-- AlterTable
ALTER TABLE "responses" DROP COLUMN "answers";

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_responseId_fkey" FOREIGN KEY ("responseId") REFERENCES "responses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
