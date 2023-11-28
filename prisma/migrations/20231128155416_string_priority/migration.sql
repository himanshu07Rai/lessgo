/*
  Warnings:

  - You are about to alter the column `priority` on the `Issue` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `Issue` MODIFY `priority` ENUM('LOW', 'MEDIUM', 'HIGH') NOT NULL DEFAULT 'LOW';
