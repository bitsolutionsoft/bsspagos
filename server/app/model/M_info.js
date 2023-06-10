const Connection =require("../bd/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Info=function(info){
    this.idinfo=info.idinfo,
    this.nombre=info.nombre,
    this.descripcion=info.descripcion,
    this.direccion=info.direccion,
    this.telefonos=info.telefonos,
    this.correo=info.correo,
    this.logo=info.logo
 
}

Info.View= async ()=>{
    return await query(`select *from view_info;`)
}


Info.Create= async (info)=>{
    return await query(`call ingreso_info(${info.idinfo}, "${info.nombre}","${info.descripcion}","${info.direccion}","${info.telefonos}","${info.correo}","${info.logo}","new");`);
}


Info.Update= async (info)=>{
    return await query(`call ingreso_info(${info.idinfo}, "${info.nombre}","${info.descripcion}","${info.direccion}","${info.telefonos}","${info.correo}","${info.logo}","update");`);
}


module.exports=Info;