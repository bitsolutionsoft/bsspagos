import { useEffect, useState } from "react";
import Datos from "../services/Datos";

export default function useDataById(url){
    const [data,setData]=useState([]);
    const [dataAux,setDataAux]=useState([]);
    useEffect(()=>{
        getDatos(url)
    },[])
    const getDatos = async(url) => {
        let datos=Datos.getDataByID(url)
        setData(datos)
        setDataAux(datos)
    }
    return {data,dataAux};
}
