/*
  Warnings:

  - You are about to drop the `image_post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `video_post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `image_post` DROP FOREIGN KEY `Image_Post_postId_fkey`;

-- DropForeignKey
ALTER TABLE `video_post` DROP FOREIGN KEY `Video_Post_postId_fkey`;

-- DropTable
DROP TABLE `image_post`;

-- DropTable
DROP TABLE `video_post`;

-- CreateTable
CREATE TABLE `Posted_Content` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url_image` VARCHAR(191) NOT NULL,
    `url_video` VARCHAR(191) NOT NULL,
    `postId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Posted_Content` ADD CONSTRAINT `postImage_fk` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Posted_Content` ADD CONSTRAINT `postVideo_fk` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
