import swal from "sweetalert"
 export function MessageError(error, tabla){
    const title="Aviso"
    switch(error){
        case 404:
            swal(title,`No se encontro registro de ${tabla}`,"error")
        break;
        case 403:
            swal(title,`No se permite la consulta  de  ${tabla}`,"error")
        break;
        case 500:
            swal(title,`No se encuentra disponible en servidor`,"error")
        break;
        case 503:
            swal(title,`No  se completo la accion, error interno, Revise`,"error")
        break;
        case 300:
            swal(title,`Hubo un error en la seleccion del registro`,"error")
        break;
        case "Failed to fetch":
            swal(title,`No se encuentra disponible el servidor, Revise y vuela a intentar`,"error")
        break;
        default:
            swal(title,`Algo salio mal en el servidor, Revise y vualva a intentar`,"error")
        break;
                                                   
    }
 }