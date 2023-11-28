/*
  Warnings:

  - The values [HIGN] on the enum `Issue_priority` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Issue` MODIFY `priority` ENUM('LOW', 'MEDIUM', 'HIGH') NOT NULL DEFAULT 'LOW';
