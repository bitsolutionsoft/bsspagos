const Connection =require("../bd/Connection");
const util=require('util');
 const query=util.promisify(Connection.query).bind(Connection);

const DetallePago=function(detallepago){
    this.iddetalle=detallepago.iddetalle,    
    this.idpago=detallepago.idpago,
    this.idhorastrabajo=detallepago.idhorastrabajo,
    this.cant_hora=detallepago.cant_hora,
    this.precio=detallepago.precio,
    this.cant_extra=detallepago.cant_extra,
    this.precio_extra=detallepago.precio_extra,
    this.subtotal=detallepago.subtotal
    
}

DetallePago.View= async ()=>{
    return await query(`select *from view_detallepagos;`)
}


DetallePago.Create= async (detallepago)=>{
    return await query(`call ingreso_detallepago(${detallepago.iddetalle}, ${detallepago.idpago},${detallepago.idhorastrabajo},${detallepago.cant_hora},${detallepago.precio},${detallepago.cant_extra},${detallepago.precio_extra},${detallepago.subtotal},"new");`);
}


DetallePago.Update= async (detallepago)=>{
    return await query(`call ingreso_detallepago(${detallepago.iddetalle}, ${detallepago.idpago},${detallepago.idhorastrabajo},${detallepago.cant_hora},${detallepago.precio},${detallepago.cant_extra},${detallepago.precio_extra},${detallepago.subtotal},"update");`);
}


DetallePago.Delete= async (id)=>{
    return await query(`call ingreso_detallepago(${id}, ${null},${null},${null},${null},${null},${null},${null},"delete");`);
}


DetallePago.ViewOne= async (id)=>{
    return await query(`call ingreso_detallepago(${id}, ${null},${null},${null},${null},${null},${null},${null},"viewone");`);
}

module.exports=DetallePago;