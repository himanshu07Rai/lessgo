/*
  Warnings:

  - You are about to alter the column `priority` on the `Issue` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Issue` MODIFY `priority` INTEGER NOT NULL DEFAULT 0;
