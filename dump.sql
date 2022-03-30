CREATE DATABASE  IF NOT EXISTS `id4056546_uniline` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `id4056546_uniline`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: id4056546_uniline
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin_message`
--

DROP TABLE IF EXISTS `admin_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_message` (
  `idMESSAGES` int NOT NULL AUTO_INCREMENT,
  `SUBJECT` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `CONTENT` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Tipo` int NOT NULL,
  `client_mail` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `IS_READ` int NOT NULL,
  `IS_FAVORITE` int NOT NULL,
  `Data` date NOT NULL,
  PRIMARY KEY (`idMESSAGES`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_message`
--

LOCK TABLES `admin_message` WRITE;
/*!40000 ALTER TABLE `admin_message` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin_message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `administrator`
--

DROP TABLE IF EXISTS `administrator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrator` (
  `id_ADMINISTRATOR` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `PASSWORD` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `deploy` int NOT NULL,
  `IS_LOGGED` tinyint NOT NULL,
  PRIMARY KEY (`id_ADMINISTRATOR`),
  KEY `fk_ADMINISTRATOR_DEPLOY_idx` (`deploy`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrator`
--

LOCK TABLES `administrator` WRITE;
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
INSERT INTO `administrator` VALUES (1,'encomenda.uniline','admin123',1,0),(2,'madalenaa.castro','Teste123',1,0),(3,'luismarques24','olaola',1,1);
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `NAME` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `NIF` varchar(11) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `EMAIL` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `PHONE` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `STREET` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `DOOR_NUMBER` int DEFAULT NULL,
  `CITY` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `COUNTRY` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ZIP_CODE` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `PASS` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `IS_BLOCKED` int NOT NULL,
  `img_path` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `IS_APPROVED` int NOT NULL,
  `data_registo` date NOT NULL,
  PRIMARY KEY (`EMAIL`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES ('Luís Marques','987654321','luismarques24@hotmail.com','962792912','travessa',45,'Guimaraes','PT','4805-491','ola',0,'luismarques24.png',1,'2020-05-17');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deploy`
--

DROP TABLE IF EXISTS `deploy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deploy` (
  `NAME` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ID` int NOT NULL AUTO_INCREMENT,
  `EMAIL` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `PHONE` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ADRESS` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `WEBPAGE_LINK` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `URL_ICON` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `FACEBOOK_LINK` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `TWITTER_LINK` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `STATISTICS` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `NIF` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deploy`
--

LOCK TABLES `deploy` WRITE;
/*!40000 ALTER TABLE `deploy` DISABLE KEYS */;
INSERT INTO `deploy` VALUES ('PeugasLDA.',1,'encomenda.uniline@gmail.com','253000000','Rua da Travessa_4000-300_Guimarães_Portugal','http://www.etpeugas.com/pt/','https://icon-icons.com/icons2/390/PNG/512/socks_39463.png','https://www.facebook.com/peugas.co/','https://twitter.com/PeugasFilisa','1000',123456789);
/*!40000 ALTER TABLE `deploy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordem`
--

DROP TABLE IF EXISTS `ordem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordem` (
  `ID_ORDER` int NOT NULL AUTO_INCREMENT,
  `BEGIN_DATE` date NOT NULL,
  `CLOSE_DATE` date DEFAULT NULL,
  `Client_NIF` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `ASKED_DELIVERY_DATE` date NOT NULL,
  `STATUS` int NOT NULL,
  `PRODUTO` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `TRACKING` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID_ORDER`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordem`
--

LOCK TABLES `ordem` WRITE;
/*!40000 ALTER TABLE `ordem` DISABLE KEYS */;
INSERT INTO `ordem` VALUES (10,'2020-05-17',NULL,'luismarques24@hotmail.com','2020-05-27',1,'Papelão','REFt2426369');
/*!40000 ALTER TABLE `ordem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_product`
--

DROP TABLE IF EXISTS `order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_product` (
  `ID_ORDER` int NOT NULL,
  `id_PRODUCT` int DEFAULT NULL,
  `opcao_valor` varchar(200) DEFAULT NULL,
  `insertionDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID_ORDER`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES (10,29,'23_23','2020-05-16 23:00:00');
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `id_PRODUCT` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `DESCRIPTION` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `QUANTITY_PER_PACK` int NOT NULL,
  `SIZE` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `FOTO` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `isActive` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_PRODUCT`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (24,'Saco de Papel','Saco ideal para transporta mercadorias ',0,'0','avatar.png',1),(25,'Papelão','ola',0,'0','undefined',0),(26,'Papelão','ola',0,'0','undefined',1),(27,'Papelão','ola',0,'0','undefined',1),(28,'teste1','ola',0,'0','undefined',1),(29,'Papelão','ola',0,'0','prod_Papelão.png',1);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `size` (
  `idsize` int NOT NULL AUTO_INCREMENT,
  `size` varchar(45) NOT NULL,
  `produto` int NOT NULL,
  `type` int NOT NULL,
  PRIMARY KEY (`idsize`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES (31,'23 X 10',24,0),(32,'17 x10',24,0),(33,'23 x 15',24,0),(34,'10',24,1),(35,'15',24,1),(36,'20',24,1),(37,'23',27,0),(38,'23',27,1),(39,'fg',28,0),(40,'23',28,1),(41,'23',29,0),(42,'23',29,1);
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `task` (
  `ID_TASK` int NOT NULL AUTO_INCREMENT,
  `DESCRIPTION` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `STATE` int NOT NULL,
  `Client_NIF` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Tipo` int NOT NULL,
  `dataPedido` date NOT NULL,
  `Ordem_ID` int DEFAULT NULL,
  PRIMARY KEY (`ID_TASK`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES `task` WRITE;
/*!40000 ALTER TABLE `task` DISABLE KEYS */;
INSERT INTO `task` VALUES (14,'O cliente =Luís Marquespretende registar-se na aplicação',1,'luismarques24@hotmail.com',0,'2020-05-17',NULL);
/*!40000 ALTER TABLE `task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'id4056546_uniline'
--

--
-- Dumping routines for database 'id4056546_uniline'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-14 21:25:38
