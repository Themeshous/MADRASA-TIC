CREATE TABLE `madrasatic`.`declarations`
(
    `id_dec`                   INT          NOT NULL AUTO_INCREMENT,
    `date`                     DATE  NOT NULL,
    `titre`                    VARCHAR(100) NOT NULL,
    `description`              TEXT         NULL,
    `image_path`               varchar(255) NULL,
    `emetteur`                 VARCHAR(45)  NOT NULL,
    `localisation`             VARCHAR(45)  NOT NULL,
    `service`                  VARCHAR(50)  NULL,
    `type`                     VARCHAR(45)  NOT NULL,
    `etat`                     VARCHAR(45)  NOT NULL,
    `Supp`                     BOOLEAN DEFAULT FALSE, /*faut ajouter ça pour nous aider a la suppression*/
    `IDrap`                    INT          NULL,
    `remarques_de_responsable` TEXT         NULL,
    PRIMARY KEY (`id_dec`),
    INDEX `declarer_idx` (`emetteur` ASC) VISIBLE,
    CONSTRAINT `declarer`
        FOREIGN KEY (`emetteur`)
            REFERENCES `madrasatic`.`users` (`Email`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
);
