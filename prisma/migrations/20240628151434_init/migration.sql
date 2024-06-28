/*
  Warnings:

  - You are about to drop the column `url` on the `image_post` table. All the data in the column will be lost.
  - Added the required column `url_image` to the `Image_Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `image_post` DROP COLUMN `url`,
    ADD COLUMN `url_image` VARCHAR(191) NOT NULL;
