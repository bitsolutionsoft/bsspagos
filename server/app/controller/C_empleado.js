const Empleado =require ("../model/M_empleado")
exports.Create=async(req,res)=>{
    try {
        const empleado=await Empleado.Create(new Empleado(req.body));
        console.log(empleado)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const empleado=await Empleado.Update(new Empleado(req.body));
        console.log(empleado)
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
        const empleado=await Empleado.Delete(req.params.id);
        console.log(empleado)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewPagosxd=async(req,res)=>{
    try {
        const empleado=await Empleado.ViewPagosxd(req.params.id);
        console.log(empleado);
        if(empleado !== null){
            res.send({res:empleado[0]})
            return
        }
        if(typeof empleado === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del empleado"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    exports.ViewOne=async(req,res)=>{
        try {
            const empleado=await Empleado.ViewOne(req.params.id);
            console.log(empleado);
            if(empleado !== null){
                res.send({res:empleado})
                return
            }
            if(typeof empleado === 'undefined' ){
                res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
                return
            }
           res.status(404).send({res:"No encontro informacion del empleado"});
        } catch (er) {
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
        }
        }
    
exports.View=async(req,res)=>{
try {
    const empleado=await Empleado.View();
    console.log(empleado);
    if(empleado !== null){
        res.send({res:empleado})
        return
    }
    if(typeof empleado === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del empleado"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}
  
exports.ViewPagos=async(req,res)=>{
    try {
        const empleado=await Empleado.ViewPagos();
        console.log(empleado);
        if(empleado !== null){
            res.send({res:empleado})
            return
        }
        if(typeof empleado === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del empleado"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }

    exports.ViewPagosCancel=async(req,res)=>{
        try {
            const empleado=await Empleado.ViewPagosCancel();
            console.log(empleado);
            if(empleado !== null){
                res.send({res:empleado})
                return
            }
            if(typeof empleado === 'undefined' ){
                res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
                return
            }
           res.status(404).send({res:"No encontro informacion del empleado"});
        } catch (er) {
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
        }
        }
    