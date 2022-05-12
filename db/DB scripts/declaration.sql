CREATE TABLE `madrasatic`.`declarations`
(
    `id_dec`      INT          NOT NULL AUTO_INCREMENT,
    `date`        VARCHAR(45)  NOT NULL,
    `titre`       VARCHAR(100) NOT NULL,
    `description` TEXT         NULL,
    `image`       BLOB         NULL, /*on fera le path de l'image plus tard*/
    `emetteur`    VARCHAR(45)  NOT NULL,
    `localisation` VARCHAR(45) NOT NULL,
    `Supp` BOOLEAN  DEFAULT FALSE, /*faut ajouter ça pour nous aider a la suppression*/
    PRIMARY KEY (`id_dec`),
    INDEX `declarer_idx` (`emetteur` ASC) VISIBLE,
    CONSTRAINT `declarer`
        FOREIGN KEY (`emetteur`)
            REFERENCES `madrasatic`.`users` (`Email`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
);
