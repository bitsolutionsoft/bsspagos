import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unSetUser } from '../../app/reducers/user/userSlice';
import { setOpen } from '../../app/reducers/openMenu.js/openMenuSlice';
import { setCenter } from '../../app/reducers/center/centerSlice';
import logo from '../../assets/img/logo.jpg'
import { removeGrantedToList } from '../../app/reducers/granted/grantedSlice';
import { unSetCenter } from '../../app/reducers/center/centerSlice';



function SideBar(props) {
const dispatch =useDispatch();
const {open}=useSelector(state =>state.open)
const {center}=useSelector(state => state.center)
const {grantedList}=useSelector(state => state.granted)


const CerrarSesion = () => {
    window.localStorage.clear();
    dispatch(unSetUser())
    dispatch(removeGrantedToList())
    dispatch(unSetCenter())
    
  }
  const OpenMenu=()=>{
    dispatch(setOpen({
        open:!open
    }))
  }
  const SetCenter=(screen)=>{
    dispatch(setCenter({
        center:screen
    }))
    dispatch(setOpen({
        open:!open
    }))
  }

  /**
     
    
    
     
     
    
   */
  const OptionsMenu = () => {
 let Options=  grantedList.map((item,index)=>{
    if(item.nombre==="Employee" && item.acceso===1 ){
      return <li  key={index} onClick={()=>SetCenter(item.nombre)} className={center ===item.nombre ?"op-item op-active":"op-item"}><i className="bi bi-person-lines-fill"></i><span>{item.nombre} </span></li>  
    }
   
    if(item.nombre==="Payments" && item.acceso===1 ){
      return   <li key={index}  onClick={()=>SetCenter(item.nombre)} className={center ===item.nombre ?"op-item op-active":"op-item"}><i className="bi bi-credit-card-2-front-fill"></i><span>{item.nombre}</span></li> 
    }
    if(item.nombre==="Type of Worker" && item.acceso===1 ){
      return    <li key={index}  onClick={()=>SetCenter(item.nombre)} className={center ===item.nombre ?"op-item op-active":"op-item"}><i className="bi bi-person-rolodex"></i><span>{item.nombre}</span></li>  
    }
    if(item.nombre==="Projects" && item.acceso===1 ){
      return   <li key={index}  onClick={()=>SetCenter(item.nombre)} className={center ===item.nombre ?"op-item op-active":"op-item"}><i className="bi bi-building"></i><span>{item.nombre}</span></li>  
    }
    if(item.nombre==="Assistance" && item.acceso===1 ){
      return    <li key={index}  onClick={()=>SetCenter(item.nombre)} className={center ===item.nombre ?"op-item op-active":"op-item"}><i className="bi bi-card-checklist"></i><span>{item.nombre}</span></li>  
    }
   
    if(item.nombre==="My Assistance" && item.acceso===1 ){
      return    <li key={index}  onClick={()=>SetCenter(item.nombre)} className={center ===item.nombre ?"op-item op-active":"op-item"}><i className="bi bi-card-checklist"></i><span>{item.nombre}</span></li>  
    }
   
    if(item.nombre==="Report" && item.acceso===1 ){
      return    <li key={index}  onClick={()=>SetCenter(item.nombre)} className={center ===item.nombre ?"op-item op-active":"op-item"}><i className="bi bi-file-bar-graph-fill"></i><span>{item.nombre}</span></li>  
    }

    if(item.nombre==="Type of Payment" && item.acceso===1 ){
      return    <li key={index}  onClick={()=>SetCenter(item.nombre)} className={center ===item.nombre ?"op-item op-active":"op-item"}><i className="bi bi-credit-card-2-back-fill"></i><span>{item.nombre}</span></li>  
    }
    if(item.nombre==="My Account" && item.acceso===1 ){
      return    <li key={index}  onClick={()=>SetCenter(item.nombre)} className={center ===item.nombre ?"op-item op-active":"op-item"}><i className="bi bi-person-fill-gear"></i><span>{item.nombre}</span></li>  
    }
   
  }
  )
    return Options;
  }


  return (
    <div className='container-sidebar' >
    <div className={open ? "menu" : "menu close"}>
    <span className='iconclose' onClick={OpenMenu}><i className={open ? "bi bi-x" :""}></i></span>
   
    <div className='div-logo'> 
    <img  className='logo'src={logo} alt='logo'/>
    </div> 
    <div className='div-title'>
   <label className='title-sidebar'>SEI GROUP</label> 
    </div>
    <hr />
     <ul >
      <OptionsMenu/>
       <li  onClick={CerrarSesion} className='op-item'><i className="bi bi-box-arrow-left"></i><span>Salir</span></li>  
      </ul> 
      </div>
      </div>
  )
}

export default SideBar