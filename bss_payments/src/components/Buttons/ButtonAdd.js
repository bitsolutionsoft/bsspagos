
import React from 'react'

function ButtonAdd(props) {
  return (
    <td>

     <i className="bi bi-plus-circle ms-4" onClick={()=>props.onClick(props.item)} ></i> 

    </td>
  )
}

export default ButtonAdd
