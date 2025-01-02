/*
  Warnings:

  - You are about to drop the `_AnswerToResponse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AnswerToResponse" DROP CONSTRAINT "_AnswerToResponse_A_fkey";

-- DropForeignKey
ALTER TABLE "_AnswerToResponse" DROP CONSTRAINT "_AnswerToResponse_B_fkey";

-- AlterTable
ALTER TABLE "responses" ADD COLUMN     "answerIds" TEXT[];

-- DropTable
DROP TABLE "_AnswerToResponse";
