function adapter_cliente(cliente){
    if(cliente.length >0){
        let newcliente=cliente.map((item)=>{
            return {id:item.idcliente, name: item.nombre+ " "+ item.apellido}
        })
        return newcliente
    }
    return null;
}
export {adapter_cliente}