/*
  Warnings:

  - You are about to drop the column `userId` on the `article` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `article_userId_fkey`;

-- AlterTable
ALTER TABLE `article` DROP COLUMN `userId`;
