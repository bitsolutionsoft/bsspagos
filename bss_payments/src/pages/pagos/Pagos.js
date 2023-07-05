import React, { useEffect, useState } from 'react';
import HeaderBar from '../../components/Header/HeaderBar';
import { useSelector } from 'react-redux';
import Datos from '../../services/Datos';

import Loader from '../../components/Loader/Loader';
import TableContainer from '../../components/Table/TableContainer';
import HeaderTable from '../../components/Table/HeaderTable';
import BodyTable from '../../components/Table/BodyTable';

import ButtonSort from '../../components/Table/ButtonSort';
import SortNumber from '../../utils/SortNumber';

import Historialpagos from './Historialpagos';
import { DataPago, DataProject } from '../../context/Context';

import Moneda from '../../utils/Moneda';
import FiltarEmp from '../../utils/FilterEmp';
import ErrorPage from '../home/ErrorPage';


function Pagos() {
  const {open}=useSelector (state =>state.open)
  const  [buscar,setBuscar]=useState("")
  const [dpi, setDpi] = useState("");  
  const [telefono, setTelefono] = useState(""); 
  const [correo, setCorreo] = useState(""); 
  const [estado, setEstado] = useState("Pendiente");
  const [sort, setSort]=useState("ASC");
const [totalPayment, setTotalPayment] = useState("")
  //const { dataPago,dataPagoAux,setDataPago,setDataPagoAux}=useData("dataPago")
  //console.log(dataPago)

 
 const [dataPago, setDataPago]=useState([]);
 const [dataPagoAux, setDataPagoAux]=useState([]);
const {idempleado, nombre, apellido}=useSelector(state =>state.user)
const [idhoratrabajo, setIdhoratrabajo] = useState("")
const [precio, setPrecio] = useState("")
const [cantidadhora, setCantidadhora] = useState("")
const [horasextra, setHorasextra] = useState("")
const [subtotal, setSubtotal] = useState("")
const [descuento, setDescuento] = useState("")
const [total, setTotal] = useState("")
const [viewHistorial, setViewHistorial] = useState(false)
const [empSeleccionado, setEmpSeleccionado] = useState([])


useEffect(()=>{
  getPagos();
 
    },[])

  const Busqueda = (params) => {
    setBuscar(params)
    FiltarEmp(params,setDataPago,dataPagoAux)    
  }

  const redirectTohistorial = (item) => {
    setViewHistorial(true)
setEmpSeleccionado(item)  }

  const getPagos =async () => {
    let data=await Datos.getDatos("emppago")
    console.log(data)
    if(data !== null){
      setDataPago(data)
      setDataPagoAux(data)
      CalcTotalPaymentPending(data)
      return
    }
    setDataPago([])
      setDataPagoAux([])
  }

 

 
const  AbrirNuevo = (params) => {
  
}

const valueProvider ={
  empSeleccionado,
  setViewHistorial,
  getPagos
}

const CalcTotalPaymentPending = (data) => {
  let total=0;
  
    for(let i=0; i<data.length; i++){
      console.log()
      total=Number(total)+(Number(data[i].total)+ Number(data[i].totalextra));
    
  }
  setTotalPayment(total)
}

  return (
    
    <DataPago.Provider value={valueProvider}>
      {viewHistorial ? 
      <Historialpagos /> 
      :
    
     <>
        
        <div className='div-header'>
        <HeaderBar value={buscar} onChange={Busqueda} onClick={AbrirNuevo} hiddenNew={true}  />
    </div>  

    
      <div className='div-body'>
      <div className='div-header-table'>
       <label className='item-title'>List of pending payments</label>

 <div className='div-inversion'>
<label className='title-card-info'>Paymets Pending: </label>
<label className='desc-card-info'>{Moneda(totalPayment)}</label>
 </div>
       </div>
          {dataPago.length > 0 ?
          <TableContainer>
            <HeaderTable>
      
              <th onClick={()=> SortNumber(sort,"nombre",setDataPago,dataPago,setSort)}><ButtonSort col="Employee" /></th>          
         
                 <th onClick={()=> SortNumber(sort,"hora_total",setDataPago,dataPago,setSort)}><ButtonSort col="Total Time" /></th>
                 <th onClick={()=> SortNumber(sort,"hora_total",setDataPago,dataPago,setSort)}><ButtonSort col="Subtotal" /></th>
                 <th onClick={()=> SortNumber(sort,"horas_extra",setDataPago,dataPago,setSort)}><ButtonSort col="Total Time Extra" /></th>
                 <th onClick={()=> SortNumber(sort,"hora_total",setDataPago,dataPago,setSort)}><ButtonSort col="Subtotal extra" /></th>
              <th onClick={()=> SortNumber(sort,"total",setDataPago,dataPago,setSort)}><ButtonSort col="Total Payment" /></th>
              
              
        {/**    <th onClick={()=> SortNumber(sort,"fecha",setDataPago,dataPago,setSort)}><ButtonSort col="Fecha" /></th>              
                    <th onClick={()=> SortItem(sort,"fase",setDataPago,dataPago,setSort)}><ButtonSort col="Fase" /></th> 
                  <th onClick={()=> SortItem(sort,"estado",setDataPago,dataPago,setSort)}><ButtonSort col="Estado" /></th>
            */}    <th>Detail</th>
              
           
             

              
            </HeaderTable>
            <BodyTable>
              {dataPago.map((item,index)=>(
                <tr key={index}>
                  <td>{item.empleado}</td>
              
              <td>{ item.hora_total +" hrs"}</td>                 
                  <td>{Moneda(item.total)}</td>
                  <td>{ item.horas_extra +" hrs"}</td>                 
                  <td>{Moneda(item.totalextra)}</td>
                  <td>{Moneda(Number(item.total) + Number(item.totalextra))}</td>
                  {/**   <td>{moment( item.hora_inicio).format("MM/DD/YYYY")}</td>  
                  
         <td>{item.fase}</td>
                  <td><Estado estado={item.estado}/></td>*/}  
                  <td><i className="bi bi-box-arrow-in-up-right icon-update" onClick={()=>redirectTohistorial(item)}></i></td>
                 
                  
                  
                </tr>
              ))}
            </BodyTable>
          </TableContainer>
          :
          <ErrorPage/>}

        </div>
        </>
        }
    </DataPago.Provider>
  )
}

export default Pagos