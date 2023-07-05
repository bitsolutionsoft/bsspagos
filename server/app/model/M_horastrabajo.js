const Connection =require("../bd/Connection");
const util=require('util');
 const query=util.promisify(Connection.query).bind(Connection);

const HorasTrabajo=function(horastrabajo){
    this.idhorastrabajo=horastrabajo.idhorastrabajo,
    this.fecha=horastrabajo.fecha,
    this.hora_inicio=horastrabajo.hora_inicio,
    this.hora_final=horastrabajo.hora_final,
    this.hora_total=horastrabajo.hora_total,
    this.horas_extra=horastrabajo.horas_extra,
    this.estado=horastrabajo.estado,
    this.idproyecto=horastrabajo.idproyecto,
    this.idtipotrabajo=horastrabajo.idtipotrabajo,
    this.idempleado=horastrabajo.idempleado
    
}

HorasTrabajo.View= async ()=>{
    return await query(`select *from view_horastrabajo;`)
}


HorasTrabajo.Create= async (horastrabajo)=>{
    return await query(`call ingreso_horastrabajo(${horastrabajo.idhorastrabajo}, "${horastrabajo.fecha}","${horastrabajo.hora_inicio}","${horastrabajo.hora_final}",${horastrabajo.hora_total},${horastrabajo.horas_extra},"${horastrabajo.estado}",${horastrabajo.idproyecto},${horastrabajo.idtipotrabajo},${horastrabajo.idempleado},"new");`);
}


HorasTrabajo.Update= async (horastrabajo)=>{
    return await query(`call ingreso_horastrabajo(${horastrabajo.idhorastrabajo}, "${horastrabajo.fecha}","${horastrabajo.hora_inicio}","${horastrabajo.hora_final}",${horastrabajo.hora_total},${horastrabajo.horas_extra},"${horastrabajo.estado}",${horastrabajo.idproyecto},${horastrabajo.idtipotrabajo},${horastrabajo.idempleado},"update");`);
}
HorasTrabajo.UpdateHF= async (horastrabajo)=>{
    return await query(`call ingreso_horastrabajo(${horastrabajo.idhorastrabajo}, "${horastrabajo.fecha}","${horastrabajo.hora_inicio}","${horastrabajo.hora_final}",${horastrabajo.hora_total},${horastrabajo.horas_extra},"${horastrabajo.estado}",${horastrabajo.idproyecto},${horastrabajo.idtipotrabajo},${horastrabajo.idempleado},"updatef");`);
}
HorasTrabajo.UpdateHT= async (horastrabajo)=>{
    return await query(`call ingreso_horastrabajo(${horastrabajo.idhorastrabajo}, "${horastrabajo.fecha}","${horastrabajo.hora_inicio}","${horastrabajo.hora_final}",${horastrabajo.hora_total},${horastrabajo.horas_extra},"${horastrabajo.estado}",${horastrabajo.idproyecto},${horastrabajo.idtipotrabajo},${horastrabajo.idempleado},"updateht");`);
}
HorasTrabajo.UpdateHE= async (horastrabajo)=>{
    return await query(`call ingreso_horastrabajo(${horastrabajo.idhorastrabajo}, "${horastrabajo.fecha}","${horastrabajo.hora_inicio}","${horastrabajo.hora_final}",${horastrabajo.hora_total},${horastrabajo.horas_extra},"${horastrabajo.estado}",${horastrabajo.idproyecto},${horastrabajo.idtipotrabajo},${horastrabajo.idempleado},"updatehe");`);
}


HorasTrabajo.Delete= async (id)=>{
    return await query(`call ingreso_horastrabajo(${id}, "2020-02-02","2020-02-02","2020-02-02",${null},${null},"${null}",${null},${null},${null},,${null},${null},${null},"delete");`);
}


HorasTrabajo.ViewOne= async (id)=>{
    return await query(`call ingreso_horastrabajo(${id}, "2020-02-02","2020-02-02","2020-02-02",,${null},${null},"${null}",${null},${null},${null},,${null},${null},${null},"viewone");`);
}

module.exports=HorasTrabajo;