-- DropForeignKey
ALTER TABLE `ticket` DROP FOREIGN KEY `Ticket_customer_id_fkey`;

-- AlterTable
ALTER TABLE `ticket` MODIFY `customer_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
