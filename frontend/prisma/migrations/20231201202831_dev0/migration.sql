-- CreateTable
CREATE TABLE `Sports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `sport_seat_capacity` INTEGER NOT NULL,
    `seat_available` INTEGER NOT NULL,
    `schedule` DATETIME(3) NOT NULL,
    `venue` VARCHAR(191) NOT NULL,
    `team1` VARCHAR(191) NOT NULL,
    `team2` VARCHAR(191) NOT NULL,
    `ticket_price` INTEGER NOT NULL,

    UNIQUE INDEX `Sports_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Concert` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `concert_seat_capacity` INTEGER NOT NULL,
    `seat_available` INTEGER NOT NULL,
    `schedule` DATETIME(3) NOT NULL,
    `venue` VARCHAR(191) NOT NULL,
    `artist` VARCHAR(191) NOT NULL,
    `ticket_price` INTEGER NOT NULL,

    UNIQUE INDEX `Concert_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ticket` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ticket_id` VARCHAR(191) NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `concert_id` INTEGER NOT NULL,
    `sport_id` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `seat` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Ticket_ticket_id_key`(`ticket_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_concert_id_fkey` FOREIGN KEY (`concert_id`) REFERENCES `Concert`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_sport_id_fkey` FOREIGN KEY (`sport_id`) REFERENCES `Sports`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
