const Connection =require("../bd/Connection");
const util=require('util');
 const query=util.promisify(Connection.query).bind(Connection);

const FaseProyecto=function(faseproyecto){
    this.idfase=faseproyecto.idfase,
    this.idproyecto=faseproyecto.idproyecto,
    this.nombre=faseproyecto.nombre,
    this.estado=faseproyecto.estado,
    this.idempleado=faseproyecto.idempleado,
    this.idtipotrabajo=faseproyecto.idtipotrabajo
    
}

FaseProyecto.View= async ()=>{
    return await query(`select *from view_fase;`)
}


FaseProyecto.Create= async (faseproyecto)=>{
    return await query(`call ingreso_fase(${faseproyecto.idfase}, ${faseproyecto.idproyecto},"${faseproyecto.nombre}","${faseproyecto.estado}",${faseproyecto.idempleado},${faseproyecto.idtipotrabajo},"new");`);
}


FaseProyecto.Update= async (faseproyecto)=>{
    return await query(`call ingreso_fase(${faseproyecto.idfase}, ${faseproyecto.idproyecto},"${faseproyecto.nombre}","${faseproyecto.estado}",${faseproyecto.idempleado},${faseproyecto.idtipotrabajo},"update");`);
}


FaseProyecto.Delete= async (id)=>{
    return await query(`call ingreso_fase(${id}, ${null},"${null}","${null}",${null},${null},"delete");`);
}


FaseProyecto.ViewOne= async (id)=>{
    return await query(`call ingreso_fase(${id}, ${null},"${null}","${null}",${null},${null},"viewone");`);
}
FaseProyecto.ViewXd= async (id)=>{
    return await query(`call ingreso_fase(${null}, ${id},"${null}","${null}",${id},${null},"viewxd");`);
}

module.exports=FaseProyecto;