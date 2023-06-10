const Connection =require("../bd/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Permiso=function(permiso){
    this.idpermiso=permiso.idpermiso,
    this.idempleado=permiso.idempleado,
    this.idmodulo=permiso.idmodulo,
    this.acceso=permiso.acceso    
}

Permiso.View= async ()=>{
    return await query(`select *from view_modulo;`)
}
Permiso.ViewModulo= async ()=>{
    return await query(`select *from view_modulo;`)
}

Permiso.Create= async (permiso)=>{
    return await query(`call ingreso_permiso(${permiso.idpermiso}, ${permiso.idempleado},${permiso.idmodulo},${permiso.acceso},"new");`);
}


Permiso.Update= async (permiso)=>{
    return await query(`call ingreso_permiso(${permiso.idpermiso}, ${permiso.idempleado},${permiso.idmodulo},${permiso.acceso},"update");`);
}


Permiso.Delete= async (id)=>{
    return await query(`call ingreso_permiso(${id}, ${null},${null},${null},"delete");`);
}


Permiso.ViewOne= async (id)=>{
    return await query(`call ingreso_permiso(${id}, ${null},${null},${null},"viewone");`);
}
Permiso.Viewxd= async (id)=>{
    return await query(`call ingreso_permiso(${null}, ${id},${null},${null},"viewxd");`);
}

module.exports=Permiso;