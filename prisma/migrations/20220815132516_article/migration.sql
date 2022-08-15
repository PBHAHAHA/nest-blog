/*
  Warnings:

  - You are about to drop the column `createdAt` on the `article` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `article` table. All the data in the column will be lost.
  - Made the column `thumb` on table `article` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `article` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `categoryId` BIGINT UNSIGNED NULL,
    MODIFY `thumb` VARCHAR(191) NOT NULL;
