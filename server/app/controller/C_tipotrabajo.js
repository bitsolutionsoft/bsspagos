const TipoTrabajo =require ("../model/M_tipotrabajo")
exports.Create=async(req,res)=>{
    try {
        const tipotrabajo=await TipoTrabajo.Create(new TipoTrabajo(req.body));
        console.log(tipotrabajo)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const tipotrabajo=await TipoTrabajo.Update(new TipoTrabajo(req.body));
        console.log(tipotrabajo)
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
        const tipotrabajo=await TipoTrabajo.Delete(req.params.id);
        console.log(tipotrabajo)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const tipotrabajo=await TipoTrabajo.ViewOne(req.params.id);
        console.log(tipotrabajo);
        if(tipotrabajo !== null){
            res.send({res:tipotrabajo})
            return
        }
        if(typeof tipotrabajo === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del tipotrabajo"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
exports.View=async(req,res)=>{
try {
    const tipotrabajo=await TipoTrabajo.View();
    console.log(tipotrabajo);
    if(tipotrabajo !== null){
        res.send({res:tipotrabajo})
        return
    }
    if(typeof tipotrabajo === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del tipotrabajo"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}
