import React,{useState,useEffect, useContext} from 'react'
import moment from "moment";
import swal from "sweetalert";
import HeaderTable from '../../components/Table/HeaderTable';
import BodyTable from '../../components/Table/BodyTable';
import TableContainer from '../../components/Table/TableContainer';
import HeaderBar from '../../components/Header/HeaderBar';
import Datos from '../../services/Datos'
import Moneda from '../../utils/Moneda';
import { ConvertirAHora } from '../../utils/ConvertirAHora';
import FiltarItems from '../../utils/FiltrarItems';
import SortItem from '../../utils/SortItem';
import ButtonSort from '../../components/Table/ButtonSort';
import FiltarEmp from '../../utils/FilterEmp';
import ErrorPage from '../home/ErrorPage';
import { DataPrint } from '../../context/Context';
import ReportPdf from './ReportPdf';

function Report() {
  const [buscar, setBuscar] = useState("")
  const [datosInforme, setDatosInforme] = useState([])
  const [datosInformeAux, setDatosInformeAux] = useState([])
  const [sort, setSort] = useState("ASC");
  const [totalPayment, setTotalPayment] = useState("");
  const [fechaInicio, setFechaInicio]=useState("");
  const [fechaFinal, setFechaFinal]=useState("");
 const [imprimir, setImprimir] = useState(false);

  useEffect(()=>{
    getInformePagos();
   
      },[])

  const getInformePagos =async () => {
    let data=await Datos.getDatos("emppagocancel")
    console.log(data)
    if(data !== null){
      setDatosInforme(data)
      setDatosInformeAux(data)
      CalcTotalPaymentCancel(data)
      return
    }
    setDatosInforme([])
    setDatosInformeAux([])
    
     
  }

  const CalcTotalPaymentCancel = (data) => {
    let total=0;
    if(data.length >0){
      for(let i=0; i<data.length; i++){
  
        total=Number(total)+Number(data[i].subtotal)
      
    }}
    setTotalPayment(total )
  }



  const Busqueda =  (params) => {
    setBuscar(params)

  let newDatos=AfterDate(BefeoreDate(getNewDatos(params),fechaFinal),fechaInicio);
setDatosInforme(newDatos )
  CalcTotalPaymentCancel(newDatos)
  }

  const AbrirNuevo = (params) => {
    
  }
  
  const getNewDatos = (params) => {
    let newDatos=datosInformeAux.filter((item)=>{
      return item.empleado.toLowerCase().includes(params.toLowerCase()) || item.proyecto.toLowerCase().includes(params.toLowerCase());
  }).map((element)=>{return element});
  return newDatos
  }
  const AfterDate = (params, fecha_inicial) => {

    if( fecha_inicial!==""){
      let startDate=new Date(fecha_inicial);
      let resultData=params.filter((item)=>{
        let date=new Date(item.fecha);
        return (date >= startDate )
      }).map((element)=>{
        return element
      }
      )
      return resultData;
    }
    return params;
  }
  const BefeoreDate = (params,fecha_final) => {

    if(fecha_final !==""  ){
      let endDate=new Date(fecha_final);
      let resultData=params.filter((item)=>{
        let date=new Date(item.fecha);
        return ( date <=endDate)
      }).map((element)=>{
        return element
      }
      )
      return resultData;
    }
    return params;
  }
  
  const startDateSelected = async (params) => {
    setFechaInicio(params)
  
    let newData= await BefeoreDate( AfterDate(getNewDatos(buscar),params),fechaFinal)

    setDatosInforme(newData)
    CalcTotalPaymentCancel(newData)
  }
  
  const endDateSelected = (params) => {
    setFechaFinal(params)
    console.log(fechaFinal)
    let newData=BefeoreDate( AfterDate(getNewDatos(buscar),fechaInicio),params)
    console.log(__dirname)
    setDatosInforme(newData)
    CalcTotalPaymentCancel(newData)
  }
  
  const valueProvider = {
    datosInforme,
    fechaFinal,
    fechaInicio,
    totalPayment,
    setImprimir
   
  }
  return (
   
    <DataPrint.Provider value={valueProvider}>
      { imprimir ? 
      <ReportPdf/>
      :

        <>
       <div className='div-header'>
              <HeaderBar value={buscar} onChange={Busqueda} onClick={AbrirNuevo}  hiddenNew={true} />
    </div>   
        <div className='div-body'>
        <div className='mb-3'>
          <label>Order by Date</label>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <label className='label-form-control' htmlFor='fechainicio'>Initial Date</label>
             <input type='date' className='form-control' value={fechaInicio} onChange={(e)=>startDateSelected(e.target.value)}/>
            </div>
            <div className='col-md-6 col-sm-12'>
              <label htmlFor='fechainicio'>Final  date</label>
             <input type='date' className='form-control' value={fechaFinal} onChange={(e)=>endDateSelected(e.target.value)}/>
            </div>
          </div>
        </div>

          <div className='div-header-table'>
       <label className='item-title'>Report </label>
       
 <div className='div-inversion'>
<label className='title-card-info'>Payments cancel: </label>
<label className='desc-card-info'>{Moneda(totalPayment)}</label>
 </div>
 <button type='button' className='btn btn-outline-secondary'  onClick={()=>setImprimir(true)}>View Pdf</button>
       </div>

<div className="row mb-2">
<div className="col-12"> 
{datosInforme.length > 0 ? 
<TableContainer>
            <HeaderTable>
            
            <th onClick={()=> SortItem(sort,"empleado",setDatosInforme,datosInforme,setSort)}><ButtonSort col="First Name Last Name" /></th>
                     
              <th>Project</th> 
             <th>#Payment</th>   
             <th>Date</th>
              <th>Work Type</th> 
              <th>Hours worked</th> 
              <th>Extra worked</th> 
              <th>full payment</th>
              
            </HeaderTable>
            <BodyTable>

            {datosInforme.map((item,index)=>(
                <tr key={index}>
               

                  <td>{item.empleado}</td>
                  <td>{item.proyecto}</td>   
                  <td>{item.idpago}</td>
                  <td>{moment(item.fecha).format("MM-DD-YYYY")}</td>
                  <td>{item.tipo}</td>
                  
                  
                  <td>{item.cant_hora+" hrs" }</td>
                  <td>{item.cant_extra+" hrs" }</td>
                  
                  <td>{Moneda(item.subtotal) }</td>
            
                  {/* <td><Estado estado={item.estado}/></td>*/}
                  
                  
                </tr>
              ))}
            </BodyTable>

            
          </TableContainer>
          :
          <ErrorPage/>
          }

            </div>
</div>
    </div>
    </> 
      }
      
       </DataPrint.Provider>
  )
}

export default Report
