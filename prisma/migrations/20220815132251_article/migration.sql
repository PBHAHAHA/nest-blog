/*
  Warnings:

  - You are about to drop the column `createAt` on the `article` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `article` table without a default value. This is not possible if the table is not empty.
  - Made the column `categoryId` on table `article` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `article_categoryId_fkey`;

-- AlterTable
ALTER TABLE `article` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `categoryId` BIGINT UNSIGNED NOT NULL,
    MODIFY `thumb` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
