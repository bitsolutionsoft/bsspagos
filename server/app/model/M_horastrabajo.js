const Connection =require("../bd/Connection");
const util=require('util');
 const query=util.promisify(Connection.query).bind(Connection);

const HorasTrabajo=function(horastrabajo){
    this.idhorastrabajo=horastrabajo.idhorastrabajo,
    this.fecha=horastrabajo.fecha,
    this.hora_inicio=horastrabajo.hora_inicio,
    this.hora_final=horastrabajo.hora_final,
    this.hora_total=horastrabajo.hora_total,
  
    this.idfase=horastrabajo.idfase,
    this.estado=horastrabajo.estado
    
}

HorasTrabajo.View= async ()=>{
    return await query(`select *from view_horastrabajo;`)
}


HorasTrabajo.Create= async (horastrabajo)=>{
    return await query(`call ingreso_horastrabajo(${horastrabajo.idhorastrabajo}, "${horastrabajo.fecha}","${horastrabajo.hora_inicio}","${horastrabajo.hora_final}",${horastrabajo.hora_total},${horastrabajo.idfase},"${horastrabajo.estado}","new");`);
}


HorasTrabajo.Update= async (horastrabajo)=>{
    return await query(`call ingreso_horastrabajo(${horastrabajo.idhorastrabajo}, "${horastrabajo.fecha}","${horastrabajo.hora_inicio}","${horastrabajo.hora_final}",${horastrabajo.hora_total},${horastrabajo.idfase},"${horastrabajo.estado}","updatef");`);
}


HorasTrabajo.Delete= async (id)=>{
    return await query(`call ingreso_horastrabajo(${id}, "2020-02-02","2020-02-02","2020-02-02",${null},${null},"${null}","delete");`);
}


HorasTrabajo.ViewOne= async (id)=>{
    return await query(`call ingreso_horastrabajo(${id}, "2020-02-02","2020-02-02","2020-02-02",,${null},${null},"${null}","viewone");`);
}

module.exports=HorasTrabajo;