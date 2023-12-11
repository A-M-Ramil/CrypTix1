-- CreateTable
CREATE TABLE `Owner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pub_key` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Owner_pub_key_key`(`pub_key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
