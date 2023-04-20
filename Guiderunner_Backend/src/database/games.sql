-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 18. 09:29
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
-- Tábla szerkezet ehhez a táblához `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `gamename` varchar(255) NOT NULL,
  `release` int(11) NOT NULL,
  `platform` varchar(255) NOT NULL,
  `developer` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `games`
--

INSERT INTO `games` (`id`, `gamename`, `release`, `platform`, `developer`, `description`, `image`, `genre`) VALUES
(1, 'Hades', 2020, 'PC/Ps4/Ps5/Nsw/XboxOne/XboxSX', 'Super Giant Games', 'Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.', 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/library_600x900.jpg', 'Rouge-Like'),

(2, 'Jump King', 2019, 'PC', 'Nexile', 'Take up the challenge and face true high-stakes platforming in Jump King! Struggle upwards in search of the Smoking Hot Babe of legend, but explore with care; a single missed jump could lead to a long fall back down..', 'https://cdn.akamai.steamstatic.com/steam/apps/1061090/library_600x900.jpg', 'Indie Platformer'),

(3, 'Minecraft Legends', 2023, 'PC', 'Mojang Studios', 'Discover the mysteries of Minecraft Legends, a new action strategy game. Explore a gentle land of rich resources and lush biomes on the brink of destruction. The ravaging piglins have arrived, and it’s up to you to inspire your allies and lead them in strategic battles to save the Overworld', 'https://cdn.akamai.steamstatic.com/steam/apps/1928870/library_600x900.jpg', 'Strategy'),

(4, 'Half-Life 2', 2004, 'PC', 'Valve', "1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. Valve's debut title wins more than 50 game-of-the-year awards on its way to being named 'Best PC Game Ever' by PC Gamer, and launches a franchise with more than ", 'https://cdn.akamai.steamstatic.com/steam/apps/220/library_600x900.jpg', 'Strategy'),

(5, 'Katana ZERO', 2019, 'PC/Ps4/Ps5/XboxOne/XboxSX', 'askiisoft', "Katana ZERO is a stylish neo-noir, action-platformer featuring breakneck action and instant-death combat. Slash, dash, and manipulate time to unravel your past in a beautifully brutal acrobatic display. ", 'https://cdn.akamai.steamstatic.com/steam/apps/460950/library_600x900.jpg', 'action'),

(6, 'Counter-Strike: Global Offensive', 2012, 'PC', 'valve', "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).", 'https://cdn.akamai.steamstatic.com/steam/apps/730/library_600x900.jpg', 'fps')

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
