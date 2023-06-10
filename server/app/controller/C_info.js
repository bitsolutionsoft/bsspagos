const Info = require('../model/M_info');

exports.Create=async(req,res)=>{
    try {
        const info=await Info.Create(new Info(req.body));
        console.log(info)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.Update=async(req,res)=>{
    try {
        const info=await Info.Update(new Info(req.body));
        console.log(info)
        res.status(200).send({res:"ingresado corectamento"});
    } catch (er) {
        console.log(er)
        res.status(503).send({res: "No se puedo ingresar, erorr"})
        console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
    }
}
exports.View=async(req,res)=>{
try {
    const info=await Info.View();
    console.log(info);
    if(info !== null){
        res.send({res:info})
        return
    }
    if(typeof info === 'undefined' ){
        res.status(503).send({res:"Algo salio mal: error interno en la base de datos"});
        return
    }
   res.status(404).send({res:"No encontro informacion del info"});
} catch (er) {
    res.status(503).send({res:"Algo salio mal: error  en la base de datos "});
    console.log(`Error:  ${er.sqlMessage}. \n SQL: ${er.sql}`);
}
}
