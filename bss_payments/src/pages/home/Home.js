import React, { useEffect } from 'react'

import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../app/reducers/user/userSlice';
import Menu from './Menu';
import Login from '../login/Login';
import Datos from '../../services/Datos';


function Home() {
  const dispatch=useDispatch();
  const {isLogin}=useSelector(state=> state.user)
  
  useEffect(()=>{
    getInfo()
    IniciarApp();
  },[])

async function getInfo(){
let info=await Datos.getDatosInfo("info")
console.log(info)
}

  function IniciarApp(){
   // console.log(isLogin)
    let usuario=JSON.parse(window.localStorage.getItem('usuario'));
    //console.log(usuario)
    if(usuario !== null){
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
