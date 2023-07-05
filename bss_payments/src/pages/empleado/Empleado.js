import React, { useEffect, useState } from 'react'
import HeaderBar from '../../components/Header/HeaderBar'
import { useSelector } from 'react-redux'
import { DataUsuario } from '../../context/Context'
import Datos from '../../services/Datos'
import swal from 'sweetalert'
import useData from '../../hooks/useData'
import Loader from '../../components/Loader/Loader'
import TableContainer from '../../components/Table/TableContainer'
import HeaderTable from '../../components/Table/HeaderTable'
import BodyTable from '../../components/Table/BodyTable'
import SortItem from '../../utils/SortItem'
import ButtonSort from '../../components/Table/ButtonSort'
import SortNumber from '../../utils/SortNumber'
import ButtonsOptions from '../../components/Table/ButtonsOptions'
import FiltarItems from '../../utils/FiltrarItems'
import InputText from '../../components/Inputs/InputText'
import InputState from '../../components/Inputs/InputState'
import Estado from '../../components/Table/Estado'
import Permisos from './Permisos'
import { textDelete, textInsert, textQuestion, textUpdate } from '../../utils/MsgText'
import ErrorPage from '../home/ErrorPage'
const md5=require("md5");
const bootstrap=require('bootstrap');

function Empleado() {
  const{grantedList}=useSelector(state=> state.granted);
  const  [buscar,setBuscar]=useState("")
 
  const [idempleado, setIdEmpleado] = useState("");
  const [nombre, setNombre] = useState("");   
  const [apellido, setApellido] = useState(""); 
  const [dpi, setDpi] = useState("");  
  const [telefono, setTelefono] = useState(""); 
  const [correo, setCorreo] = useState(""); 
  const [direccion, setDireccion] = useState("");    
  const [estado, setEstado] = useState("Activo");
  const [accion, setAccion] = useState("new");
  const [sort, setSort]=useState("ASC");
  const [userSelected, setUserSelected] = useState([]);
  const [access, setAccess] = useState(false);
 const [usuario, setUsuario] = useState("");
 const [pass, setPass] = useState("");
  //const { empleado,empleadoAux,setEmpleado,setEmpleadoAux}=useData("empleado")
  //console.log(empleado)
 
 const [empleado, setEmpleado]=useState([]);
 const [empleadoAux, setEmpleadoAux]=useState([]);
const [titulo, setTitulo] = useState("")
//const {center}=useSelector(state =>state.center)


  useEffect(()=>{
getEmpleado();
  },[])

  const getEmpleado =async () => {
    let data=await Datos.getDatos("empleado")
    if(data !== null){
      setEmpleado(data)
      setEmpleadoAux(data)
      return
    }
    setEmpleado([])
      setEmpleadoAux([])
  }

  const Limpiar=()=>{
    setIdEmpleado(0);
    setDpi("");
    setNombre("");
    setTelefono("");
    setApellido("");
    setCorreo("");
    setEstado("Activo");
  }

  const getDataEmpleado=(codigo)=>{
    return {
      idempleado:codigo,
      nombre:nombre,
      apellido:apellido,
      dpi:dpi,
      telefono:telefono,
      estado:estado,
     correo:correo
    }
  }
  
const IngresarNuevo = async () => {
  let ingresado=await Datos.insertNew("empleado",getDataEmpleado(0));
  if(ingresado){
   getEmpleado();
    Limpiar()
    swal(textInsert.title,textInsert.msg,"success")
  }  
}
const ActualizarEmpleado =async () => {
  let actualizado= await Datos.updateItem("empleado",getDataEmpleado(idempleado));
  if(actualizado){
    getEmpleado()
    Limpiar()
    swal(textUpdate.title,textUpdate.msg,"success")
  }  
}
const EliminarEmpleado =  (empleado) => {
  swal({
    title:textQuestion.question,
    text:textQuestion.msg,
    buttons:[textQuestion.btncancel, textQuestion.btnOk],
    dangerMode:true
  }).then((yes)=>{
    if(yes){
     Borrar(empleado);
    }
  })
  
  
}
const Borrar =async (empleado) => {
  let eliminado=await Datos.deleteItem("empleado",empleado.idempleado)
  if (eliminado) {
    getEmpleado();
    swal(textDelete.title,textDelete.msg, "success")
  }
}

const GuardarCambios = (e) => {
  e.preventDefault();
  if (accion ==="new") {
    IngresarNuevo();
    return
  }
  ActualizarEmpleado();  
}


const setDataEmpleado = (empleado) => {
  setIdEmpleado(empleado.idempleado);
  setNombre(empleado.nombre);
  setApellido(empleado.apellido);
  setTelefono(empleado.telefono);
  setEstado(empleado.estado);
  setCorreo(empleado.correo);
  setAccion("update");
}

const AbrirActualizar = (empleado) => {
  setTitulo("update Employee")
  setDataEmpleado(empleado)
  const modal=new bootstrap.Modal(document.getElementById("exampleModal"));
 modal.show();
}
const AbrirNuevo = () => {
  setTitulo("Add new Employee")
  Limpiar()
  setAccion("new")
 const modal=new bootstrap.Modal(document.getElementById("exampleModal"));
 modal.show();
}

  const Busqueda = (params) => {
    setBuscar(params)
    FiltarItems(params,setEmpleado,empleadoAux)    
  }
  const getGranted = (params) => {
    if(grantedList.length > 0){
      for(let i in grantedList){
        if(grantedList[i].nombre === params){
          if(grantedList[i].acceso===1){
              return true
          }
             return false
        }
      }
       
    }
  
  }

  const UpdatePermiso = (item) => {
          if(getGranted("Add Permission")){
              setUserSelected(item)
              setAccess(true)    
              return
          }
              swal("Sorry","You are not authorized to modify the permissions","error")
              return     
        
      }
     
  const valueProvider = {
    userSelected,
    setAccess,
   
  }

const setDataUser = (iduser, idempleado) => {
  return{
      idusuario:iduser,
    idempleado:idempleado,
    usuario:usuario,
    pass: md5( pass)
  }
}

 const InsertUser = async(e) => {
e.preventDefault(); 
  let insertuser=await Datos.insertNew("usuario",setDataUser(0,idempleado));
  if(insertuser){
    swal("Good Job!","user created","success");
    return
  }
  swal("ooh!","user was´nt created","error");
 }
 
  const OpenModalUser =async (item) => {
    setIdEmpleado(item.idempleado)
    let userdata=await Datos.getDetalleByID("usuario",item.idempleado);
    console.log(userdata)
    if(userdata!==null  ){
      if (userdata.length > 0) {
        swal("ooh!","this already has a username","error") 
      return
      }
      
  }
  
let usuario=item.nombre.split(" ")[0]+"_"+item.apellido.slice(0,2)+item.idempleado;
let pass=(item.nombre.slice(0,2)+"$"+item.idempleado+item.apellido.slice(-2)+Math.floor( Math.random()*10)).toLowerCase();
    if(getGranted("Add User")){
   
      setUsuario(usuario)
      setPass(pass)
      let modal= new bootstrap.Modal(document.getElementById("modalUser"));
      modal.show();
      return
    }
    swal("ooh!","You don't have authorization to add user","error")
  }

  return (
    <DataUsuario.Provider value={valueProvider}>
    {
      access ? <Permisos /> :

  <>
    <div className='div-header'>
              <HeaderBar value={buscar} onChange={Busqueda} onClick={AbrirNuevo} />
    </div>   
        <div className='div-body'>
        <div className='div-header-table'>
       <label className='item-title'>Employee List</label>
       </div>
          {empleado.length > 0 ?
          <TableContainer>
            <HeaderTable>
              <th onClick={()=> SortItem(sort,"nombre",setEmpleado,empleado,setSort)}><ButtonSort col="First Name" /></th>
              <th onClick={()=> SortItem(sort,"apellido",setEmpleado,empleado,setSort)}><ButtonSort col="Last Name" /></th>
              <th onClick={()=> SortNumber(sort,"telefono",setEmpleado,empleado,setSort)}><ButtonSort col="Phone" /></th>
              <th onClick={()=> SortItem(sort,"correo",setEmpleado,empleado,setSort)}><ButtonSort col="E-mail" /></th>
              <th onClick={()=> SortItem(sort,"estado",setEmpleado,empleado,setSort)}><ButtonSort col="Status" /></th>
              <th>Actions</th>

              
            </HeaderTable>
            <BodyTable>
              {empleado.map((item,index)=>(
                <tr key={index}>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.telefono}</td>
                  <td>{item.correo}</td>
                  <td><Estado estado={item.estado}/></td>
                  
                  <ButtonsOptions item={item} Permiso={UpdatePermiso} Eliminar={EliminarEmpleado} Actualizar={AbrirActualizar} Agregar={OpenModalUser} />
            
                </tr>
              ))}
            </BodyTable>
          </TableContainer>
          :
          <ErrorPage/>}

        </div>

       
         
{/**modal para ingreso de empleado */}

  <form
         className="modal fade "
         id="exampleModal"
         tabIndex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden={true}
          onSubmit={(e)=>{GuardarCambios(e)}}
         
        >
  <div className="modal-dialog modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title " id="exampleModalLabel">{titulo}</h5>

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
      </div>
      <div className="modal-body">
      

 
      <InputText label="First Name" type="text" value={nombre} onChange={setNombre} required />
 <InputText label="Last Name" type="text"  value={apellido} onChange={setApellido} required />
 {/**   <InputText label="codigo" type="text" value={idempleado} onChange={setIdEmpleado}  hidden/>
 <InputText label="Numero de DPI" type="text" max={12} value={dpi} onChange={setDpi} required />
 */}
 <InputText label="Phone" type="number" max={9} value={telefono} onChange={setTelefono} required />
 <InputText label="E-mail" type="email" value={correo} onChange={setCorreo} required />
 <InputState label="Status" value={estado} onChange={setEstado} />
 
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary" >Save</button>
      </div>
    </div>
  </div>
</form>
{/** fin del modal de ingreso empleado */}
     
{/**modal para ingreso de usuario */}

<form
         className="modal fade "
         id="modalUser"
         tabIndex="-1"
         aria-labelledby="modalUserLabel"
         aria-hidden={true}
          onSubmit={(e)=>{InsertUser(e)}}
         
        >
  <div className="modal-dialog modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title " id="modalUserLabel">Add Username</h5>

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
      </div>
      <div className="modal-body">
        <div className='mb-3'>
          <laber>Please, copy the username and password or share with the employee, once saved, it will no longer be visible.</laber>
        </div>

      <InputText label="Username" type="text" value={usuario} onChange={setUsuario} required />
 <InputText label="password" type="text"  value={pass} onChange={setPass} required />

 
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary" >Save</button>
      </div>
    </div>
  </div>
</form>
{/** fin del modal de ingreso empleado */}
</>  }

    </DataUsuario.Provider>
  )

}

export default Empleado