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

function Report() {
  const [buscar, setBuscar] = useState("")
  const [datosInforme, setDatosInforme] = useState([])
  const [datosInformeAux, setDatosInformeAux] = useState([])
  const [sort, setSort] = useState("ASC");
  const [totalPayment, setTotalPayment] = useState("")

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
    
      for(let i=0; i<data.length; i++){
  
        total=Number(total)+Number(data[i].subtotal)
      
    }
    setTotalPayment(total)
  }



  const Busqueda = (params) => {
    setBuscar(params)
  
    setDatosInforme(datosInformeAux.filter((item)=>{
      return item.empleado.toLowerCase().includes(params.toLowerCase()) || item.proyecto.toLowerCase().includes(params.toLowerCase());
  }).map((element)=>{return element})
  );
  CalcTotalPaymentCancel(datosInforme)
  }

  const AbrirNuevo = (params) => {
    
  }
  
  
  return (
    <>
       <div className='div-header'>
              <HeaderBar value={buscar} onChange={Busqueda} onClick={AbrirNuevo}  hiddenNew={true} />
    </div>   
        <div className='div-body'>

          <div className='div-header-table'>
       <label className='item-title'>Report </label>
       
 <div className='div-inversion'>
<label className='title-card-info'>Payments cancel: </label>
<label className='desc-card-info'>{Moneda(totalPayment)}</label>
 </div>
       </div>

<div className="row mb-2">
<div className="col-12"> 
{datosInforme.length > 0 ? 
<TableContainer>
            <HeaderTable>
            
            <th onClick={()=> SortItem(sort,"empleado",setDatosInforme,datosInforme,setSort)}><ButtonSort col="First Name Last Name" /></th>
                     
              <th>Project</th> 
             <th>#Payment</th>   
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
  )
}

export default Report
