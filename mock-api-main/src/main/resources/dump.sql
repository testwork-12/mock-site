-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.3.31-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for mock-api-db
CREATE DATABASE IF NOT EXISTS `mock-api-db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `mock-api-db`;

-- Dumping structure for table mock-api-db.hero
DROP TABLE IF EXISTS `hero`;
CREATE TABLE IF NOT EXISTS `hero` (
																		`id` bigint(20) NOT NULL AUTO_INCREMENT,
																		`name` varchar(255) DEFAULT NULL,
																		PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mock-api-db.hero: ~9 rows (approximately)
/*!40000 ALTER TABLE `hero` DISABLE KEYS */;
REPLACE INTO `hero` (`id`, `name`) VALUES
																		 (1, 'Dr. Nice'),
																		 (3, 'Celeritas'),
																		 (4, 'Magneta'),
																		 (5, 'RubberMan'),
																		 (6, 'Dynama'),
																		 (7, 'Dr. IQ'),
																		 (8, 'Magma'),
																		 (9, 'Tornado'),
																		 (10, 'Newhero');
/*!40000 ALTER TABLE `hero` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
