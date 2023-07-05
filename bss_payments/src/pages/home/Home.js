import React, { useEffect,useState } from 'react'
import { addGrantedToList } from '../../app/reducers/granted/grantedSlice';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../app/reducers/user/userSlice';
import Menu from './Menu';
import Login from '../login/Login';
import Datos from '../../services/Datos';


function Home() {
  const dispatch=useDispatch();
  const {isLogin}=useSelector(state=> state.user)
  const [permiso,setPermiso]=useState([]);
  useEffect(()=>{
    getInfo()
    IniciarApp();
  },[])

async function getInfo(){
let info=await Datos.getDatosInfo("info")
console.log(info)
}

async function getUsuarioPermiso(idempleado){
  let data= await Datos.getDetalleByID("permiso",idempleado);
  console.log(data)
  if(data !== null){
    dispatch(addGrantedToList(data))
    setPermiso(data)
    return
  }
}


  async function IniciarApp(){
   // console.log(isLogin)
    let usuario=JSON.parse(window.localStorage.getItem('usuario'));
    //console.log(usuario)
    if(usuario !== null){
     await  getUsuarioPermiso(usuario.idempleado);
      dispatch(setUser({
        idempleado:usuario.idempleado,
        nombre:usuario.nombre,
        apellido:usuario.apellido,
        idusuario:usuario.idusuario,
        token:usuario.token,
        isLogin:usuario.isLogin
      }))
     
    }
  }
  

  return (
    <>
    {isLogin ?
    <Menu/>
  :
  <Login/>}
    </>

  )
}

export default Home
