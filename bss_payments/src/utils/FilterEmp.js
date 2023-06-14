export default function FiltarEmp(texto, setDatos,datosAux){
    setDatos(datosAux.filter((item)=>{
        return item.empleado.toLowerCase().includes(texto.toLowerCase());
    }).map((element)=>{return element})
    );
    }