create table categorie_declaration
(
    categorie varchar(50) not null
        primary key,
    service   varchar(50) null,
    constraint categorie_declaration_services_service_fk
        foreign key (service) references services (service)
);