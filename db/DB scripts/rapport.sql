/*Use madrasatic;*/
CREATE TABLE `rapports` (
    `id_rap`      INT          NOT NULL AUTO_INCREMENT,
    `date`        VARCHAR(45)  NOT NULL,
    `titre`       VARCHAR(100) NOT NULL,
    `description` TEXT         NULL,
    `fichier`       BLOB         NULL, /*on fera le path du fichier plus tard*/
    `service`    VARCHAR(45)  NOT NULL,
    `etat` VARCHAR(45)
    `Supp`     BOOLEAN  DEFAULT FALSE,
    
      PRIMARY KEY (`id_rap`)
    
);