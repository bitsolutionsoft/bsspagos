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
-- Temporary view structure for view `view_modulo`
--

DROP TABLE IF EXISTS `view_modulo`;
/*!50001 DROP VIEW IF EXISTS `view_modulo`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_modulo` AS SELECT 
 1 AS `idmodulo`,
 1 AS `nombre`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_detallepagos`
--

DROP TABLE IF EXISTS `view_detallepagos`;
/*!50001 DROP VIEW IF EXISTS `view_detallepagos`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_detallepagos` AS SELECT 
 1 AS `iddetalle`,
 1 AS `idpago`,
 1 AS `idhorastrabajo`,
 1 AS `cant_hora`,
 1 AS `precio`,
 1 AS `cant_extra`,
 1 AS `precio_extra`,
 1 AS `subtotal`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `pagos_emp`
--

DROP TABLE IF EXISTS `pagos_emp`;
/*!50001 DROP VIEW IF EXISTS `pagos_emp`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `pagos_emp` AS SELECT 
 1 AS `idhorastrabajo`,
 1 AS `fecha`,
 1 AS `hora_inicio`,
 1 AS `hora_final`,
 1 AS `hora_total`,
 1 AS `estado`,
 1 AS `tipo`,
 1 AS `precio`,
 1 AS `idempleado`,
 1 AS `idtipotrabajo`,
 1 AS `empleado`,
 1 AS `telefono`,
 1 AS `proyecto`,
 1 AS `direccion`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_info`
--

DROP TABLE IF EXISTS `view_info`;
/*!50001 DROP VIEW IF EXISTS `view_info`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_info` AS SELECT 
 1 AS `idinfo`,
 1 AS `nombre`,
 1 AS `descripcion`,
 1 AS `direccion`,
 1 AS `telefonos`,
 1 AS `correo`,
 1 AS `logo`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_fase`
--

DROP TABLE IF EXISTS `view_fase`;
/*!50001 DROP VIEW IF EXISTS `view_fase`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_fase` AS SELECT 
 1 AS `proyectonombre`,
 1 AS `direccion`,
 1 AS `tiponombre`,
 1 AS `tipo`,
 1 AS `precio`,
 1 AS `idfase`,
 1 AS `idproyecto`,
 1 AS `nombre`,
 1 AS `estado`,
 1 AS `idempleado`,
 1 AS `idtipotrabajo`,
 1 AS `nombreempleado`,
 1 AS `apellido`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_tipopago`
--

DROP TABLE IF EXISTS `view_tipopago`;
/*!50001 DROP VIEW IF EXISTS `view_tipopago`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_tipopago` AS SELECT 
 1 AS `idtipopago`,
 1 AS `nombre`,
 1 AS `detalle`,
 1 AS `estado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_ususario`
--

DROP TABLE IF EXISTS `view_ususario`;
/*!50001 DROP VIEW IF EXISTS `view_ususario`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_ususario` AS SELECT 
 1 AS `idusuario`,
 1 AS `idempleado`,
 1 AS `usuario`,
 1 AS `pass`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_proyecto`
--

DROP TABLE IF EXISTS `view_proyecto`;
/*!50001 DROP VIEW IF EXISTS `view_proyecto`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_proyecto` AS SELECT 
 1 AS `idproyecto`,
 1 AS `nombre`,
 1 AS `direccion`,
 1 AS `estado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `pago_emp`
--

DROP TABLE IF EXISTS `pago_emp`;
/*!50001 DROP VIEW IF EXISTS `pago_emp`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `pago_emp` AS SELECT 
 1 AS `idhorastrabajo`,
 1 AS `hora_total`,
 1 AS `estado`,
 1 AS `tipo`,
 1 AS `total`,
 1 AS `idempleado`,
 1 AS `idtipotrabajo`,
 1 AS `empleado`,
 1 AS `proyecto`,
 1 AS `direccion`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_tipotrabajo`
--

DROP TABLE IF EXISTS `view_tipotrabajo`;
/*!50001 DROP VIEW IF EXISTS `view_tipotrabajo`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_tipotrabajo` AS SELECT 
 1 AS `idtrabajo`,
 1 AS `nombre`,
 1 AS `tipo`,
 1 AS `precio`,
 1 AS `estado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_empleado`
--

DROP TABLE IF EXISTS `view_empleado`;
/*!50001 DROP VIEW IF EXISTS `view_empleado`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_empleado` AS SELECT 
 1 AS `idempleado`,
 1 AS `nombre`,
 1 AS `apellido`,
 1 AS `telefono`,
 1 AS `correo`,
 1 AS `estado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_horastrabajo`
--

DROP TABLE IF EXISTS `view_horastrabajo`;
/*!50001 DROP VIEW IF EXISTS `view_horastrabajo`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_horastrabajo` AS SELECT 
 1 AS `idhorastrabajo`,
 1 AS `fecha`,
 1 AS `hora_inicio`,
 1 AS `hora_final`,
 1 AS `hora_total`,
 1 AS `estado`,
 1 AS `tipo`,
 1 AS `precio`,
 1 AS `idempleado`,
 1 AS `idtipotrabajo`,
 1 AS `proyecto`,
 1 AS `direccion`,
 1 AS `empleado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `view_pagos`
--

DROP TABLE IF EXISTS `view_pagos`;
/*!50001 DROP VIEW IF EXISTS `view_pagos`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `view_pagos` AS SELECT 
 1 AS `idpago`,
 1 AS `fecha`,
 1 AS `cantidadhora`,
 1 AS `horasextra`,
 1 AS `subtotal`,
 1 AS `descuento`,
 1 AS `total`,
 1 AS `idtipopago`,
 1 AS `idempleado`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `pagocancel_emp`
--

DROP TABLE IF EXISTS `pagocancel_emp`;
/*!50001 DROP VIEW IF EXISTS `pagocancel_emp`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `pagocancel_emp` AS SELECT 
 1 AS `idhorastrabajo`,
 1 AS `hora_total`,
 1 AS `estado`,
 1 AS `tipo`,
 1 AS `total`,
 1 AS `idempleado`,
 1 AS `idtipotrabajo`,
 1 AS `empleado`,
 1 AS `proyecto`,
 1 AS `direccion`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `view_modulo`
--

/*!50001 DROP VIEW IF EXISTS `view_modulo`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_modulo` AS select `modulo`.`idmodulo` AS `idmodulo`,`modulo`.`nombre` AS `nombre` from `modulo` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_detallepagos`
--

/*!50001 DROP VIEW IF EXISTS `view_detallepagos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_detallepagos` AS select `detalle_pago`.`iddetalle` AS `iddetalle`,`detalle_pago`.`idpago` AS `idpago`,`detalle_pago`.`idhorastrabajo` AS `idhorastrabajo`,`detalle_pago`.`cant_hora` AS `cant_hora`,`detalle_pago`.`precio` AS `precio`,`detalle_pago`.`cant_extra` AS `cant_extra`,`detalle_pago`.`precio_extra` AS `precio_extra`,`detalle_pago`.`subtotal` AS `subtotal` from `detalle_pago` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `pagos_emp`
--

/*!50001 DROP VIEW IF EXISTS `pagos_emp`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `pagos_emp` AS select `ht`.`idhorastrabajo` AS `idhorastrabajo`,`ht`.`fecha` AS `fecha`,`ht`.`hora_inicio` AS `hora_inicio`,`ht`.`hora_final` AS `hora_final`,`ht`.`hora_total` AS `hora_total`,`ht`.`estado` AS `estado`,`tt`.`tipo` AS `tipo`,`tt`.`precio` AS `precio`,`ht`.`idempleado` AS `idempleado`,`ht`.`idtipotrabajo` AS `idtipotrabajo`,concat(`e`.`nombre`,'  ',`e`.`apellido`) AS `empleado`,`e`.`telefono` AS `telefono`,`p`.`nombre` AS `proyecto`,`p`.`direccion` AS `direccion` from (((`horas_trabajo` `ht` join `tipo_trabajo` `tt` on((`ht`.`idtipotrabajo` = `tt`.`idtrabajo`))) join `proyecto` `p` on((`ht`.`idproyecto` = `p`.`idproyecto`))) join `empleado` `e` on((`ht`.`idempleado` = `e`.`idempleado`))) where (`ht`.`estado` = 'Pending') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_info`
--

/*!50001 DROP VIEW IF EXISTS `view_info`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_info` AS select `info`.`idinfo` AS `idinfo`,`info`.`nombre` AS `nombre`,`info`.`descripcion` AS `descripcion`,`info`.`direccion` AS `direccion`,`info`.`telefonos` AS `telefonos`,`info`.`correo` AS `correo`,`info`.`logo` AS `logo` from `info` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_fase`
--

/*!50001 DROP VIEW IF EXISTS `view_fase`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_fase` AS select `p`.`nombre` AS `proyectonombre`,`p`.`direccion` AS `direccion`,`tt`.`nombre` AS `tiponombre`,`tt`.`tipo` AS `tipo`,`tt`.`precio` AS `precio`,`f`.`idfase` AS `idfase`,`f`.`idproyecto` AS `idproyecto`,`f`.`nombre` AS `nombre`,`f`.`estado` AS `estado`,`f`.`idempleado` AS `idempleado`,`f`.`idtipotrabajo` AS `idtipotrabajo`,`e`.`nombre` AS `nombreempleado`,`e`.`apellido` AS `apellido` from (((`fase_proyecto` `f` join `empleado` `e` on((`f`.`idempleado` = `e`.`idempleado`))) join `tipo_trabajo` `tt` on((`f`.`idtipotrabajo` = `tt`.`idtrabajo`))) join `proyecto` `p` on((`f`.`idproyecto` = `p`.`idproyecto`))) where (`f`.`estado` = 'Activo') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_tipopago`
--

/*!50001 DROP VIEW IF EXISTS `view_tipopago`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_tipopago` AS select `tipopago`.`idtipopago` AS `idtipopago`,`tipopago`.`nombre` AS `nombre`,`tipopago`.`detalle` AS `detalle`,`tipopago`.`estado` AS `estado` from `tipopago` where (`tipopago`.`estado` = 'Inactive') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_ususario`
--

/*!50001 DROP VIEW IF EXISTS `view_ususario`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_ususario` AS select `usuario`.`idusuario` AS `idusuario`,`usuario`.`idempleado` AS `idempleado`,`usuario`.`usuario` AS `usuario`,`usuario`.`pass` AS `pass` from `usuario` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_proyecto`
--

/*!50001 DROP VIEW IF EXISTS `view_proyecto`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_proyecto` AS select `proyecto`.`idproyecto` AS `idproyecto`,`proyecto`.`nombre` AS `nombre`,`proyecto`.`direccion` AS `direccion`,`proyecto`.`estado` AS `estado` from `proyecto` where (`proyecto`.`estado` = 'Activo') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `pago_emp`
--

/*!50001 DROP VIEW IF EXISTS `pago_emp`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `pago_emp` AS select `ht`.`idhorastrabajo` AS `idhorastrabajo`,sum(`ht`.`hora_total`) AS `hora_total`,`ht`.`estado` AS `estado`,`tt`.`tipo` AS `tipo`,sum((`ht`.`hora_total` * (`tt`.`precio` / 60))) AS `total`,`ht`.`idempleado` AS `idempleado`,`ht`.`idtipotrabajo` AS `idtipotrabajo`,concat(`e`.`nombre`,'  ',`e`.`apellido`) AS `empleado`,`p`.`nombre` AS `proyecto`,`p`.`direccion` AS `direccion` from (((`horas_trabajo` `ht` join `tipo_trabajo` `tt` on((`ht`.`idtipotrabajo` = `tt`.`idtrabajo`))) join `proyecto` `p` on((`ht`.`idproyecto` = `p`.`idproyecto`))) join `empleado` `e` on((`ht`.`idempleado` = `e`.`idempleado`))) where (`ht`.`estado` = 'Pending') group by `e`.`idempleado` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_tipotrabajo`
--

/*!50001 DROP VIEW IF EXISTS `view_tipotrabajo`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_tipotrabajo` AS select `tipo_trabajo`.`idtrabajo` AS `idtrabajo`,`tipo_trabajo`.`nombre` AS `nombre`,`tipo_trabajo`.`tipo` AS `tipo`,`tipo_trabajo`.`precio` AS `precio`,`tipo_trabajo`.`estado` AS `estado` from `tipo_trabajo` where (`tipo_trabajo`.`estado` = 'Activo') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_empleado`
--

/*!50001 DROP VIEW IF EXISTS `view_empleado`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_empleado` AS select `empleado`.`idempleado` AS `idempleado`,`empleado`.`nombre` AS `nombre`,`empleado`.`apellido` AS `apellido`,`empleado`.`telefono` AS `telefono`,`empleado`.`correo` AS `correo`,`empleado`.`estado` AS `estado` from `empleado` where (`empleado`.`estado` = 'Activo') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_horastrabajo`
--

/*!50001 DROP VIEW IF EXISTS `view_horastrabajo`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_horastrabajo` AS select `ht`.`idhorastrabajo` AS `idhorastrabajo`,`ht`.`fecha` AS `fecha`,`ht`.`hora_inicio` AS `hora_inicio`,`ht`.`hora_final` AS `hora_final`,`ht`.`hora_total` AS `hora_total`,`ht`.`estado` AS `estado`,`tt`.`tipo` AS `tipo`,`tt`.`precio` AS `precio`,`ht`.`idempleado` AS `idempleado`,`ht`.`idtipotrabajo` AS `idtipotrabajo`,`p`.`nombre` AS `proyecto`,`p`.`direccion` AS `direccion`,concat(`e`.`nombre`,' ',`e`.`apellido`) AS `empleado` from (((`horas_trabajo` `ht` join `tipo_trabajo` `tt` on((`ht`.`idtipotrabajo` = `tt`.`idtrabajo`))) join `proyecto` `p` on((`ht`.`idproyecto` = `p`.`idproyecto`))) join `empleado` `e` on((`ht`.`idempleado` = `e`.`idempleado`))) where (`ht`.`estado` = 'Pending') */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `view_pagos`
--

/*!50001 DROP VIEW IF EXISTS `view_pagos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `view_pagos` AS select `pagos`.`idpago` AS `idpago`,`pagos`.`fecha` AS `fecha`,`pagos`.`cantidadhora` AS `cantidadhora`,`pagos`.`horasextra` AS `horasextra`,`pagos`.`subtotal` AS `subtotal`,`pagos`.`descuento` AS `descuento`,`pagos`.`total` AS `total`,`pagos`.`idtipopago` AS `idtipopago`,`pagos`.`idempleado` AS `idempleado` from `pagos` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `pagocancel_emp`
--

/*!50001 DROP VIEW IF EXISTS `pagocancel_emp`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `pagocancel_emp` AS select `ht`.`idhorastrabajo` AS `idhorastrabajo`,sum(`ht`.`hora_total`) AS `hora_total`,`ht`.`estado` AS `estado`,`tt`.`tipo` AS `tipo`,sum((`ht`.`hora_total` * (`tt`.`precio` / 60))) AS `total`,`ht`.`idempleado` AS `idempleado`,`ht`.`idtipotrabajo` AS `idtipotrabajo`,concat(`e`.`nombre`,'  ',`e`.`apellido`) AS `empleado`,`p`.`nombre` AS `proyecto`,`p`.`direccion` AS `direccion` from (((`horas_trabajo` `ht` join `tipo_trabajo` `tt` on((`ht`.`idtipotrabajo` = `tt`.`idtrabajo`))) join `proyecto` `p` on((`ht`.`idproyecto` = `p`.`idproyecto`))) join `empleado` `e` on((`ht`.`idempleado` = `e`.`idempleado`))) where (`ht`.`estado` = 'Cancelled') group by `e`.`idempleado` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-30 17:07:33
