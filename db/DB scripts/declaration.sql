create table declarations
(
    id_dec                   int auto_increment
        primary key,
    date                     date                 not null,
    titre                    varchar(100)         not null,
    description              text                 null,
    image_path               text                 null,
    emetteur                 varchar(45)          not null,
    localisation             varchar(45)          not null,
    type                     varchar(45)          not null,
    etat                     varchar(45)          not null,
    Supp                     tinyint(1) default 0 null,
    service                  varchar(50)          null,
    remarques_de_responsable text                 null,
    mobile_archived          tinyint(1) default 0 not null,
    priority                 varchar(45)          not null,
    constraint declarer
        foreign key (emetteur) references users (Email)
);

create index declarer_idx
    on declarations (emetteur);

