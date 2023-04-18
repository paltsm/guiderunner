-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 18. 09:21
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `guide_runner`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `records`
--

CREATE TABLE `records` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `gamename` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `platform` varchar(255) NOT NULL,
  `difficulty` varchar(255) NOT NULL,
  `youtubelink` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `records`
--

INSERT INTO `records` (`id`, `username`, `gamename`, `time`, `platform`, `difficulty`, `youtubelink`) VALUES
(4, 'Test_001', 'Hades', '10:10:22', 'PC', 'Normal', 'https://youtu.be/91t0ha9x0AE'),
(5, 'Test_002', 'Jump King', '8:10:36', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `records`
--
ALTER TABLE `records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
