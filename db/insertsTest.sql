INSERT INTO usuario (nombre, contrasenia, fecha_nacimiento) VALUES
('Camilo', '1234segura', '1998-04-12'),
('Laura', 'passlaura', '2000-06-25'),
('Julián', 'julian321', '1995-12-08');

INSERT INTO contactUs (nombre, apellido, email, fecha_de_creacion) VALUES
('Ana', 'Gómez', 'ana.gomez@example.com', NOW()),
('Luis', 'Pérez', 'luis.perez@example.com', NOW()),
('Carla', 'Ramírez', 'carla.ramirez@example.com', NOW());

INSERT INTO categoria (nombre, descripcion) VALUES
('Perfumes', 'Fragancias elegantes para toda ocasión.'),
('Cremas', 'Cremas hidratantes y rejuvenecedoras.'),
('Maquillaje', 'Maquillaje de alta calidad para todo tipo de piel.');

INSERT INTO marca (nombre) VALUES
('L’Oréal'),
('Dior'),
('Nivea');

INSERT INTO oferta (precio, descuento) VALUES
(8000, 20), -- 20% off
(12000, 25), -- 25% off
(4500, 10);  -- 10% off

INSERT INTO producto (nombre, descripcion, idCategoria, idOferta, idMarca) VALUES
('Perfume Sauvage', 'Fragancia intensa para hombres.', 1, 1, 2),
('Crema Nivea Soft', 'Crema hidratante para uso diario.', 2, 3, 3),
('Base L’Oréal True Match', 'Base líquida de cobertura media.', 3, 2, 1);

INSERT INTO carrito (idUsuario) VALUES
(1), -- Camilo
(2); -- Laura

INSERT INTO productoCarrito (idProducto, idCarrito, cantidadProducto) VALUES
(1, 1, 2), -- Camilo compra 2 Perfumes Sauvage
(3, 1, 1), -- Camilo compra 1 Base
(2, 2, 3); -- Laura compra 3 Cremas Nivea