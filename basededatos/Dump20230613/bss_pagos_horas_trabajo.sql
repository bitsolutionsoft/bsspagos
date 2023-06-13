-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: bss_pagos
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Dumping data for table `horas_trabajo`
--

LOCK TABLES `horas_trabajo` WRITE;
/*!40000 ALTER TABLE `horas_trabajo` DISABLE KEYS */;
INSERT INTO `horas_trabajo` VALUES (13,'2023-06-05','2023-06-08 00:34:49','2023-06-08 00:00:00',0.00,1,'Activo'),(14,'2023-06-05','2023-06-08 00:35:22','2023-06-08 00:00:00',0.00,1,'Activo'),(15,'2023-06-05','2023-06-08 00:35:26','2023-06-08 00:00:00',0.00,1,'Activo'),(16,'2023-06-05','2023-06-08 00:41:57','2023-06-08 00:00:00',0.00,1,'Activo'),(17,'2023-06-05','2023-06-08 00:42:05','2023-06-08 00:00:00',0.00,1,'Activo'),(18,'2023-06-05','2023-06-08 00:42:07','2023-06-08 00:00:00',0.00,1,'Activo'),(19,'2023-06-05','2023-06-08 00:42:09','2023-06-08 00:00:00',0.00,1,'Activo'),(24,'2023-06-05','2023-06-08 01:05:29','2023-06-08 11:39:41',634.00,1,'Cancelado'),(25,'2023-06-05','2023-06-08 01:09:34','2023-06-08 11:39:44',630.00,1,'Cancelado'),(26,'2023-06-05','2023-06-08 11:32:19','2023-06-08 00:00:00',0.00,1,'Activo'),(27,'2023-06-05','2023-06-08 11:32:38','2023-06-08 00:00:00',0.00,1,'Activo'),(28,'2023-06-04','2023-06-08 02:12:36','2023-06-08 11:39:48',567.00,3,'Cancelado'),(29,'2023-06-08','2023-06-08 07:15:32','2023-06-08 11:39:51',264.00,1,'Cancelado'),(30,'2023-06-08','2023-06-08 07:17:15','2023-06-08 11:39:55',262.00,4,'Cancelado'),(31,'2023-06-08','2023-06-08 08:47:09','2023-06-08 11:39:59',172.00,3,'Cancelado'),(32,'2023-06-08','2023-06-08 08:47:14','2023-06-08 11:40:02',172.00,3,'Cancelado'),(33,'2023-06-10','2023-06-10 01:18:29','2023-06-10 02:11:31',53.00,5,'Cancelado'),(34,'2023-06-10','2023-06-10 03:07:20','2023-06-10 03:11:03',3.00,4,'Cancelado'),(35,'2023-06-10','2023-06-10 03:31:22',NULL,0.00,1,'Cancelado'),(37,'2023-06-10','2023-06-10 03:57:17','2023-06-11 11:41:24',1904.00,6,'Cancelado'),(38,'2023-06-11','2023-06-11 12:37:12','2023-06-11 12:37:48',0.00,8,'Cancelado'),(39,'2023-06-11','2023-06-11 12:37:28','2023-06-11 12:37:43',0.00,9,'Cancelado'),(40,'2023-06-11','2023-06-11 02:07:58','2023-06-11 02:09:03',1.00,10,'Cancelado'),(41,'2023-06-11','2023-06-11 02:08:03','2023-06-11 02:08:17',0.00,11,'Cancelado'),(42,'2023-06-11','2023-06-11 02:09:21','2023-06-11 02:12:57',3.00,8,'Cancelado'),(43,'2023-06-11','2023-06-11 02:09:35','2023-06-11 06:56:22',286.00,9,'Cancelado'),(44,'2023-06-11','2023-06-11 02:12:03','2023-06-11 06:56:29',284.00,1,'Cancelado'),(45,'2023-06-11','2023-06-11 07:09:11','2023-06-11 07:28:48',19.00,12,'Cancelado'),(46,'2023-06-11','2023-06-11 07:09:20','2023-06-11 07:28:45',19.00,13,'Cancelado'),(47,'2023-06-11','2023-06-11 07:45:18','2023-06-11 08:26:27',41.00,13,'Pendiente'),(48,'2023-06-11','2023-06-11 07:45:26','2023-06-11 08:26:24',40.00,1,'Cancelado'),(49,'2023-06-11','2023-06-11 07:45:34','2023-06-11 08:26:30',40.00,7,'Pendiente'),(50,'2023-06-11','2023-06-11 07:45:41','2023-06-11 08:26:22',40.00,10,'Cancelado'),(51,'2023-06-11','2023-06-11 07:45:49','2023-06-11 08:26:29',40.00,12,'Pendiente'),(52,'2023-06-11','2023-06-11 10:49:00','2023-06-11 11:15:00',26.00,4,'Pendiente'),(53,'2023-06-11','2023-06-11 10:49:07','2023-06-11 11:15:03',25.00,12,'Pendiente'),(54,'2023-06-13','2023-06-13 01:26:11',NULL,0.00,1,'Pendiente'),(55,'2023-06-13','2023-06-13 01:26:45','2023-06-13 01:27:34',0.00,18,'Pendiente'),(56,'2023-06-13','2023-06-13 01:27:10',NULL,0.00,19,'Pendiente');
/*!40000 ALTER TABLE `horas_trabajo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-13 13:46:21