/*
  Warnings:

  - You are about to drop the column `url_image` on the `posted_content` table. All the data in the column will be lost.
  - You are about to drop the column `url_video` on the `posted_content` table. All the data in the column will be lost.
  - Added the required column `type` to the `Posted_Content` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `posted_content` DROP FOREIGN KEY `postImage_fk`;

-- AlterTable
ALTER TABLE `posted_content` DROP COLUMN `url_image`,
    DROP COLUMN `url_video`,
    ADD COLUMN `type` ENUM('IMAGE', 'VIDEO') NOT NULL,
    ADD COLUMN `url` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Posted_Content` ADD CONSTRAINT `Posted_Content_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
