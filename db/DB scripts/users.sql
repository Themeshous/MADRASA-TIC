CREATE DATABASE if not exists Madrasatic;
USE Madrasatic;
drop table if exists `users`;

CREATE TABLE `users` (
    `id_user` INT    NOT NULL AUTO_INCREMENT,  
    `Nom` VARCHAR(50) NOT NULL,
    `Prenom` VARCHAR(50) NOT NULL,
    `Email` VARCHAR(255) NOT NULL UNIQUE,
    `NumTel` VARCHAR(255)  NULL , /* faut ajouter ça */
    `Role` VARCHAR(50),
    `Profession` VARCHAR(50),
    `Password` VARCHAR(200) NOT NULL,
    `Password1` VARCHAR(50),
    `CodeVer` DOUBLE NULL DEFAULT '0' ,
    `isActive`BOOLEAN DEFAULT TRUE,
     PRIMARY KEY (`id_user`)
);