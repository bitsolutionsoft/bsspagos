const Connection =require("../bd/Connection");
const util=require('util');
 const query=util.promisify(Connection.query).bind(Connection);

const Pago=function(pago){
    this.idpago=pago.idpago,
    this.idhoratrabajo=pago.idhoratrabajo,
    this.precio=pago.precio,
    this.cantidadhora=pago.cantidadhora,
    this.horasextra=pago.horasextra,
    this.subtotal=pago.subtotal,
    this.descuento=pago.descuento,
    this.total=pago.total
    
}

Pago.View= async ()=>{
    return await query(`select *from view_pagos;`)
}


Pago.Create= async (pago)=>{
    return await query(`call ingreso_pagos(${pago.idpago}, ${pago.idhoratrabajo},${pago.precio},${pago.cantidadhora},${pago.horasextra},${pago.subtotal},${pago.descuento},${pago.total},"new");`);
}


Pago.Update= async (pago)=>{
    return await query(`call ingreso_pagos(${pago.idpago}, ${pago.idhoratrabajo},${pago.precio},${pago.cantidadhora},${pago.horasextra},${pago.subtotal},${pago.descuento},${pago.total},"update");`);
}


Pago.Delete= async (id)=>{
    return await query(`call ingreso_pagos(${id}, ${null},${null},${null},${null},${null},${null},${null},"delete");`);
}


Pago.ViewOne= async (id)=>{
    return await query(`call ingreso_pagos(${id}, ${null},${null},${null},${null},${null},${null},${null},"viewone");`);
}

module.exports=Pago;