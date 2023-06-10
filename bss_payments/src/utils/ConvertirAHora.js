export  const ConvertirAHora=(minutos)=>{
  
    if(ValidarDecimal(Number(minutos) / 60)){  
    let horas=Number(minutos) / 60;
  
    let min=Number(horas % 1).toFixed(2);

    let minuto=Math.ceil(Number(min) * 60);
 
return Math.trunc(horas)+" hrs "+minuto+" mins" 

    }

   return (Number(minutos) / 60).toFixed(2);

}

const ValidarDecimal = (params) => {
    let re=/^\d*\.?\d*$/;
    if(re.test(params)){
        return true
    }
    return false
    
}
