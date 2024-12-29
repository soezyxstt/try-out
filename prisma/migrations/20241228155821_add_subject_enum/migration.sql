-- CreateEnum
CREATE TYPE "Subject" AS ENUM ('PROSMAN', 'PERPAN', 'METRO');

-- AlterTable
ALTER TABLE "tests" ADD COLUMN     "subject" "Subject" NOT NULL DEFAULT 'PROSMAN';
