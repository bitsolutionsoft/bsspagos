const Permiso = require('../model/M_permiso');

exports.Create=async(req,res)=>{
    try {
        const permiso=await Permiso.Create(new Permiso(req.body));
        console.log(permiso)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const permiso=await Permiso.Update(new Permiso(req.body));
        console.log(permiso)
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
        const permiso=await Permiso.Delete(req.params.id);
        console.log(permiso)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const permiso=await Permiso.ViewOne(req.params.id);
        console.log(permiso);
        if(permiso !== null){
            res.send({res:permiso})
            return
        }
        if(typeof permiso === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del permiso"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
exports.View=async(req,res)=>{
try {
    const permiso=await Permiso.View();
    console.log(permiso);
    if(permiso !== null){
        res.send({res:permiso})
        return
    }
    if(typeof permiso === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del permiso"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}

exports.ViewModulo=async(req,res)=>{
    try {
        const permiso=await Permiso.ViewModulo();
        console.log(permiso);
        if(permiso !== null){
            res.send({res:permiso})
            return
        }
        if(typeof permiso === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del permiso"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
exports.Viewxd=async(req,res)=>{
    try {
        const permiso=await Permiso.Viewxd(req.params.id);
        console.log(permiso);
        if(permiso !== null){
            res.send({res:permiso[0]})
            return
        }
        if(typeof permiso === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del detalle medida"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }