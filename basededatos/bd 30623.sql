-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bss_pagos
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bss_pagos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bss_pagos` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `bss_pagos` ;

-- -----------------------------------------------------
-- Table `bss_pagos`.`empleado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`empleado` (
  `idempleado` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL DEFAULT NULL,
  `apellido` VARCHAR(50) NULL DEFAULT NULL,
  `telefono` INT NULL DEFAULT NULL,
  `correo` VARCHAR(100) NULL DEFAULT NULL,
  `estado` VARCHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`idempleado`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bss_pagos`.`proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`proyecto` (
  `idproyecto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NULL DEFAULT NULL,
  `direccion` VARCHAR(150) NULL DEFAULT NULL,
  `estado` VARCHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`idproyecto`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bss_pagos`.`tipo_trabajo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`tipo_trabajo` (
  `idtrabajo` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL DEFAULT NULL,
  `tipo` VARCHAR(50) NULL DEFAULT NULL,
  `precio` DECIMAL(12,2) NULL DEFAULT NULL,
  `estado` VARCHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`idtrabajo`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bss_pagos`.`horas_trabajo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`horas_trabajo` (
  `idhorastrabajo` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NULL DEFAULT NULL,
  `hora_inicio` DATETIME NULL DEFAULT NULL,
  `hora_final` DATETIME NULL DEFAULT NULL,
  `hora_total` DECIMAL(12,2) NULL DEFAULT NULL,
  `horas_extra` DECIMAL(12,2) NULL DEFAULT NULL,
  `estado` VARCHAR(15) NULL DEFAULT NULL,
  `idproyecto` INT NULL DEFAULT NULL,
  `idtipotrabajo` INT NULL DEFAULT NULL,
  `idempleado` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idhorastrabajo`),
  INDEX `fk_empleado` (`idempleado` ASC) VISIBLE,
  INDEX `fk_proyecto` (`idproyecto` ASC) VISIBLE,
  INDEX `fk_tipotrabajo` (`idtipotrabajo` ASC) VISIBLE,
  CONSTRAINT `fk_empleado`
    FOREIGN KEY (`idempleado`)
    REFERENCES `bss_pagos`.`empleado` (`idempleado`),
  CONSTRAINT `fk_proyecto`
    FOREIGN KEY (`idproyecto`)
    REFERENCES `bss_pagos`.`proyecto` (`idproyecto`),
  CONSTRAINT `fk_tipotrabajo`
    FOREIGN KEY (`idtipotrabajo`)
    REFERENCES `bss_pagos`.`tipo_trabajo` (`idtrabajo`))
ENGINE = InnoDB
AUTO_INCREMENT = 57
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bss_pagos`.`tipopago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`tipopago` (
  `idtipopago` INT NOT NULL,
  `nombre` VARCHAR(60) NULL DEFAULT NULL,
  `detalle` VARCHAR(90) NULL DEFAULT NULL,
  `estado` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`idtipopago`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bss_pagos`.`pagos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`pagos` (
  `idpago` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NULL DEFAULT NULL,
  `cantidadhora` DECIMAL(12,2) NULL DEFAULT NULL,
  `horasextra` DECIMAL(12,2) NULL DEFAULT NULL,
  `subtotal` DECIMAL(12,2) NULL DEFAULT NULL,
  `descuento` DECIMAL(12,2) NULL DEFAULT NULL,
  `total` DECIMAL(12,2) NULL DEFAULT NULL,
  `idtipopago` INT NULL DEFAULT NULL,
  `idempleado` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idpago`),
  INDEX `fk_pempleado` (`idempleado` ASC) VISIBLE,
  INDEX `fk_ptipopago` (`idtipopago` ASC) VISIBLE,
  CONSTRAINT `fk_pempleado`
    FOREIGN KEY (`idempleado`)
    REFERENCES `bss_pagos`.`empleado` (`idempleado`),
  CONSTRAINT `fk_ptipopago`
    FOREIGN KEY (`idtipopago`)
    REFERENCES `bss_pagos`.`tipopago` (`idtipopago`))
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bss_pagos`.`detalle_pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`detalle_pago` (
  `iddetalle` INT NOT NULL,
  `idpago` INT NULL DEFAULT NULL,
  `idhorastrabajo` INT NULL DEFAULT NULL,
  `cant_hora` INT NULL DEFAULT NULL,
  `precio` DECIMAL(12,2) NULL DEFAULT NULL,
  `cant_extra` INT NULL DEFAULT NULL,
  `precio_extra` DECIMAL(12,2) NULL DEFAULT NULL,
  `subtotal` DECIMAL(12,2) NULL DEFAULT NULL,
  PRIMARY KEY (`iddetalle`),
  INDEX `fk_pagos` (`idpago` ASC) VISIBLE,
  INDEX `fk_horastrabajo` (`idhorastrabajo` ASC) VISIBLE,
  CONSTRAINT `fk_horastrabajo`
    FOREIGN KEY (`idhorastrabajo`)
    REFERENCES `bss_pagos`.`horas_trabajo` (`idhorastrabajo`),
  CONSTRAINT `fk_pagos`
    FOREIGN KEY (`idpago`)
    REFERENCES `bss_pagos`.`pagos` (`idpago`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bss_pagos`.`fase_proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`fase_proyecto` (
  `idfase` INT NOT NULL AUTO_INCREMENT,
  `idproyecto` INT NULL DEFAULT NULL,
  `nombre` VARCHAR(75) NULL DEFAULT NULL,
  `estado` VARCHAR(15) NULL DEFAULT NULL,
  `idempleado` INT NULL DEFAULT NULL,
  `idtipotrabajo` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idfase`),
  INDEX `fk_faseproyecto` (`idproyecto` ASC) VISIBLE,
  INDEX `fk_empleado` (`idempleado` ASC) VISIBLE,
  INDEX `fk_tipotra` (`idtipotrabajo` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 20
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bss_pagos`.`info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`info` (
  `idinfo` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NULL DEFAULT NULL,
  `descripcion` VARCHAR(100) NULL DEFAULT NULL,
  `direccion` VARCHAR(100) NULL DEFAULT NULL,
  `telefonos` VARCHAR(50) NULL DEFAULT NULL,
  `correo` VARCHAR(100) NULL DEFAULT NULL,
  `logo` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`idinfo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bss_pagos`.`modulo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`modulo` (
  `idmodulo` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NULL DEFAULT NULL,
  PRIMARY KEY (`idmodulo`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bss_pagos`.`permiso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`permiso` (
  `idpermiso` INT NOT NULL AUTO_INCREMENT,
  `idempleado` INT NULL DEFAULT NULL,
  `idmodulo` INT NULL DEFAULT NULL,
  `acceso` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`idpermiso`),
  INDEX `fk_emp` (`idempleado` ASC) VISIBLE,
  INDEX `fk_modulo` (`idmodulo` ASC) VISIBLE,
  CONSTRAINT `fk_emp`
    FOREIGN KEY (`idempleado`)
    REFERENCES `bss_pagos`.`empleado` (`idempleado`),
  CONSTRAINT `fk_modulo`
    FOREIGN KEY (`idmodulo`)
    REFERENCES `bss_pagos`.`modulo` (`idmodulo`))
ENGINE = InnoDB
AUTO_INCREMENT = 57
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bss_pagos`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `idempleado` INT NULL DEFAULT NULL,
  `usuario` VARCHAR(100) NULL DEFAULT NULL,
  `pass` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`idusuario`),
  INDEX `fk_usuario` (`idempleado` ASC) VISIBLE,
  CONSTRAINT `fk_usuario`
    FOREIGN KEY (`idempleado`)
    REFERENCES `bss_pagos`.`empleado` (`idempleado`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

USE `bss_pagos` ;

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`pago_emp`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`pago_emp` (`idhorastrabajo` INT, `hora_total` INT, `estado` INT, `tipo` INT, `total` INT, `idempleado` INT, `idtipotrabajo` INT, `empleado` INT, `proyecto` INT, `direccion` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`pagocancel_emp`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`pagocancel_emp` (`idhorastrabajo` INT, `hora_total` INT, `estado` INT, `tipo` INT, `total` INT, `idempleado` INT, `idtipotrabajo` INT, `empleado` INT, `proyecto` INT, `direccion` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`pagos_emp`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`pagos_emp` (`idhorastrabajo` INT, `fecha` INT, `hora_inicio` INT, `hora_final` INT, `hora_total` INT, `estado` INT, `tipo` INT, `precio` INT, `idempleado` INT, `idtipotrabajo` INT, `empleado` INT, `telefono` INT, `proyecto` INT, `direccion` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`view_detallepagos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`view_detallepagos` (`iddetalle` INT, `idpago` INT, `idhorastrabajo` INT, `cant_hora` INT, `precio` INT, `cant_extra` INT, `precio_extra` INT, `subtotal` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`view_empleado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`view_empleado` (`idempleado` INT, `nombre` INT, `apellido` INT, `telefono` INT, `correo` INT, `estado` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`view_fase`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`view_fase` (`proyectonombre` INT, `direccion` INT, `tiponombre` INT, `tipo` INT, `precio` INT, `idfase` INT, `idproyecto` INT, `nombre` INT, `estado` INT, `idempleado` INT, `idtipotrabajo` INT, `nombreempleado` INT, `apellido` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`view_horastrabajo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`view_horastrabajo` (`idhorastrabajo` INT, `fecha` INT, `hora_inicio` INT, `hora_final` INT, `hora_total` INT, `estado` INT, `tipo` INT, `precio` INT, `idempleado` INT, `idtipotrabajo` INT, `proyecto` INT, `direccion` INT, `empleado` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`view_info`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`view_info` (`idinfo` INT, `nombre` INT, `descripcion` INT, `direccion` INT, `telefonos` INT, `correo` INT, `logo` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`view_modulo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`view_modulo` (`idmodulo` INT, `nombre` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`view_pagos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`view_pagos` (`idpago` INT, `fecha` INT, `cantidadhora` INT, `horasextra` INT, `subtotal` INT, `descuento` INT, `total` INT, `idtipopago` INT, `idempleado` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`view_proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`view_proyecto` (`idproyecto` INT, `nombre` INT, `direccion` INT, `estado` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`view_tipopago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`view_tipopago` (`idtipopago` INT, `nombre` INT, `detalle` INT, `estado` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`view_tipotrabajo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`view_tipotrabajo` (`idtrabajo` INT, `nombre` INT, `tipo` INT, `precio` INT, `estado` INT);

-- -----------------------------------------------------
-- Placeholder table for view `bss_pagos`.`view_ususario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bss_pagos`.`view_ususario` (`idusuario` INT, `idempleado` INT, `usuario` INT, `pass` INT);

-- -----------------------------------------------------
-- procedure getpagosemp
-- -----------------------------------------------------

DELIMITER $$
USE `bss_pagos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getpagosemp`(
in _idempleado int
)
begin
select ht.*,  tt.tipo, tt.precio, 
p.nombre as proyecto, p.direccion
from horas_trabajo ht 
inner join tipo_trabajo tt on ht.idtipotrabajo =tt.idtrabajo
inner join proyecto p on ht.idproyecto = p.idproyecto
inner join empleado e on ht.idempleado=e.idempleado
where ht.estado='Pending' and e.idempleado=_idempleado;
end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure ingreo_tipopago
-- -----------------------------------------------------

DELIMITER $$
USE `bss_pagos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ingreo_tipopago`(
in _idtipopago int,
in _nombre varchar(60),
in _detalle varchar(60),
in accion varchar(15)
)
begin
declare  exit handler for sqlexception
begin
show errors limit 1;
resignal;
rollback;
end;
declare exit handler for sqlwarning
begin
show warnings limit  1;
resignal;
rollback;
end;
start transaction;
case accion 
when "new " then 
insert into tipopago(nombre,detalle, estado) values(_nombre,_detalle,"Active");
when "update" then
update tipo_pago set nombre=_nombre, detalle=_detalle where idtipopago=_idtipopago;
when "delete" then
update tipo_pago set estado="Inactive" where idtipopago=_idtipopago;
end case;
commit;
end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure ingreso_detallepago
-- -----------------------------------------------------

DELIMITER $$
USE `bss_pagos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ingreso_detallepago`(
in _idetalle int,
in _idpago int,
in _idhorastrabajo int,
in _cant_hora int,
in _precio decimal(12,2),
in _cant_extra int,
in _precio_extra decimal(12,2),
in _subtotal decimal(12,2),
in accion varchar(15)
)
begin 
declare exit handler for sqlexception
begin 
show errors limit 1;
resignal;
rollback;
end;
declare exit handler for sqlwarning
begin
show warnings limit 1;
resignal;
rollback;
end;
start transaction;
case accion 
when "new" then
insert into detalle_factura(idpago, idhorastrabajo,cant_hora,precio,cant_extra,precio_extra,subtotal)
values(_idpago, _idhorastrabajo,_cant_hora,_precio,_cant_extra,_precio_extra,_subtotal);
when "viewxd" then
select * from detalle_pago where idpago=_idpago;
when "delete" then
delete from detalle_pago where iddetalle=_iddetalle;
end case;
commit;
end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure ingreso_empleado
-- -----------------------------------------------------

DELIMITER $$
USE `bss_pagos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ingreso_empleado`(
in _idempleado integer,
in _nombre varchar(100),
in _apellido varchar(100),
in _telefono integer,
in _correo varchar(100),
in _estado varchar(15),
in accion varchar(10)
)
begin
declare exit  handler for sqlexception
begin
show errors limit 1;
resignal;
rollback;
end;
declare exit handler for sqlwarning
begin
show warnings limit 1;
resignal;
rollback;
end;
start transaction;
case accion
when 'new' then
insert into empleado(nombre,apellido,telefono,correo,estado)values(_nombre,_apellido,_telefono,_correo,_estado);
when 'update' then
update empleado set nombre=_nombre,apellido=_apellido,telefono=_telefono,correo=_correo,estado=_estado
where idempleado =_idempleado;
when 'viewone' then
select *from empleado where idempleado=_idempleado;
when 'delete' then
update empleado set estado="No Activo" where idempleado=_idempleado;
end case;
commit;
end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure ingreso_fase
-- -----------------------------------------------------

DELIMITER $$
USE `bss_pagos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ingreso_fase`(
in _idfase integer,
in _idproyecto integer,
in _nombre varchar(75),
in _estado varchar(75),
in _idempleado int,
in _idtipotrabajo int,
in accion varchar(10)
)
begin
declare exit  handler for sqlexception
begin
show errors limit 1;
resignal;
rollback;
end;
declare exit handler for sqlwarning
begin
show warnings limit 1;
resignal;
rollback;
end;
start transaction;
case accion
when 'new' then
insert into fase_proyecto(idproyecto,nombre,estado, idempleado, idtipotrabajo)
values(_idproyecto,_nombre,_estado,_idempleado, _idtipotrabajo);
when 'update' then
update fase_proyecto set idproyecto=_idproyecto, nombre=_nombre, estado=_estado, idempleado=_idempleado, idtipotrabajo=_idtipotrabajo
where idfase =_idfase;
when 'viewone' then
select *from fase_proyecto where idfase=_idfase;
when 'viewxd' then
 SELECT 
      p.nombre as nombreproyecto, p.direccion, tt.nombre as nombrefase, tt.tipo, tt.precio, f.*,
      e.nombre as nombreempleado,e.apellido
      
    FROM
       fase_proyecto f inner join empleado e on f.idempleado=e.idempleado
       inner join tipo_trabajo tt on f.idtipotrabajo = tt.idtrabajo
       inner join  proyecto p on f.idproyecto = p.idproyecto
       where
       f.estado="Activo" and f.idproyecto= _idproyecto;
when 'delete' then
update fase_proyecto set estado="No Activo" where idfase=_idfase;
end case;
commit;
end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure ingreso_horastrabajo
-- -----------------------------------------------------

DELIMITER $$
USE `bss_pagos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ingreso_horastrabajo`(
in _idhorastrabajo integer,
in _fecha date,
in _hora_inicio datetime,
in _hora_final datetime,
in _hora_total decimal(12,2),
in _horas_extra decimal(12,2),
in _estado varchar(30),
in _idproyecto int,
in _idtipotrabajo int,
in _idempleado int,
in accion varchar(10)
)
begin
declare exit  handler for sqlexception
begin
show errors limit 1;
resignal;
rollback;
end;
declare exit handler for sqlwarning
begin
show warnings limit 1;
resignal;
rollback;
end;
start transaction;
case accion
when 'new' then
insert into horas_trabajo(fecha,hora_inicio,hora_total,horas_extra,estado, idproyecto, idtipotrabajo,idempleado)
values(_fecha,_hora_inicio,_hora_total,_horas_extra,_estado,_idproyecto, _idtipotrabajo,_idempleado);
when 'update' then
update horas_trabajo set fecha=_fecha, hora_inicio=_hora_inicio, hora_final=_hora_final, hora_total=_hora_total,
horas_extra=_idfase, estado=_estado,idproyecto=_idproyecto, idtipotrabajo=_idtipotrabajo,idempleado=_idempleado
where idhorastrabajo =_idhorastrabajo;
/*when 'updatef' then
update horas_trabajo set  hora_final=_hora_final, hora_total=(select timestampdiff(minute,  hora_inicio, hora_final) )
where idhorastrabajo =_idhorastrabajo;*/
when 'updatef' then
update horas_trabajo set  hora_final=_hora_final, hora_total=(select timestampdiff(minute,  hora_inicio, hora_final) )
where idhorastrabajo =_idhorastrabajo;
when 'updateht' then
update horas_trabajo set  hora_total=_hora_total
where idhorastrabajo =_idhorastrabajo;
when 'updatehe' then
update horas_trabajo set  horas_extra=_horas_extra
where idhorastrabajo =_idhorastrabajo;
when 'viewone' then
select *from horas_trabajo where idhorastrabajo=_idhorastrabajo;
when 'delete' then
delete from horas_trabajo where idhorastrabajo=_idhorastrabajo;

end case;
commit;
end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure ingreso_info
-- -----------------------------------------------------

DELIMITER $$
USE `bss_pagos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ingreso_info`(
in _idinfo int,
in _nombre varchar(100),
in _descripcion varchar(100),
in _direccion varchar(100),
in _telefonos varchar(50),
in _correo varchar(100),
in _logo varchar(100),
in accion varchar(15)
)
begin 
declare exit handler for sqlexception
begin 
show errors limit 1;
resignal;
rollback;
end;
declare exit handler for sqlwarning
begin 
show warnings limit 1;
resignal;
rollback;
end;
start transaction;
case accion
when 'new' then
insert into info (nombre,descripcion,direccion,telefonos,correo, logo) 
values(_nombre,_descripcion,_direccion,_telefonos,_correo, _logo);
when 'update' then
update info set nombre=_nombre,descripcion=_descripcion ,direccion=_direccion,telefonos=_telefonos,correo=_correo, logo=_logo
where idinfo=_idinfo;

end case;
commit;
end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure ingreso_pagos
-- -----------------------------------------------------

DELIMITER $$
USE `bss_pagos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ingreso_pagos`(
in _idpago integer,
in _idempleado int,
in _idtipopago int,
in _cantidadhora decimal(12.2),
in _horasextra decimal(12,2),
in _subtotal decimal(12.2),
in _descuento decimal(12.2),
in _total decimal(12.2),
in accion varchar(10)
)
begin
declare exit  handler for sqlexception
begin
show errors limit 1;
resignal;
rollback;
end;
declare exit handler for sqlwarning
begin
show warnings limit 1;
resignal;
rollback;
end;
start transaction;
case accion
when 'new' then
insert into pagos(fecha,cantidadhora,horasextra,subtotal,descuento,total,idtipopago,idempleado)
values(curdate(),_cantidadhora,_horasextra,_subtotal,_descuento,_total,_idtipopago,_idempleado);
when 'update' then
update pagos set idempleado=_idempleado,fecha=curdate(), idtipopago=_idtipopago, cantidadhora=_cantidadhora, horasextra=_horasextra,
subtotal=_subtotal,descuento=_descuento, total=_total
where idpago =idpago;
when 'viewone' then
select *from pagos where idpago=_idpago;
when 'delete' then
delete  from pagos where idpago=_idpago;
end case;
commit;
end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure ingreso_permiso
-- -----------------------------------------------------

DELIMITER $$
USE `bss_pagos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ingreso_permiso`(
in _idpermiso integer,
in _idempleado integer,
in _idmodulo integer,
in _acceso boolean,
in accion varchar(10)
)
begin
declare exit handler for sqlexception
begin
show errors limit 1;
resignal;
rollback;
end;
declare exit handler for sqlwarning
begin 
show warnings limit 1;
resignal;
rollback;
end;
start transaction;
case accion
when 'new' then
insert into permiso(idempleado,idmodulo,acceso)values(_idempleado,_idmodulo,_acceso);
when 'update' then
update permiso set idempleado=_idempleado, idmodulo=_idmodulo, acceso=_acceso
where idpermiso=_idpermiso;
when 'viewone' then
select *from permiso where idempleado=_idempleado;
when "viewxd" then
select p.idpermiso, p.idempleado, p.idmodulo, m.nombre, p.acceso
from permiso  p inner join modulo m on m.idmodulo=p.idmodulo
where p.idempleado=_idempleado;

when "delete" then 
delete from permiso where idpermiso=_idpermiso;
end case;
commit;
end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure ingreso_proyecto
-- -----------------------------------------------------

DELIMITER $$
USE `bss_pagos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ingreso_proyecto`(
in _idproyecto integer,
in _nombre varchar(100),
in _direccion varchar(100),
in _estado varchar(15),
in accion varchar(10)
)
begin
declare exit  handler for sqlexception
begin
show errors limit 1;
resignal;
rollback;
end;
declare exit handler for sqlwarning
begin
show warnings limit 1;
resignal;
rollback;
end;
start transaction;
case accion
when 'new' then
insert into proyecto(nombre,direccion,estado)values(_nombre,_direccion,_estado);
when 'update' then
update proyecto set nombre=_nombre,direccion=_direccion, estado=_estado
where idproyecto =_idproyecto;
when 'viewone' then
select *from proyecto where idproyecto=_idproyecto;
when 'delete' then
update proyecto set estado="No Activo" where idproyecto=_idproyecto;
end case;
commit;
end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure ingreso_tipotrabajo
-- -----------------------------------------------------

DELIMITER $$
USE `bss_pagos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ingreso_tipotrabajo`(
in _idtrabajo integer,
in _nombre varchar(100),
in _tipo varchar(50),
in _precio decimal(12,2),
in _estado varchar(15),
in accion varchar(10)
)
begin
declare exit  handler for sqlexception
begin
show errors limit 1;
resignal;
rollback;
end;
declare exit handler for sqlwarning
begin
show warnings limit 1;
resignal;
rollback;
end;
start transaction;
case accion
when 'new' then
insert into tipo_trabajo(nombre,tipo,precio,estado)values(_nombre,_tipo,_precio,_estado);
when 'update' then
update tipo_trabajo set nombre=_nombre,tipo=_tipo, precio=_precio, estado=_estado
where idtrabajo =_idtrabajo;
when 'viewone' then
select *from tipo_trabajo where idtrabajo=_idtrabajo;
when 'delete' then
update tipo_trabajo set estado="No Activo" where idtrabajo=_idtrabajo;
end case;
commit;
end$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure ingreso_usuario
-- -----------------------------------------------------

DELIMITER $$
USE `bss_pagos`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ingreso_usuario`(
in _idusuario integer,
in _idempleado integer,
in _usuario varchar(100),
in _pass varchar(100),
in accion varchar(10)
)
begin
declare exit  handler for sqlexception
begin
show errors limit 1;
resignal;
rollback;
end;
declare exit handler for sqlwarning
begin
show warnings limit 1;
resignal;
rollback;
end;
start transaction;
case accion
when 'new' then
insert into usuario(idempleado,usuario,pass)values(_idempleado,_usuario,_pass);
when 'update' then
update usuario set idempleado=_idempleado,usuario=_usuario, pass=_pass
where idusuario =_idusuario;
when 'viewone' then
select *from usuario where idusuario =_idusuario;
when 'viewxd' then
select *from usuario where idempleado =_idempleado limit 1; 
when 'delete' then
delete from usuario where idusuario =_idusuario;
when "login" then
select e.idempleado,e.nombre,e.apellido,  e.telefono, e.correo, e.estado,
u.idusuario, u.usuario
 from empleado e inner join usuario u on e.idempleado=u.idempleado 
where
u.usuario=_usuario and u.pass=_pass;
end case;
commit;
end$$

DELIMITER ;

-- -----------------------------------------------------
-- View `bss_pagos`.`pago_emp`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`pago_emp`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`pago_emp` AS select `ht`.`idhorastrabajo` AS `idhorastrabajo`,sum(`ht`.`hora_total`) AS `hora_total`,`ht`.`estado` AS `estado`,`tt`.`tipo` AS `tipo`,sum((`ht`.`hora_total` * (`tt`.`precio` / 60))) AS `total`,`ht`.`idempleado` AS `idempleado`,`ht`.`idtipotrabajo` AS `idtipotrabajo`,concat(`e`.`nombre`,'  ',`e`.`apellido`) AS `empleado`,`p`.`nombre` AS `proyecto`,`p`.`direccion` AS `direccion` from (((`bss_pagos`.`horas_trabajo` `ht` join `bss_pagos`.`tipo_trabajo` `tt` on((`ht`.`idtipotrabajo` = `tt`.`idtrabajo`))) join `bss_pagos`.`proyecto` `p` on((`ht`.`idproyecto` = `p`.`idproyecto`))) join `bss_pagos`.`empleado` `e` on((`ht`.`idempleado` = `e`.`idempleado`))) where (`ht`.`estado` = 'Pending') group by `e`.`idempleado`;

-- -----------------------------------------------------
-- View `bss_pagos`.`pagocancel_emp`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`pagocancel_emp`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`pagocancel_emp` AS select `ht`.`idhorastrabajo` AS `idhorastrabajo`,sum(`ht`.`hora_total`) AS `hora_total`,`ht`.`estado` AS `estado`,`tt`.`tipo` AS `tipo`,sum((`ht`.`hora_total` * (`tt`.`precio` / 60))) AS `total`,`ht`.`idempleado` AS `idempleado`,`ht`.`idtipotrabajo` AS `idtipotrabajo`,concat(`e`.`nombre`,'  ',`e`.`apellido`) AS `empleado`,`p`.`nombre` AS `proyecto`,`p`.`direccion` AS `direccion` from (((`bss_pagos`.`horas_trabajo` `ht` join `bss_pagos`.`tipo_trabajo` `tt` on((`ht`.`idtipotrabajo` = `tt`.`idtrabajo`))) join `bss_pagos`.`proyecto` `p` on((`ht`.`idproyecto` = `p`.`idproyecto`))) join `bss_pagos`.`empleado` `e` on((`ht`.`idempleado` = `e`.`idempleado`))) where (`ht`.`estado` = 'Cancelled') group by `e`.`idempleado`;

-- -----------------------------------------------------
-- View `bss_pagos`.`pagos_emp`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`pagos_emp`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`pagos_emp` AS select `ht`.`idhorastrabajo` AS `idhorastrabajo`,`ht`.`fecha` AS `fecha`,`ht`.`hora_inicio` AS `hora_inicio`,`ht`.`hora_final` AS `hora_final`,`ht`.`hora_total` AS `hora_total`,`ht`.`estado` AS `estado`,`tt`.`tipo` AS `tipo`,`tt`.`precio` AS `precio`,`ht`.`idempleado` AS `idempleado`,`ht`.`idtipotrabajo` AS `idtipotrabajo`,concat(`e`.`nombre`,'  ',`e`.`apellido`) AS `empleado`,`e`.`telefono` AS `telefono`,`p`.`nombre` AS `proyecto`,`p`.`direccion` AS `direccion` from (((`bss_pagos`.`horas_trabajo` `ht` join `bss_pagos`.`tipo_trabajo` `tt` on((`ht`.`idtipotrabajo` = `tt`.`idtrabajo`))) join `bss_pagos`.`proyecto` `p` on((`ht`.`idproyecto` = `p`.`idproyecto`))) join `bss_pagos`.`empleado` `e` on((`ht`.`idempleado` = `e`.`idempleado`))) where (`ht`.`estado` = 'Pending');

-- -----------------------------------------------------
-- View `bss_pagos`.`view_detallepagos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`view_detallepagos`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`view_detallepagos` AS select `bss_pagos`.`detalle_pago`.`iddetalle` AS `iddetalle`,`bss_pagos`.`detalle_pago`.`idpago` AS `idpago`,`bss_pagos`.`detalle_pago`.`idhorastrabajo` AS `idhorastrabajo`,`bss_pagos`.`detalle_pago`.`cant_hora` AS `cant_hora`,`bss_pagos`.`detalle_pago`.`precio` AS `precio`,`bss_pagos`.`detalle_pago`.`cant_extra` AS `cant_extra`,`bss_pagos`.`detalle_pago`.`precio_extra` AS `precio_extra`,`bss_pagos`.`detalle_pago`.`subtotal` AS `subtotal` from `bss_pagos`.`detalle_pago`;

-- -----------------------------------------------------
-- View `bss_pagos`.`view_empleado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`view_empleado`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`view_empleado` AS select `bss_pagos`.`empleado`.`idempleado` AS `idempleado`,`bss_pagos`.`empleado`.`nombre` AS `nombre`,`bss_pagos`.`empleado`.`apellido` AS `apellido`,`bss_pagos`.`empleado`.`telefono` AS `telefono`,`bss_pagos`.`empleado`.`correo` AS `correo`,`bss_pagos`.`empleado`.`estado` AS `estado` from `bss_pagos`.`empleado` where (`bss_pagos`.`empleado`.`estado` = 'Activo');

-- -----------------------------------------------------
-- View `bss_pagos`.`view_fase`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`view_fase`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`view_fase` AS select `p`.`nombre` AS `proyectonombre`,`p`.`direccion` AS `direccion`,`tt`.`nombre` AS `tiponombre`,`tt`.`tipo` AS `tipo`,`tt`.`precio` AS `precio`,`f`.`idfase` AS `idfase`,`f`.`idproyecto` AS `idproyecto`,`f`.`nombre` AS `nombre`,`f`.`estado` AS `estado`,`f`.`idempleado` AS `idempleado`,`f`.`idtipotrabajo` AS `idtipotrabajo`,`e`.`nombre` AS `nombreempleado`,`e`.`apellido` AS `apellido` from (((`bss_pagos`.`fase_proyecto` `f` join `bss_pagos`.`empleado` `e` on((`f`.`idempleado` = `e`.`idempleado`))) join `bss_pagos`.`tipo_trabajo` `tt` on((`f`.`idtipotrabajo` = `tt`.`idtrabajo`))) join `bss_pagos`.`proyecto` `p` on((`f`.`idproyecto` = `p`.`idproyecto`))) where (`f`.`estado` = 'Activo');

-- -----------------------------------------------------
-- View `bss_pagos`.`view_horastrabajo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`view_horastrabajo`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`view_horastrabajo` AS select `ht`.`idhorastrabajo` AS `idhorastrabajo`,`ht`.`fecha` AS `fecha`,`ht`.`hora_inicio` AS `hora_inicio`,`ht`.`hora_final` AS `hora_final`,`ht`.`hora_total` AS `hora_total`,`ht`.`estado` AS `estado`,`tt`.`tipo` AS `tipo`,`tt`.`precio` AS `precio`,`ht`.`idempleado` AS `idempleado`,`ht`.`idtipotrabajo` AS `idtipotrabajo`,`p`.`nombre` AS `proyecto`,`p`.`direccion` AS `direccion`,concat(`e`.`nombre`,' ',`e`.`apellido`) AS `empleado` from (((`bss_pagos`.`horas_trabajo` `ht` join `bss_pagos`.`tipo_trabajo` `tt` on((`ht`.`idtipotrabajo` = `tt`.`idtrabajo`))) join `bss_pagos`.`proyecto` `p` on((`ht`.`idproyecto` = `p`.`idproyecto`))) join `bss_pagos`.`empleado` `e` on((`ht`.`idempleado` = `e`.`idempleado`))) where (`ht`.`estado` = 'Pending');

-- -----------------------------------------------------
-- View `bss_pagos`.`view_info`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`view_info`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`view_info` AS select `bss_pagos`.`info`.`idinfo` AS `idinfo`,`bss_pagos`.`info`.`nombre` AS `nombre`,`bss_pagos`.`info`.`descripcion` AS `descripcion`,`bss_pagos`.`info`.`direccion` AS `direccion`,`bss_pagos`.`info`.`telefonos` AS `telefonos`,`bss_pagos`.`info`.`correo` AS `correo`,`bss_pagos`.`info`.`logo` AS `logo` from `bss_pagos`.`info`;

-- -----------------------------------------------------
-- View `bss_pagos`.`view_modulo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`view_modulo`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`view_modulo` AS select `bss_pagos`.`modulo`.`idmodulo` AS `idmodulo`,`bss_pagos`.`modulo`.`nombre` AS `nombre` from `bss_pagos`.`modulo`;

-- -----------------------------------------------------
-- View `bss_pagos`.`view_pagos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`view_pagos`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`view_pagos` AS select `bss_pagos`.`pagos`.`idpago` AS `idpago`,`bss_pagos`.`pagos`.`fecha` AS `fecha`,`bss_pagos`.`pagos`.`cantidadhora` AS `cantidadhora`,`bss_pagos`.`pagos`.`horasextra` AS `horasextra`,`bss_pagos`.`pagos`.`subtotal` AS `subtotal`,`bss_pagos`.`pagos`.`descuento` AS `descuento`,`bss_pagos`.`pagos`.`total` AS `total`,`bss_pagos`.`pagos`.`idtipopago` AS `idtipopago`,`bss_pagos`.`pagos`.`idempleado` AS `idempleado` from `bss_pagos`.`pagos`;

-- -----------------------------------------------------
-- View `bss_pagos`.`view_proyecto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`view_proyecto`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`view_proyecto` AS select `bss_pagos`.`proyecto`.`idproyecto` AS `idproyecto`,`bss_pagos`.`proyecto`.`nombre` AS `nombre`,`bss_pagos`.`proyecto`.`direccion` AS `direccion`,`bss_pagos`.`proyecto`.`estado` AS `estado` from `bss_pagos`.`proyecto` where (`bss_pagos`.`proyecto`.`estado` = 'Activo');

-- -----------------------------------------------------
-- View `bss_pagos`.`view_tipopago`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`view_tipopago`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`view_tipopago` AS select `bss_pagos`.`tipopago`.`idtipopago` AS `idtipopago`,`bss_pagos`.`tipopago`.`nombre` AS `nombre`,`bss_pagos`.`tipopago`.`detalle` AS `detalle`,`bss_pagos`.`tipopago`.`estado` AS `estado` from `bss_pagos`.`tipopago` where (`bss_pagos`.`tipopago`.`estado` = 'Inactive');

-- -----------------------------------------------------
-- View `bss_pagos`.`view_tipotrabajo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`view_tipotrabajo`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`view_tipotrabajo` AS select `bss_pagos`.`tipo_trabajo`.`idtrabajo` AS `idtrabajo`,`bss_pagos`.`tipo_trabajo`.`nombre` AS `nombre`,`bss_pagos`.`tipo_trabajo`.`tipo` AS `tipo`,`bss_pagos`.`tipo_trabajo`.`precio` AS `precio`,`bss_pagos`.`tipo_trabajo`.`estado` AS `estado` from `bss_pagos`.`tipo_trabajo` where (`bss_pagos`.`tipo_trabajo`.`estado` = 'Activo');

-- -----------------------------------------------------
-- View `bss_pagos`.`view_ususario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bss_pagos`.`view_ususario`;
USE `bss_pagos`;
CREATE  OR REPLACE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `bss_pagos`.`view_ususario` AS select `bss_pagos`.`usuario`.`idusuario` AS `idusuario`,`bss_pagos`.`usuario`.`idempleado` AS `idempleado`,`bss_pagos`.`usuario`.`usuario` AS `usuario`,`bss_pagos`.`usuario`.`pass` AS `pass` from `bss_pagos`.`usuario`;
USE `bss_pagos`;

DELIMITER $$
USE `bss_pagos`$$
CREATE
DEFINER=`root`@`localhost`
TRIGGER `bss_pagos`.`pagar_horasad`
AFTER DELETE ON `bss_pagos`.`detalle_pago`
FOR EACH ROW
begin
update horas_trabajo set estado="Pending" where idhorastrabajo=old.idhorastrabajo;
end$$

USE `bss_pagos`$$
CREATE
DEFINER=`root`@`localhost`
TRIGGER `bss_pagos`.`pagar_horasai`
AFTER INSERT ON `bss_pagos`.`detalle_pago`
FOR EACH ROW
begin
update horas_trabajo set estado="Cancelled" where idhorastrabajo=new.idhorastrabajo;
end$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
