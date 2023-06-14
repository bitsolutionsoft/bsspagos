  export default function FiltarItems(texto, setDatos,datosAux){
setDatos(datosAux.filter((item)=>{
    return item.nombre.toLowerCase().includes(texto.toLowerCase());
}).map((element)=>{return element})
);
}


