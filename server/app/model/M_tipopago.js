const Connection =require("../bd/Connection");
const util=require('util');
 const query=util.promisify(Connection.query).bind(Connection);

const TipoPago=function(tipopago){
    this.idtipopago=tipopago.idtipopago,    
    this.nombre=tipopago.nombre,
    
    this.detalle=tipopago.detalle,
    this.estado=tipopago.estado
    
}

TipoPago.View= async ()=>{
    return await query(`select *from view_tipopago;`)
}


TipoPago.Create= async (tipopago)=>{
    return await query(`call ingreso_tipopago(${tipopago.idtipopago}," ${tipopago.nombre}","${tipopago.detalle}","${tipopago.estado}","new");`);
}


TipoPago.Update= async (tipopago)=>{
    return await query(`call ingreso_tipopago(${tipopago.idtipopago}," ${tipopago.nombre}","${tipopago.detalle}","${tipopago.estado}","update");`);
}


TipoPago.Delete= async (id)=>{
    return await query(`call ingreso_tipopago(${id}," ${null}","${null}","${null}","delete");`);
}


TipoPago.ViewOne= async (id)=>{
    return await query(`call ingreso_tipopago(${id}," ${null}","${null}","${null}","viewone");`);
}

module.exports=TipoPago;