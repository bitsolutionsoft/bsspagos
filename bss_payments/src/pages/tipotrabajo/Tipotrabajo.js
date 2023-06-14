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
const bootstrap=require('bootstrap');

function Tipotrabajo() {

  const  [buscar,setBuscar]=useState("")
 
  const [idtrabajo, setIdTrabajo] = useState("");
  const [nombre, setNombre] = useState("");   
  const [tipo, setTipo] = useState(""); 
  const [precio, setPrecio] = useState("");     
  const [estado, setEstado] = useState("Activo");
  const [accion, setAccion] = useState("new");
  const [sort, setSort]=useState("ASC");

 const [tipotrabajo, setTipotrabajo]=useState([]);
 const [tipotrabajoAux, setTipotrabajoAux]=useState([]);
 const [titulo, setTitulo] = useState("")


  useEffect(()=>{
getTipotrabajo();
  },[])

  const getTipotrabajo =async () => {
    let data=await Datos.getDatos("tipotrabajo")
    console.log(data)
    if(data !== null){
      setTipotrabajo(data)
      setTipotrabajoAux(data)
      return
    }
    setTipotrabajo([])
      setTipotrabajoAux([])
  }

  const Limpiar=()=>{
    setIdTrabajo(0);
    setNombre("");
    setTipo("");
    setPrecio("");
    setEstado("Activo");
  }

  const getDataTipotrabajo=(codigo)=>{
    return {
      idtrabajo:codigo,
      nombre:nombre,
      tipo:tipo,
      precio:precio,
      estado:estado,
    }
  }
const IngresarNuevo = async () => {
  let ingresado=await Datos.insertNew("tipotrabajo",getDataTipotrabajo(0));
  if(ingresado){
   getTipotrabajo();
    Limpiar()
    swal("Exito","Se ingreso correctamente","success")
  }  
}
const ActualizarTipotrabajo =async () => {
  let actualizado= await Datos.updateItem("tipotrabajo",getDataTipotrabajo(idtrabajo));
  if(actualizado){
    getTipotrabajo()
    Limpiar()
    swal("Exito","Se actualizo correctamente","success")
  }  
}
const EliminarTipotrabajo =  (tipotrabajo) => {
  swal({
    title:"Esta seguro de eliminar?",
    text:"Una vez eliminado, ya no se podrá restablecer",
    buttons:["Cancelar", "Eliminar"],
    dangerMode:true
  }).then((yes)=>{
    if(yes){
     Borrar(tipotrabajo);
    }
  })
  
  
}
const Borrar =async (tipotrabajo) => {
  let eliminado=await Datos.deleteItem("tipotrabajo",tipotrabajo.idtrabajo)
  if (eliminado) {
    getTipotrabajo();
    swal("Exito","Se elimino correctamente", "success")
  }
}

const GuardarCambios = (e) => {
  e.preventDefault();
  if (accion ==="new") {
    IngresarNuevo();
    return
  }
  ActualizarTipotrabajo();  
}


const setDataTipotrabajo = (tipotrabajo) => {
  setIdTrabajo(tipotrabajo.idtrabajo);
  setNombre(tipotrabajo.nombre);
  setTipo(tipotrabajo.tipo);

  setEstado(tipotrabajo.estado);
  setAccion("update");
}

const AbrirActualizar = (tipotrabajo) => {
    setTitulo("Update Type of Work") 
  setDataTipotrabajo(tipotrabajo)
  const myModal=new bootstrap.Modal(document.getElementById("exampleModal"));
 myModal.show();
}
const AbrirNuevo = () => {
    setTitulo("Insert Type of Work")
    Limpiar();
  setAccion("new")
 const myModal=new bootstrap.Modal(document.getElementById("exampleModal"));
 myModal.show();
}


  const Busqueda = (params) => {
    setBuscar(params)
    FiltarItems(params,setTipotrabajo,tipotrabajoAux)    
  }
 
  return (
    <>
    <div className='div-header'>
              <HeaderBar value={buscar} onChange={Busqueda} onClick={AbrirNuevo} />
    </div>   
        <div className='div-body'>
        <div className='div-header-table'>
       <label className='item-title'>Work type list</label></div>
          {tipotrabajo.length > 0 ?
          <TableContainer>
            <HeaderTable>
              {/*<th onClick={()=> SortItem(sort,"nombre",setTipotrabajo,tipotrabajo,setSort)}><ButtonSort col="Nombre" /></th>*/}
              <th onClick={()=> SortItem(sort,"tipo",setTipotrabajo,tipotrabajo,setSort)}><ButtonSort col="Type" /></th>
              <th onClick={()=> SortNumber(sort,"precio",setTipotrabajo,tipotrabajo,setSort)}><ButtonSort col="Price" /></th>
              <th onClick={()=> SortItem(sort,"estado",setTipotrabajo,tipotrabajo,setSort)}><ButtonSort col="Status" /></th>
              <th>Actions</th>
            </HeaderTable>
            <BodyTable>
              {tipotrabajo.map((item,index)=>(
                <tr key={index}>
                 
                  <td>{item.tipo}</td>
                  <td>{item.precio}</td>
                  <td><Estado estado={item.estado}/></td>
                  
                  <ButtonsOptions item={item}  Eliminar={EliminarTipotrabajo} Actualizar={AbrirActualizar} />
                </tr>
              ))}
            </BodyTable>
          </TableContainer>
          :
          <Loader/>}

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
      <h5 className="modal-title" id="exampleModalLabel">{titulo}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
      </div>
      <div className="modal-body">
      

 {/*<InputText label="Nombre" type="text" value={nombre} onChange={setNombre} required  />*/}
 <InputText label="Type" type="text"  value={tipo} onChange={setTipo} required />
 <InputText label="Price" type="text" value={precio} onChange={setPrecio} required />
 <InputState label="Status" value={estado} onChange={setEstado} />
 
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"    >Cancel</button>
        <button type="submit" className="btn btn-primary" >Save</button>
      </div>
    </div>
  </div>
</form>
{/** fin del modal de ingreso empleado */}
    </>
  )
}

export default Tipotrabajo