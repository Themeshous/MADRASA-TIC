CREATE DATABASE if not exists Madrasatic;
USE Madrasatic;

drop table if exists `users`;
CREATE TABLE `users` (
    id_user     INT    NOT NULL AUTO_INCREMENT, 
    /* ALTER TABLE users
       ADD id_user INT    NOT NULL AUTO_INCREMENT;  */
    Nom VARCHAR(50) NOT NULL,
    Prenom VARCHAR(50) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Role VARCHAR(50),
    Profession VARCHAR(50),
    Password VARCHAR(200) NOT NULL,
    Password1 VARCHAR(50),
    isActive BOOLEAN DEFAULT TRUE
);