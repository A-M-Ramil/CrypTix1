/*
  Warnings:

  - You are about to drop the column `ticket_id` on the `ticket` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Ticket_ticket_id_key` ON `ticket`;

-- AlterTable
ALTER TABLE `ticket` DROP COLUMN `ticket_id`;
