Use madrasatic;
CREATE TABLE `announce` (
    `id_post`      INT    NOT NULL AUTO_INCREMENT,
    `datepost`        date ,             /* date de postulation de l'announce */
    `titre`       VARCHAR(100) NOT NULL,
    `organisateur` VARCHAR (100) ,      /* organisteur de l'event ou l'announce */
    `description` TEXT         NULL,    /* il peut contenir des infos en plus qui peuvent etre des attributs */ 
    `fichier`       BLOB         NULL,  /*on fera le path du fichier plus tard*/
    `img`    BLOB         NULL,         /* // */
    `lien` VARCHAR (100) NULL ,         /* par lien de googleform (inscription) */
    `etatpost`  BOOLEAN  DEFAULT FALSE, /* au cas de suppression */
    
      PRIMARY KEY (`id_post`)
    
);