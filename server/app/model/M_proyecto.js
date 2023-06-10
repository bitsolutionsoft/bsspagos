const Connection =require("../bd/Connection");
const util=require('util');
 const query=util.promisify(Connection.query).bind(Connection);

const Proyecto=function(proyecto){
    this.idproyecto=proyecto.idproyecto,
    this.nombre=proyecto.nombre,
    this.direccion=proyecto.direccion,
    this.estado=proyecto.estado
    
}

Proyecto.View= async ()=>{
    return await query(`select *from view_proyecto;`)
}


Proyecto.Create= async (proyecto)=>{
    return await query(`call ingreso_proyecto(${proyecto.idproyecto}, "${proyecto.nombre}","${proyecto.direccion}","${proyecto.estado}","new");`);
}


Proyecto.Update= async (proyecto)=>{
    return await query(`call ingreso_proyecto(${proyecto.idproyecto}, "${proyecto.nombre}","${proyecto.direccion}","${proyecto.estado}","update");`);
}


Proyecto.Delete= async (id)=>{
    return await query(`call ingreso_proyecto(${id}, "${null}","${null}","${null}","delete");`);
}


Proyecto.ViewOne= async (id)=>{
    return await query(`call ingreso_proyecto(${id}, "${null}","${null}","${null}","viewone");`);
}

module.exports=Proyecto;