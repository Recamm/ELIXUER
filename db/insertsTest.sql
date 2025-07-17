use ELIXUER;

-- Marcas
insert into marca (nombre) values 
('Dior'),
('Chanel'),
('Paco Rabanne'),
('Versace'),
('Armani'),
('Carolina Herrera'),
('Tom Ford'),
('Yves Saint Laurent'),
('Burberry'),
('Givenchy');

-- Ofertas
insert into oferta (descuento) values
(0),
(10),
(20),
(30),
(40);

-- Acordes
insert into acorde (nombre) values
('Avainillado'),
('Dulce'),
('Amaderado'),
('Cítrico'),
('Fresco'),
('Aromático'),
('Picante suave'),
('Ámbar'),
('Almizclado'),
('Floral');

-- Productos (asigno ofertas y marcas aleatorias)
insert into producto (nombre, descripcion, especificaciones, precio, idOferta, idMarca) values
('Sauvage Dior', 'Perfume masculino intenso con notas frescas.', 'Sauvage de Dior es un perfume masculino inspirado en espacios abiertos. Combina bergamota de Calabria con ambroxan, notas frescas y amaderadas que generan un aroma elegante, salvaje y duradero en la piel.', 120, 1, 1),
('Bleu de Chanel', 'Fragancia elegante y misteriosa para hombres.', 'Bleu de Chanel es una fragancia amaderada aromática con notas de toronja, incienso, jengibre y sándalo. Ideal para el hombre moderno que busca sofisticación y frescura durante todo el día.', 150, 2, 2),
('1 Million', 'Perfume dulce y llamativo para hombres.', '1 Million de Paco Rabanne tiene notas de menta, canela, cuero y ámbar. Es un perfume dulce y cálido, perfecto para la noche, con gran proyección y duración.', 110, 3, 3),
('Eros', 'Perfume fresco y seductor.', 'Versace Eros combina menta, manzana verde, vainilla y cedro, creando una fragancia vibrante y sensual ideal para climas cálidos y salidas nocturnas.', 105, 1, 4),
('Acqua di Gio', 'Perfume fresco y marino.', 'Acqua di Gio de Armani mezcla notas de lima, jazmín, bergamota y cedro, evocando brisas marinas. Es un aroma clásico, fresco y versátil.', 95, 2, 5),
('Good Girl', 'Perfume femenino dulce y elegante.', 'Good Girl de Carolina Herrera es un perfume femenino con notas de almendra, café, jazmín sambac y cacao. Un aroma dulce, cálido y poderoso.', 135, 3, 6),
('Black Orchid', 'Perfume intenso y lujoso.', 'Black Orchid de Tom Ford presenta notas de trufa, chocolate oscuro, incienso y orquídea negra, creando un aroma oscuro y elegante, ideal para noches especiales.', 180, 4, 7),
('Y Eau de Parfum', 'Fragancia masculina fresca y moderna.', 'Y de Yves Saint Laurent combina bergamota, jengibre, manzana y almizcle. Es un perfume fresco con un toque amaderado, ideal para el día a día.', 140, 5, 8),
('Mr. Burberry', 'Fragancia masculina amaderada aromática.', 'Mr. Burberry tiene notas de pomelo, estragón, madera de guayaco y vetiver. Es un perfume elegante y masculino.', 100, 2, 9),
('Gentleman', 'Perfume masculino elegante y dulce.', 'Gentleman de Givenchy presenta notas de pera, lavanda, iris y vainilla negra, logrando un aroma cálido, dulce y sofisticado.', 145, 3, 10),
('Libre', 'Perfume femenino floral y fresco.', 'Libre de Yves Saint Laurent tiene notas de lavanda, mandarina, jazmín y vainilla, creando un aroma floral intenso y elegante.', 130, 1, 8),
('L’Interdit', 'Perfume femenino dulce y floral.', 'L’Interdit de Givenchy mezcla nardo, flor de azahar y pachuli, generando un aroma elegante y sofisticado para ocasiones especiales.', 125, 4, 10),
('Code Absolu', 'Perfume cálido y especiado.', 'Armani Code Absolu presenta notas de mandarina verde, cardamomo, haba tonka y madera de cedro, ideal para climas fríos y noches.', 160, 5, 5),
('Oud Wood', 'Perfume lujoso con oud.', 'Oud Wood de Tom Ford mezcla oud, palo de rosa, sándalo, vetiver y ámbar, creando un aroma oriental amaderado intenso.', 210, 2, 7),
('Invictus', 'Perfume fresco y deportivo.', 'Invictus de Paco Rabanne combina toronja, laurel, ámbar gris y madera de gaiac, logrando un perfume fresco con carácter ganador.', 115, 3, 3);

-- insert into producto (nombre, descripcion, especificaciones, precio, idMarca) values
-- ('Sauvage Dior', 'Perfume masculino intenso con notas frescas.', 'Sauvage de Dior es un perfume masculino inspirado en espacios abiertos. Combina bergamota de Calabria con ambroxan, notas frescas y amaderadas que generan un aroma elegante, salvaje y duradero en la piel.', 120, 1),
-- ('Bleu de Chanel', 'Fragancia elegante y misteriosa para hombres.', 'Bleu de Chanel es una fragancia amaderada aromática con notas de toronja, incienso, jengibre y sándalo. Ideal para el hombre moderno que busca sofisticación y frescura durante todo el día.', 150, 2),
-- ('1 Million', 'Perfume dulce y llamativo para hombres.', '1 Million de Paco Rabanne tiene notas de menta, canela, cuero y ámbar. Es un perfume dulce y cálido, perfecto para la noche, con gran proyección y duración.', 110, 3),
-- ('Eros', 'Perfume fresco y seductor.', 'Versace Eros combina menta, manzana verde, vainilla y cedro, creando una fragancia vibrante y sensual ideal para climas cálidos y salidas nocturnas.', 105, 4),
-- ('Acqua di Gio', 'Perfume fresco y marino.', 'Acqua di Gio de Armani mezcla notas de lima, jazmín, bergamota y cedro, evocando brisas marinas. Es un aroma clásico, fresco y versátil.', 95, 5),
-- ('Good Girl', 'Perfume femenino dulce y elegante.', 'Good Girl de Carolina Herrera es un perfume femenino con notas de almendra, café, jazmín sambac y cacao. Un aroma dulce, cálido y poderoso.', 135, 6),
-- ('Black Orchid', 'Perfume intenso y lujoso.', 'Black Orchid de Tom Ford presenta notas de trufa, chocolate oscuro, incienso y orquídea negra, creando un aroma oscuro y elegante, ideal para noches especiales.', 180, 7),
-- ('Y Eau de Parfum', 'Fragancia masculina fresca y moderna.', 'Y de Yves Saint Laurent combina bergamota, jengibre, manzana y almizcle. Es un perfume fresco con un toque amaderado, ideal para el día a día.', 140, 8),
-- ('Mr. Burberry', 'Fragancia masculina amaderada aromática.', 'Mr. Burberry tiene notas de pomelo, estragón, madera de guayaco y vetiver. Es un perfume elegante y masculino.', 100, 9),
-- ('Gentleman', 'Perfume masculino elegante y dulce.', 'Gentleman de Givenchy presenta notas de pera, lavanda, iris y vainilla negra, logrando un aroma cálido, dulce y sofisticado.', 145, 10),
-- ('Libre', 'Perfume femenino floral y fresco.', 'Libre de Yves Saint Laurent tiene notas de lavanda, mandarina, jazmín y vainilla, creando un aroma floral intenso y elegante.', 130, 8),
-- ('L’Interdit', 'Perfume femenino dulce y floral.', 'L’Interdit de Givenchy mezcla nardo, flor de azahar y pachuli, generando un aroma elegante y sofisticado para ocasiones especiales.', 125, 10),
-- ('Code Absolu', 'Perfume cálido y especiado.', 'Armani Code Absolu presenta notas de mandarina verde, cardamomo, haba tonka y madera de cedro, ideal para climas fríos y noches.', 160, 5),
-- ('Oud Wood', 'Perfume lujoso con oud.', 'Oud Wood de Tom Ford mezcla oud, palo de rosa, sándalo, vetiver y ámbar, creando un aroma oriental amaderado intenso.', 210, 7),
-- ('Invictus', 'Perfume fresco y deportivo.', 'Invictus de Paco Rabanne combina toronja, laurel, ámbar gris y madera de gaiac, logrando un perfume fresco con carácter ganador.', 115, 3);


insert into producto (nombre, descripcion, especificaciones, precio, idOferta, idMarca) values
('L’Homme Ideal', 'Perfume masculino dulce y elegante.', 'L’Homme Ideal de Guerlain combina almendra, cuero y vainilla, creando un aroma sofisticado y cálido para hombres con clase.', 135, 1, 2),
('Aventus', 'Perfume masculino frutal y amaderado.', 'Aventus de Creed tiene notas de piña, bergamota, almizcle y musgo de roble. Es un aroma elegante, fuerte y duradero.', 350, 2, 4),
('Fahrenheit', 'Perfume masculino cálido y floral.', 'Fahrenheit de Dior mezcla cuero, violeta y nuez moscada para un aroma único, clásico y seductor.', 120, 3, 1),
('Light Blue', 'Perfume fresco y cítrico.', 'Light Blue de Dolce & Gabbana tiene notas de manzana, cedro, campanilla y bambú, logrando un aroma vibrante para días calurosos.', 110, 4, 3),
('The One', 'Perfume cálido y especiado.', 'The One de Dolce & Gabbana combina tabaco, jengibre y cardamomo para un aroma elegante y masculino.', 140, 5, 3),
('Le Male', 'Perfume dulce y seductor.', 'Le Male de Jean Paul Gaultier tiene notas de menta, lavanda y vainilla, logrando un perfume cálido y atractivo.', 115, 1, 2),
('La Vie Est Belle', 'Perfume femenino dulce y floral.', 'La Vie Est Belle de Lancôme combina pera, grosella negra, praliné y vainilla para un aroma femenino dulce y elegante.', 145, 2, 6),
('Olympea', 'Perfume femenino salado y dulce.', 'Olympea de Paco Rabanne presenta notas de vainilla, jazmín y sal marina para un aroma único y adictivo.', 135, 3, 3),
('Flowerbomb', 'Perfume explosivo floral.', 'Flowerbomb de Viktor & Rolf mezcla té, bergamota, jazmín y pachulí para un perfume femenino intenso y sofisticado.', 155, 4, 7),
('Pure XS', 'Perfume dulce y cálido.', 'Pure XS de Paco Rabanne combina vainilla, jengibre y canela, generando un aroma masculino dulce y atrevido.', 125, 5, 3),

('Intense Café', 'Perfume unisex dulce y ambarado.', 'Intense Café de Montale tiene notas de café, rosa y vainilla, logrando un perfume dulce y acogedor con gran proyección.', 170, 1, 8),
('Scandal', 'Perfume femenino dulce y sensual.', 'Scandal de Jean Paul Gaultier mezcla miel, gardenia, naranja sanguina y pachulí, logrando un aroma poderoso y atractivo.', 150, 2, 2),
('Ultra Male', 'Perfume masculino dulce y frutal.', 'Ultra Male de Jean Paul Gaultier combina pera, canela, vainilla y lavanda, ideal para la noche y el frío.', 135, 3, 2),
('Armani Stronger With You', 'Perfume dulce y especiado.', 'Stronger With You tiene notas de castaña, vainilla y cardamomo, creando un aroma cálido, moderno y juvenil.', 140, 4, 5),
('Spicebomb', 'Perfume especiado y fresco.', 'Spicebomb de Viktor & Rolf mezcla pimienta, canela, tabaco y toronja, generando un perfume masculino explosivo y atractivo.', 155, 5, 7),

('Boss Bottled', 'Perfume fresco y amaderado.', 'Boss Bottled de Hugo Boss tiene notas de manzana, canela y sándalo para un aroma versátil y elegante.', 125, 1, 4),
('Versace Dylan Blue', 'Perfume fresco y acuático.', 'Dylan Blue combina bergamota, toronja, incienso y almizcle para un aroma juvenil y moderno.', 130, 2, 4),
('212 VIP Men', 'Perfume dulce y fiestero.', '212 VIP Men de Carolina Herrera presenta vodka, maracuyá, menta y especias para un aroma enérgico y nocturno.', 135, 3, 6),
('212 Sexy Men', 'Perfume cálido y seductor.', '212 Sexy Men de Carolina Herrera tiene notas de vainilla, sándalo y mandarina, logrando un perfume sensual y elegante.', 130, 4, 6),
('CH Men Prive', 'Perfume cálido y ambarado.', 'CH Men Prive mezcla whisky, cuero y toronja para un aroma masculino sofisticado y sensual.', 145, 5, 6),

('Wanted', 'Perfume dulce y especiado.', 'Wanted de Azzaro combina cardamomo, limón, jengibre y haba tonka, logrando un perfume moderno y llamativo.', 125, 1, 3),
('Wanted by Night', 'Perfume especiado y cálido.', 'Wanted by Night tiene canela, tabaco y cedro, generando un aroma masculino seductor ideal para la noche.', 130, 2, 3),
('Armani Code', 'Perfume elegante y especiado.', 'Armani Code mezcla bergamota, anís estrellado y cuero para un aroma sofisticado y misterioso.', 140, 3, 5),
('Terre d’Hermes', 'Perfume amaderado y cítrico.', 'Terre d’Hermes combina naranja, vetiver y cedro para un aroma elegante, seco y sofisticado.', 150, 4, 4),
('CK One', 'Perfume unisex fresco y cítrico.', 'CK One de Calvin Klein tiene notas de piña, mandarina, papaya y ámbar, creando un aroma juvenil y versátil.', 95, 5, 8),

('Nuit d’Issey', 'Perfume oscuro y amaderado.', 'Nuit d’Issey de Issey Miyake combina toronja, cuero y vainilla, generando un perfume nocturno y elegante.', 120, 1, 2),
('Explorer', 'Perfume fresco y amaderado.', 'Explorer de Montblanc mezcla bergamota, pachuli y cacao para un aroma masculino moderno y elegante.', 110, 2, 8),
('Allure Homme Sport', 'Perfume fresco y cítrico.', 'Allure Homme Sport de Chanel combina mandarina, almizcle y tonka, generando un perfume deportivo elegante.', 140, 3, 2),
('L’Homme', 'Perfume fresco y especiado.', 'L’Homme de Yves Saint Laurent tiene notas de jengibre, bergamota y cedro para un aroma elegante y versátil.', 135, 4, 8),
('Pour Homme', 'Perfume clásico masculino.', 'Pour Homme de Versace combina limón, neroli y cedro, creando un aroma fresco y limpio.', 115, 5, 4),

('Black XS', 'Perfume dulce y rockero.', 'Black XS de Paco Rabanne mezcla limón, praliné y ámbar negro, logrando un aroma juvenil y rebelde.', 125, 1, 3),
('Pure XS for Her', 'Perfume femenino dulce y oriental.', 'Pure XS for Her tiene notas de vainilla, palomitas y ylang-ylang, creando un aroma femenino atrevido y adictivo.', 135, 2, 3),
('Dior Addict', 'Perfume femenino intenso y floral.', 'Dior Addict combina flor de azahar, jazmín sambac y vainilla para un aroma elegante, sensual y duradero.', 150, 3, 1),
('J’adore', 'Perfume femenino floral y elegante.', 'J’adore de Dior tiene notas de ylang-ylang, rosa damascena y jazmín sambac, logrando un perfume clásico y femenino.', 145, 4, 1),
('Miss Dior', 'Perfume femenino dulce y fresco.', 'Miss Dior combina rosa, mandarina y pachuli para un aroma femenino romántico y moderno.', 140, 5, 1),

('Gucci Bloom', 'Perfume femenino floral.', 'Gucci Bloom mezcla jazmín, nardo y raíz de lirio para un aroma floral blanco clásico y elegante.', 150, 1, 4),
('Gucci Guilty', 'Perfume dulce y especiado.', 'Gucci Guilty de Gucci combina lavanda, limón y pachuli, logrando un perfume seductor y juvenil.', 140, 2, 4),
('Hypnotic Poison', 'Perfume femenino dulce e intenso.', 'Hypnotic Poison de Dior tiene notas de almendra, vainilla y sándalo, creando un aroma femenino adictivo y misterioso.', 155, 3, 1),
('Alien', 'Perfume femenino ambarado y misterioso.', 'Alien de Mugler mezcla jazmín sambac, ámbar y notas amaderadas, generando un perfume potente y único.', 160, 4, 7),
('Angel', 'Perfume dulce y avainillado.', 'Angel de Mugler combina chocolate, caramelo, vainilla y pachuli para un perfume dulce, intenso y distintivo.', 150, 5, 7);


-- ProductoAcordes (relaciona productos con acordes aleatorios)
insert into productoAcordes (idProducto, idAcorde) values
(1, 3), (1, 4), (1, 6),
(2, 3), (2, 7), (2, 6),
(3, 1), (3, 2), (3, 8),
(4, 4), (4, 1), (4, 5),
(5, 4), (5, 6), (5, 3),
(6, 1), (6, 2), (6, 10),
(7, 3), (7, 8), (7, 7),
(8, 4), (8, 6), (8, 3),
(9, 3), (9, 6), (9, 4),
(10, 1), (10, 10), (10, 3),
(11, 10), (11, 4), (11, 1),
(12, 10), (12, 1), (12, 2),
(13, 7), (13, 3), (13, 8),
(14, 3), (14, 8), (14, 7),
(15, 4), (15, 6), (15, 3);