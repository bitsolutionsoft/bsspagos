import React, { useEffect, useState } from 'react'
import HeaderBar from '../../components/Header/HeaderBar'
import { useSelector } from 'react-redux'

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
import { textDelete, textInsert, textQuestion, textUpdate } from '../../utils/MsgText'
import { ConvertirAHora } from '../../utils/ConvertirAHora'
import Moneda from '../../utils/Moneda'
import { CalcTotalPagoDia } from '../../utils/CalcTotalPagoDia'
import FiltarEmp from '../../utils/FilterEmp'
import ButtonAdd from '../../components/Buttons/ButtonAdd'
import ErrorPage from '../home/ErrorPage'

const bootstrap=require('bootstrap');
const moment=require("moment")

function Asistencia() {

  const  [buscar,setBuscar]=useState("")
  const [dpi, setDpi] = useState("");  
  const [telefono, setTelefono] = useState(""); 
  const [correo, setCorreo] = useState(""); 
  const [direccion, setDireccion] = useState("");    
  const [estado, setEstado] = useState("Pending");
  const [accion, setAccion] = useState("new");
  const [sort, setSort]=useState("ASC");
const [idfase, setIdfase] = useState("")
const [idproyecto, setIdproyecto] = useState("")
const [nombrefase, setNombrefase] = useState("")
const [idtipotrabajo, setIdtipotrabajo] = useState("");
const [tipofase, setTipofase] = useState("")
const [preciofase, setPreciofase] = useState("")
const [datosEmpleado, setDatosEmpleado] = useState([]);
const [horatotal, setHoratotal] = useState("");
const [horaextra, setHoraextra] = useState("");
 const [datahorastrabajo, setDatahorastrabajo]=useState([]);
 const [datahorastrabajoAux, setDatahorastrabajoAux]=useState([]);
const [titulo, setTitulo] = useState("")
const [proyecto, setProyecto] = useState([])
const [fase, setFase] = useState([])
const [tipoTabajo, setTipoTabajo] = useState([]);
const [codigoempleado, setCodigoempleado] = useState("");
const {idempleado, nombre, apellido}=useSelector(state =>state.user)
const [itemSelected, setItemSelected] = useState([]);
const [fechaTrabajo, setFechaTrabajo] = useState("");


  useEffect(()=>{
getHorasTrabajo();
getEmpleado();
  
getProject();
getTipoTrabajo();
  },[])

  const getHorasTrabajo =async () => {
    let data=await Datos.getDatos("horastrabajo")
    console.log(data)
    if(data !== null){
      setDatahorastrabajo(data)
      setDatahorastrabajoAux(data)
      return
    }
    setDatahorastrabajo([])
      setDatahorastrabajoAux([])
  }
  const getEmpleado =async () => {
    let data=await Datos.getDatos("empleado")
    console.log(data)
    if(data !== null){
      setDatosEmpleado(data)
     
      return
    }
    setDatosEmpleado([])
     
  }

  const Limpiar=()=>{

    setIdproyecto("")
    setIdtipotrabajo("")
    setItemSelected([])
        setEstado("Pending");
  }

  const getDataAsistencia=(codigo)=>{
   let fecha=new Date();
 
    return {
      idhorastrabajo:codigo,
      fecha:moment(fechaTrabajo).format("YYYY-MM-DD hh:mm:ss"),
      hora_inicio:moment(fechaTrabajo).format("YYYY-MM-DD HH:mm:ss") ,
      hora_final:moment(fechaTrabajo).format("YYYY-MM-DD HH:mm:ss")  ,
      hora_total:0,
      horas_extra:0,
      estado:estado,
      idproyecto:idproyecto,
      idtipotrabajo:idtipotrabajo,
      idempleado:codigoempleado

    }
  }
  const getDataAsistenciaUpdate=(item)=>{
   // let fecha=new Date();
 
    return {
      idhorastrabajo:item.idhorastrabajo,
      fecha:moment(fechaTrabajo).format("YYYY-MM-DD hh:mm:ss"),
      hora_inicio:moment(fechaTrabajo).format("YYYY-MM-DD HH:mm:ss") ,
      hora_final:moment(fechaTrabajo).format("YYYY-MM-DD HH:mm:ss")  ,
      hora_total:0,
      horas_extra:0,
      estado:estado,
      idproyecto:item.idproyecto,
      idtipotrabajo:item.idtipotrabajo,
      idempleado:item.idempleado

    }
  }

const getDataTotalHora=(item)=>{
    let fecha=new Date();
    return {
      idhorastrabajo:item.idhorastrabajo,
      fecha:moment(fecha).format("YYYY-MM-DD hh:mm:ss"),
      hora_inicio:moment(fecha).format("YYYY-MM-DD hh:mm:ss") ,
      hora_final:moment(fecha).format("YYYY-MM-DD hh:mm:ss")  ,
      hora_total:horatotal,
      horas_extra:0,
      estado:estado,
      idproyecto:item.idproyecto,
      idtipotrabajo:item.idtipotrabajo,
      idempleado:item.idempleado
    }
  }
  
const getDataTotalHoraExtra=(item)=>{
  let fecha=new Date();
  return {
    idhorastrabajo:item.idhorastrabajo,
    fecha:moment(fecha).format("YYYY-MM-DD"),
    hora_inicio:moment(fecha).format("YYYY-MM-DD hh:mm:ss") ,
    hora_final:moment(fecha).format("YYYY-MM-DD hh:mm:ss")  ,
    hora_total:0,
    horas_extra:horaextra,
    estado:estado,
    idproyecto:item.idproyecto,
    idtipotrabajo:item.idtipotrabajo,
    idempleado:item.idempleado
  }
}

const IngresarNuevo = async () => {
  console.log(getDataAsistencia(0))
  
  let ingresado=await Datos.insertNew("horastrabajo",getDataAsistencia(0));
  if(ingresado){
   getHorasTrabajo();
    Limpiar()
    swal(textInsert.title,textInsert.msg,"success")
  }  
}
const ActualizarAsistencia=async () => {
  let actualizado= await Datos.updateItem("horastrabajo",getDataAsistencia(itemSelected.idhorastrabajo));
  if(actualizado){
    getHorasTrabajo()
    Limpiar()
    swal(textUpdate.title,textUpdate.msg,"success")
  }  
}

const ActualizarHora =async (items) => {
  console.log (getDataAsistenciaUpdate(items))
let actualizado= await Datos.updateItem("horastrabajohf",getDataAsistenciaUpdate(items));
  if(actualizado){
    getHorasTrabajo()
    swal(textUpdate.title,textUpdate.msg,"success")
  }  
}


const SaveTotalTime =async (e) => {
  e.preventDefault();
  console.log (getDataTotalHora(itemSelected.idhorastrabajo))
  let actualizado= await Datos.updateItem("horatotal",getDataTotalHora(itemSelected));
  if(actualizado){
    getHorasTrabajo()
    swal(textUpdate.title,textUpdate.msg,"success")
  }  
}

const SaveTotalExtra =async (e) => {
  e.preventDefault();
  console.log (getDataTotalHoraExtra(itemSelected.idhorastrabajo))
  let actualizado= await Datos.updateItem("horaextra",getDataTotalHoraExtra(itemSelected));
  if(actualizado){
    getHorasTrabajo()
    swal(textUpdate.title,textUpdate.msg,"success")
  }  
}

const EliminarEmpleado =  (datahorastrabajo) => {
  swal({
    title:textQuestion.question,
    text:textQuestion.msg,
    buttons:[textQuestion.btncancel, textQuestion.btnOk],
    dangerMode:true
  }).then((yes)=>{
    if(yes){
     Borrar(datahorastrabajo);
    }
  })
  
  
}
const Borrar =async (datos) => {
  let eliminado=await Datos.deleteItem("horastrabajo",datos.idhorastrabajo)
  if (eliminado) {
    getHorasTrabajo();
    swal(textDelete.title,textDelete.msg, "success")
  }
}

const GuardarCambios = (e) => {
  e.preventDefault();
  if (accion ==="new") {
    IngresarNuevo();
    return
  }
  
 ActualizarAsistencia();
}


const setDataHorastrabajo = (item) => {
  setItemSelected(item)
  setIdproyecto(item.idproyecto);
  setIdtipotrabajo(item.idtipotrabajo)
  setCodigoempleado(item.idempleado)
  console.log(item.fecha)
let fechaActual=new Date(item.fecha).toISOString().split('T')[0];
  setFechaTrabajo(fechaActual)

}

const AbrirActualizar = (datahorastrabajo) => {
  setTitulo("Update Assistance")
  setDataHorastrabajo(datahorastrabajo)
  
  setAccion("update")
  const modal=new bootstrap.Modal(document.getElementById("exampleModal"));
 modal.show();
}
const AbrirNuevo = () => {
  setTitulo("Add New Assistance")
  Limpiar()
  setAccion("new")
 const modal=new bootstrap.Modal(document.getElementById("exampleModal"));
 modal.show();
}

  const Busqueda = (params) => {
    setBuscar(params)
    FiltarEmp(params,setDatahorastrabajo,datahorastrabajoAux)    
  }

  const getProject = async() => {
    let  project= await Datos.getDatos("proyecto");
    if(project!==null){
      setProyecto(project)
      return
    }
    setProyecto([])
  }
  const getFase = async() => {
    let fas= await Datos.getDatos("faseproyecto");
          console.log(fase)
    if( fas !== null){

    setFase(fas)
    return
    }
    setFase([])
  }

  const getTipoTrabajo = async () => {
    let tipoTabajo = await Datos.getDatos("tipotrabajo");
    console.log(tipoTabajo)
    if(tipoTabajo  !== null ) {
      setTipoTabajo(tipoTabajo)
      return
    }
    setTipoTabajo([])
    
  }

  const AddTime = (item) => {
    setItemSelected(item);
   const modalTotalTime= new bootstrap.Modal(document.getElementById("modalTotalTime"));
   modalTotalTime.show();
  }
  
  const AddTimeExtra = (item) => {
     setItemSelected(item);
    const modalTotalTime= new bootstrap.Modal(document.getElementById("modalTotalExtra"));
    modalTotalTime.show();
   }
   
  

 
  return (
    <>
    <div className='div-header'>
              <HeaderBar value={buscar} onChange={Busqueda} onClick={AbrirNuevo} />
    </div>   
        <div className='div-body'>
          <div className='div-header-table'>
       <label className='item-title'>Assistance List</label>
       </div>
          {datahorastrabajo.length > 0 ?
          <TableContainer>
            <HeaderTable>
            <th onClick={()=> SortItem(sort,"datahorastrabajo",setDatahorastrabajo,datahorastrabajo,setSort)}><ButtonSort col="Employee" /></th>
            <th onClick={()=> SortItem(sort,"proyecto",setDatahorastrabajo,datahorastrabajo,setSort)}><ButtonSort col="Project" /></th>
            <th onClick={()=> SortItem(sort,"tipo",setDatahorastrabajo,datahorastrabajo,setSort)}><ButtonSort col="Work" /></th>
            <th>Price</th>
              <th onClick={()=> SortNumber(sort,"fecha",setDatahorastrabajo,datahorastrabajo,setSort)}><ButtonSort col="Date" /></th>

              <th>Initial Time</th>
              <th>Final Time</th>    
             
              <th>Total Time</th>
         
                     
              <th>Extra Time</th>
             
              <th>Total due</th>   
              <th>Paid</th>

            <th>Actions</th> 

              
            </HeaderTable>
            <BodyTable>
              {datahorastrabajo.map((item,index)=>(
                <tr key={index}>
                  <td>{item.empleado}</td>
                  <td>{item.proyecto}</td>
                  <td>{item.tipo}</td>
                  <td>{Moneda(item.precio)}</td>
                  <td>{moment(item.fecha).format("MM/DD/YYYY")}</td>
                  
                  <td>{moment(item.hora_inicio).format("HH:mm:ss")}</td>
                  <td>
                    {item.hora_final !== null ?  moment( item.hora_final).format("HH:mm:ss")
                    :
                    <div className="form-check form-switch">
                       <input className="form-check-input" type="checkbox" id="escritura"  checked={item.hora_final > 0 ? true  : false } onChange={(e)=>ActualizarHora(item, e.target.checked)}/>
                    </div>
                    }
                    </td>     
                    <ButtonAdd onClick={AddTime} item={item} hora={item.hora_total}/>

                                  
               
                  <ButtonAdd onClick={AddTimeExtra} item={item} hora={item.horas_extra}/> 
                  <td>{Moneda(CalcTotalPagoDia(item.hora_total,item.precio,item.horas_extra,item.precio))}</td>
                  <td><Estado estado={item.estado}/></td>
                  
                  <ButtonsOptions item={item} Eliminar={EliminarEmpleado} Actualizar={AbrirActualizar} />
            
                </tr>
              ))}
            </BodyTable>
          </TableContainer>
          :
          <ErrorPage/>}

        </div>

       
         
{/**modal para ingreso de datahorastrabajo */}

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
 
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Select Employee</label>
  <select className="form-select" aria-label="Default select example" value={codigoempleado} onChange={(e)=>setCodigoempleado(e.target.value)} > 
<option > Employee List</option>
{datosEmpleado.length >0 ? datosEmpleado.map ((item,index)=>(
<option  value={item.idempleado} key={index}>
 { `${item.nombre} ${item.apellido} `}</option>
)):null }</select>
</div> 



<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Select Project</label>
  <select className="form-select" aria-label="Default select example" value={idproyecto} onChange={(e)=>setIdproyecto(e.target.value)} > 
<option > Project List</option>
{proyecto.length >0 ? proyecto.map ((item,index)=>(
<option  value={item.idproyecto} key={index}>
  {`"Porject:" ${item.nombre}  "address:" ${item.direccion}` }
</option>
)):null }</select>
</div> 

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Select Type of Work</label>
  <select className="form-select" aria-label="Default select example" value={idtipotrabajo} onChange={(e)=>setIdtipotrabajo(e.target.value)} > 
<option > Work List</option>
{tipoTabajo.length >0 ? tipoTabajo.map ((item,index)=>(
<option  value={item.idtrabajo} key={index}>
{item.tipo}
</option>
)):null }</select>
</div> 

<InputText label="Date" type="date" value={fechaTrabajo} onChange={setFechaTrabajo} required  />
{/**
 <InputText label="Address" type="text" value={direccion} onChange={setDireccion} required  disabled/>
 <InputText label="Phase" type="text" value={nombrefase} onChange={setNombrefase} required disabled/>
 <InputText label="Type" type="text" value={tipofase} onChange={setTipofase} required disabled/>
 <InputText label="Price" type="text" value={preciofase} onChange={setPreciofase} required disabled/>

 */}
 
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary" >Save</button>
      </div>
    </div>
  </div>
</form>

{/** fin del modal de ingreso datahorastrabajo */}
{/**modal patra hosras de trabajo */}

<form
         className="modal fade "
         id="modalTotalTime"
         tabIndex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden={true}
          onSubmit={(e)=>{SaveTotalTime(e)}}
         
        >
  <div className="modal-dialog modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title " id="exampleModalLabel">{titulo}</h5>

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
      </div>
      <div className="modal-body">
 

      <InputText label="Total Time" type="text" value={horatotal} onChange={setHoratotal} required />


 
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary" >Save</button>
      </div>
    </div>
  </div>
</form>
{/**fin de la horas de trabajo*/}
{/**modal patra hosras de trabajo */}

<form
         className="modal fade "
         id="modalTotalExtra"
         tabIndex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden={true}
          onSubmit={(e)=>{SaveTotalExtra(e)}}
         
        >
  <div className="modal-dialog modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title " id="exampleModalLabel">{titulo}</h5>

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
      </div>
      <div className="modal-body">




      <InputText label="Total  Extra Time" type="text" value={horaextra} onChange={setHoraextra} required  />



 
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary" >Save</button>
      </div>
    </div>
  </div>
</form>
{/**fin de la horas de trabajo*/}
    </>
  )
}

export default Asistencia
