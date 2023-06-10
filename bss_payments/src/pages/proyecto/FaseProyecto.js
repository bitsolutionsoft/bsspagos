import React,{useState,useEffect, useContext} from 'react'
import swal from 'sweetalert';
import Datos from '../../services/Datos';
import { DataProject, DataUsuario } from '../../context/Context';
import SortItem from '../../utils/SortItem';
import ButtonSort from '../../components/Table/ButtonSort';
import HeaderTable from '../../components/Table/HeaderTable';
import BodyTable from '../../components/Table/BodyTable';
import TableContainer from '../../components/Table/TableContainer';
import Loader from '../../components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { addGrantedToList } from '../../app/reducers/granted/grantedSlice';
import ButtonsOptions from '../../components/Table/ButtonsOptions';
import Estado from '../../components/Table/Estado';
import InputText from '../../components/Inputs/InputText';
import InputState from '../../components/Inputs/InputState';
const bootstrap =require("bootstrap")


function FaseProyecto() {
  const {setOpenfase, projectSelected}= useContext(DataProject);
  const [datos, setDatos] = useState([]);
  const [datosAux, setDatosAux] = useState([]);
  const [empleados, setEmpleados] = useState([]);
  const [tipoTrabajo, setTipoTrabajo] = useState([]);
  const [idfase, setIdfase] = useState("");
  const [idtipotrabajo, setIdtipotrabajo] = useState("");
  const [idempleado, setIdempleado] = useState("");
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("Activo")
  const [sort, setSort] = useState("ASC");
  const [accion, setAccion] = useState("new");
  const [buscar, setBuscar] = useState("");
  const [titulo, setTitulo] = useState("")
  

useEffect(()=>{
getPhase();
getEmpleados();
getTipoTrabajo();
},[])

const getPhase=async()=>{
let fase=await Datos.getDetalleByID("faseproyecto",projectSelected.idproyecto);
console.log("datos de la fase")
console.log(fase)
if(fase !== null){

  setDatos(fase);
  setDatosAux(fase);
  return;
}
setDatos([])
setDatosAux([])
 

}
const getEmpleados = async() => {
  let empleado=await Datos.getDatos("empleado");
  console.log(empleado)
  if(empleado !== null){
    setEmpleados(empleado)
    return
  }
  setEmpleados([]);
}
const getTipoTrabajo = async() => {
    let tipo=await Datos.getDatos("tipotrabajo");
    console.log(tipo)
    if(tipo !== null){
      setTipoTrabajo(tipo)
      return
    }
    setTipoTrabajo([]);
  }
const ActualizarFase =async () => { 
  
    let fase=await Datos.updateItem("faseproyecto",setDataPhase(idfase));
    if(fase){
      swal("Aviso", "Se Actualizo correctamente","success"); 
       await getPhase()
      return  
    }  
    swal("Aviso", "No se pudo actualizar el permiso","error");
 }
 const InsertFase =async () => { 
  
    let fase=await Datos.insertNew("faseproyecto",setDataPhase(0));
    if(fase){
      swal("Aviso", "Se ingreso correctamente","success"); 
     await  getPhase()
      return  
    }  
    swal("Aviso", "No se pudo actualizar","error");
 }


const setDataPhase = (idfase) => {
   return { 
    idfase:idfase,
    idproyecto:projectSelected.idproyecto,
    nombre:nombre,
    estado:estado,
    idempleado:idempleado,
    idtipotrabajo:idtipotrabajo
  }
  
}

const GuardarCambios = (e) => {
    e.preventDefault();
    if (accion ==="new") {
        InsertFase();
        return
    }
    ActualizarFase()
  
}


const Eliminar = async(fase) => {
  let eliminar=await Datos.deleteItem("faseproyecto",fase.idfase)
  if(eliminar){
    swal("Good joob!","was successfully removed","success");
    getPhase();
    return
  }
  swal("Ooops!","could not be removed","error");
}

const AbrirNuevo = () => {
  setTitulo("Add new phase")
  setAccion("new")
  let myModal=new bootstrap.Modal(document.getElementById("exampleModal"));
  myModal.show();
}

const AbrirActualizar = (items) => {
    setTitulo("Update phase")
    setAccion("update")
    let myModal=new bootstrap.Modal(document.getElementById("exampleModal"));
    myModal.show();
  setDataForForm(items)
}

const setDataForForm = (fase) => {
    setIdfase(fase.idfase)
    setIdempleado(fase.idempleado)
    setIdtipotrabajo(fase.idtipotrabajo)
    setNombre(fase.nombre)
    setEstado(fase.estado)
  
}


const Busqueda = (params) => {
  setBuscar(params)
}





  return (
    <>
    <div className='div-header'>
        <div className='header'>
<div >
      <span className='iconback' onClick={()=>setOpenfase(false)} > <i className="bi bi-arrow-left-square-fill  ms-3 btn-back"> Back</i></span>
       </div>
       
<div className='input-search'>
<span className='icon-search'><i className="bi bi-search"></i></span>
 <input className='text-search' type='text' onChange={(e)=>Busqueda(e.target.value)} value={buscar}/>
{buscar.length > 0  ? 

 <span className='icon-search-delete' onClick={()=>Busqueda("")}><i className="bi bi-x"></i></span> 
 :null}
 </div>
<div>
  {/**
 <img  className='logo'src={campion} alt='logo'/> */}
 <button className='btn btn-primary btn-sm' onClick={AbrirNuevo}>Add new</button>
 </div></div>
    </div>

    <div className='div-body'>    
    <div className='div-header-table'>
    <label className='item-title'>Project Phases</label></div>
    {datos.length > 0 ?
          <TableContainer>
            <HeaderTable>
              
            <th onClick={()=> SortItem (sort,"nombre",setDatos,datos,setSort)}><ButtonSort col="Employee´s name " /></th>
            <th onClick={()=> SortItem (sort,"nombre",setDatos,datos,setSort)}><ButtonSort col="Project" /></th>
            <th onClick={()=> SortItem (sort,"nombre",setDatos,datos,setSort)}><ButtonSort col="Address" /></th>
              <th onClick={()=> SortItem (sort,"nombre",setDatos,datos,setSort)}><ButtonSort col="Phase" /></th>
              <th onClick={()=> SortItem (sort,"nombre",setDatos,datos,setSort)}><ButtonSort col="Work" /></th>
              <th onClick={()=> SortItem (sort,"nombre",setDatos,datos,setSort)}><ButtonSort col="Price" /></th>
              <th onClick={()=> SortItem (sort,"nombre",setDatos,datos,setSort)}><ButtonSort col="Status" /></th>
              <th >Actions</th>  
            </HeaderTable>
            <BodyTable >
              {datos.map((item,index)=>(
                <tr key={index}>
              
                  <td>{item.nombreempleado + " " + item.apellido}</td>
                  <td>{item.nombreproyecto}</td>
                  <td>{item.direccion}</td>
                  <td>{item.nombre}</td>
                  <td>{item.tipo}</td>
                  <td>{item.precio}</td>
                  <td><Estado estado={item.estado}/></td>
              
                    <ButtonsOptions item={item} Eliminar={Eliminar} Actualizar={AbrirActualizar} />
         
                </tr>
              ))}
            </BodyTable>
          </TableContainer>
          :
        <div>
       
        </div>
          
          }
{/**modal para ingreso de fase de proyecto */}

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
 

      <InputText label="Phase´s name" type="text"  value={nombre} onChange={setNombre} required />

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Select employee</label>
  <select className="form-select" aria-label="Default select example" value={idempleado} onChange={(e)=>setIdempleado(e.target.value)} > 
<option > Employee´s List</option>
{empleados.length >0 ? empleados.map ((item,index)=>(
<option  value={item.idempleado} key={index}>
  {item.nombre + " "+ item.apellido}
</option>
)):null }</select>
</div> 

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Select work</label>
  <select className="form-select" aria-label="Default select example" value={idtipotrabajo} onChange={(e)=>setIdtipotrabajo(e.target.value)} > 
<option > Work´s  List</option>
{tipoTrabajo.length >0 ? tipoTrabajo.map ((item,index)=>(
<option  value={item.idtrabajo} key={index}>
  {item.tipo}
</option>
)):null }</select>
</div> 
<InputState label="Estado" value={estado} onChange={setEstado} />
 
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="submit" className="btn btn-primary" >Guardar</button>
      </div>
    </div>
  </div>
</form>
{/**fin delmodal para ingreso de fase de proyecto */}

          </div>
  </>
  )
}

export default FaseProyecto