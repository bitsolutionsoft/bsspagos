const Pagos =require ("../model/M_pagos");
const PdfkitConstruct=require("pdfkit-construct");
exports.Create=async(req,res)=>{
    try {
        const pago=await Pagos.Create(new Pagos(req.body));
        
        const pagos=await Pagos.NumPago();
        console.log(pagos);
        if(pagos !== null){
            res.send({res:pagos})
            return
        }
        if(typeof pagos === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del pagos"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const pagos=await Pagos.Update(new Pagos(req.body));
        console.log(pagos)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Delete=async(req,res)=>{
    try {
        console.log(req.params.id)
        const pagos=await Pagos.Delete(req.params.id);
        console.log(pagos)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const pagos=await Pagos.ViewOne(req.params.id);
        console.log(pagos);
        if(pagos !== null){
            res.send({res:pagos})
            return
        }
        if(typeof pagos === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del pagos"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
exports.View=async(req,res)=>{
try {
    const pagos=await Pagos.View();
    console.log(pagos);
    if(pagos !== null){
        res.send({res:pagos})
        return
    }
    if(typeof pagos === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del pagos"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}
exports.NumPago=async(req,res)=>{
    try {
        const pagos=await Pagos.NumPago();
        console.log(pagos);
        if(pagos !== null){
            res.send({res:pagos})
            return
        }
        if(typeof pagos === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del pagos"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}

exports.Viewpdf=async(req,res)=>{
    try {
       // const infoEmpresa=await Info.View()
        const factura=await Pagos.ViewPago(req.params.id);
        const itemdetalle=await Pagos.ViewDetallePago(req.params.id);
//let info=infoEmpresa[0];
        let datosFactura=factura[0];
        const datosdetalle=itemdetalle[0]
let datos={
    ...factura[0],
    detalle:[...datosdetalle]
}
        console.log(datos)
console.log(itemdetalle[0])
let fontNormal = 'Helvetica';
let fontBold = 'Helvetica-Bold';




const doc=new PdfkitConstruct({
    size:'LETTER',
    margins:{top:20,left:20,right:20,bottom:20},
    bufferPages:true

});

const filename=`payment:${req.params.id}`;
const stream=res.writeHead(200,{
    'Content-Type':'application/pdf',
    'Content-Disposition':`attachment;filename=${filename}.pdf`,
})
doc.on('data',(data)=>{stream.write(data)})
doc.on('end',()=>{stream.end()})

/*
doc.setDocumentHeader({
    height:'25%'
},()=>{
}) */

doc.fontSize(13).fill("#ff0034").text(`Payment no.:  ${req.params.id}`,{
    align:'right'
})  
const img=__dirname+'/imgs/logo.png';
doc.image(`${img}`, 20, 20, {width: 70,height:70});

doc.moveDown()
//doc.rect(12, 15,560,0.2).fill("#000").stroke("#000");
doc.fontSize(16).font(fontBold).fill("#000").text(`SEI GROUP`,{align:'center'});
doc.fontSize(12).font(fontNormal).text(`Framing Interior & Exterior`,{align:'center'});
//doc.fontSize(12).text(`Direccion: ${info.direccion}`,{align:'center'});
//doc.fontSize(12).text(`Telefonos: ${info.telefonos}`,{align:'center'});
//doc.fontSize(12).text(`Email: ${info.correo}`,{align:'center'});

doc.moveDown()
doc.fontSize(14).font(fontBold).fill("#2C2C2C").text(`Employee´s Information:`);
doc.fontSize(12).font(fontNormal).fill("#000").text(`Name:  ${datosFactura[0].nombre}`);
doc.fontSize(12).text(`Last Name:  ${datosFactura[0].apellido}`);
doc.fontSize(12).text(`Payment´s Date:  ${new Date(datosFactura[0].fecha).toUTCString()}`);
doc.fontSize(12).text(`Type of Payment:  ${datosFactura[0].nombrepago}`);
doc.fontSize(12).text(`Detail:  ${datosFactura[0].detalle}`);

 //lista de productos
 doc.rect(12,200,560,20).fill("#3224f8").stroke("#3224f8");
 doc.fill("#fff").text("Project",20,206,{width:190});
 doc.text("Work",190,206,{width:90});
 doc.text("Time",280,206,{width:50});
 doc.text("Price",330,206,{width:50});
 doc.text("Extra Time",380,206,{width:50});
 doc.text("Price Extra",430,206,{width:70});
 doc.text("Subtotal", 500, 206, { width: 100 });

let noProducto=1;
itemdetalle[0].forEach(element => {
    let y=206 +(noProducto * 20);
    doc.fill("#000").text(element.proyecto,20,y,{width:200});
    doc.text(element.tipo,190,y,{width:90})
    doc.text(element.cant_hora+" hrs",280,y,{width:50})
    doc.text(element.precio,330,y,{width:50})
    doc.text(element.cant_extra+ " hrs",380,y,{width:50})
    doc.text(element.precio_extra,430,y,{width:70})
    doc.text(element.subtotal,500,y,{width:100})
    noProducto ++;
});

doc.rect(12, 206+(noProducto*20),560,0.2).fill("#000").stroke("#000");
noProducto ++;
doc.font(fontBold).text("Total:  ",400,206+(noProducto*18));
doc.font(fontBold).text(`${datosFactura[0].total}`, 500,206+(noProducto*18))
/*footer

doc.setDocumentFooter({}, () => {
    doc.lineJoin('miter')
    .rect(0, doc.footer.y, doc.page.width, doc.footer.options.heightNumber).fill("#c2edbe");



    doc.fontSize(16)
        .text(`Total: ${datosFactura[0].total}`,doc.footer.x, doc.footer.y+15);
});


doc.addTable([
    {key:'descripcion',label:'Descripción',align:'left'},
    {key:'cantidad',label:'Cantidad',align:'left'},
    {key:'precio',label:'Precio',align:'left'},
    {key:'subtotal',label:'Sub Total',align:'right'}
], itemdetalle[0],{
    border: {size: 0.1, color: '#cdcdcd'},
    width: "fill_body",
    striped: true,
    stripedColors: ["#fff", "#fff"],
    cellsPadding: 5,
    marginTop:0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom:20,
    headAlign: 'left',
    headBackground:'#fff'

});


doc.render();
doc.moveDown()
doc.fontSize(14).text(`Total:  Q${datosFactura[0].total}`,{
    align:'right'
})
*/
 //doc.pipe(res)
doc.end()
       
    } catch (er) {
        console.log(er)
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }