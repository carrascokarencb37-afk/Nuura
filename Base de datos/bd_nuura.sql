-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-05-2026 a las 18:49:36
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_nuura`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_guarda`
--

CREATE TABLE `tbl_guarda` (
  `id_guardado` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_guia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tbl_guarda`
--

INSERT INTO `tbl_guarda` (`id_guardado`, `id_usuario`, `id_guia`) VALUES
(1, 2, 2),
(2, 2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_guias`
--

CREATE TABLE `tbl_guias` (
  `id_guia` int(11) NOT NULL,
  `nombre_planta` varchar(30) NOT NULL,
  `imagen_planta` char(100) NOT NULL,
  `calendario_riego` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tbl_guias`
--

INSERT INTO `tbl_guias` (`id_guia`, `nombre_planta`, `imagen_planta`, `calendario_riego`) VALUES
(1, 'Corona de Cristo', '../img/plantas/coronita.jpg', '0000-00-00'),
(2, 'Duranta', '../img/plantas/duranta.jpg', '0000-00-00'),
(3, 'Rosa del desierto', '../img/plantas/rosaDesierto.jpg', '0000-00-00'),
(4, 'Pervinca rosa', '../img/plantas/pervinca.jpg', '0000-00-00'),
(5, 'Capuchina', '../img/plantas/capuchina.jpg', '0000-00-00'),
(6, 'Ruda', '../img/plantas/ruda.jpg', '0000-00-00'),
(7, 'Trompillo', '../img/plantas/trompillo.jpg', '0000-00-00'),
(8, 'Jazmin azul', '../img/plantas/jazmin.jpg', '0000-00-00'),
(9, 'Flor de Pascua', '../img/plantas/pascua.jpg', '0000-00-00'),
(10, 'Bigotillo', '../img/plantas/bigotillo.jpg', '0000-00-00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuarios`
--

CREATE TABLE `tbl_usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `contra` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tbl_usuarios`
--

INSERT INTO `tbl_usuarios` (`id_usuario`, `nombre`, `correo`, `contra`) VALUES
(2, 'Juanito Perez', 'juanin@gmail.com', '$2y$10$GTowVBgGXTcVrsPa.hUTdu4wtcJixhg/.B8ps6xXSogPwjmvzQSLi');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_guarda`
--
ALTER TABLE `tbl_guarda`
  ADD PRIMARY KEY (`id_guardado`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_guia` (`id_guia`);

--
-- Indices de la tabla `tbl_guias`
--
ALTER TABLE `tbl_guias`
  ADD PRIMARY KEY (`id_guia`);

--
-- Indices de la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_guarda`
--
ALTER TABLE `tbl_guarda`
  MODIFY `id_guardado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tbl_guias`
--
ALTER TABLE `tbl_guias`
  MODIFY `id_guia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tbl_usuarios`
--
ALTER TABLE `tbl_usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_guarda`
--
ALTER TABLE `tbl_guarda`
  ADD CONSTRAINT `tbl_guarda_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `tbl_usuarios` (`id_usuario`),
  ADD CONSTRAINT `tbl_guarda_ibfk_2` FOREIGN KEY (`id_guia`) REFERENCES `tbl_guias` (`id_guia`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
