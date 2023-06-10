const jwt=require("jsonwebtoken");

function IsLogin(req,res,next){
const bearerHeader =req.header("authorization");
if(typeof bearerHeader !== 'undefined'){
  //  console.log(bearerHeader)
    const bearerToken =bearerHeader.split(" ")[1];
    try{
      jwt.verify(bearerToken,"secretKey");
        next();
    }catch(e){
        console.log("erro de token")
        res.status(403).send({error:"No tienes autorización para hacer uso de esta api rest"});
    }
    return
}
console.log("token undefined")
res.status(403).send({error:"Necesitas un token de autorizacion para uso de esta api rest"});

}
module.exports=IsLogin;