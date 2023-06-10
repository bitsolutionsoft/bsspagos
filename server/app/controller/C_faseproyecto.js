const FaseProyecto =require ("../model/M_faseproyecto")
exports.Create=async(req,res)=>{
    try {
        const faseproyecto=await FaseProyecto.Create(new FaseProyecto(req.body));
        console.log(faseproyecto)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const faseproyecto=await FaseProyecto.Update(new FaseProyecto(req.body));
        console.log(faseproyecto)
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
        const faseproyecto=await FaseProyecto.Delete(req.params.id);
        console.log(faseproyecto)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const faseproyecto=await FaseProyecto.ViewOne(req.params.id);
        console.log(faseproyecto);
        if(faseproyecto !== null){
            res.send({res:faseproyecto})
            return
        }
        if(typeof faseproyecto === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del faseproyecto"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    exports.ViewXd=async(req,res)=>{
        try {
            const faseproyecto=await FaseProyecto.ViewXd(req.params.id);
            console.log(faseproyecto);
            if(faseproyecto !== null){
                res.send({res:faseproyecto[0]})
                return
            }
            if(typeof faseproyecto === 'undefined' ){
                res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
                return
            }
           res.status(404).send({res:"No encontro informacion del faseproyecto"});
        } catch (er) {
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
        }
        }
exports.View=async(req,res)=>{
try {
    const faseproyecto=await FaseProyecto.View();
    console.log(faseproyecto);
    if(faseproyecto !== null){
        res.send({res:faseproyecto})
        return
    }
    if(typeof faseproyecto === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del faseproyecto"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}
