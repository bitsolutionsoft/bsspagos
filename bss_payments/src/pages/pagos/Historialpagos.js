import React,{useState,useEffect, useContext} from 'react'
import swal from 'sweetalert';
import Datos from '../../services/Datos';
import SortItem from '../../utils/SortItem';
import ButtonSort from '../../components/Table/ButtonSort';
import SortNumber from '../../utils/SortNumber';
import { DataPago, DataProject, DataUsuario } from '../../context/Context';
import { Image, PDFViewer } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

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
import Empleado from '../empleado/Empleado';
import Moneda from '../../utils/Moneda';
import { ConvertirAHora } from '../../utils/ConvertirAHora';
import { CalcTotalPagoDia } from '../../utils/CalcTotalPagoDia';
import welcome from '../../assets/img/logo.jpg'
const bootstrap=require("bootstrap");


function Historialpagos() {

    const bootstrap =require("bootstrap")
    const [sort, setSort]=useState("ASC");
    const moment=require("moment") 
    const [empleado, setEmpleado]=useState([]);
    const [cantidadhora, setCantidadhora] = useState("")
const [horasextra, setHorasextra] = useState("")
const [subtotal, setSubtotal] = useState("")
const [descuento, setDescuento] = useState("")
const [total, setTotal] = useState("")
const [idhoratrabajo, setIdhoratrabajo] = useState("")
const [precio, setPrecio] = useState("")
const [accion, setAccion] = useState("new");

    const {setViewHistorial, empSeleccionado}= useContext(DataPago)
    const [detallepagos, setDetallepagos] = useState([])
    const [pago, setPago]=useState([]);
    const [datosFact, setDatosFact] = useState([]);
    const [pagoAux, setPagoAux]=useState([]);
    const [totalPay, setTotalPay] = useState("")
    const [totalPay2, setTotalPay2] = useState("")
    
    useEffect(()=>{
        getDetallePAgos();
    },[])

    /*const getPago =async () => {
      let data=await Datos.getDatos("pago")
      if(data !== null){
        setPago(AddSelectToItems(data))
        setPagoAux(AddSelectToItems(data))
        return
      }
      setPago([])
        setPagoAux([])
    }*/

const AddSelectToItems = (data) => {
  let newdatos = data.map((item)=>{
     item.select= false;
     return item
  })
  console.log(newdatos)
  return newdatos
}

const SelectItemToPay = (codigo, select) => {
 
  for (let i = 0; i < detallepagos.length; i++) {
    if(Number(detallepagos[i].idhorastrabajo) === Number(codigo)){
      detallepagos[i].select = !select
      document.getElementById("flexCheckDefault").checked=false
    }
    
  }
  CalcTotalPayOut();
  setPago(pago =>[...pago])
}

const SelectAllItemToPay = (e) => {
  
  for (let i = 0; i < detallepagos.length; i++) {
      detallepagos[i].select = e.target.checked  
  }
  setPago(pago =>[...pago])
  CalcTotalPayOut();
}

const CalcTotalPayOut = () => {
  let total=0;
  for(let i = 0; i < detallepagos.length; i++){
    if(detallepagos[i].select){
      console.log(CalcTotalPagoDia(detallepagos[i].hora_total,detallepagos[i].precio))
    total = (Number(total) + Number(CalcTotalPagoDia(detallepagos[i].hora_total,detallepagos[i].precio)))
    console.log(total)
    }
  }
  setTotalPay(total)
}




const getDetallePAgos =async () => {
  let datos=await Datos.getDetalleByID("emppagosxd",empSeleccionado.idempleado)
  console.log(datos)
if (datos !==null) {
    
    setDetallepagos(AddSelectToItems(datos))
    return
}
setDetallepagos([])
}
const getDataPagos=(codigo,idhorastrabajo,precio,cantidadhora,horasextra,subtotal,descuento,total)=>{
  let fecha=new Date();
  return {
  idpago:codigo,
  idhoratrabajo:idhorastrabajo,
  precio:precio,
  cantidadhora:cantidadhora,
  horasextra:horasextra,
  subtotal:subtotal,
  descuento:descuento,
  total:total
   
  }
}

const IngresarNuevo = async (datos) => {
  let ingresado=await Datos.insertNew("pagos",datos);
  if(ingresado){
    swal("Exito","Se ingreso correctamente","success")
  }  
}

const SavePayments = async () => {
  for (let i = 0; i < detallepagos.length; i++) {
    if(detallepagos[i].select){
   //  await IngresarNuevo(getDataPagos(0,detallepagos[i].idhorastrabajo,detallepagos[i].precio,detallepagos[i].hora_total,0,0,0,CalcTotalPagoDia(detallepagos[i].hora_total,detallepagos[i].precio)))
     setDatosFact(datosFact=>[datosFact,...detallepagos[i]])
    }}
}


const GuardarCambios =async () => {
try {
 await SavePayments();
  //await getDetallePAgos()
  const modal=new bootstrap.Modal(document.getElementById("modalPdf"));
  modal.show();
setTotalPay2(totalPay)
setTotalPay("")
} catch (error) {
  console.log(error)
}

  
}




const styles = StyleSheet.create({
   
  table: {
      width: '100%',
      borderWidth: 0.5,
      display: 'flex',
      flexDirection: 'column',
      marginVertical: 12
  },
  tableRow:{
      display: 'flex',
      flexDirection: 'row',
      borderBottomWidth: 0.5,
      borderBottomColor:"gray"
  },
  cell: {
     padding:5,
     marging: 5,
      borderWidth: 0.5,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
      flexWrap: 'wrap'
  },
  
  cells: {
     padding:5,
     marging: 5,
   
      fontSize:13,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      textAlign: 'center',
      flexWrap: 'wrap'
  },
  header: {
     padding:5,
     marging: 5,
  fontSize:14,
      display: 'flex',
      flexWrap: 'wrap',
      color:"gray",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: 'auto',
    marginRight: 'auto'
}
      })   
      
      
  return (
    <>
      <div className='div-header'>
      <div className='d-flex'>
      <span className='iconback' onClick={()=>setViewHistorial(false)} > <i className="bi bi-arrow-left-square-fill  ms-3 btn-back"> Back</i></span>
       </div>
    </div>
      
    <div className='div-body'>
      <div className='div-header-table'>
       <label className='item-title'>Dias trabajados</label>
      
<div className="form-check">
<label className="form-check-label" htmlFor="flexCheckDefault">Total:  </label>
  <label className="label-total ms-2" htmlFor="flexCheckDefault"> {Moneda(totalPay)}</label>
</div>
      
            <button type="button" className="btn-pagar" onClick={(e)=>GuardarCambios(e)}>Pay</button>
          
    
       </div>
          {detallepagos.length > 0 ?
          <TableContainer>
            <HeaderTable>
      
              <th onClick={()=> SortItem(sort,"direccion",setDetallepagos,detallepagos,setSort)}><ButtonSort col="Direccion" /></th>          
              <th onClick={()=> SortItem(sort,"fase",setDetallepagos,detallepagos,setSort)}><ButtonSort col="Phase" /></th>    
              <th onClick={()=> SortItem(sort,"tipo",setDetallepagos,detallepagos,setSort)}><ButtonSort col="Work" /></th>    
              <th onClick={()=> SortNumber(sort,"fecha",setDetallepagos,detallepagos,setSort)}><ButtonSort col="Date" /></th>  
              <th>H/Initial</th>            
              <th>H/Final</th> 
              <th>Total Time</th>
              <th>Price/Hrs</th>
              <th>Total due</th>             
              <th> <div>
  <input className="form-check-input" type="checkbox"  id="flexCheckDefault" onChange={(e)=>SelectAllItemToPay(e)}/>
  <label className="label-thead" htmlFor="flexCheckDefault">Select All</label>
</div></th>
              <th>Status</th>

             

              
            </HeaderTable>
            <BodyTable>
              {detallepagos.map((item,index)=>(
                <tr key={index}>
                  <td>{item.direccion}</td>
                  <td>{item.fase}</td>
                  <td>{item.tipo}</td>
                  <td>{moment( item.fecha).format("MM/DD/YYYY")}</td> 
                  <td>{moment( item.hora_inicio).format("hh:mm")}</td> 
                  <td>{moment( item.hora_final).format("hh:mm")}</td> 
                  
                  <td>{ConvertirAHora(item.hora_total) }</td>
                  <td>{item.precio}</td>
                  <td>{Moneda(CalcTotalPagoDia(item.hora_total,item.precio))}</td>
                 <td>
                 <div className="form-check">
  <input className="form-check-input" type="checkbox" value={item.select} checked={item.select ? true : false} id="flexCheckDefault" onChange={(e)=>SelectItemToPay(item.idhorastrabajo,item.select)}/>
  <label className="form-check-label" htmlFor="flexCheckDefault">{item.select}</label>
</div>
                 </td>
            
            
                  <td><Estado estado={item.estado}/></td>
                  
                  
                </tr>
              ))}
            </BodyTable>

            
          </TableContainer>
          :
          <Loader/>}

        </div>
     
<div className="modal fade" id="modalPdf" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
      
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <PDFViewer style={{width:'100%',height:"90vh"}}>
      <Document >
    <Page  size="LETTER" style={{padding:10}}>
     <View style={styles.header}> 
      
      <Text style={styles.cell} >Sei Group</Text>
      <Text style={styles.cells}>Framing Interio & Exterior</Text>
     <Image style={styles.logo} src={welcome} /> 
     </View>

     <View style={styles.tableRow} >
                 
                    <Text  style={{ flex: 1, alignSelf: 'stretch',padding:2, fontSize:13, color:'red',textAlign: 'center', }} >Address</Text>    
                    <Text  style={{ flex: 1, alignSelf: 'stretch',padding:2, fontSize:13, color:'red',textAlign: 'center', }} >Name</Text>    
                    <Text  style={{ flex: 1, alignSelf: 'stretch',padding:2, fontSize:13, color:'red',textAlign: 'center', }} >Work Type</Text>    
                    <Text  style={{ flex: 1, alignSelf: 'stretch',padding:2, fontSize:13, color:'red',textAlign: 'center', }} >Date</Text> 
                    <Text  style={{ flex: 1, alignSelf: 'stretch',padding:2, fontSize:13, color:'red',textAlign: 'center', }} >Total Time scored</Text> 
                    <Text  style={{ flex: 1, alignSelf: 'stretch',padding:2, fontSize:13, color:'red',textAlign: 'center', }} >Total</Text>               
              
            </View>
     <View>
      {
        datosFact.length >0 ?
        datosFact.map((item,index)=>(
            <View key={index} style={styles.tableRow}>

                  <Text style={{ flex: 1, alignSelf: 'stretch', fontSize:12, }}>{item.direccion}</Text>
                  <Text style={{ flex: 1, alignSelf: 'stretch', fontSize:12,textAlign: 'center', }}>{item.fase}</Text>
                  <Text style={{ flex: 1, alignSelf: 'stretch', fontSize:12,textAlign: 'center', }}>{item.tipo}</Text>
                  <Text style={{ flex: 1, alignSelf: 'stretch', fontSize:12,textAlign: 'center', }}>{moment( item.fecha).format("MM/DD/YYYY")}</Text> 
                 
                  
                  <Text style={{ flex: 1, alignSelf: 'stretch', fontSize:12,textAlign: 'center', }}>{ConvertirAHora(item.hora_total) }</Text>
              
                  <Text style={{ flex: 1, alignSelf: 'stretch', fontSize:12,textAlign: 'center', }}>{Moneda(CalcTotalPagoDia(item.hora_total,item.precio))}</Text>
        </View>
        ))
      
        :null
      }
     </View>
     <View  style={styles.tableRow}>

<Text style={{ flex: 1, alignSelf: 'rigth', fontSize:18, marginVertical:5 }}>Total:  {Moneda(totalPay2)}</Text>
</View>
    </Page>
  </Document>
  </PDFViewer>
      </div>
     
    </div>
  </div>
</div>
    </>
  )
}


      export default Historialpagos