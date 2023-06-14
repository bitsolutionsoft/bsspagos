import React, { useEffect, useState } from 'react';
import HeaderBar from '../../components/Header/HeaderBar';
import { useSelector } from 'react-redux';
import Datos from '../../services/Datos';
import swal from 'sweetalert';
import useData from '../../hooks/useData';
import Loader from '../../components/Loader/Loader';
import TableContainer from '../../components/Table/TableContainer';
import HeaderTable from '../../components/Table/HeaderTable';
import BodyTable from '../../components/Table/BodyTable';
import SortItem from '../../utils/SortItem';
import ButtonSort from '../../components/Table/ButtonSort';
import SortNumber from '../../utils/SortNumber';
import ButtonsOptions from '../../components/Table/ButtonsOptions';
import FiltarItems from '../../utils/FiltrarItems';
import InputText from '../../components/Inputs/InputText';
import InputState from '../../components/Inputs/InputState';
import Estado from '../../components/Table/Estado';
import Historialpagos from './Historialpagos';
import { DataPago, DataProject } from '../../context/Context';
import { ConvertirAHora } from '../../utils/ConvertirAHora'
import Moneda from '../../utils/Moneda';
import FiltarEmp from '../../utils/FilterEmp';


const bootstrap=require('bootstrap');
function Pagos() {
  const {open}=useSelector (state =>state.open)
  const [data,setdata] =useState("")
  const [datosPagos, setDatosPagos]=useState([]);
  const  [buscar,setBuscar]=useState("")
  const [dpi, setDpi] = useState("");  
  const [telefono, setTelefono] = useState(""); 
  const [correo, setCorreo] = useState(""); 
  const [direccion, setDireccion] = useState("");    
  const [estado, setEstado] = useState("Pendiente");
  const [accion, setAccion] = useState("new");
  const [sort, setSort]=useState("ASC");
const [idfase, setIdfase] = useState("")
const [idproyecto, setIdproyecto] = useState("")
const [nombrefase, setNombrefase] = useState("")
const [tipofase, setTipofase] = useState("")
const [openHistoral, setOpenHistorial]=useState(false);
const [HistorialSelected, setHistorialSelected] = useState([])
const [preciofase, setPreciofase] = useState("")
const moment=require("moment")
const [totalPayment, setTotalPayment] = useState("")
  //const { empleado,empleadoAux,setEmpleado,setEmpleadoAux}=useData("empleado")
  //console.log(empleado)

 
 const [empleado, setEmpleado]=useState([]);
 const [empleadoAux, setEmpleadoAux]=useState([]);
const [titulo, setTitulo] = useState("")
const [proyecto, setProyecto] = useState([])
const [fase, setFase] = useState([])
const [tipoTabajo, setTipoTabajo] = useState([])
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
  getEmpleado();
 
    },[])

  const Busqueda = (params) => {
    setBuscar(params)
    FiltarEmp(params,setEmpleado,empleadoAux)    
  }

  const redirectTohistorial = (item) => {
    setViewHistorial(true)
setEmpSeleccionado(item)  }

  const getEmpleado =async () => {
    let data=await Datos.getDatos("emppago")
    if(data !== null){
      setEmpleado(data)
      setEmpleadoAux(data)
      CalcTotalPaymentPending(data)
      return
    }
    setEmpleado([])
      setEmpleadoAux([])
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

 
  const getDataPagos=(codigo)=>{
    let fecha=new Date();
    return {
    idpago:codigo,
    idhoratrabajo:idhoratrabajo,
    precio:precio,
    cantidadhora:cantidadhora,
    horasextra:horasextra,
    subtotal:subtotal,
    descuento:descuento,
    total:total
     
    }
  }

const  AbrirNuevo = (params) => {
  
}

const valueProvider ={
  empSeleccionado,
  setViewHistorial
}

const CalcTotalPaymentPending = (data) => {
  let total=0;
  
    for(let i=0; i<data.length; i++){
      console.log()
      total=Number(total)+Number(data[i].total)
    
  }
  setTotalPayment(total)
}

  return (
    
    <DataPago.Provider value={valueProvider}>
      {viewHistorial ? <Historialpagos /> :
    
     <>
        
        <div className='div-header'>
        <HeaderBar value={buscar} onChange={Busqueda} onClick={AbrirNuevo} />
    </div>  

    
      <div className='div-body'>
      <div className='div-header-table'>
       <label className='item-title'>List of pending payments</label>

 <div className='div-inversion'>
<label className='title-card-info'>Paymets Pending: </label>
<label className='desc-card-info'>{Moneda(totalPayment)}</label>
 </div>
       </div>
          {empleado.length > 0 ?
          <TableContainer>
            <HeaderTable>
      
              <th onClick={()=> SortNumber(sort,"nombre",setEmpleado,empleado,setSort)}><ButtonSort col="Employee" /></th>          
         
                 <th onClick={()=> SortNumber(sort,"hora_total",setEmpleado,empleado,setSort)}><ButtonSort col="Total Time" /></th>

              <th onClick={()=> SortNumber(sort,"total",setEmpleado,empleado,setSort)}><ButtonSort col="Total Payment" /></th>
              
        {/**    <th onClick={()=> SortNumber(sort,"fecha",setEmpleado,empleado,setSort)}><ButtonSort col="Fecha" /></th>              
                    <th onClick={()=> SortItem(sort,"fase",setEmpleado,empleado,setSort)}><ButtonSort col="Fase" /></th> 
                  <th onClick={()=> SortItem(sort,"estado",setEmpleado,empleado,setSort)}><ButtonSort col="Estado" /></th>
            */}    <th>Detail</th>
              
           
             

              
            </HeaderTable>
            <BodyTable>
              {empleado.map((item,index)=>(
                <tr key={index}>
                  <td>{item.empleado}</td>
              
              <td>{ConvertirAHora( item.hora_total)}</td>                 
                  <td>{Moneda(item.total)}</td>
                  {/**   <td>{moment( item.hora_inicio).format("MM/DD/YYYY")}</td>  
                  
         <td>{item.fase}</td>
                  <td><Estado estado={item.estado}/></td>*/}  
                  <td><i className="bi bi-box-arrow-in-up-right icon-update" onClick={()=>redirectTohistorial(item)}></i></td>
                 
                  
                  
                </tr>
              ))}
            </BodyTable>
          </TableContainer>
          :
          <Loader/>}

        </div>
        </>
        }
    </DataPago.Provider>
  )
}

export default Pagos