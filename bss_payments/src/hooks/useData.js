import { useEffect, useState } from "react";
import Datos from "../services/Datos";

export default function useData(url){

    const [data,setData]=useState([]);
    const [dataAux,setDataAux]=useState([]);
    useEffect(()=>{
       getDatos(url)
    },[])

const getDatos = async (url) => {
    let datos= await Datos.getDatos(url)
    console.log(datos)
    setData(datos)
    setDataAux(datos)
}    
    return {data,dataAux,setData,setDataAux};
}
