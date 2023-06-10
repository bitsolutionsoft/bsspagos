const HorasTrabajo =require ("../model/M_horastrabajo")
exports.Create=async(req,res)=>{
    try {
        const horastrabajo=await HorasTrabajo.Create(new HorasTrabajo(req.body));
        console.log(horastrabajo)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const horastrabajo=await HorasTrabajo.Update(new HorasTrabajo(req.body));
        console.log(horastrabajo)
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
        const horastrabajo=await HorasTrabajo.Delete(req.params.id);
        console.log(horastrabajo)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const horastrabajo=await HorasTrabajo.ViewOne(req.params.id);
        console.log(horastrabajo);
        if(horastrabajo !== null){
            res.send({res:horastrabajo})
            return
        }
        if(typeof horastrabajo === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del horastrabajo"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
exports.View=async(req,res)=>{
try {
    const horastrabajo=await HorasTrabajo.View();
    console.log(horastrabajo);
    if(horastrabajo !== null){
        res.send({res:horastrabajo})
        return
    }
    if(typeof horastrabajo === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del horastrabajo"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}
