/*
  Warnings:

  - Added the required column `userId` to the `article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `userId` BIGINT UNSIGNED NOT NULL;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
