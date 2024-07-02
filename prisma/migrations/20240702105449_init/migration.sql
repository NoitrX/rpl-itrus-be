/*
  Warnings:

  - Added the required column `comment` to the `Interaction_Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `interaction_comment` ADD COLUMN `comment` VARCHAR(191) NOT NULL;
