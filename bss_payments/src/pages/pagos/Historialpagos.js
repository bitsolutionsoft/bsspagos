import React,{useState,useEffect, useContext} from 'react'
import swal from 'sweetalert';
import Datos from '../../services/Datos';
import SortItem from '../../utils/SortItem';
import ButtonSort from '../../components/Table/ButtonSort';
import SortNumber from '../../utils/SortNumber';
import { DataPago, DataProject, DataUsuario } from '../../context/Context';
import { textDelete, textInsert, textQuestion, textUpdate } from '../../utils/MsgText'
import HeaderTable from '../../components/Table/HeaderTable';
import BodyTable from '../../components/Table/BodyTable';
import TableContainer from '../../components/Table/TableContainer';
import Loader from '../../components/Loader/Loader';
import printJS from 'print-js'
import Estado from '../../components/Table/Estado';

import Moneda from '../../utils/Moneda';
import { ConvertirAHora } from '../../utils/ConvertirAHora';
import { CalcTotalPagoDia } from '../../utils/CalcTotalPagoDia';
import welcome from '../../assets/img/logo.jpg'
import { host } from '../../services/host';
import ErrorPage from '../home/ErrorPage';
const bootstrap=require("bootstrap");


function Historialpagos() {

  
    const [sort, setSort]=useState("ASC");
    const moment=require("moment") 
    const {setViewHistorial, empSeleccionado,getPagos}= useContext(DataPago)
    const [detallepagos, setDetallepagos] = useState([])
    const [pago, setPago]=useState([]);
    const [datosFact, setDatosFact] = useState([]);
    const [detallepagoAux, setDetallePagoAux]=useState([]);
    const [totalPay, setTotalPay] = useState("")
    const [totalPay2, setTotalPay2] = useState("")
    const [nuevoPrecio, setNuevoPrecio] = useState("")
    const [idtipopago, setIdtipopago] = useState("")
    const [numpago, setNumpago] = useState("");
    const [dataTipoPago, setDataTipoPago]=useState([]);
    const [labelInfo, setLabelInfo] = useState("")
    const [totalTime, setTotalTime] = useState("")
    const [totalExtra, setTotalextra] = useState("")
    const [progress, setProgress] = useState("");
    const [task, setTask] = useState("")

    useEffect(()=>{
      getTipoPago()
        getDetallePAgos();
    },[])

 
 const getTipoPago =async () => {
    let data=await Datos.getDatos("tipopago")
    console.log(data)
    if(data !== null){
      setDataTipoPago(data)

      return
    }
    setDataTipoPago([])
  
  }
 
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
  let Totaltime=0;
  let TotalExtra=0;
  let universo=0;
  for(let i = 0; i < detallepagos.length; i++){
    if(detallepagos[i].select){
   //   console.log(CalcTotalPagoDia(detallepagos[i].hora_total,detallepagos[i].precio,detallepagos[i].horas_extra,detallepagos[i].precio_extra))
    total = (Number(total) + Number(CalcTotalPagoDia(detallepagos[i].hora_total,detallepagos[i].precio,detallepagos[i].horas_extra,detallepagos[i].precio_extra)));
    Totaltime=(Number(Totaltime)+Number(detallepagos[i].hora_total) );
    TotalExtra=(Number(TotalExtra)+Number(detallepagos[i].horas_extra) );
    universo=Number(universo)+1;
    
    //console.log(total)
    }
  }
  setTotalTime(Totaltime);
  setTotalextra(TotalExtra);
  setTotalPay(total);
  setTask(universo)
}




const getDetallePAgos =async () => {
  let datos=await Datos.getDetalleByID("emppagosxd",empSeleccionado.idempleado)
  console.log(datos)
if (datos !==null) {
    setDetallePagoAux(datos);
    setDetallepagos(AddSelectToItems(datos));
    return
}
setDetallepagos([]);
setDetallepagos([]);
}

const getDataPagos=()=>{

  return {
  idpago:0,
  idempleado:empSeleccionado.idempleado,
  idtipopago:idtipopago,
  cantidadhora:totalTime,
  horasextra:totalExtra,
  subtotal:totalPay,
  descuento:0,
  total:totalPay
   
  }
}






const getDataDetallePagos=(numeropago,item)=>{

  return {
  iddetalle:0,
  idpago:numeropago,
  idhorastrabajo:item.idhorastrabajo,
  cant_hora:item.hora_total,  
  precio:item.precio,
  cant_extra:item.horas_extra,
  precio_extra:item.precio_extra,
  subtotal:CaclSubtotalPay(item.hora_total,item.precio, item.horas_extra,item.precio_extra)
  }
}
const CaclSubtotalPay = (hora,precio,extra,pextra) => {
  return ((Number(hora)*Number(precio))+(Number(extra)*Number(pextra))).toFixed(2)
}


const IngresarNuevo = async () => {
  let numpago=0;
  let ingresado=await Datos.insertNewPay("pagos",getDataPagos());
  if(ingresado !==null){
    numpago=ingresado[0].numpago;
  }  
  return numpago;
}

const IngresarNuevoDetalle = async (numeropago,item) => {
  console.log(item)
  let ingresado=await Datos.insertNew("detallepago",getDataDetallePagos(numeropago,item));
  if(ingresado ){
    swal(textInsert.title,textInsert.msg,"success")
  }  

}

const GetPorcentaje = (cantidad) => {
  return Math.round((Number(cantidad)*100)/Number(task))
}


const SavePayments = async () => {
  if(idtipopago!==""){
    setLabelInfo("")
  let numeroPago=await IngresarNuevo()
  setNumpago(numeroPago);
 
  for (let i = 0; i < detallepagos.length; i++) {
    if(detallepagos[i].select){     
     await IngresarNuevoDetalle(numeroPago,detallepagos[i])
     let porce= GetPorcentaje((Number(i)+1))
     console.log(porce)
     setProgress(porce)
     setDatosFact(datosFact=>[...datosFact,detallepagos[i]])
    }}
    return
  }
  setLabelInfo("Please select type of payment");
}


const OpenSelectPeymentsType = (e) => {
  let modalPaymetType=new bootstrap.Modal(document.getElementById("modalPayment"));
  modalPaymetType.show();
  setLabelInfo("")
}

const Limpiar = () => {
  setTotalPay("")
  setIdtipopago("")
  setProgress("")
}

const GuardarCambios =async () => {
try {
  setDatosFact([])
 await SavePayments();
  await getDetallePAgos()
//const modal=new bootstrap.Modal(document.getElementById("modalPdf"));
  //modal.show();
//setTotalPay2(totalPay)
//Limpiar()
} catch (error) {
  console.log(error)
}

  
}


const CambiarPrecio = (item) => {
   for(let i=0; i < detallepagos.length; i++){
    if(Number(item.idhorastrabajo)===Number(detallepagos[i].idhorastrabajo)){
      detallepagos[i].precio=nuevoPrecio
    }
  }
  setDetallepagos(detallepagos=>[...detallepagos]);
  CalcTotalPayOut();
}
const ResetPrecio = (item) => {
  for(let i=0; i < detallepagos.length; i++){
    if(Number(item.idhorastrabajo)===Number(detallepagos[i].idhorastrabajo)){
      detallepagos[i].precio=getPrecioDefinido(item.idhorastrabajo)
    }
  }
  setDetallepagos(detallepagos=>[...detallepagos]);
}

const getPrecioDefinido = (id) => {
  let precio;
  for (const i in detallepagoAux) {
    if (Number(id)===Number(detallepagoAux[i].idhorastrabajo)) {
    precio = detallepagoAux[i].precio;
      
    }
  }
  
  return precio
}




/**estilo de la factura 
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
      */
      const backToPago = () => {
        getPagos();
        setViewHistorial(false)
      }
      
      const PrintBouncher = () => {
        try {
          if(numpago > 0){
            printJS(`${host}pagosfac/viewone/${numpago}`);
            Limpiar();
          }
        } catch (error) {
          console.log(error)
        }
      }
       
  return (
    <>
      <div className='div-header'>
      <div className='d-flex'>
      <span className='iconback' onClick={()=>backToPago()} > <i className="bi bi-arrow-left-square-fill  ms-3 btn-back"> Back</i></span>
       </div>
    </div>
      
    <div className='div-body'>
      <div className='div-header-table'>
       <label className='item-title'>Days worked</label>
      
<div className="form-check">
<label className="form-check-label" htmlFor="flexCheckDefault">Total:  </label>
  <label className="label-total ms-2" htmlFor="flexCheckDefault"> {Moneda(totalPay)}</label>
</div>
      
            <button type="button" className="btn-pagar" onClick={(e)=>OpenSelectPeymentsType(e)}>Pay</button>
          
    
       </div>
          {detallepagos.length > 0 ?
          <TableContainer>
            <HeaderTable>
      
              <th onClick={()=> SortItem(sort,"direccion",setDetallepagos,detallepagos,setSort)}><ButtonSort col="Address" /></th>          
               
              <th onClick={()=> SortItem(sort,"tipo",setDetallepagos,detallepagos,setSort)}><ButtonSort col="Work" /></th>    
              <th onClick={()=> SortNumber(sort,"fecha",setDetallepagos,detallepagos,setSort)}><ButtonSort col="Date" /></th>  
             
              <th>Total Time</th>
              <th>Total extra</th>
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
                  <td>{item.proyecto}</td>

                  <td>{item.tipo}</td>
                  <td>{moment( item.fecha).format("MM/DD/YYYY")}</td> 
                 
                  
                  <td>{item.hora_total + " hrs" }</td>
                  <td>{item.horas_extra + " hrs" }</td>
                  <td>{item.precio_extra}</td>
                  <td>{Moneda(CalcTotalPagoDia(item.hora_total,item.precio,item.horas_extra,item.precio_extra))}</td>
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
          <ErrorPage/>}

        </div>
        {/**modal select payment´s type */}
             
<div className="modal fade" id="modalPayment" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
      
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
  
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Select Type of Payment</label>
  <select className="form-select" aria-label="Default select example" value={idtipopago} onChange={(e)=>setIdtipopago(e.target.value)} > 
<option > Type of Payment List</option>
{dataTipoPago.length >0 ? dataTipoPago.map ((item,index)=>(
<option  value={item.idtipopago} key={index}>
  {`"Type:" ${item.nombre}  "Detail:" ${item.detalle}` }
</option>
)):null }</select>
</div> 
<div className="mb-3">
<h5  className="form-label text-danger">{labelInfo}</h5>
</div>
{progress > 0 ? 
<div>
<div className="mb-3">
<label  className="form-label">Wait...</label>
<div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: `${progress}%`}}>{`${progress}%`}</div>
</div>
</div>
<div className="mb-3 text-align-center justify-items-center">
<button type="submit" className="btn btn-outline-primary"  data-bs-dismiss="modal" onClick={()=>PrintBouncher()}>Print Boucher</button>
</div></div>
: null}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary">Cancel</button>
        <button type="submit" className="btn btn-primary"  onClick={()=>GuardarCambios()}>Save</button>
      </div>
    </div>
  </div>
</div>
        {/**modal pdf */}
{/**     
<div className="modal fade" id="modalPdf" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
              
                  <Text style={{ flex: 1, alignSelf: 'stretch', fontSize:12,textAlign: 'center', }}>{Moneda(CalcTotalPagoDia(item.hora_total,item.precio,item.horas_extra,item.precio_extra))}</Text>
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
</div>*/} 
    </>
  )
}


      export default Historialpagos