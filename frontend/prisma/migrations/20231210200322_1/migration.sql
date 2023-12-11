/*
  Warnings:

  - You are about to drop the column `customer_id` on the `ticket` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `ticket` DROP FOREIGN KEY `Ticket_customer_id_fkey`;

-- AlterTable
ALTER TABLE `ticket` DROP COLUMN `customer_id`,
    ADD COLUMN `userId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
