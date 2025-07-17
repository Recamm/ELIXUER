create database ELIXUER;
use ELIXUER;

create table usuario (
	id int not null auto_increment,
    nombre varchar(45) not null,
    contrasenia varchar(45) not null,
    fecha_nacimiento date not null,
    primary key (id)
);

create table contactUs (
	id int not null auto_increment,
    nombre varchar(45) not null,
    apellido varchar(45) not null,
    email varchar(45) not null,
    mensaje varchar(255) not null,
    fecha_de_creacion datetime not null,
    primary key (id)
);

-- create table categoria (
-- 	id int not null auto_increment,
--     nombre varchar(45) not null,
--     descripcion varchar(255),
--     primary key (id)
-- );

create table marca (
    id int not null auto_increment,
    nombre varchar(45),
    primary key (id)
);

create table oferta (
	id int not null auto_increment,
    descuento int not null, -- En porcentaje
    primary key (id)
);

create table acorde (
    id int not null auto_increment,
    nombre varchar(45) not null,
    primary key (id)
);

create table producto (
	id int not null auto_increment,
	nombre varchar(255) not null,
    descripcion varchar(255) not null,
    especificaciones varchar(255) not null,
    precio int not null,
    idOferta int,
    idMarca int not null,
    primary key (id),
    foreign key (idOferta) references oferta(id),
    foreign key (idMarca) references marca(id)
);

create table productoAcordes (
    id int not null auto_increment,
    idProducto int not null,
    idAcorde int not null,
    primary key(id),
    foreign key (idProducto) references producto(id),
    foreign key (idAcorde) references acorde(id)
);

create table carrito (
	id int not null auto_increment,
    idUsuario int not null,
    primary key (id),
    foreign key (idUsuario) references usuario(id)
);

create table productoCarrito (
	id int not null auto_increment,
    idProducto int not null,
    idCarrito int not null,
    cantidadProducto int not null,
    primary key (id),
    foreign key (idProducto) references producto(id),
    foreign key (idCarrito) references carrito (id)
);

DROP DATABASE ELIXUER;