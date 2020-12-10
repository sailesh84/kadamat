-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2020 at 08:40 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `khadamatweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `aid` int(11) NOT NULL,
  `area` varchar(999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `area`
--

INSERT INTO `area` (`aid`, `area`) VALUES
(1, 'Doha'),
(2, 'Al Ghuwariyah'),
(3, 'Aljamilya'),
(4, 'Al Rayyan'),
(5, 'Al Wakrah'),
(6, 'Al Khor'),
(7, 'Madinat Ash Shamal'),
(8, 'Umm Salal'),
(9, 'Mesaieed');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cid` bigint(20) NOT NULL,
  `category` varchar(99) NOT NULL,
  `imageName` varchar(999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cid`, `category`, `imageName`) VALUES
(1, 'Cleaning & Home Maids', 'house_maidsCl.jpg'),
(2, 'Air Conditioner', 'ac_Repair.jpg'),
(3, 'Electrical Work', 'electcrical.jpg'),
(4, 'Painting & Decor', 'paintng_Dec.jpg'),
(5, 'Carpentry work', 'carpentry.jpg'),
(6, 'Agriculture Work', 'agricultures.jpg'),
(7, 'Plumbing Work', 'plumbing_Work.jpg'),
(8, 'Pest Control', 'pestcontrol.jpg'),
(9, 'Furniture Transfer', 'funiture.jpg'),
(10, 'Satellite Technician', 'satellite.jpg'),
(11, 'Car Transfer', 'car_Transfer.jpg'),
(12, 'Electronic Devices', 'electronicD.jpg'),
(14, 'Aluminum work', 'aluminiumw.jpg'),
(15, 'Blacksmith work', 'blacksmithw.jpg'),
(17, 'Surveillance Cameras', 'servlance.jpg'),
(19, 'Tank cleaning', 'tackclean.jpg'),
(20, 'Computer maintenance', 'computerM.jpg'),
(21, 'Swimming Pools', 'swimingpool.jpg'),
(22, 'Car washing', 'carwash.jpg'),
(23, 'Car services', 'car_service.jpg'),
(24, 'Furniture & Curtains', 'funiture.jpg'),
(25, 'Tents', 'tent.jpg'),
(26, '\r\nInternet networks', 'internet_work.jpg'),
(27, 'Insulation', 'insulation.jpg'),
(28, 'Sterilization', 'sterilization.jpg'),
(29, 'Car Sterilizatios', 'car_sterilization.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `serviceunit`
--

CREATE TABLE `serviceunit` (
  `unid` bigint(20) NOT NULL,
  `cid` bigint(20) NOT NULL,
  `service-unit` varchar(999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `serviceunit`
--

INSERT INTO `serviceunit` (`unid`, `cid`, `service-unit`) VALUES
(1, 1, 'Apartment'),
(2, 1, 'Villa'),
(3, 1, 'Building'),
(4, 1, 'Shop'),
(5, 1, 'Office'),
(6, 2, 'Split'),
(7, 2, 'Window'),
(8, 2, 'Central air conditioning'),
(9, 4, 'Villa'),
(10, 4, 'Apartment'),
(11, 4, 'Building'),
(12, 4, 'Otheres');

-- --------------------------------------------------------

--
-- Table structure for table `subcategory`
--

CREATE TABLE `subcategory` (
  `subid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `subCategory` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subcategory`
--

INSERT INTO `subcategory` (`subid`, `cid`, `subCategory`) VALUES
(1, 1, 'House maid'),
(2, 1, 'Baby sitter'),
(3, 1, 'Cleaning Real Estate Interfaces'),
(4, 1, 'Cleaning of finishing wastes'),
(5, 1, 'Cleaning of water tanks'),
(6, 1, 'Cleaning the curtains'),
(7, 1, 'Carpet cleaning'),
(8, 1, 'Other services'),
(9, 2, 'Transfer or installation of A.C'),
(10, 2, 'Gas filling & cleaning of A.C'),
(11, 2, 'A.C repairs'),
(12, 2, 'Others'),
(13, 3, 'Wires & networks extension'),
(14, 3, 'Panel board & Boxes & cutters'),
(15, 3, 'Lighting & accessories'),
(16, 3, 'Switches & stickers & plugs'),
(17, 3, 'Fans & exhaust fans'),
(18, 3, 'Water heaters'),
(19, 3, 'Water pumps'),
(20, 3, 'Moving electrical appliances'),
(21, 3, 'Other electrical works'),
(22, 4, 'Gypsum & Decoration'),
(23, 4, 'Filling in cracks & holes'),
(24, 4, 'Marble works'),
(25, 4, 'Tile works'),
(26, 4, 'Wallpaper'),
(27, 4, 'Walls painting'),
(28, 4, 'Metal painting'),
(29, 4, 'Wood painting'),
(30, 4, 'Other Painting & Decor');

-- --------------------------------------------------------

--
-- Table structure for table `timeforexecution`
--

CREATE TABLE `timeforexecution` (
  `tfeID` int(11) NOT NULL,
  `time-for-execution` varchar(999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `timeforexecution`
--

INSERT INTO `timeforexecution` (`tfeID`, `time-for-execution`) VALUES
(1, 'Today'),
(2, 'Tomorrow'),
(3, 'This week'),
(4, 'Next week');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `u_id` bigint(20) NOT NULL,
  `u_name` varchar(999) NOT NULL,
  `mobile` bigint(10) NOT NULL,
  `u_email` varchar(999) NOT NULL,
  `u_password` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`u_id`, `u_name`, `mobile`, `u_email`, `u_password`) VALUES
(1, 'prabhas', 7829271741, 'pprabhasa@gmail.com', 'prabhas@321'),
(2, 'chandan', 7829277142, 'chandan@gmail.com', 'chandan@123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`aid`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `serviceunit`
--
ALTER TABLE `serviceunit`
  ADD PRIMARY KEY (`unid`);

--
-- Indexes for table `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`subid`);

--
-- Indexes for table `timeforexecution`
--
ALTER TABLE `timeforexecution`
  ADD PRIMARY KEY (`tfeID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`u_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `area`
--
ALTER TABLE `area`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `serviceunit`
--
ALTER TABLE `serviceunit`
  MODIFY `unid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `subid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `timeforexecution`
--
ALTER TABLE `timeforexecution`
  MODIFY `tfeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `u_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
