const Connection =require("../bd/Connection");
const util=require("util");
const query=util.promisify(Connection.query).bind(Connection);

const Usuario=function(usuario){
    this.idusuario=usuario.idusuario,
    this.idempleado=usuario.idempleado,
    this.usuario=usuario.usuario,
    this.pass=usuario.pass
 
}

Usuario.View= async ()=>{
    return await query(`select *from view_precio;`)
}


Usuario.Create= async (usuario)=>{
    return await query(`call ingreso_usuario(${usuario.idusuario}, ${usuario.idempleado},"${usuario.usuario}","${usuario.pass}","new");`);
}


Usuario.Update= async (usuario)=>{
    return await query(`call ingreso_usuario(${usuario.idusuario}, ${usuario.idempleado},"${usuario.usuario}","${usuario.pass}","update");`);
}


Usuario.Delete= async (id)=>{
    return await query(`call ingreso_usuario(${id}, ${null},"${null}","${null}","delete");`);
}


Usuario.ViewOne= async (id)=>{
    return await query(`call ingreso_usuario(${id}, ${null},"${null}","${null}","viewone");`);
}


Usuario.Viewxd= async (id)=>{
    return await query(`call ingreso_usuario(${null}, ${id},"${null}","${null}","viewxd");`);
}
Usuario.Viewlogin= async (usuario)=>{
    return await query(`call ingreso_usuario(${null}, ${null},"${usuario.usuario}","${usuario.pass}","login");`);
}

module.exports=Usuario;