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

const bootstrap=require('bootstrap');

function TipoPago() {
const [buscar,setBuscar]=useState("") 
const [idtipopago, setIdtipopago] = useState("");
const [nombre, setNombre] = useState("");   
const [detalle, setDetalle] = useState("");    
const [estado, setEstado] = useState("Active");
const [accion, setAccion] = useState("new");
const [sort, setSort]=useState("ASC");
const [dataTipoPago, setDataTipoPago]=useState([]);
const [dataTipoPagoAux, setDataTipoPagoAux]=useState([]);
const [titulo, setTitulo] = useState("");



 

  useEffect(()=>{
getTipoPago();

  },[])

  const getTipoPago =async () => {
    let data=await Datos.getDatos("tipopago")
    console.log(data)
    if(data !== null){
      setDataTipoPago(data)
      setDataTipoPagoAux(data)
      return
    }
    setDataTipoPago([])
      setDataTipoPagoAux([])
  }
 
  const Limpiar=()=>{
    setIdtipopago(0);
    setNombre("");
    setDetalle("");
    setEstado("Active");
  }

  const getDataProyecto=(codigo)=>{
    return {
      idtipopago:codigo,
      nombre:nombre,
      detalle:detalle,
      estado:estado,
    
    }
  }
const IngresarNuevo = async () => {
  let ingresado=await Datos.insertNew("tipopago",getDataProyecto(0));
  if(ingresado){
   getTipoPago();
    Limpiar()
    swal("Exito","Se ingreso correctamente","success")
  }  
}
const ActualizarTipoPago =async () => {
  let actualizado= await Datos.updateItem("tipopago",getDataProyecto(idtipopago));
  if(actualizado){
    getTipoPago()
    Limpiar()
    swal("Exito","Se actualizo correctamente","success")
  }  
}
const EliminarProyecto =  (dataTipoPago) => {
  swal({
    title:"Esta seguro de eliminar?",
    text:"Una vez eliminado, ya no se podrá restablecer",
    buttons:["Cancelar", "Eliminar"],
    dangerMode:true
  }).then((yes)=>{
    if(yes){
     Borrar(dataTipoPago);
    }
  })
  
  
}
const Borrar =async (dataTipoPago) => {
  let eliminado=await Datos.deleteItem("tipopago",dataTipoPago.idtipopago)
  if (eliminado) {
    getTipoPago();
    swal("Exito","Se elimino correctamente", "success")
  }
}

const GuardarCambios = (e) => {
  e.preventDefault();
  if (accion ==="new") {
    IngresarNuevo();
    return
  }
  ActualizarTipoPago();  
}


const setDataProyecto = (dataTipoPago) => {
  setIdtipopago(dataTipoPago.idtipopago);
  setNombre(dataTipoPago.nombre);
  setDetalle(dataTipoPago.detalle);
  setEstado(dataTipoPago.estado);
  setAccion("update");
}

const AbrirActualizar = (dataTipoPago) => {
    setTitulo("Update type of payment")
  setDataProyecto(dataTipoPago)
  const myModal=new bootstrap.Modal(document.getElementById("exampleModal"));
 myModal.show();
}
const AbrirNuevo = () => {
    setTitulo("Add new type of payment")
    Limpiar();
  setAccion("new")
 const myModal=new bootstrap.Modal(document.getElementById("exampleModal"));
 myModal.show();
}


  const Busqueda = (params) => {
    setBuscar(params)
    FiltarItems(params,setDataTipoPago,dataTipoPagoAux)    
  }
 


  return (
 

    <>
    <div className='div-header'>
              <HeaderBar value={buscar} onChange={Busqueda} onClick={AbrirNuevo} />
    </div>   
        <div className='div-body'>
        <div className='div-header-table'>
       <label className='item-title'>Type of Payment´s List</label></div>
          {dataTipoPago.length > 0 ?
          <TableContainer>
            <HeaderTable>
              <th onClick={()=> SortItem(sort,"nombre",setDataTipoPago,dataTipoPago,setSort)}><ButtonSort col="Payment´s name" /></th>
              <th onClick={()=> SortItem(sort,"detalle",setDataTipoPago,dataTipoPago,setSort)}><ButtonSort col="Detail" /></th>
              <th onClick={()=> SortItem(sort,"estado",setDataTipoPago,dataTipoPago,setSort)}><ButtonSort col="Status" /></th>
           {/**   <th>Phase</th>
              */} 
        
              <th>Actions</th>
            </HeaderTable>
            <BodyTable>
              {dataTipoPago.map((item,index)=>(
                <tr key={index}>
                  <td>{item.nombre}</td>
                  <td>{item.detalle}</td>
                  <td><Estado estado={item.estado}/></td>
                 
                  {/**
                  <td><i className="bi bi-box-arrow-in-up-right icon-update" onClick={()=>redirectToPhase(item)}></i></td>
                  */} 
                  <ButtonsOptions item={item}  Eliminar={EliminarProyecto} Actualizar={AbrirActualizar} />
                </tr>
              ))}
            </BodyTable>
          </TableContainer>
          :
          <Loader/>}

        </div>

       
         
{/**modal para ingreso de un nuevo dataTipoPago */}

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
      
 
 <InputText label="Type of payment´s name" type="text" value={nombre} onChange={setNombre} required />
 <InputText label="Detail" type="text"  value={detalle} onChange={setDetalle} required />
 <InputState label="Status" value={estado} onChange={setEstado} />
 
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary" >Save</button>
      </div>
    </div>
  </div>
</form>
{/** fin del modal de ingreso dataTipoPago */}
    </>
  )
}

export default TipoPago