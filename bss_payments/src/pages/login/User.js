import React, { useEffect, useState } from 'react';
import HeaderBar from '../../components/Header/HeaderBar';
import { useSelector } from 'react-redux';
import InputText from '../../components/Inputs/InputText';
import InputTextIcon from '../../components/Inputs/InputTextIcon';
import Datos from '../../services/Datos';
import swal from 'sweetalert';
const md5=require("md5");

function User() {
  const {open}=useSelector (state =>state.open);
  const {idempleado}=useSelector (state =>state.user);
  const [data,setdata] =useState("");
  const [usuario,setUsuario]=useState("");
  const [password,setPassword]=useState("");
  const [idusuario,setIdusuario]=useState("");
  const [showPassword, setShowPassword]=useState(false);
  const [titulo,setTitulo]=useState("")
 
  useEffect(()=>{
getUserName();
  },[])
  
  const getUserName =async () => {
    let user=await Datos.getDetalleByID("usuario",idempleado);
    if(user !==null){
      setUsuario(user[0].usuario)
      setIdusuario(user[0].idusuario)
      return
    }
    setUsuario("")
    setIdusuario("")
    
  }
  
const setDataUser = () => {
  return{
    idusuario:idusuario,
    idempleado:idempleado,
    usuario:usuario,
    pass:md5(password)
  }
  
}


const UpdateUser =async (e) => {
  e.preventDefault();
  let update= await Datos.updateItem("usuario",setDataUser())
  if(update){
    swal("Good joob!","updated username and password, to apply the changes please logout ","success")
    return
  }
  swal("Good joob!","Could not update username and password","error")
}


  return (
    <>
      <div className='div-header'>
        <HeaderBar value={data} onChange={setdata} />
      </div>  
      <div className='div-body' >
        
     
{/**modal para ingreso de usuario */}
<div className='div-contain-form'>

<form className=' p-5 rounded form-login'  onSubmit={(e)=>UpdateUser(e)}>
<div className='d-flex justify-content-center align-items-center mb-4'>
<h4 className="modal-title  " id="modalUserLabel">Update Usermane and password</h4>
</div>
<div className='d-flex justify-content-center align-items-center '>

</div>
<div className='form-outline mb-4'>
</div>
<InputTextIcon
              label="Username"
              type="text"
              value={usuario}
              onChange={setUsuario}
              iconLeft="bi bi-person-fill"
            
              required={true}
              />



<div>
<label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
<div className="input-group mb-3">
  <span className='input-group-text '><i className="bi bi-lock-fill"></i></span>
  <input type={showPassword ? "text" : "password"} className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}  required />
  <span className='input-group-text'>   <i className={showPassword ?"bi bi-eye-fill": "bi bi-eye-slash-fill"} onClick={()=>setShowPassword(!showPassword)}></i></span>


</div></div>
<div className="form-outline mb-4 d-flex justify-content-center align-items-center">

 
  <button type="submit" className="btn btn-primary btn-block mb-4 w-50">Save</button>
  
</div>

</form></div>
      </div>
       

    </>
  )
}

 export default User