-- DropForeignKey
ALTER TABLE "answers" DROP CONSTRAINT "answers_responseId_fkey";

-- CreateTable
CREATE TABLE "_AnswerToResponse" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AnswerToResponse_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_AnswerToResponse_B_index" ON "_AnswerToResponse"("B");

-- AddForeignKey
ALTER TABLE "_AnswerToResponse" ADD CONSTRAINT "_AnswerToResponse_A_fkey" FOREIGN KEY ("A") REFERENCES "answers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnswerToResponse" ADD CONSTRAINT "_AnswerToResponse_B_fkey" FOREIGN KEY ("B") REFERENCES "responses"("id") ON DELETE CASCADE ON UPDATE CASCADE;
