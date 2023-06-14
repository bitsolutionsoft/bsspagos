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

function Report() {
  const [buscar, setBuscar] = useState("")
  const [datosInforme, setDatosInforme] = useState([])
  const [datosInformeAux, setDatosInformeAux] = useState([])
  const [sort, setSort] = useState("ASC");

  useEffect(()=>{
    getInformePagos();
   
      },[])

  const getInformePagos =async () => {
    let data=await Datos.getDatos("emppagocancel")
    console.log(data)
    if(data !== null){
      setDatosInforme(data)
      setDatosInformeAux(data)
      return
    }
    setDatosInforme([])
    setDatosInformeAux([])
     
  }



  const Busqueda = (params) => {
    setBuscar(params)
    FiltarEmp(params,setDatosInforme,datosInformeAux)    
  }

  const AbrirNuevo = (params) => {
    
  }
  
  
  return (
    <>
       <div className='div-header'>
              <HeaderBar value={buscar} onChange={Busqueda} onClick={AbrirNuevo} />
    </div>   
        <div className='div-body'>
          <div className='div-header-table'>
       <label className='item-title'>Report </label>
       </div>

<div className="row mb-2">
<div className="col-12"> 
               <div className="form-check form-check-inline">
               <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Por Dia"  /*onClick={(e)=>verInforme("Dia")}*//>
                  <label className="form-check-label" htmlFor="exampleRadios1">Por Día</label>
               </div>
               <div className="form-check form-check-inline">
                 <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Por semana" /* onClick={(e)=>verInforme("Semana")}*/ />
                 <label className="form-check-label" htmlFor="exampleRadios2">Por semana</label>
               </div>
               <div className="form-check form-check-inline">
                 <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="Por mes" /* onClick={(e)=>verInforme("Mes")}*//>
                 <label className="form-check-label" htmlFor="exampleRadios3">Por mes</label> <br/>
               </div> 
               
               </div>   

               <div className="col-12">
           <div className="row d-flex">

            <div className="form-outline mb-4 col-4">
<div className='input-group'>
          <span className="input-group-text">Fecha inicial</span>
          <input type="date" className="form-control form-control-sm" /*value={fechainicio} onChange={(e)=>setfechainicio(moment(e.target.value).format("YYYY-MM-DD"))}*//>
          
      </div>
       
  </div>

  <div className="form-outline mb-4 col-4" >
      <div className='input-group'>
          <span className="input-group-text">Fecha final</span>
          <input type="date"  id="exampleFormControlInput1"  className="form-control form-control-sm"/*  value={fechaFinal} onChange={(e)=>setfechaFinal(moment(e.target.value).format("YYYY-MM-DD"))}*/ />
          
      </div>
       
  </div>

<div className="col-auto">
<button type="button" className="ml-1 me-2 btn btn-success"/* onClick={()=>verInforme("Rango")} */>Buscar</button>
</div> 
</div>
 </div>            
<div className="row">
 
</div>

<TableContainer>
            <HeaderTable>
            <th onClick={()=> SortItem(sort,"empleado",setDatosInforme,datosInforme,setSort)}><ButtonSort col="First Name Last Name" /></th>
                    
              <th>Project</th> 
              <th>Phase</th> 
              <th>Work Type</th> 
              <th>Hours worked</th> 
              <th>full payment</th>
              
            </HeaderTable>
            <BodyTable>

            {datosInforme.map((item,index)=>(
                <tr key={index}>
                  <td>{item.empleado}</td>
                  <td>{item.proyecto}</td>
                  <td>{item.fase}</td>
                  <td>{item.tipo}</td>
                  
                  
                  <td>{ConvertirAHora(item.hora_total) }</td>
                  
                  <td>{Moneda(item.total) }</td>
            
                  {/* <td><Estado estado={item.estado}/></td>*/}
                  
                  
                </tr>
              ))}
            </BodyTable>

            
          </TableContainer>

            </div>
</div>
    </div>
    </> 
  )
}

export default Report
