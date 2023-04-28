-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 28. 22:28
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
-- Tábla szerkezet ehhez a táblához `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `email`, `password`, `role`) VALUES
(1, 'testing', 'testing@gmail.com', '$2b$10$hfxjb17FDRdqnWtvkhy3Le3.Lj9Zz280.22Ylz7ztEj6pi1M3/wTm', 'user'),
(2, 'user01', 'user01@gmail.com', '$2b$10$rKZXiOHZ3o.Rl2MbniA9Lehul1tjVfLaJ/toBn8GGCG8yJzZGJnVy', 'user'),
(3, 'user02', 'user02@gmail.com', '$2b$10$aJXiOBoKXRTyuJ8RRtUv/OheXqeoHQze4rxMEu/yXu5izSPoDSVKW', 'user');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `following_games`
--

CREATE TABLE `following_games` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `fgame` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `following_users`
--

CREATE TABLE `following_users` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `fuser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `gamename` varchar(255) NOT NULL,
  `release` int(11) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `platform` varchar(255) NOT NULL,
  `developer` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `games`
--

INSERT INTO `games` (`id`, `gamename`, `release`, `genre`, `platform`, `developer`, `description`, `image`) VALUES
(1, 'Hades', 2020, 'Rouge-Like', 'PC/Ps4/Ps5/Nsw/XboxOne/XboxSX', 'Super Giant Games', 'Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.', 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/library_600x900.jpg'),
(2, 'Jump King', 2019, 'Indie Platformer', 'PC', 'Nexile', 'Take up the challenge and face true high-stakes platforming in Jump King! Struggle upwards in search of the Smoking Hot Babe of legend, but explore with care; a single missed jump could lead to a long fall back down..', 'https://cdn.akamai.steamstatic.com/steam/apps/1061090/library_600x900.jpg'),
(3, 'Minecraft Legends', 2023, 'Strategy', 'PC', 'Mojang Studios', 'Discover the mysteries of Minecraft Legends, a new action strategy game. Explore a gentle land of rich resources and lush biomes on the brink of destruction. The ravaging piglins have arrived, and it’s up to you to inspire your allies and lead them in str', 'https://cdn.akamai.steamstatic.com/steam/apps/1928870/library_600x900.jpg'),
(4, 'Half-Life 2', 2004, 'Strategy', 'PC', 'Valve', '1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. Valve\'s debut title wins more than 50 game-of-the-year awards on its way to being named \'Best PC Game Ever\' by PC Gamer', 'https://cdn.akamai.steamstatic.com/steam/apps/220/library_600x900.jpg'),
(5, 'Katana ZERO', 2019, 'action', 'PC/Ps4/Ps5/XboxOne/XboxSX', 'askiisoft', 'Katana ZERO is a stylish neo-noir, action-platformer featuring breakneck action and instant-death combat. Slash, dash, and manipulate time to unravel your past in a beautifully brutal acrobatic display. ', 'https://cdn.akamai.steamstatic.com/steam/apps/460950/library_600x900.jpg'),
(6, 'Counter-Strike: Global Offensive', 2012, 'fps', 'PC', 'valve', 'Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS conte', 'https://cdn.akamai.steamstatic.com/steam/apps/730/library_600x900.jpg');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `gamename` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `source` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `content` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `news`
--

INSERT INTO `news` (`id`, `gamename`, `title`, `source`, `date`, `content`) VALUES
(1, 'Hades', 'New Version is released', 'https://store.steampowered.com/news/app/1145360/view/2908719181633108409', '2020-09-18', 'After two years in early access, the highly anticipated game Hades has finally been released in its 1.0 version. Developed by Supergiant Games, Hades has already gained a massive following for its captivating storyline, stunning graphics, and innovative gameplay mechanics.'),
(2, 'Hades', 'Nominated for Game of the Year!', 'https://store.steampowered.com/news/app/1145360/view/4137084313616844005', '2020-12-22', 'Hades wins game of the year with its captivating story, stunning world-building, and polished gameplay mechanics. Supergiant Games should be proud of their achievement.'),
(3, 'Portal 2', 'Rtx remake', 'https://store.steampowered.com/news/app/2012840/view/3620361554183195575', '2022-12-08', 'Nvidia has announced that they will remake portal 2 with rtx to show off the capabilities of their graphics card'),
(4, 'Hades', 'Coming to Steam Early Access!', 'https://store.steampowered.com/news/app/1145350/view/3628242853594657531', '2022-12-08', 'Like its predecessor, Hades II will be available in Early Access here on Steam for some time leading up to its full v1.0 launch. Add Hades II to your wishlist for a handy reminder when the time comes'),
(5, 'Counter-Strike: Global Offensive', 'Counter-Strike: Global Offensive is now available on Steam!', 'https://store.steampowered.com/news/app/730/view/2913221511623967917', '2012-08-22', 'CS:GO expands on the classic team-based action gameplay that Counter-Strike pioneered. Featuring an arsenal of over 45 weapons, loads of maps, new game modes, new visuals, leaderboards, and over 165 Steam Achievements.'),
(6, 'Counter-Strike: Global Offensive', 'ARMS DEAL UPDATE', 'https://store.steampowered.com/oldnews/11265', '2013-08-14', 'Today marks the launch of the Arms Deal update for Counter-Strike: Global Offensive, which introduces an all-new economy system to the game. Players can now buy, sell, and trade in-game weapon skins, creating a bustling marketplace for rare and coveted skins.'),
(7, 'Counter-Strike: Global Offensive', 'Play Operation Bloodhound!', 'https://store.steampowered.com/news/app/730/view/2913221511623966301', '2015-05-29', 'It’s that magic time where spring prepares to give way to summer; a time for fun in the sun, vacations, friends, and of course… a brand new operation for CSGO! New modes, campaigns, and bragging rights await you… welcome to Operation Bloodhound.'),
(8, 'Counter-Strike: Global Offensive', 'Operation Shattered Web', 'https://store.steampowered.com/news/app/730/view/1604899184801773232', '2019-10-19', 'Introducing Operation Shattered Web. For the first time in CS:GO, bring your favorite character into battle with all-new equippable agents. Earn rewards featuring the new agents, all-new weapon collections, stickers, graffiti, and more through a new battle pass format. Complete weekly Operation Miss'),
(9, 'Counter-Strike: Global Offensive', 'CS:GO has been nominated for the \"Labor of Love\" Steam Award!', 'https://store.steampowered.com/news/app/730/view/5315901521584470331', '2020-12-22', 'The Steam Community has nominated CS:GO for the \"Labor of Love\" Steam Award, awarded to a previously released game which continues to receive updates.'),
(10, 'Counter-Strike: Global Offensive', 'The Next Era of Counter-Strike', 'https://store.steampowered.com/news/app/730/view/3716071937633222892', '2023-03-22', 'Counter-Strike 2 is the largest technical leap forward in Counter-Strike’s history, ensuring new features and updates for years to come.');

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
  `youtubelink` varchar(255) NOT NULL,
  `verif` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `records`
--

INSERT INTO `records` (`id`, `username`, `gamename`, `time`, `platform`, `difficulty`, `youtubelink`, `verif`) VALUES
(1, 'user001', 'Hades', '10:10:22', 'PC', 'Normal', 'https://youtu.be/91t0ha9x0AE', 1),
(2, 'user002', 'Half-Life', '8:44:47', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU', 0),
(3, 'user003', 'Portal', '8:00:01', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU', 0),
(4, 'user003', 'Portal', '8:11:14', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU', 1),
(5, 'user005', 'Jump King', '8:53:44', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU', 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `token`
--

CREATE TABLE `token` (
  `token` varchar(255) NOT NULL,
  `accountId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_477e3187cedfb5a3ac121e899c` (`username`),
  ADD UNIQUE KEY `IDX_ee66de6cdc53993296d1ceb8aa` (`email`);

--
-- A tábla indexei `following_games`
--
ALTER TABLE `following_games`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_a8614c9c2cc210c7a208a23326` (`user`,`fgame`);

--
-- A tábla indexei `following_users`
--
ALTER TABLE `following_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_4d79f5dca1be670828509ca705` (`user`,`fuser`);

--
-- A tábla indexei `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`token`),
  ADD KEY `FK_7c9a1a6d90661d190ed278592c0` (`accountId`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `following_games`
--
ALTER TABLE `following_games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `following_users`
--
ALTER TABLE `following_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT a táblához `records`
--
ALTER TABLE `records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `FK_7c9a1a6d90661d190ed278592c0` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
