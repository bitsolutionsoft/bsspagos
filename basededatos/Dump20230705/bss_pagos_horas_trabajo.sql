-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: bss_pagos
-- ------------------------------------------------------
-- Server version	8.0.29

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
INSERT INTO `horas_trabajo` VALUES (13,'2023-06-05','2023-06-08 00:34:49','2023-06-08 00:00:00',0.00,NULL,'Activo',NULL,NULL,NULL),(14,'2023-06-05','2023-06-08 00:35:22','2023-06-08 00:00:00',0.00,NULL,'Activo',NULL,NULL,NULL),(15,'2023-06-05','2023-06-08 00:35:26','2023-06-08 00:00:00',0.00,NULL,'Activo',NULL,NULL,NULL),(16,'2023-06-05','2023-06-08 00:41:57','2023-06-08 00:00:00',0.00,NULL,'Activo',NULL,NULL,NULL),(17,'2023-06-05','2023-06-08 00:42:05','2023-06-08 00:00:00',0.00,NULL,'Activo',NULL,NULL,NULL),(18,'2023-06-05','2023-06-08 00:42:07','2023-06-08 00:00:00',0.00,NULL,'Activo',NULL,NULL,NULL),(19,'2023-06-05','2023-06-08 00:42:09','2023-06-08 00:00:00',0.00,NULL,'Activo',NULL,NULL,NULL),(24,'2023-06-05','2023-06-08 01:05:29','2023-06-08 11:39:41',634.00,NULL,'Cancelado',NULL,NULL,NULL),(25,'2023-06-05','2023-06-08 01:09:34','2023-06-08 11:39:44',630.00,NULL,'Cancelado',NULL,NULL,NULL),(26,'2023-06-05','2023-06-08 11:32:19','2023-06-08 00:00:00',0.00,NULL,'Activo',NULL,NULL,NULL),(27,'2023-06-05','2023-06-08 11:32:38','2023-06-08 00:00:00',0.00,NULL,'Activo',NULL,NULL,NULL),(28,'2023-06-04','2023-06-08 02:12:36','2023-06-08 11:39:48',567.00,NULL,'Cancelado',NULL,NULL,NULL),(29,'2023-06-08','2023-06-08 07:15:32','2023-06-08 11:39:51',264.00,NULL,'Cancelado',NULL,NULL,NULL),(30,'2023-06-08','2023-06-08 07:17:15','2023-06-08 11:39:55',262.00,NULL,'Cancelado',NULL,NULL,NULL),(31,'2023-06-08','2023-06-08 08:47:09','2023-06-08 11:39:59',172.00,NULL,'Cancelado',NULL,NULL,NULL),(32,'2023-06-08','2023-06-08 08:47:14','2023-06-08 11:40:02',172.00,NULL,'Cancelado',NULL,NULL,NULL),(33,'2023-06-10','2023-06-10 01:18:29','2023-06-10 02:11:31',53.00,NULL,'Cancelado',NULL,NULL,NULL),(34,'2023-06-10','2023-06-10 03:07:20','2023-06-10 03:11:03',3.00,NULL,'Cancelado',NULL,NULL,NULL),(35,'2023-06-10','2023-06-10 03:31:22',NULL,0.00,NULL,'Cancelado',NULL,NULL,NULL),(37,'2023-06-10','2023-06-10 03:57:17','2023-06-11 11:41:24',1904.00,NULL,'Cancelado',NULL,NULL,NULL),(38,'2023-06-11','2023-06-11 12:37:12','2023-06-11 12:37:48',0.00,NULL,'Cancelado',NULL,NULL,NULL),(39,'2023-06-11','2023-06-11 12:37:28','2023-06-11 12:37:43',0.00,NULL,'Cancelado',NULL,NULL,NULL),(40,'2023-06-11','2023-06-11 02:07:58','2023-06-11 02:09:03',1.00,NULL,'Cancelado',NULL,NULL,NULL),(41,'2023-06-11','2023-06-11 02:08:03','2023-06-11 02:08:17',0.00,NULL,'Cancelado',NULL,NULL,NULL),(42,'2023-06-11','2023-06-11 02:09:21','2023-06-11 02:12:57',3.00,NULL,'Cancelado',NULL,NULL,NULL),(43,'2023-06-11','2023-06-11 02:09:35','2023-06-11 06:56:22',286.00,NULL,'Cancelado',NULL,NULL,NULL),(44,'2023-06-11','2023-06-11 02:12:03','2023-06-11 06:56:29',284.00,NULL,'Cancelado',NULL,NULL,NULL),(45,'2023-06-11','2023-06-11 07:09:11','2023-06-11 07:28:48',19.00,NULL,'Cancelado',NULL,NULL,NULL),(46,'2023-06-11','2023-06-11 07:09:20','2023-06-11 07:28:45',19.00,NULL,'Cancelado',NULL,NULL,NULL),(47,'2023-06-11','2023-06-11 07:45:18','2023-06-11 08:26:27',41.00,NULL,'Pendiente',NULL,NULL,NULL),(48,'2023-06-11','2023-06-11 07:45:26','2023-06-11 08:26:24',40.00,NULL,'Cancelado',NULL,NULL,NULL),(49,'2023-06-11','2023-06-11 07:45:34','2023-06-11 08:26:30',40.00,NULL,'Pendiente',NULL,NULL,NULL),(50,'2023-06-11','2023-06-11 07:45:41','2023-06-11 08:26:22',40.00,NULL,'Cancelado',NULL,NULL,NULL),(51,'2023-06-11','2023-06-11 07:45:49','2023-06-11 08:26:29',40.00,NULL,'Pendiente',NULL,NULL,NULL),(52,'2023-06-11','2023-06-11 10:49:00','2023-06-11 11:15:00',26.00,NULL,'Pendiente',NULL,NULL,NULL),(53,'2023-06-11','2023-06-11 10:49:07','2023-06-11 11:15:03',25.00,NULL,'Pendiente',NULL,NULL,NULL),(54,'2023-06-13','2023-06-13 01:26:11',NULL,0.00,NULL,'Pendiente',NULL,NULL,NULL),(55,'2023-06-13','2023-06-13 01:26:45','2023-06-13 01:27:34',0.00,NULL,'Pendiente',NULL,NULL,NULL),(56,'2023-06-13','2023-06-13 01:27:10',NULL,0.00,NULL,'Pendiente',NULL,NULL,NULL),(57,'2023-06-30','2023-06-30 11:38:15','2023-06-30 11:51:44',8.00,5.00,'Cancelled',2,2,3),(58,'2023-06-30','2023-06-30 11:42:06','2023-07-03 13:11:06',5.00,0.00,'Cancelled',3,1,5),(59,'2023-07-03','2023-07-03 11:40:51','2023-07-03 23:17:14',12.00,0.00,'Cancelled',2,2,1),(60,'2023-07-04','2023-07-04 17:54:24','2023-07-04 17:56:28',3.00,0.00,'Cancelled',1,3,1),(61,'2023-07-04','2023-07-04 17:54:31','2023-07-04 17:56:32',4.00,0.00,'Cancelled',1,1,1),(62,'2023-07-04','2023-07-04 17:54:44','2023-07-04 17:56:33',4.00,0.00,'Cancelled',1,3,1),(63,'2023-07-04','2023-07-04 17:54:49','2023-07-04 17:56:36',2.00,0.00,'Cancelled',1,1,1),(64,'2023-07-04','2023-07-04 17:56:20',NULL,3.00,0.00,'Pending',1,4,3),(65,'2023-07-04','2023-07-04 18:07:00',NULL,4.00,0.00,'Cancelled',1,2,1),(66,'2023-07-04','2023-07-04 18:07:07',NULL,4.00,0.00,'Cancelled',2,1,1),(67,'2023-07-04','2023-07-04 18:07:12',NULL,4.00,0.00,'Cancelled',1,4,1),(68,'2023-07-04','2023-07-04 18:07:18',NULL,3.00,0.00,'Cancelled',2,2,1),(69,'2023-07-04','2023-07-04 18:18:19',NULL,3.00,0.00,'Cancelled',1,2,1),(70,'2023-07-04','2023-07-04 18:18:25',NULL,2.00,0.00,'Cancelled',2,1,1),(71,'2023-07-04','2023-07-04 18:18:30',NULL,6.00,0.00,'Cancelled',4,3,1),(72,'2023-07-04','2023-07-04 18:18:36',NULL,5.00,0.00,'Cancelled',1,4,1),(73,'2023-07-04','2023-07-04 18:18:42',NULL,8.00,0.00,'Cancelled',4,1,1),(74,'2023-07-04','2023-07-04 18:44:55',NULL,6.00,0.00,'Cancelled',1,1,1),(75,'2023-07-05','2023-07-05 10:24:56','2023-07-05 11:10:10',1.00,0.00,'Pending',2,2,3),(76,'2023-07-05','2023-07-05 10:25:40','2023-07-05 11:02:26',1.00,0.00,'Pending',1,1,1),(77,'2023-07-05','2023-07-05 10:26:59',NULL,0.00,0.00,'Pending',3,4,1),(78,'2023-07-05','2023-07-05 10:30:29',NULL,0.00,0.00,'Pending',2,3,1);
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

-- Dump completed on 2023-07-05 15:21:12
