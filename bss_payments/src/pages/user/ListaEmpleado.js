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

import Usuarios from './Usuarios'

import { textDelete, textInsert, textQuestion, textUpdate } from '../../utils/MsgText'
import ErrorPage from '../home/ErrorPage'
const md5=require("md5");
const bootstrap=require('bootstrap');

function ListaEmpleado() {
  const{grantedList}=useSelector(state=> state.granted);
  const  [buscar,setBuscar]=useState("")
 
  
  const [sort, setSort]=useState("ASC");
  const [userSelected, setUserSelected] = useState([]);
  const [user, setUser] = useState(false);
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



  
  

  const Busqueda = (params) => {
    setBuscar(params)
    FiltarItems(params,setEmpleado,empleadoAux)    
  }
  
  const valueProvider = {
    userSelected,
    setUser,
   
  }
/*
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
  }*/
  
  const OpenUser =async (item) => {
   setUserSelected(item);
   setUser(true); 
  }

  return (
    <DataUsuario.Provider value={valueProvider}>
    {
      user ? <Usuarios /> :

  <>
    <div className='div-header'>
              <HeaderBar value={buscar} onChange={Busqueda} />
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
              {/* <th onClick={()=> SortNumber(sort,"telefono",setEmpleado,empleado,setSort)}><ButtonSort col="Phone" /></th>
              <th onClick={()=> SortItem(sort,"correo",setEmpleado,empleado,setSort)}><ButtonSort col="E-mail" /></th>
              <th onClick={()=> SortItem(sort,"estado",setEmpleado,empleado,setSort)}><ButtonSort col="Status" /></th> */}
              <th>Actions</th>

              
            </HeaderTable>
            <BodyTable>
              {empleado.map((item,index)=>(
                <tr key={index}>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                   {/* <td>{item.telefono}</td>
                  <td>{item.correo}</td>
                  <td><Estado estado={item.estado}/></td>*/}
                  
                  <ButtonsOptions item={item}  Agregar={OpenUser}  />
            
                </tr>
              ))}
            </BodyTable>
          </TableContainer>
          :
          <ErrorPage/>}

        </div>

   
{/**modal para ingreso de usuario 

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
          <label>Please, copy the username and password or share with the employee, once saved, it will no longer be visible.</label>
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
 fin del modal de ingreso empleado */}
</>  }

    </DataUsuario.Provider>
  )

}

export default ListaEmpleado