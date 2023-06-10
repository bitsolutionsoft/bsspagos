import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../../app/reducers/user/userSlice';
import swal from 'sweetalert'
import InputText from '../../components/Inputs/InputText'
import useData from '../../hooks/useData'
import InputTextIcon from '../../components/Inputs/InputTextIcon'
import InputTextMoney from '../../components/Inputs/InputMoney'
import Datos from '../../services/Datos';
import { addGrantedToList } from '../../app/reducers/granted/grantedSlice';
const md5=require("md5");

function  Login(){  
  const url="https://raw.githubusercontent.com/bitsolutionsoft/img/main/bss.png"
  const dispatch=useDispatch();
  const [showPassword, setShowPassword] = useState(false)
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const [permiso,setPermiso]=useState([]);

const dataUsuario=(codigo)=>{
  return {
    idusuario:codigo,
    idempleado:0,
    usuario:usuario,
    pass:md5(password)
  }
}

async function  IniciarSesion(e){
e.preventDefault()

let datos=await Datos.getDataUser(dataUsuario(0))
console.log(datos)

if( datos !== null){
  const ls=window.localStorage;
  ls.setItem("usuario",JSON.stringify(datos[0]))
 //await  getUsuarioPermiso(datos);
 SaveToStoreUser(datos);
  return
}
const ls=window.localStorage;
ls.clear();
}

async function  SaveToStoreUser(datos) {
  dispatch(setUser({
    idempleado:datos[0].idempleado,
    nombre:datos[0].nombre,
    apellido:datos[0].apellido,
    idusuario:datos[0].idusuario,
    token:datos[0].token,
    isLogin:datos[0].isLogin
  }))
}

async function getUsuarioPermiso(datos){
  console.log(datos[0].idempleado)
  let data= await Datos.getPrivilege(datos[0] );
  console.log(data)
  if(data !== null){
    await SaveToStoreUser(datos)
    dispatch(addGrantedToList(data))
    setPermiso(data)
    return
  }
}


    return(
        <>
        
    <div className='d-flex justify-content-center align-items-center  vh-100 div-login'>

<form className=' p-5 rounded form-login'  onSubmit={(e)=>IniciarSesion(e)}>
<div className='d-flex justify-content-center align-items-center mb-4'>
<img src={url} alt="logo" width="60" height="60" className="rounded-circle"/>
</div>
<div className='d-flex justify-content-center align-items-center '>
<h4>Login</h4>
</div>
<div className='form-outline mb-4'>

<p>Enter your username and correct password.</p>
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

 
  <button type="submit" className="btn btn-primary btn-block mb-4 w-50">Enter</button>
  
</div>

</form>
    </div>
        
        </>
    )
}
export default Login;