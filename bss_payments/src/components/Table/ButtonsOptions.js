import React from 'react'

function ButtonsOptions(props) {
  return (
    <td>
    <div className='d-flex justify-content-center align-items-center fs-6'>
      {typeof props.Eliminar !== 'undefined' ?  <i className="bi bi-trash-fill  icon-delete" onClick={()=>props.Eliminar(props.item)}></i> :null}    
      {typeof props.Actualizar !== 'undefined' ?   <i className="bi bi-pencil-square icon-update ms-2"  onClick={()=>props.Actualizar(props.item)} ></i> :null}
      {typeof props.Permiso !== 'undefined' ?  <i className="bi bi-person-fill-lock icon-detail ms-2" onClick={()=>props.Permiso(props.item)}></i> :null}
      
      {typeof props.VerDetalle !== 'undefined' ?   <i className="bi bi-arrow-up-right-square-fill icon-detail ms-2" onClick={()=>{props.VerDetalle(props.item)}}></i> :null}
      {typeof props.Agregar !== 'undefined' ?   <i className="bi bi-person-fill-add icon-update ms-2"   onClick={(e)=>{props.Agregar(props.item,e)}}></i> :null}
        
      </div>


</td>
  )
}

export default ButtonsOptions