const Connection =require("../bd/Connection");
const util=require('util');
 const query=util.promisify(Connection.query).bind(Connection);

const TipoTrabajo=function(tipotrabajo){
    this.idtrabajo=tipotrabajo.idtrabajo,
    this.nombre=tipotrabajo.nombre,
    this.tipo=tipotrabajo.tipo,
    this.precio=tipotrabajo.precio,
    this.estado=tipotrabajo.estado
    
}

TipoTrabajo.View= async ()=>{
    return await query(`select *from view_tipotrabajo;`)
}


TipoTrabajo.Create= async (tipotrabajo)=>{
    return await query(`call ingreso_tipotrabajo(${tipotrabajo.idtrabajo}, "${tipotrabajo.nombre}","${tipotrabajo.tipo}",${tipotrabajo.precio},"${tipotrabajo.estado}","new");`);
}


TipoTrabajo.Update= async (tipotrabajo)=>{
    return await query(`call ingreso_tipotrabajo(${tipotrabajo.idtrabajo}, "${tipotrabajo.nombre}","${tipotrabajo.tipo}",${tipotrabajo.precio},"${tipotrabajo.estado}","update");`);
}


TipoTrabajo.Delete= async (id)=>{
    return await query(`call ingreso_tipotrabajo(${id}, "${null}","${null}",${null},"${null}","delete");`);
}


TipoTrabajo.ViewOne= async (id)=>{
    return await query(`call ingreso_tipotrabajo(${id}, "${null}","${null}",${null},"${null}","viewone");`);
}

module.exports=TipoTrabajo;