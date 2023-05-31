-- accounts

INSERT INTO `accounts` (`id`, `username`, `email`, `password`,`role`) VALUES
(1, 'testing', 'testing@gmail.com', '$2b$10$hfxjb17FDRdqnWtvkhy3Le3.Lj9Zz280.22Ylz7ztEj6pi1M3/wTm','user'),
(2, 'user01', 'user01@gmail.com', '$2b$10$rKZXiOHZ3o.Rl2MbniA9Lehul1tjVfLaJ/toBn8GGCG8yJzZGJnVy','user'),
(3, 'user02', 'user02@gmail.com', '$2b$10$aJXiOBoKXRTyuJ8RRtUv/OheXqeoHQze4rxMEu/yXu5izSPoDSVKW','user');

-- records

INSERT INTO `records` (`id`, `username`, `gamename`, `time`, `platform`, `difficulty`, `youtubelink`,`verif`) VALUES
(1, 'user001', 'Hades', '10:10:22', 'PC', 'Normal', 'https://youtu.be/91t0ha9x0AE','1'),
(2, 'user002', 'Half-Life', '8:44:47', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU','0'),
(3, 'user003', 'Portal', '8:00:01', 'PC', 'Normal', 'https://www.youtube.com/watch?v=27XPNp2bCgE','1'),
(4, 'user003', 'Portal', '8:11:14', 'PC', 'Normal', 'https://www.youtube.com/watch?v=27XPNp2bCgE','0'),
(6, 'peter', 'Jump King', '8:53:44', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU','1'),
(7, 'gamerx', 'Plants vs. Zombies', '8:53:44', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU','1'),
(8, 'X_god_X', 'Half-Life 2', '8:53:44', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU','1'),
(9, 'flowerMan', 'Katana Zero', '8:53:44', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU','1'),
(10, 'mom', 'Hades', '8:53:44', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU','1'),
(11, 'jeff123', 'Plants vs. Zombies', '8:53:44', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU','1'),
(12, 'teszt', 'Jump King', '8:53:44', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU','1'),
(13, 'embervok', 'Katana Zero', '8:53:44', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU','1'),
(14, 'supla23asd', 'Jump King', '8:53:44', 'PC', 'Normal', 'https://youtu.be/muagJ3svdWU','1');

-- games

INSERT INTO `games` (`id`, `gamename`, `release`, `platform`, `developer`, `description`, `image`, `genre`) VALUES
(1, 'Hades', 2020, 'PC/Ps4/Ps5/Nsw/XboxOne/XboxSX', 'Super Giant Games', 'Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.', 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/library_600x900.jpg', 'Rouge-Like'),

(2, 'Jump King', 2019, 'PC', 'Nexile', 'Take up the challenge and face true high-stakes platforming in Jump King! Struggle upwards in search of the Smoking Hot Babe of legend, but explore with care; a single missed jump could lead to a long fall back down..', 'https://cdn.akamai.steamstatic.com/steam/apps/1061090/library_600x900.jpg', 'Indie Platformer'),

(3, 'Minecraft Legends', 2023, 'PC', 'Mojang Studios', 'Discover the mysteries of Minecraft Legends, a new action strategy game. Explore a gentle land of rich resources and lush biomes on the brink of destruction. The ravaging piglins have arrived, and its up to you to inspire your allies and lead them in strategic battles to save the Overworld', 'https://cdn.akamai.steamstatic.com/steam/apps/1928870/library_600x900.jpg', 'Strategy'),

(4, 'Half-Life 2', 2004, 'PC', 'Valve', "1998. HALF-LIFE sends a shock through the game industry with its combination of pounding action and continuous, immersive storytelling. Valve's debut title wins more than 50 game-of-the-year awards on its way to being named 'Best PC Game Ever' by PC Gamer, and launches a franchise with more than ", 'https://cdn.akamai.steamstatic.com/steam/apps/220/library_600x900.jpg', 'Strategy'),

(5, 'Katana ZERO', 2019, 'PC/Ps4/Ps5/XboxOne/XboxSX', 'askiisoft', "Katana ZERO is a stylish neo-noir, action-platformer featuring breakneck action and instant-death combat. Slash, dash, and manipulate time to unravel your past in a beautifully brutal acrobatic display. ", 'https://cdn.akamai.steamstatic.com/steam/apps/460950/library_600x900.jpg', 'action'),

(6, 'Counter-Strike: Global Offensive', 2012, 'PC', 'valve', "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.).", 'https://cdn.akamai.steamstatic.com/steam/apps/730/library_600x900.jpg', 'fps'),

(7, 'Half-Life', 1998, 'PC', 'valve', "Named Game of the Year by over 50 publications, Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive.", 'https://cdn.akamai.steamstatic.com/steam/apps/70/library_600x900.jpg', 'fps'),

(8, 'Portal', 2007, 'PC', 'valve', "Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.", 'https://cdn.akamai.steamstatic.com/steam/apps/400/library_600x900.jpg', 'puzzle'),

(9, 'Plants vs. Zombies', 2009, 'PC', 'PopCap Games', "Zombies are invading your home, and the only defense is your arsenal of plants! You'll need to think fast and plant faster to stop dozens of types of zombies dead in their tracks.", 'https://cdn.akamai.steamstatic.com/steam/apps/3590/library_600x900.jpg', 'tower defense');

-- news

INSERT INTO `news` (`id`, `gamename`, `title`, `content`, `source`, `date`) VALUES
(1, 'Hades', 'New Version is released', 'After two years in early access, the highly anticipated game Hades has finally been released in its 1.0 version. Developed by Supergiant Games, Hades has already gained a massive following for its captivating storyline, stunning graphics, and innovative gameplay mechanics.', 'https://store.steampowered.com/news/app/1145360/view/2908719181633108409', '2020-09-18'),

(2, 'Hades', 'Nominated for Game of the Year!', 'Hades wins game of the year with its captivating story, stunning world-building, and polished gameplay mechanics. Supergiant Games should be proud of their achievement.', 'https://store.steampowered.com/news/app/1145360/view/4137084313616844005', '2020-12-22'),

(3, 'Portal 2', 'Rtx remake', 'Nvidia has announced that they will remake portal 2 with rtx to show off the capabilities of their graphics card', 'https://store.steampowered.com/news/app/2012840/view/3620361554183195575', '2022-12-08'),

(4, 'Hades', 'Coming to Steam Early Access!', 'Like its predecessor, Hades II will be available in Early Access here on Steam for some time leading up to its full v1.0 launch. Add Hades II to your wishlist for a handy reminder when the time comes', 'https://store.steampowered.com/news/app/1145350/view/3628242853594657531', '2022-12-08'),

(5, 'Counter-Strike: Global Offensive', 'Counter-Strike: Global Offensive is now available on Steam!', 'CS:GO expands on the classic team-based action gameplay that Counter-Strike pioneered. Featuring an arsenal of over 45 weapons, loads of maps, new game modes, new visuals, leaderboards, and over 165 Steam Achievements.', 'https://store.steampowered.com/news/app/730/view/2913221511623967917', '2012-08-22'),

(6, 'Counter-Strike: Global Offensive', 'ARMS DEAL UPDATE', 'Today marks the launch of the Arms Deal update for Counter-Strike: Global Offensive, which introduces an all-new economy system to the game. Players can now buy, sell, and trade in-game weapon skins, creating a bustling marketplace for rare and coveted skins.', 'https://store.steampowered.com/oldnews/11265', '2013-08-14'),

(7, 'Counter-Strike: Global Offensive', 'Play Operation Bloodhound!', 'It’s that magic time where spring prepares to give way to summer; a time for fun in the sun, vacations, friends, and of course… a brand new operation for CSGO! New modes, campaigns, and bragging rights await you… welcome to Operation Bloodhound.', 'https://store.steampowered.com/news/app/730/view/2913221511623966301', '2015-05-29'),

(8, 'Counter-Strike: Global Offensive', 'Operation Shattered Web', 'Introducing Operation Shattered Web. For the first time in CS:GO, bring your favorite character into battle with all-new equippable agents. Earn rewards featuring the new agents, all-new weapon collections, stickers, graffiti, and more through a new battle pass format.', 'https://store.steampowered.com/news/app/730/view/1604899184801773232', '2019-10-19'),

(9, 'Counter-Strike: Global Offensive', 'CS:GO has been nominated for the "Labor of Love" Steam Award!', 'The Steam Community has nominated CS:GO for the "Labor of Love" Steam Award, awarded to a previously released game which continues to receive updates.', 'https://store.steampowered.com/news/app/730/view/5315901521584470331', '2020-12-22'),

(10, 'Counter-Strike: Global Offensive', 'The Next Era of Counter-Strike', 'Counter-Strike 2 is the largest technical leap forward in Counter-Strike’s history, ensuring new features and updates for years to come.', 'https://store.steampowered.com/news/app/730/view/3716071937633222892', '2023-03-22');

-- following games

INSERT INTO `following_games` (`id`, `user`, `fgame`) VALUES
(1, 1, 2),
(2, 1, 3),
(3, 1, 6),
(4, 2, 1),
(5, 2, 4),
(6, 3, 3),
(7, 2, 5),
(8, 3, 2),
(9, 3, 1),
(10, 1, 4);