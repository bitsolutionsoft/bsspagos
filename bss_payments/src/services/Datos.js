
import { MessageError } from "../utils/MessageError";
import Headers from "./Headers";
import { host } from "./host";

class Datos{
    async getDatos(table){
        try {
            const result = await fetch(`${host+table}/view`,Headers.headerGet());
            if(!result.ok){
                MessageError(result.status,table)
                return null
            }
            let datos=await result.json()
      
            return  datos.res;
        } catch (error) {
            MessageError(error.message, ""+error.message)
            return null
        }
    }
    async insertNewPay(table, data){
        try {
            const result = await fetch(`${host+table}`,Headers.headerPostBody(data));
            if(!result.ok){
                MessageError(result.status,table) 
                return null
            }
            let datos=await result.json()      
            return  datos.res;
        } catch (error) {
            MessageError(error.message, ""+error.message)
            return false
        }

    }
    async insertNew(table, data){
        try {
            const result = await fetch(`${host+table}`,Headers.headerPostBody(data));
            if(!result.ok){
                MessageError(result.status,table) 
                return false
            }
            return true
        } catch (error) {
            MessageError(error.message, ""+error.message)
            return false
        }

    }

    async updateItem(table, data){
        try {
            const result = await fetch(`${host+table}/update`,Headers.headerPostBody(data));
            if(!result.ok){
                MessageError(result.status,table) 
                return false
            }
            
            return true
        } catch (error) {
            MessageError(error.message, ""+error.message)
            return false
        }
    }
    async deleteItem(table, id){
        try {
            const result = await fetch(`${host+table}/delete/${id}`,Headers.headerPost());
            if(!result.ok){
                MessageError(result.status,table) 
                return false
            }
            return true
        } catch (error) {
            MessageError(error.message, ""+error.message)
            return false
        }
    }
    async getDataByID(table, id){
        try {
            const result = await fetch(`${host+table}/viewone/${id}`,Headers.headerGet());
            if(!result.ok){
                MessageError(result.status,table) 
                return null
            }
            let datos=await result.json()
            return datos.res
        } catch (error) {
            MessageError(error.message, ""+error.message)
            return null
        }
    }
    async getDetalleByID(table, id){
        try {
            const result = await fetch(`${host+table}/viewxd/${id}`,Headers.headerGet());
          //  console.log(result)
            if(!result.ok){
                MessageError(result.status,table) 
                return null
            }
            let datos=await result.json()
           // console.log(datos.res)
            return datos.res
        } catch (error) {
            MessageError(error.message, ""+error.message)
            return null
        }
    }
    async getPrivilege( data){
        try {
            const result = await fetch(`${host}permiso/viewxd/${data.idempleado}`,Headers.headerGetprivilege(data.token));
          //  console.log(result)
            if(!result.ok){
                MessageError(result.status,"permiso") 
                return null
            }
            let datos=await result.json()
           // console.log(datos.res)
            return datos.res
        } catch (error) {
            MessageError(error.message, ""+error.message)
            return null
        }
    }

    async getDataUser(data){
        try {
            const info= await fetch(`${host}usuario/login`,Headers.headerPostBodyNoToken(data));    
        //    console.log(info)        
            if(!info.ok){
                MessageError(info.status,"Usuario");
                return null
            }
            let datos=await info.json();    
            console.log(datos)
            return   datos.res
        } catch (error) {
            console.log(error)
            MessageError(error.message,""+error.message) ;    
            return null
        }
    }
    async getDatosInfo(table){
        try {
            const result = await fetch(`${host+table}/view`,Headers.headerGetNoToken());
            if(!result.ok){
                MessageError(result.status,table)
                return null
            }
            let datos=await result.json()
      
            return  datos.res;
        } catch (error) {
            MessageError(error.message, ""+error.message)
            return null
        }
    }
}
export default new Datos();