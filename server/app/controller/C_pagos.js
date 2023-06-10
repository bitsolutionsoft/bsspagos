const Pagos =require ("../model/M_pagos")
exports.Create=async(req,res)=>{
    try {
        const pagos=await Pagos.Create(new Pagos(req.body));
        console.log(pagos)
        res.status(200).send({res:"ingresado corectamento"});
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
