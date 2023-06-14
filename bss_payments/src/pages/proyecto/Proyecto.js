import React, { useEffect, useState } from 'react';
import HeaderBar from '../../components/Header/HeaderBar';
import Datos from '../../services/Datos';
import swal from 'sweetalert';
import Loader from '../../components/Loader/Loader';
import TableContainer from '../../components/Table/TableContainer';
import HeaderTable from '../../components/Table/HeaderTable';
import BodyTable from '../../components/Table/BodyTable';
import SortItem from '../../utils/SortItem';
import ButtonSort from '../../components/Table/ButtonSort';
import ButtonsOptions from '../../components/Table/ButtonsOptions';
import FiltarItems from '../../utils/FiltrarItems';
import InputText from '../../components/Inputs/InputText';
import InputState from '../../components/Inputs/InputState';
import Estado from '../../components/Table/Estado';
import { DataProject } from '../../context/Context';
import FaseProyecto from './FaseProyecto';
const bootstrap=require('bootstrap');

function Proyecto() {
const [buscar,setBuscar]=useState("") 
const [idproyecto, setIdProyecto] = useState("");
const [nombre, setNombre] = useState("");   
const [direccion, setDireccion] = useState("");    
const [estado, setEstado] = useState("Activo");
const [accion, setAccion] = useState("new");
const [sort, setSort]=useState("ASC");
const [proyecto, setProyecto]=useState([]);
const [proyectoAux, setProyectoAux]=useState([]);
const [titulo, setTitulo] = useState("");
const [openfase, setOpenfase]=useState(false);
const [projectSelected, setProjectSelected] = useState([])


 

  useEffect(()=>{
getProyecto();
  },[])

  const getProyecto =async () => {
    let data=await Datos.getDatos("proyecto")

    if(data !== null){
      setProyecto(data)
      setProyectoAux(data)
      return
    }
    setProyecto([])
      setProyectoAux([])
  }

  const Limpiar=()=>{
    setIdProyecto(0);
    setNombre("");
    setDireccion("");
    setEstado("Activo");
  }

  const getDataProyecto=(codigo)=>{
    return {
      idproyecto:codigo,
      nombre:nombre,
      direccion:direccion,
      estado:estado,
    
    }
  }
const IngresarNuevo = async () => {
  let ingresado=await Datos.insertNew("proyecto",getDataProyecto(0));
  if(ingresado){
   getProyecto();
    Limpiar()
    swal("Exito","Se ingreso correctamente","success")
  }  
}
const ActualizarProyecto =async () => {
  let actualizado= await Datos.updateItem("proyecto",getDataProyecto(idproyecto));
  if(actualizado){
    getProyecto()
    Limpiar()
    swal("Exito","Se actualizo correctamente","success")
  }  
}
const EliminarProyecto =  (proyecto) => {
  swal({
    title:"Esta seguro de eliminar?",
    text:"Una vez eliminado, ya no se podrá restablecer",
    buttons:["Cancelar", "Eliminar"],
    dangerMode:true
  }).then((yes)=>{
    if(yes){
     Borrar(proyecto);
    }
  })
  
  
}
const Borrar =async (proyecto) => {
  let eliminado=await Datos.deleteItem("proyecto",proyecto.idproyecto)
  if (eliminado) {
    getProyecto();
    swal("Exito","Se elimino correctamente", "success")
  }
}

const GuardarCambios = (e) => {
  e.preventDefault();
  if (accion ==="new") {
    IngresarNuevo();
    return
  }
  ActualizarProyecto();  
}


const setDataProyecto = (proyecto) => {
  setIdProyecto(proyecto.idproyecto);
  setNombre(proyecto.nombre);
  setDireccion(proyecto.direccion);
  setEstado(proyecto.estado);
  setAccion("update");
}

const AbrirActualizar = (proyecto) => {
    setTitulo("Actualizar Proyecto")
  setDataProyecto(proyecto)
  const myModal=new bootstrap.Modal(document.getElementById("exampleModal"));
 myModal.show();
}
const AbrirNuevo = () => {
    setTitulo("Insert Project")
    Limpiar();
  setAccion("new")
 const myModal=new bootstrap.Modal(document.getElementById("exampleModal"));
 myModal.show();
}


  const Busqueda = (params) => {
    setBuscar(params)
    FiltarItems(params,setProyecto,proyectoAux)    
  }
 
const valueProvider =  {
  setOpenfase,
  projectSelected
}

const redirectToPhase = (item) => {
  setOpenfase(true)
  setProjectSelected(item)
}


  return (
    <DataProject.Provider value={valueProvider}>
{ openfase ?
<FaseProyecto/>
 :

    <>
    <div className='div-header'>
              <HeaderBar value={buscar} onChange={Busqueda} onClick={AbrirNuevo} />
    </div>   
        <div className='div-body'>
        <div className='div-header-table'>
       <label className='item-title'>Project List</label></div>
          {proyecto.length > 0 ?
          <TableContainer>
            <HeaderTable>
              <th onClick={()=> SortItem(sort,"Project Name",setProyecto,proyecto,setSort)}><ButtonSort col="Project" /></th>
              <th onClick={()=> SortItem(sort,"Address",setProyecto,proyecto,setSort)}><ButtonSort col="Address" /></th>
              <th onClick={()=> SortItem(sort,"Status",setProyecto,proyecto,setSort)}><ButtonSort col="Status" /></th>
              <th>Phase</th>
              
              <th>Actions</th>
            </HeaderTable>
            <BodyTable>
              {proyecto.map((item,index)=>(
                <tr key={index}>
                  <td>{item.nombre}</td>
                  <td>{item.direccion}</td>
                  <td><Estado estado={item.estado}/></td>
                  <td><i className="bi bi-box-arrow-in-up-right icon-update" onClick={()=>redirectToPhase(item)}></i></td>
                  <ButtonsOptions item={item}  Eliminar={EliminarProyecto} Actualizar={AbrirActualizar} />
                </tr>
              ))}
            </BodyTable>
          </TableContainer>
          :
          <Loader/>}

        </div>

       
         
{/**modal para ingreso de un nuevo proyecto */}

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
        <h5 className="modal-title" id="exampleModalLabel">{titulo}</h5>

        <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
      </div>
      <div className="modal-body">
      
 
 <InputText label="Project Name" type="text" value={nombre} onChange={setNombre} required />
 <InputText label="Address" type="text"  value={direccion} onChange={setDireccion} required />
 <InputState label="Status" value={estado} onChange={setEstado} />
 
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary" >Save</button>
      </div>
    </div>
  </div>
</form>
{/** fin del modal de ingreso proyecto */}
    </>}
    </DataProject.Provider>
  )
}

export default Proyecto