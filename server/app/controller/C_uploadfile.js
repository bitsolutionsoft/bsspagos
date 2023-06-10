const fs=require('fs');

exports.create=(req,res)=>{
    console.log(req)
    let igmFile=req.files.foo;

    igmFile.mv(`${__dirname}/imgs/${igmFile.name}`,error=>{
        if(error){
            console.log(error)
            res.status(500).send({message: error})
            return
        }
         
        console.log("se ingreso correctamente")
            res.status(200).send({res:igmFile.name})
        
    })
}
exports.delete=(req,res)=>{
    console.log(req.params);
    let name=req.params.name;
    let path=__dirname+'/imgs/'+name;
 fs.unlink(path,(error)=>{
    if(error){
        res.status(500).send({message: error})
    }else{
        res.send({message: "Archivo eliminado"})
    }
 })    
}

exports.view=(req,res)=>{
   console.log(req.params);
    let name=req.params.name;
    const filename=__dirname+'/imgs/'+name;
	console.log(filename)
    const existFile=fs.existsSync(filename);
	
    if(existFile){
		
       res.sendFile(filename);
	   
	
	   
    }else{
       res.status(404).send({res:"Failed"})
    }
}