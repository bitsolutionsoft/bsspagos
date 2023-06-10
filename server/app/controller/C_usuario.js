const Usuario = require('../model/M_usuario');
const jwt=require("jsonwebtoken");

exports.Create=async(req,res)=>{
    try {
        const usuario=await Usuario.Create(new Usuario(req.body));
        console.log(usuario)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const usuario=await Usuario.Update(new Usuario(req.body));
        console.log(usuario)
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
        const usuario=await Usuario.Delete(req.params.id);
        console.log(usuario)
        res.status(200).send({res:"Eliminado Correctamente"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo eliminar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
   
exports.ViewOne=async(req,res)=>{
    try {
        const usuario=await Usuario.ViewOne(req.params.id);
        console.log(usuario);
        if(usuario !== null){
            res.send({res:usuario})
            return
        }
        if(typeof usuario === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del usuario"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
    
     
exports.Viewxd=async(req,res)=>{
    try {
        const usuario=await Usuario.Viewxd(req.params.id);
        console.log(usuario);
        if(usuario !== null){
            res.send({res:usuario[0]})
            return
        }
        if(typeof usuario === 'undefined' ){
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del usuario"});
    } catch (er) {
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
    }
        
exports.Viewlogin=async(req,res)=>{
    try {
        const usuario=await Usuario.Viewlogin(new Usuario(req.body));
        console.log(usuario);
        if(usuario !== null){
            let datosuser=usuario[0];
            console.log(datosuser)
            const user={
                id:datosuser[0].idusuario,
                nombre:datosuser[0].nombre,
                idempleado:datosuser[0].idempleado
            }
            let token=jwt.sign({user},'secretKey');
            datosuser[0].token=token;
            datosuser[0].isLogin=true;
            console.log(datosuser)
            res.send({res:datosuser})
            return
        }
        if(typeof usuario === 'undefined' ){
            
            res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
            return
        }
       res.status(404).send({res:"No encontro informacion del usuario"});
    } catch (er) {
          //console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`); 
          console.log(er)
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
     
    }
    }
exports.View=async(req,res)=>{
try {
    const usuario=await Usuario.View();
    console.log(usuario);
    if(usuario !== null){
        res.send({res:usuario})
        return
    }
    if(typeof usuario === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del usuario"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}
