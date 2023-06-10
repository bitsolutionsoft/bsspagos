import React from 'react'

function Estado({estado}) {
  return (
    <div className='div-estado'>
    {estado === "Activo" ?   <span className="activo"> {estado} <i className="bi bi-check-circle-fill"></i></span>:null}
    {estado === "No Activo" ?   <span className="noactivo"> {estado} <i className="bi bi-x-circle-fill"></i></span>:null}
    {estado === "Pendiente" ?   <span className="pendiente"> {estado} <i className="bi bi-hourglass-split"></i></span>:null}
    {estado === "Cancelado" ?   <span className="cancelado"> {estado}  <i className="bi bi-check-circle-fill"></i></span>:null} 
              
    </div>
  )
}

export default Estado