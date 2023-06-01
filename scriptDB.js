-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-06-2023 a las 16:20:56
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brand_product`
--

CREATE TABLE `brand_product` (
  `brand_id` int(11) NOT NULL,
  `brand_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `brand_product`
--

INSERT INTO `brand_product` (`brand_id`, `brand_name`) VALUES
(1, 'ansilta'),
(11, 'bergans of norway'),
(4, 'fjällräven'),
(5, 'haglöfs'),
(6, 'montane'),
(10, 'norrona'),
(7, 'rab'),
(9, 'salewa'),
(3, 'ternua'),
(2, 'trangoworld'),
(8, 'vaude');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category_product`
--

CREATE TABLE `category_product` (
  `idcategory_product` int(11) NOT NULL,
  `category` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `category_product`
--

INSERT INTO `category_product` (`idcategory_product`, `category`) VALUES
(4, 'accesorios'),
(3, 'hombre'),
(2, 'mujer'),
(1, 'niño');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clothes_type`
--

CREATE TABLE `clothes_type` (
  `id` int(11) NOT NULL,
  `type` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `clothes_type`
--

INSERT INTO `clothes_type` (`id`, `type`) VALUES
(2, 'buzo'),
(3, 'camisa'),
(1, 'campera'),
(4, 'chaleco'),
(5, 'gorra'),
(6, 'lentes'),
(7, 'pantalon'),
(8, 'remera'),
(9, 'zapatillas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contact_user`
--

CREATE TABLE `contact_user` (
  `idcontact_user` int(11) NOT NULL,
  `address` varchar(100) NOT NULL,
  `floor` smallint(6) DEFAULT NULL,
  `number` smallint(6) DEFAULT NULL,
  `apartment` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `contact_user`
--

INSERT INTO `contact_user` (`idcontact_user`, `address`, `floor`, `number`, `apartment`) VALUES
(1, 'Sarmiento', NULL, 580, NULL),
(2, 'Av. Santa Fe', 3, 895, '5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favorite_product`
--

CREATE TABLE `favorite_product` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `favorite_product`
--

INSERT INTO `favorite_product` (`id`, `user_id`, `product_id`) VALUES
(1, 4, 2),
(2, 4, 4),
(25, 8, 8),
(26, 8, 27),
(27, 8, 3),
(30, 16, 7),
(31, 16, 1),
(32, 8, 29);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `image_product`
--

CREATE TABLE `image_product` (
  `id` int(11) NOT NULL,
  `image_route` varchar(45) NOT NULL DEFAULT 'image.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `image_product`
--

INSERT INTO `image_product` (`id`, `image_route`) VALUES
(4, 'Camisa-1-H-lateral.jpg'),
(5, 'Camisa-1-H-reverso.jpg'),
(6, 'Camisa-1-H.jpg'),
(7, 'Camisa-2-F-lateral.jpg'),
(8, 'Camisa-2-F-reverso.jpg'),
(9, 'Camisa-2-F.jpg'),
(1, 'Campera-Abrigo-F-lateral.jpg'),
(2, 'Campera-Abrigo-F-reverso.jpg'),
(3, 'Campera-Abrigo-F.jpg'),
(10, 'Campera-Abrigo-H.jpg'),
(14, 'Campera-Abrigo-lateral-H.jpg'),
(11, 'Campera-Abrigo-N-lateral.jpg'),
(12, 'Campera-Abrigo-N-reverso.jpg'),
(13, 'Campera-Abrigo-N.jpg'),
(15, 'Campera-Abrigo-reverso-H.jpg'),
(16, 'Chaleco-N-lateral.jpg'),
(17, 'Chaleco-N-reverso.jpg'),
(18, 'Chaleco-N.jpg'),
(19, 'Gorra-acc-frontal.jpg'),
(20, 'Gorra-acc.jpg'),
(45, 'image.png'),
(46, 'img-1678661662947.png'),
(47, 'img-1678837601347.png'),
(48, 'img-1679071722636.png'),
(49, 'img-1679073315532.png'),
(50, 'img-1679073666801.png'),
(51, 'img-1679074662548.png'),
(52, 'img-1679078985260.png'),
(53, 'img-1679079826997.png'),
(54, 'img-1679080758151.png'),
(55, 'img-1679080896268.png'),
(56, 'img-1679081529215.png'),
(57, 'img-1679081618273.png'),
(58, 'img-1679081646999.png'),
(59, 'img-1679081651548.png'),
(60, 'img-1679081978614.png'),
(61, 'img-1679082202681.png'),
(62, 'img-1679146659788.png'),
(63, 'img-1679615024182.png'),
(64, 'img-1680653876817.png'),
(65, 'img-1680996796691.png'),
(66, 'img-1684350904416.png'),
(67, 'img-1684354709390.png'),
(68, 'img-1684354927312.png'),
(69, 'img-1684355175423.png'),
(70, 'img-1684417119812.jpg'),
(71, 'img-1684519850262.png'),
(72, 'img-1684708370945.jpg'),
(73, 'img-1684708467570.png'),
(74, 'img-1684711821096.jpg'),
(75, 'img-1684711861388.png'),
(76, 'img-1684799679750.jpg'),
(77, 'img-1685623163446.jpg'),
(21, 'Lentes-1-Acc-estuche.jpg'),
(22, 'Lentes-1-Acc.jpg'),
(23, 'Lentes-2-Acc-estuche.jpg'),
(24, 'Lentes-2-Acc.jpg'),
(25, 'Pantalon-1-H.jpg'),
(26, 'Pantalon-1-lateral-H.jpg'),
(27, 'Pantalon-1-reverso-H.jpg'),
(28, 'Pantalon-2-F-lateral.jpg'),
(29, 'Pantalon-2-F-reverso.jpg'),
(30, 'Pantalon-2-F.jpg'),
(31, 'Pantalon-3-N-lateral.jpg'),
(32, 'Pantalon-3-N-reverso.jpg'),
(33, 'Pantalon-3-N.jpg'),
(34, 'Remera-1-F-lateral.jpg'),
(35, 'Remera-1-F-reverso.jpg'),
(36, 'Remera-1-F.jpg'),
(37, 'Remera-1-H-lateral.jpg'),
(38, 'Remera-1-H-reverso.jpg'),
(39, 'Remera-1-H.jpg'),
(40, 'Remera-3-N-reverso.jpg'),
(41, 'Remera-3-N.jpg'),
(42, 'Zapas-acc-dif.jpg'),
(43, 'Zapas-acc-lateral.jpg'),
(44, 'Zapas-acc.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `other_images`
--

CREATE TABLE `other_images` (
  `id_images` int(11) NOT NULL,
  `image` varchar(45) NOT NULL DEFAULT 'image.jpg',
  `id_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `other_images`
--

INSERT INTO `other_images` (`id_images`, `image`, `id_product`) VALUES
(26, 'Campera-Abrigo-F-lateral.jpg', 1),
(27, 'Campera-Abrigo-F-reverso.jpg', 1),
(28, 'Camisa-1-H-lateral.jpg', 2),
(29, 'Camisa-1-H-reverso.jpg', 2),
(30, 'Campera-Abrigo-lateral-H.jpg', 4),
(31, 'Campera-Abrigo-reverso-H.jpg', 4),
(32, 'Chaleco-N-lateral.jpg', 6),
(33, 'Chaleco-N-reverso.jpg', 6),
(34, 'Gorra-acc-frontal.jpg', 7),
(35, 'Lentes-1-Acc-estuche.jpg', 8),
(36, 'Lentes-1-Acc.jpg', 8),
(37, 'Lentes-2-Acc-estuche.jpg', 9),
(38, 'Lentes-2-Acc.jpg', 9),
(39, 'Pantalon-1-H-lateral.jpg', 10),
(40, 'Pantalon-1-reverso-H.jpg', 10),
(41, 'Pantalon-2-F-lateral.jpg', 11),
(42, 'Pantalon-2-F-reverso.jpg', 11),
(43, 'Pantalon-3-N-lateral.jpg', 12),
(44, 'Pantalon-3-N-reverso.jpg', 12),
(45, 'Remera-1-F-lateral.jpg', 13),
(46, 'Remera-1-F-reverso.jpg', 13),
(47, 'Remera-1-H-lateral.jpg', 14),
(48, 'Remera-1-H-reverso.jpg', 14),
(49, 'Zapas-acc-dif.jpg', 16),
(50, 'Zapas-acc-lateral.jpg', 16),
(53, 'img-1678837601385.png', 18),
(71, 'img-1684708370949.png', 27),
(72, 'img-1684708371026.png', 27),
(73, 'img-1684708371066.png', 27),
(81, 'img-1685623163451.jpg', 29),
(82, 'img-1685623163453.jpg', 29);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `idProduct` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `clothes_type_id` int(11) NOT NULL,
  `waist_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` int(11) NOT NULL,
  `description` text DEFAULT '"Sin descripcion"',
  `stars` int(11) DEFAULT NULL,
  `image_product_id` int(11) NOT NULL,
  `discount` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`idProduct`, `category_id`, `clothes_type_id`, `waist_id`, `brand_id`, `name`, `price`, `description`, `stars`, `image_product_id`, `discount`) VALUES
(1, 2, 1, 1, 1, 'Campera de abrigo Damas', 5890, 'Una campera de abrigo para damas diseñada para mantenerte cálida y protegida durante tus aventuras en la montaña. ¡Combina estilo y funcionalidad en cada paso!', 0, 3, 0),
(2, 3, 3, 1, 1, 'Camisa salidora Hombres', 3890, 'Una elegante camisa salidora para hombres, perfecta para lucirte en tus excursiones. Su diseño resistente y cómodo te mantendrá fresco en todo momento.', 0, 6, 0),
(3, 2, 3, 1, 1, 'Camisa salidora Mujeres', 3390, 'Una camisa salidora para mujeres, ideal para las amantes de la montaña. Su estilo moderno y tejido duradero te acompañarán en cada travesía.', 0, 9, 0),
(4, 3, 1, 1, 1, 'Campera de abrigo Hombres', 8390, 'Una campera de abrigo resistente para hombres, diseñada para protegerte del frío extremo. Su diseño funcional y moderno te mantendrá abrigado sin renunciar al estilo.', 0, 10, 0),
(5, 1, 1, 1, 1, 'Campera de abrigo Niños', 6390, 'Una campera de abrigo especialmente diseñada para los más pequeños. Mantén a tus niños calientes y cómodos mientras disfrutan de la naturaleza.', 0, 13, 0),
(6, 1, 4, 1, 1, 'Chaleco para Niños', 6390, 'Un chaleco para niños perfecto para añadir una capa extra de calidez en sus aventuras al aire libre. Su diseño práctico y ajustable los mantendrá cómodos todo el día.', 0, 18, 0),
(7, 4, 5, 1, 1, 'Gorra deportiva', 3190, 'Una gorra deportiva imprescindible para protegerte del sol mientras practicas tus actividades favoritas en la montaña. Combina estilo y protección en un solo accesorio.', 0, 20, 0),
(8, 4, 6, 1, 1, 'Lentes 1', 3190, 'Estos lentes de alta calidad no solo te protegerán de los rayos UV, sino que también te brindarán una visión clara y nítida en tus actividades al aire libre.', 0, 22, 0),
(9, 4, 6, 1, 1, 'Lentes 2', 3190, 'Descubre el mundo con estos modernos lentes diseñados para ofrecerte una visión panorámica y una protección óptima. El complemento perfecto para tus aventuras.', 0, 24, 0),
(10, 3, 7, 1, 1, 'Pantalon Hombre', 4190, 'Un pantalón duradero y resistente para hombres, ideal para tus actividades al aire libre. Su diseño ergonómico y tejido de calidad te brindarán comodidad y estilo.', 0, 25, 0),
(11, 2, 7, 1, 1, 'Pantalon Femenino', 4190, 'Un pantalón femenino diseñado para las amantes de la montaña. Combina funcionalidad y moda en cada paso. ¡Disfruta de la comodidad sin sacrificar el estilo!', 0, 30, 0),
(12, 1, 7, 1, 1, 'Pantalon Niños', 4190, 'Un pantalón para niños que los mantendrá cómodos y protegidos durante sus aventuras al aire libre. Diseñado pensando en su libertad de movimiento y durabilidad.', 0, 33, 0),
(13, 2, 8, 1, 1, 'Remera femenina', 4090, 'Una remera femenina de alta calidad, perfecta para tus actividades en la montaña. Su diseño transpirable y ajuste cómodo te mantendrán fresca en todo momento.', 0, 36, 0),
(14, 3, 8, 1, 1, 'Remera masculina', 4090, 'Una remera masculina diseñada para los amantes de la montaña. Combina estilo y rendimiento en cada aventura. ¡Siéntete cómodo y seguro en todo momento!', 0, 39, 0),
(15, 1, 8, 1, 1, 'Remera Niños', 4090, 'Una remera para niños diseñada para acompañarlos en sus exploraciones al aire libre. Su suave tejido y ajuste cómodo les brindarán libertad de movimiento mientras disfrutan de la naturaleza y se divierten al máximo.', 0, 41, 0),
(16, 4, 9, 1, 1, 'Zapatillas', 7390, 'Descubre la combinación perfecta de estilo y rendimiento con estas zapatillas diseñadas para tus aventuras al aire libre. Su suela resistente y amortiguación óptima te brindarán comodidad en cada paso.', 0, 44, 0),
(18, 3, 3, 2, 1, 'PRODUCTO 222', 3232, 'asdasd', 0, 47, 0),
(27, 2, 1, 5, 6, 'Campera Hombre Mujer color roja', 21036, 'Campera de abrigo, muy liviana, ideal para actividades de montaña y zonas urbanas. Especialmente diseñada para adaptarse al cuerpo, mejorando el ajuste y la eficiencia térmica. Tejido Pertex® Quantum. Relleno de plumón ALLIED® 800 FP.', 0, 72, 0),
(29, 3, 2, 2, 11, 'Campera', 5455, 'Camperra copada para el proyecto', 0, 77, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sale_by_product`
--

CREATE TABLE `sale_by_product` (
  `sale_by_user_id` int(11) NOT NULL,
  `Product_idProduct` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `sale_by_product`
--

INSERT INTO `sale_by_product` (`sale_by_user_id`, `Product_idProduct`, `quantity`, `unit_price`, `id`) VALUES
(1, 1, 1, 5890, 1),
(2, 1, 1, 7000, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sale_by_user`
--

CREATE TABLE `sale_by_user` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `detalle` varchar(45) DEFAULT NULL,
  `numero_factura` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `sale_by_user`
--

INSERT INTO `sale_by_user` (`id`, `user_id`, `detalle`, `numero_factura`) VALUES
(1, 4, 'detalle de user_has_detalle_venta', 'asa556asasdas8a6'),
(2, 3, 'sasasa', 'asa55sa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubication_user`
--

CREATE TABLE `ubication_user` (
  `idubication_user` int(11) NOT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state/province` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `postal_code` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `ubication_user`
--

INSERT INTO `ubication_user` (`idubication_user`, `city`, `state/province`, `country`, `postal_code`) VALUES
(1, 'Albani', 'New York', 'USA', '8621'),
(2, 'Capital Federal', 'Buenos Aires', 'Argentina', '2000'),
(3, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `iduser` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `avatar` varchar(45) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `contact_user` int(11) DEFAULT NULL,
  `ubication_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`iduser`, `name`, `last_name`, `email`, `password`, `avatar`, `is_admin`, `contact_user`, `ubication_user`) VALUES
(1, 'Marcos', 'Gomez', 'jesusMarcosgomez@example.com', 'password12333', 'imagenUsuario.png', 0, 2, 2),
(2, 'Juan', 'Pérez', 'juanperez@example.com', 'password123', 'imagenUsuario.png', 0, 1, 1),
(3, 'Jesus', 'Gomez', 'jesusgomez@example.com', 'password12333', 'imagenUsuario.png', 0, 2, 2),
(4, 'Axel', 'Rivero', 'axel@gmail.com', 'Axel1234', 'avatar-1676074150283.png', 1, 2, 2),
(5, 'jorge', 'mora', 'jorge@mora.com', 'JorgeMora1234', 'avatar-1679176865224.png', 0, NULL, NULL),
(8, 'Hash Super', 'Ketchup recargado', 'hash@hash.com', '$2a$10$6rWwuAxA0oXDLQ/dfKsNC.A1ksW.gs8A6gbq0kznBhRtwtZFxvSSm', 'avatar-1683158724563.png', 0, NULL, NULL),
(9, 'CHATGPT', 'MARTINEZ', 'culmen@cito.com', '$2a$10$81/uvAMioDKZroLDauE.yeohGhThWoXKMBYR/xMpEHUU/8PgmlK/a', 'avatar-1683159220906.png', 0, NULL, NULL),
(10, 'Axel', 'Rivero coronel', 'Riverocoronelaxel1@gmail.com', '$2a$10$PWLGPRfJK.vtDvGUXk2VDupSgbQHFWjKaInpkmJCT6Mek8LC6Pwbi', 'avatar-1684164454459.png', 0, NULL, NULL),
(16, 'Lionel', 'Messi', 'messi@gmail.com', '$2a$10$KtgTf0mKkdgVcATCQNrs2Oqn2jiE/GYOy081mIKZIjp/dVR0xNJD.', 'avatar-1684786866897.jpg', 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `waist`
--

CREATE TABLE `waist` (
  `id` int(11) NOT NULL,
  `waist` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `waist`
--

INSERT INTO `waist` (`id`, `waist`) VALUES
(4, 'l'),
(3, 'm'),
(2, 's'),
(5, 'xl'),
(1, 'xs'),
(6, 'xxl'),
(7, 'xxxl');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brand_product`
--
ALTER TABLE `brand_product`
  ADD PRIMARY KEY (`brand_id`),
  ADD UNIQUE KEY `brand_name_UNIQUE` (`brand_name`);

--
-- Indices de la tabla `category_product`
--
ALTER TABLE `category_product`
  ADD PRIMARY KEY (`idcategory_product`),
  ADD UNIQUE KEY `category_UNIQUE` (`category`);

--
-- Indices de la tabla `clothes_type`
--
ALTER TABLE `clothes_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `type_UNIQUE` (`type`);

--
-- Indices de la tabla `contact_user`
--
ALTER TABLE `contact_user`
  ADD PRIMARY KEY (`idcontact_user`);

--
-- Indices de la tabla `favorite_product`
--
ALTER TABLE `favorite_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id_idx` (`product_id`),
  ADD KEY `user_id_idx` (`user_id`);

--
-- Indices de la tabla `image_product`
--
ALTER TABLE `image_product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `image_route_UNIQUE` (`image_route`);

--
-- Indices de la tabla `other_images`
--
ALTER TABLE `other_images`
  ADD PRIMARY KEY (`id_images`),
  ADD KEY `id_product_idx` (`id_product`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`idProduct`),
  ADD KEY `fk_Product_category_product_idx` (`category_id`),
  ADD KEY `fk_Product_clothes_type1_idx` (`clothes_type_id`),
  ADD KEY `fk_Product_waist1_idx` (`waist_id`),
  ADD KEY `brand_id_idx` (`brand_id`),
  ADD KEY `image_product_id_idx` (`image_product_id`);

--
-- Indices de la tabla `sale_by_product`
--
ALTER TABLE `sale_by_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_has_detalle_venta_has_Product_Product1_idx` (`Product_idProduct`),
  ADD KEY `fk_user_has_detalle_venta_has_Product_user_has_detalle_vent_idx` (`sale_by_user_id`);

--
-- Indices de la tabla `sale_by_user`
--
ALTER TABLE `sale_by_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `numero_factura_UNIQUE` (`numero_factura`),
  ADD KEY `user_id_idx` (`user_id`);

--
-- Indices de la tabla `ubication_user`
--
ALTER TABLE `ubication_user`
  ADD PRIMARY KEY (`idubication_user`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`iduser`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD KEY `contact_user_idx` (`contact_user`),
  ADD KEY `fk_user_ubication_user1_idx` (`ubication_user`);

--
-- Indices de la tabla `waist`
--
ALTER TABLE `waist`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `waist_UNIQUE` (`waist`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brand_product`
--
ALTER TABLE `brand_product`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `category_product`
--
ALTER TABLE `category_product`
  MODIFY `idcategory_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `clothes_type`
--
ALTER TABLE `clothes_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `contact_user`
--
ALTER TABLE `contact_user`
  MODIFY `idcontact_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `favorite_product`
--
ALTER TABLE `favorite_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `image_product`
--
ALTER TABLE `image_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT de la tabla `other_images`
--
ALTER TABLE `other_images`
  MODIFY `id_images` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `idProduct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `sale_by_product`
--
ALTER TABLE `sale_by_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `sale_by_user`
--
ALTER TABLE `sale_by_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ubication_user`
--
ALTER TABLE `ubication_user`
  MODIFY `idubication_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `waist`
--
ALTER TABLE `waist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `favorite_product`
--
ALTER TABLE `favorite_product`
  ADD CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`idProduct`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `other_images`
--
ALTER TABLE `other_images`
  ADD CONSTRAINT `id_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`idProduct`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `brand_id` FOREIGN KEY (`brand_id`) REFERENCES `brand_product` (`brand_id`),
  ADD CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `category_product` (`idcategory_product`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `clothes_id` FOREIGN KEY (`clothes_type_id`) REFERENCES `clothes_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `image_product_id` FOREIGN KEY (`image_product_id`) REFERENCES `image_product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `waist_id` FOREIGN KEY (`waist_id`) REFERENCES `waist` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `sale_by_product`
--
ALTER TABLE `sale_by_product`
  ADD CONSTRAINT `fk_user_has_detalle_venta_has_Product_Product1` FOREIGN KEY (`Product_idProduct`) REFERENCES `product` (`idProduct`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user_has_detalle_venta_has_Product_user_has_detalle_venta1` FOREIGN KEY (`sale_by_user_id`) REFERENCES `sale_by_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `sale_by_user`
--
ALTER TABLE `sale_by_user`
  ADD CONSTRAINT `user_has_detalle_venta_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `contact_user` FOREIGN KEY (`contact_user`) REFERENCES `contact_user` (`idcontact_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `ubication_user` FOREIGN KEY (`ubication_user`) REFERENCES `ubication_user` (`idubication_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
