/*Use madrasatic;*/
CREATE TABLE `rapports` (
    `id_rap`      INT          NOT NULL AUTO_INCREMENT,
    `date`        VARCHAR(45)  NOT NULL,
    `titre`       VARCHAR(100) NOT NULL,
    `description` TEXT         NULL,
    `fich_path` VARCHAR(255), /*on fera le path du fichier plus tard 
                               ALTER TABLE rapports CHANGE fichier fich_path VARCHAR(255);*/
    `service`    VARCHAR(45)  NOT NULL,
    `etat` VARCHAR(45)
    `Supp`     BOOLEAN  DEFAULT FALSE,
    `Suppint` BOOLEAN  DEFAULT FALSE, 
    
      PRIMARY KEY (`id_rap`)
    
);