import React, { useState } from 'react'
import HeaderBar from '../../components/Header/HeaderBar'
import { useSelector } from 'react-redux'
import welcome from '../../assets/img/logo.jpg'

function WelcomePage() {

  const  [buscar,setBuscar]=useState("")

  const Busqueda = (params) => {
    setBuscar(params)
    
  }
  const CrearNuevo = () => {
   // alert("creando nuevo")
  }
  return (
    <>
    <div className='div-header'>
              <HeaderBar value={buscar} onChange={Busqueda} onClick={CrearNuevo} hiddenSearch={true} hiddenNew={true} />
    </div>
        <div className='div-body'>
       
              <div className='d-flex flex-column  justify-content-center align-items-center '>
              <h1>Welcome to Sei Group</h1> 
                 
                 <p>Framing Interior & Exterior </p> 
                 <img src={welcome} alt="img" className='img-welcome'/>
              </div>
            
            </div>
               
       
    
       
    </>
  )
}

export default WelcomePage