-- DropForeignKey
ALTER TABLE `ticket` DROP FOREIGN KEY `Ticket_concert_id_fkey`;

-- DropForeignKey
ALTER TABLE `ticket` DROP FOREIGN KEY `Ticket_sport_id_fkey`;

-- AlterTable
ALTER TABLE `ticket` MODIFY `concert_id` INTEGER NULL,
    MODIFY `sport_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_concert_id_fkey` FOREIGN KEY (`concert_id`) REFERENCES `Concert`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_sport_id_fkey` FOREIGN KEY (`sport_id`) REFERENCES `Sports`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
