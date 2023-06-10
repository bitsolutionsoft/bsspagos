import React,{useState,useEffect, useContext} from 'react'
import swal from 'sweetalert';
import Datos from '../../services/Datos';
import { DataUsuario } from '../../context/Context';
import SortItem from '../../utils/SortItem';
import ButtonSort from '../../components/Table/ButtonSort';
import HeaderTable from '../../components/Table/HeaderTable';
import BodyTable from '../../components/Table/BodyTable';
import TableContainer from '../../components/Table/TableContainer';
import Loader from '../../components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { addGrantedToList } from '../../app/reducers/granted/grantedSlice';



function Permisos() {
  const {setAccess, userSelected}= useContext(DataUsuario);
  const [datos, setDatos] = useState([])
  const [datosAux, setDatosAux] = useState([])
  const [modulos, setModulos] = useState([]);
  const [sort, setSort] = useState("ASC")
  

useEffect(()=>{
getPermiso();
},[])

const getPermiso=async()=>{
let permiso=await Datos.getDetalleByID("permiso",userSelected.idempleado);
if(permiso.length >0 ){

  setDatos(permiso);
  setDatosAux(permiso);
  return;
}
setDatos([])
setDatosAux([])
  getModulos();

}
const getModulos = async() => {
  let modulo=await Datos.getDatos("modulo");
  console.log(modulo)
  if(modulo !== null){
    setModulos(modulo)
  }
}
const ActualizarPermiso =async (item, acceso) => { 
    let datosPermiso={
        idpermiso:item.idpermiso,
        idempleado:item.idempleado,
        idmodulo:item.idmodulo,
        acceso:acceso ? 1 : 0
    }
    let dtpermiso=await Datos.updateItem("permiso",datosPermiso);
    if(dtpermiso){
      swal("Aviso", "Se Actualizo correctamente","success"); 
      await getPermiso()
      return  
    }  
    swal("Aviso", "No se pudo actualizar el permiso","error");
 }
const dataPermisos = (modulo) =>{
  return {
  idpermiso  :0,
  idempleado :userSelected.idempleado,
  idmodulo   :modulo,
  acceso     :0
}
}

const InsertAcces= async (data) => {
  let permiso= await Datos.insertNew("permiso",data);
  if(permiso){
    swal("Aviso", "se inserto correctamente","success");
    return
  }
  swal("Aviso", "No se pudo insertar","danger");
}

const  AddUserAccess =async () => {

  for(let i in modulos){
    let data=  dataPermisos(modulos[i].idmodulo)
   await InsertAcces(data)
  }

await getPermiso()
  
}

  return (
    <>
    <div className='div-header'>
<div className='d-flex'>
      <span className='iconback' onClick={()=>setAccess(false)} > <i className="bi bi-arrow-left-square-fill  ms-3 btn-back"> Back</i></span>
       </div>
    </div>

    <div className='div-body'>  
    <div className='div-header-table'>
    <label className='item-title'>Manage User Privileges</label>
    </div>  
    {datos.length > 0 ?
          <TableContainer>
            <HeaderTable>
              <th></th>
              <th onClick={()=> SortItem (sort,"nombre",setDatos,datos,setSort)}><ButtonSort col="Name" /></th>
              <th >Access</th>  
            </HeaderTable>
            <BodyTable >
              {datos.map((item,index)=>(
                <tr key={index}>
                  <td></td>
                  <td>{item.nombre}</td>
                  <td>
                  <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" id="escritura"  checked={item.acceso === 1 ? true : false } onChange={(e)=>ActualizarPermiso(item, e.target.checked)}/>
    </div> </td>
                </tr>
              ))}
            </BodyTable>
          </TableContainer>
          :
        <div>
          <button className='btn btn-outline-secondary' onClick={AddUserAccess} >Dar permisos</button>
        </div>
          
          }
          </div>
  </>
  )
}

export default Permisos