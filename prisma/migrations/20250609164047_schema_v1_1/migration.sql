/*
  Warnings:

  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[slug]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `banned` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'INVESTOR',
ALTER COLUMN "banned" SET NOT NULL,
ALTER COLUMN "banned" SET DEFAULT false;

-- CreateIndex
CREATE INDEX "Comment_userId_idx" ON "Comment"("userId");

-- CreateIndex
CREATE INDEX "Comment_createdAt_idx" ON "Comment"("createdAt");

-- CreateIndex
CREATE INDEX "Comment_parentId_idx" ON "Comment"("parentId");

-- CreateIndex
CREATE INDEX "CryptoTx_walletId_idx" ON "CryptoTx"("walletId");

-- CreateIndex
CREATE INDEX "CryptoTx_timestamp_idx" ON "CryptoTx"("timestamp");

-- CreateIndex
CREATE INDEX "CryptoTx_status_idx" ON "CryptoTx"("status");

-- CreateIndex
CREATE INDEX "Investment_createdAt_idx" ON "Investment"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_slug_key" ON "Organization"("slug");

-- CreateIndex
CREATE INDEX "Organization_slug_idx" ON "Organization"("slug");

-- CreateIndex
CREATE INDEX "Startup_founderId_idx" ON "Startup"("founderId");

-- CreateIndex
CREATE INDEX "Startup_organizationId_idx" ON "Startup"("organizationId");

-- CreateIndex
CREATE INDEX "Startup_isApproved_idx" ON "Startup"("isApproved");

-- CreateIndex
CREATE INDEX "Token_symbol_idx" ON "Token"("symbol");

-- CreateIndex
CREATE INDEX "Token_creatorId_idx" ON "Token"("creatorId");

-- CreateIndex
CREATE INDEX "Token_organizationId_idx" ON "Token"("organizationId");

-- CreateIndex
CREATE INDEX "Token_isApproved_idx" ON "Token"("isApproved");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
