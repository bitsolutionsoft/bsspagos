import React from 'react'

function Estado({estado}) {
  return (
    <div className='div-estado'>
    {estado === "Active" ?   <span className="activo"> {estado} <i className="bi bi-check-circle-fill"></i></span>:null}
    {estado === "Inactive" ?   <span className="no activo"> {estado} <i className="bi bi-x-circle-fill"></i></span>:null}
    {estado === "Pending" ?   <span className="pendiente"> {estado} <i className="bi bi-hourglass-split"></i></span>:null}
    {estado === "Cancelled" ?   <span className="cancelado"> {estado}  <i className="bi bi-check-circle-fill"></i></span>:null} 
              
    </div>
  )
}

export default Estado