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

function Myassistance() {

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
const [preciofase, setPreciofase] = useState("")

  //const { empleado,empleadoAux,setEmpleado,setEmpleadoAux}=useData("empleado")
  //console.log(empleado)

 
 const [empleado, setEmpleado]=useState([]);
 const [empleadoAux, setEmpleadoAux]=useState([]);
const [titulo, setTitulo] = useState("")
const [proyecto, setProyecto] = useState([])
const [fase, setFase] = useState([])
const [tipoTabajo, setTipoTabajo] = useState([])
const {idempleado, nombre, apellido}=useSelector(state =>state.user)

  useEffect(()=>{
getEmpleado();
getFase();
getProject();
getTipoTrabajo();
  },[])

  const getEmpleado =async () => {
    let data=await Datos.getDatos("horastrabajo")
    console.log(data)
    if(data !== null){
      setEmpleado(data)
      setEmpleadoAux(data)
      return
    }
    setEmpleado([])
      setEmpleadoAux([])
  }

  const Limpiar=()=>{

    setDpi("");
    setTelefono("");

    setCorreo("");
    setEstado("Pendiente");
  }

  const getDataAsistencia=(codigo)=>{
    let fecha=new Date();
    return {
      idhorastrabajo:0,
      fecha:fecha.getFullYear()+"-"+Number(fecha.getMonth()+1) +"-"+fecha.getDay().toLocaleString(),
      hora_inicio:fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds(),
      hora_final:"00:00:00",
      hora_total:0,
      idfase:Number(idfase),
      estado:estado
    }
  }

const getDataHora=(codigo, idfase2)=>{
    let fecha=new Date();
    return {
      idhorastrabajo:codigo,
      fecha:fecha.getFullYear()+"-"+Number(fecha.getMonth()+1) +"-"+fecha.getDay().toLocaleString(),
      hora_inicio:fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds(),
      hora_final:fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds(),
      hora_total:0,
      idfase:Number(idfase2),
      estado:estado
    }
  }

const IngresarNuevo = async () => {
  console.log(getDataAsistencia(0))
  
  let ingresado=await Datos.insertNew("horastrabajo",getDataAsistencia(0));
  if(ingresado){
   getEmpleado();
    Limpiar()
    swal("Exito","Se ingreso correctamente","success")
  }  
}
const ActualizarEmpleado =async () => {
  let actualizado= await Datos.updateItem("horastrabajo",getDataAsistencia(idempleado));
  if(actualizado){
    getEmpleado()
    Limpiar()
    swal("Exito","Se actualizo correctamente","success")
  }  
}

const ActualizarHora =async (items) => {
  console.log (getDataHora(items.idhorastrabajo, items.idfase))
  let actualizado= await Datos.updateItem("horastrabajo",getDataHora(items.idhorastrabajo, items.idfase));
  if(actualizado){
    getEmpleado()
    swal("Exito","Se actualizo correctamente","success")
  }  
}

const EliminarEmpleado =  (empleado) => {
  swal({
    title:"Esta seguro de eliminar?",
    text:"Una vez eliminado, ya no se podrá restablecer",
    buttons:["Cancelar", "Eliminar"],
    dangerMode:true
  }).then((yes)=>{
    if(yes){
     Borrar(empleado);
    }
  })
  
  
}
const Borrar =async (empleado) => {
  let eliminado=await Datos.deleteItem("empleado",empleado.idempleado)
  if (eliminado) {
    getEmpleado();
    swal("Exito","Se elimino correctamente", "success")
  }
}

const GuardarCambios = (e) => {
  e.preventDefault();
  if (accion ==="new") {
    IngresarNuevo();
    return
  }
  
 ActualizarEmpleado();
}


const setDataEmpleado = (empleado) => {
 
  setTelefono(empleado.telefono);
  setEstado(empleado.estado);
  setCorreo(empleado.correo);
  setAccion("update");
}

const AbrirActualizar = (empleado) => {
  setTitulo("Actualizar Empleado")
  setDataEmpleado(empleado)
  setAccion("update")
  const modal=new bootstrap.Modal(document.getElementById("exampleModal"));
 modal.show();
}
const AbrirNuevo = () => {
  setTitulo("Ingresar Empleado")
  Limpiar()
  setAccion("new")
 const modal=new bootstrap.Modal(document.getElementById("exampleModal"));
 modal.show();
}

  const Busqueda = (params) => {
    setBuscar(params)
    FiltarItems(params,setEmpleado,empleadoAux)    
  }

  const getProject = async() => {
    let  project= await Datos.getDatos("proyecto");
    if(project!==null){
      setProyecto(project)
      return
    }
    setProyecto([])
  }
  const getFase = async() => {
    let fas= await Datos.getDatos("faseproyecto");
          console.log(fase)
    if( fas !== null){

    setFase(fas)
    return
    }
    setFase([])
  }
  /**
   * 
alter table horas_trabajo  drop  constraint fk_empleado;
alter table horas_trabajo drop column idempleado;

alter table fase_proyecto add column idempleado int;
alter table fase_proyecto add column idtipotrabajo int;

alter table fase_proyecto add constraint fk_empleado foreign key (idempleado) references empleado(idempleado);

alter table fase_proyecto add constraint fk_tipotra foreign key (idtipotrabajo) references tipo_trabajo(idtrabajo);
para view y procedure
  SELECT 
      p.nombre as nombreproyecto, p.direccion, tt.nombre as nombrefase, tt.tipo, tt.precio, f.*,
      e.nombre as nombreempleado,e.apellido
      
    FROM
       fase_proyecto f inner join empleado e on f.idempleado=e.idempleado
       inner join tipo_trabajo tt on f.idtipotrabajo = tt.idtrabajo
       inner join  proyecto p on f.idproyecto = p.idproyecto
   */

  const getTipoTrabajo = async () => {
    let tipoTabajo = await Datos.getDatos("tipotrabajo");
    if(tipoTabajo  !== null ) {
      setTipoTabajo(tipoTabajo)
      return
    }
    setTipoTabajo([])
    
  }
  
  const seleccionarFase = (id) => {
    setIdfase(id)
for (let index = 0; index < fase.length; index++) {
 
  if (fase[index].idfase === Number(id)) {
    setNombrefase(fase[index].nombre);
setTipofase(fase[index].tipo);
setPreciofase(fase[index].precio);
setDireccion(fase[index].direccion);
  }

}
    
  }
  
  
 
  return (
    <>
    <div className='div-header'>
              <HeaderBar value={buscar} onChange={Busqueda} onClick={AbrirNuevo} />
    </div>   
        <div className='div-body'>
        <div className='div-header-table'>
       <label className='item-title'>Lista de empleado</label>
       </div>
          {empleado.length > 0 ?
          <TableContainer>
            <HeaderTable>
            
              <th onClick={()=> SortNumber(sort,"fecha",setEmpleado,empleado,setSort)}><ButtonSort col="Date" /></th>
           
              <th onClick={()=> SortItem(sort,"hora_inicio",setEmpleado,empleado,setSort)}><ButtonSort col="Inicio" /></th>
              <th onClick={()=> SortItem(sort,"hora_fin",setEmpleado,empleado,setSort)}><ButtonSort col="Fin" /></th>
              <th onClick={()=> SortItem(sort,"hora_fin",setEmpleado,empleado,setSort)}><ButtonSort col="Horas total" /></th>
              <th onClick={()=> SortItem(sort,"estado",setEmpleado,empleado,setSort)}><ButtonSort col="Estado" /></th>
              <th>Acciones</th>

              
            </HeaderTable>
            <BodyTable>
              {empleado.map((item,index)=>(
                <tr key={index}>
                  <td>{item.fecha.slice(0,10)}</td>
                  <td>{item.hora_inicio}</td>
                  <td>
                    {item.hora_final.split(":")[2] > 0 ?  item.hora_final
                    :
                    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" id="escritura"  checked={item.hora_final > 0 ? true  : false } onChange={(e)=>ActualizarHora(item, e.target.checked)}/>
   </div>
                    }
                    </td>
                  <td>{item.hora_total}</td>
                  <td><Estado estado={item.estado}/></td>
                  
                  <ButtonsOptions item={item} Eliminar={EliminarEmpleado} Actualizar={AbrirActualizar} />
            
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
        <h5 className="modal-title " id="exampleModalLabel">{titulo}</h5>

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
      </div>
      <div className="modal-body">
 


<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Select proyecto</label>
  <select className="form-select" aria-label="Default select example" value={idfase} onChange={(e)=>seleccionarFase(e.target.value)} > 
<option > Fase List</option>
{fase.length >0 ? fase.map ((item,index)=>(
<option  value={item.idfase} key={index}>
  {item.proyectonombre}
</option>
)):null }</select>
</div> 


 <InputText label="Direccion" type="text" value={direccion} onChange={setDireccion} required  disabled/>
 <InputText label="Fase" type="text" value={nombrefase} onChange={setNombrefase} required disabled/>
 <InputText label="Tipo" type="text" value={tipofase} onChange={setTipofase} required disabled/>
 <InputText label="Precio" type="text" value={preciofase} onChange={setPreciofase} required disabled/>
  {/**<InputText label="apellido" type="text"  value={apellido} onChange={setApellido} required />
   <InputText label="codigo" type="text" value={idempleado} onChange={setIdEmpleado}  hidden/>
 <InputText label="Numero de DPI" type="text" max={12} value={dpi} onChange={setDpi} required />

 <InputText label="Telefono" type="number" max={9} value={telefono} onChange={setTelefono} required />
 <InputText label="Correo" type="email" value={correo} onChange={setCorreo} required /> */}

 
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="submit" className="btn btn-primary" >Guardar</button>
      </div>
    </div>
  </div>
</form>
{/** fin del modal de ingreso empleado */}
    </>
  )
}

export default Myassistance

/**
 * CREATE DEFINER=`root`@`localhost` PROCEDURE `ingreso_fase`(
in _idfase integer,
in _idproyecto integer,
in _nombre varchar(75),
in _estado varchar(75),
in _idempleado int,
in _idtipotrabjo int,
in accion varchar(10)
)
begin
declare exit  handler for sqlexception
begin
show errors limit 1;
resignal;
rollback;
end;
declare exit handler for sqlwarning
begin
show warnings limit 1;
resignal;
rollback;
end;
start transaction;
case accion
when 'new' then
insert into fase_proyecto(idproyecto,nombre,estado, idempleado, idtipotrabajo)values(_idproyecto,_nombre,_estado,_idempleado, _idtipotrabajo);
when 'update' then
update fase_proyecto set idproyecto=_idproyecto, nombre=_nombre, estado=_estado, idempleado=_idempleado, idtipotrabajo=_idtipotrabajo
where idfase =_idfase;
when 'viewone' then
select *from fase_proyecto where idfase=_idfase;
when 'viewxd' then
 SELECT 
      p.nombre as nombreproyecto, p.direccion, tt.nombre as nombrefase, tt.tipo, tt.precio, f.*,
      e.nombre as nombreempleado,e.apellido
      
    FROM
       fase_proyecto f inner join empleado e on f.idempleado=e.idempleado
       inner join tipo_trabajo tt on f.idtipotrabajo = tt.idtrabajo
       inner join  proyecto p on f.idproyecto = p.idproyecto
       where
       f.estado="Activo" and f.idempleado= _idempleado;
when 'delete' then
update fase_proyecto set estado="No Activo" where idfase=_idfase;
end case;
commit;
end
 */