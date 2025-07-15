use ELIXUER;

-- Inserts para usuario
INSERT INTO usuario (nombre, contrasenia, fecha_nacimiento) VALUES
('Lucas Perez', 'lucas123', '2002-04-15'),
('Maria Gomez', 'maria456', '1998-11-22'),
('Juan Diaz', 'juan789', '2000-06-03'),
('Sofia Martinez', 'sofia321', '1995-02-10'),
('Carlos Ruiz', 'carlos654', '1999-09-25'),
('Agustina Lopez', 'agus987', '2001-12-30'),
('Bruno Fernandez', 'bruno321', '2003-08-19'),
('Valentina Rossi', 'valen159', '2004-01-11'),
('Diego Torres', 'diego753', '1997-05-27'),
('Camila Castro', 'camila852', '1996-10-14');

-- Inserts para contactUs
INSERT INTO contactUs (nombre, apellido, email, mensaje, fecha_de_creacion) VALUES
('Lucia', 'Rojas', 'lucia.rojas@gmail.com', 'Consulta sobre productos en oferta.', NOW()),
('Tomas', 'Morales', 'tomasm@gmail.com', 'Quiero cambiar mi contraseña.', NOW()),
('Julieta', 'Sanchez', 'julietas@hotmail.com', 'No me llega el mail de confirmación.', NOW()),
('Mateo', 'Herrera', 'mateo.herrera@yahoo.com', 'Tienen envíos a Córdoba?', NOW()),
('Martina', 'Perez', 'martinap@gmail.com', 'Cómo funciona la devolución?', NOW()),
('Franco', 'Garcia', 'franco.garcia@gmail.com', 'Problemas al pagar con tarjeta.', NOW()),
('Isabella', 'Fernandez', 'isa.f@gmail.com', 'Me encantó la atención, gracias!', NOW()),
('Santiago', 'Luna', 'santiluna@hotmail.com', 'Podrían agregar más métodos de pago?', NOW()),
('Emilia', 'Navarro', 'emilia.nav@yahoo.com', 'Quiero dar de baja mi cuenta.', NOW()),
('Leonardo', 'Ortiz', 'leo.ortiz@gmail.com', 'El sitio anda lento hoy.', NOW());

-- Inserts para categoria
INSERT INTO categoria (nombre, descripcion) VALUES
('Perfumes', 'Fragancias elegantes para toda ocasión.'),
('Cremas', 'Cuidado de la piel, hidratación y protección.'),
('Maquillaje', 'Productos para resaltar tu belleza.'),
('Cuidado Capilar', 'Shampoos, acondicionadores y tratamientos para el cabello.'),
('Accesorios', 'Complementos para tu rutina de belleza.');

-- Inserts para marca
INSERT INTO marca (nombre) VALUES
('Dior'),
('Chanel'),
('Loreal'),
('Maybelline'),
('Lancome'),
('Natura'),
('MAC'),
('Revlon'),
('Pantene'),
('Head & Shoulders');

-- Inserts para oferta
INSERT INTO oferta (descuento) VALUES
(10),
(20),
(30),
(40),
(50),
(15),
(25),
(35),
(45),
(5);

-- Inserts para producto
INSERT INTO producto (nombre, descripcion, precio, idCategoria, idOferta, idMarca) VALUES
('Perfume Sauvage', 'Fragancia intensa para hombres.', 100, 1, 1, 1),
('Perfume J Adore', 'Perfume floral para mujeres.', 120, 1, 2, 2),
('Crema hidratante Loreal', 'Para piel seca, uso diario.', 30, 2, 3, 3),
('Base Fit Me', 'Base liquida natural.', 25, 3, 4, 4),
('Mascara de pestañas MAC', 'Volumen extremo.', 45, 3, 5, 7),
('Shampoo Reparador Pantene', 'Repara el cabello dañado.', 15, 4, 6, 9),
('Acondicionador Head & Shoulders', 'Anticaspa y suave.', 18, 4, 7, 10),
('Brocha de maquillaje', 'Brocha profesional para base.', 20, 5, 8, 5),
('Labial rojo Chanel', 'Color intenso y duradero.', 50, 3, 9, 2),
('Crema Natura Tododia', 'Hidratación profunda y aroma suave.', 35, 2, 10, 6),
('Serum Loreal Revitalift', 'Antiarrugas y firmeza.', 60, 2, 2, 3),
('Perfume Allure', 'Aroma delicado y elegante.', 110, 1, 4, 2),
('Spray fijador MAC', 'Fijación prolongada del maquillaje.', 40, 3, 1, 7),
('Crema facial Lancome', 'Hidratante anti age.', 70, 2, 3, 5),
('Set brochas Revlon', 'Incluye 5 brochas profesionales.', 55, 5, 6, 8);

-- Inserts para carrito
INSERT INTO carrito (idUsuario) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10);

-- Inserts para productoCarrito
INSERT INTO productoCarrito (idProducto, idCarrito, cantidadProducto) VALUES
(1, 1, 1),
(3, 1, 2),
(4, 2, 1),
(2, 3, 1),
(5, 4, 3),
(6, 5, 2),
(7, 6, 1),
(8, 7, 1),
(9, 8, 2),
(10, 9, 1),
(11, 10, 1),
(12, 1, 1),
(13, 2, 1),
(14, 3, 2),
(15, 4, 1);