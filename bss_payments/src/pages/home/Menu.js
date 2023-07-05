import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Datos from '../../services/Datos';
import SideBar from './SideBar';
import Empleado from '../empleado/Empleado';
import Pagos from '../pagos/Pagos';
import ErrorPage from './ErrorPage';
import Proyecto from '../proyecto/Proyecto';
import Tipotrabajo from '../tipotrabajo/Tipotrabajo';
import Asistencia from '../asistencia/Asistencia';
import { addGrantedToList } from '../../app/reducers/granted/grantedSlice';
import User from '../login/User';
import Myassistance from '../myassistance/Myassistance';
import Report from '../report/Report';
import TipoPago from '../tipopago/TipoPago';
import WelcomePage from './WelcomePage';


function Menu() {
const dispatch=useDispatch();
const {idempleado}=useSelector(state =>state.user)
const {center}=useSelector(state =>state.center)
const [permiso,setPermiso]=useState([]);

useEffect(()=>{
  let newidem=idempleado;
  console.log(newidem)
getUsuarioPermiso(newidem)
},[])

 async function getUsuarioPermiso(idempleado){
    let data= await Datos.getDetalleByID("permiso",idempleado);
    console.log(data)
    if(data !== null){
      dispatch(addGrantedToList(data))
      setPermiso(data)
      return
    }
  }

const getAcceso = (modulo) => {
  if(permiso.length > 0){
    for(let i in permiso)
    {
      if(permiso[i].nombre === modulo){
        if(Number(permiso[i].acceso) === Number(1)){
          return true
        }
        return false;
      }
    }
  }
}
const Center =//useCallback( 
  () => {
  console.log(center)
 
  switch(center){
    case "Employee":
       return <Empleado />
    case "Projects":    
       return <Proyecto />    
    case "Type of Worker":       
       return <Tipotrabajo />      
    case "Assistance":      
        return <Asistencia />                         
    case "Payments":
        return <Pagos  />
    case "My Assistance":
        return <Myassistance  />
    case "My Account":
        return <User  />   
    case "Type of Payment":
        return <TipoPago  />   
    case "Report":
        return <Report  />        
    default:
        return <WelcomePage />
}

}
//,[center])
/*estos son los nombres de los modulos
'Empleado'
'Usuario'
'Permiso'
 'Proyecto'
 'Fase Proyecto'
  'Horas Trabajo'
   'Pagos'
    'Tipo Trabajo'
*/

  return (
    <div className='div-main'>
      <SideBar/>
   <Center />
    </div>
  )
}

export default Menu