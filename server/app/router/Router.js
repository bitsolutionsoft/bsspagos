

function Router(app){
    const IsLogin = require('../midleware/IsLogin'); 
  
    const upload=require("../controller/C_uploadfile");
    const info=require("../controller/C_info");
    const usuario=require("../controller/C_usuario");
    const permiso=require("../controller/C_permiso");  
    const empleado=require('../controller/C_empleado');
    const proyecto=require("../controller/C_proyecto")
    const pagos=require("../controller/C_pagos")
    const faseproyecto=require("../controller/C_faseproyecto")
    const tipotrabajo=require("../controller/C_tipotrabajo")
    const horastrabajo=require("../controller/C_horastrabajo")
    const tipopago=require("../controller/C_tipopago");
    const detallepago=require("../controller/C_detallepago.js")
  

    
    
    app.get("/",function(req,res){
       res.send({res:"Bievenidos a la ApiRest de bsspagos"});
    })

    app.post("/empleado",IsLogin, empleado.Create)
   app.post("/empleado/update",IsLogin, empleado.Update)
   app.post("/empleado/delete/:id", IsLogin,empleado.Delete)
   app.get("/empleado/viewone/:id", IsLogin,empleado.ViewOne)
   app.get("/empleado/view", IsLogin,empleado.View)
   app.get("/emppago/view", IsLogin,empleado.ViewPagos)
   app.get("/emppagocancel/view", IsLogin,empleado.ViewPagosCancel)
   app.get("/emppagosxd/viewxd/:id", IsLogin,empleado.ViewPagosxd)

   app.post("/horastrabajo",IsLogin, horastrabajo.Create)
   app.post("/horastrabajo/update",IsLogin, horastrabajo.Update)
   app.post("/horatotal/update",IsLogin, horastrabajo.UpdateHT)
   app.post("/horaextra/update",IsLogin, horastrabajo.UpdateHE)
   app.post("/horastrabajo/delete/:id", IsLogin,horastrabajo.Delete)
   app.get("/horastrabajo/viewone/:id", IsLogin,horastrabajo.ViewOne)
   app.get("/horastrabajo/view", IsLogin,horastrabajo.View)

   
   app.post("/tipotrabajo",IsLogin, tipotrabajo.Create)
   app.post("/tipotrabajo/update",IsLogin, tipotrabajo.Update)
   app.post("/tipotrabajo/delete/:id", IsLogin,tipotrabajo.Delete)
   app.get("/tipotrabajo/viewone/:id", IsLogin,tipotrabajo.ViewOne)
   app.get("/tipotrabajo/view", IsLogin,tipotrabajo.View)

   app.post("/faseproyecto",IsLogin, faseproyecto.Create)
   app.post("/faseproyecto/update",IsLogin, faseproyecto.Update)
   app.post("/faseproyecto/delete/:id", IsLogin,faseproyecto.Delete)
   app.get("/faseproyecto/viewone/:id", IsLogin,faseproyecto.ViewOne)
   app.get("/faseproyecto/viewxd/:id", IsLogin,faseproyecto.ViewXd)
   app.get("/faseproyecto/view", IsLogin,faseproyecto.View)

   app.post("/proyecto",IsLogin, proyecto.Create)
   app.post("/proyecto/update",IsLogin, proyecto.Update)
   app.post("/proyecto/delete/:id", IsLogin,proyecto.Delete)
   app.get("/proyecto/viewone/:id", IsLogin,proyecto.ViewOne)
   app.get("/proyecto/view", IsLogin,proyecto.View)

   app.post("/pagos",IsLogin, pagos.Create)
   app.post("/pagos/update",IsLogin, pagos.Update)
   app.post("/pagos/delete/:id", IsLogin,pagos.Delete)
   app.get("/pagos/viewone/:id", IsLogin,pagos.ViewOne)
   app.get("/pagos/view", IsLogin,pagos.View)

   app.post("/detallepago",IsLogin, detallepago.Create)
   app.post("/detallepago/update",IsLogin, detallepago.Update)
   app.post("/detallepago/delete/:id", IsLogin,detallepago.Delete)
   app.get("/detallepago/viewone/:id", IsLogin,detallepago.ViewOne)
   app.get("/detallepago/view", IsLogin,detallepago.View)

   app.post("/tipopago",IsLogin, tipopago.Create)
   app.post("/tipopago/update",IsLogin, tipopago.Update)
   app.post("/tipopago/delete/:id", IsLogin,tipopago.Delete)
   app.get("/tipopago/viewone/:id", IsLogin,tipopago.ViewOne)
   app.get("/tipopago/view", IsLogin,tipopago.View)

   
    app.post('/img/upload',upload.create);
    app.get("/img/delete/:name",upload.delete);
    app.get("/imgs/view/:name",upload.view);
   
    app.post("/info",info.Create);
    app.post("/info/update",info.Update);
    app.get("/info/view",info.View);
  
   
   
   app.post("/usuario",IsLogin, usuario.Create)
   app.post("/usuario/update",IsLogin, usuario.Update)
   app.post("/usuario/delete/:id",IsLogin, usuario.Delete)
   app.post("/usuario/login", usuario.Viewlogin)
   app.get("/usuario/viewone/:id",IsLogin, usuario.ViewOne)
   app.get("/usuario/viewxd/:id",IsLogin, usuario.Viewxd)
   app.get("/usuario/view",IsLogin, usuario.View)
   
   app.post("/permiso",IsLogin, permiso.Create)
   app.post("/permiso/update",IsLogin, permiso.Update)
   app.post("/permiso/delete/:id",IsLogin, permiso.Delete)
   app.get("/permiso/viewone/:id",IsLogin, permiso.ViewOne)
   app.get("/permiso/viewxd/:id", IsLogin,permiso.Viewxd)
   app.get("/permiso/view",IsLogin, permiso.View)
   app.get("/modulo/view",IsLogin, permiso.ViewModulo)
   
   
   }
   module.exports=Router;