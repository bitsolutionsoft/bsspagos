import React from 'react'

import campion from '../../assets/img/fondo.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '../../app/reducers/openMenu.js/openMenuSlice';

export default function HeaderBar(props) {
    const dispatch=useDispatch();
    const {open}=useSelector (state =>state.open)

    const OpenMenu=()=>{
        console.log(!open)
        dispatch(setOpen({
            open:true
        }))
      }
  return (
    <div className= "header">
      <div >
    <span className='iconopen' onClick={()=>OpenMenu()}><i className={"bi bi-list"}></i></span>
</div>
{/** <div className='input-group input-group-sm me-3 ms-3' >
  <div className='input-group-prepend'>
    <span className='input-group-text'><i className="bi bi-search"></i></span>
  </div>

 <input className='form-control' type='text' onChange={(e)=>props.onChange(e.target.value)} value={props.value}/>
{props.value.length > 0  ? 
<div className='input-group-prepend'>
<span className='input-group-text' onClick={()=>props.onChange("")}><i className="bi bi-x"></i></span> 
</div>

 :null}
 </div>
*/}
 {props.hiddenSearch ? null  
:
<div className='input-search'>
<span className='icon-search'><i className="bi bi-search"></i></span>
 <input className='text-search' type='text' onChange={(e)=>props.onChange(e.target.value)} value={props.value}/>
{props.value.length > 0  ? 

 <span className='icon-search-delete' onClick={()=>props.onChange("")}><i className="bi bi-x"></i></span> 
 :null}
 </div>
 }
<div>

  {/**
 <img  className='logo'src={campion} alt='logo'/> */}
  {props.hiddenNew ? null 
:
<button className='btn btn-primary btn-sm' onClick={props.onClick}>Add new</button>
}
 
 </div>
</div>
  )
}
