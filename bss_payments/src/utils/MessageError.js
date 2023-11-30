import swal from "sweetalert"
 export function MessageError(error, tabla){
    const title="Alert"
    switch(error){
        case 404:
            swal(title,`Data not faound`,"error");
        break;
        case 403:
            swal(title,`Consult not allowed`,"error");
        break;
        case 500:
            swal(title,`Server not available`,"error");
        break;
        case 503:
            swal(title,`Action not completed, internal error, Check`,"error");
        break;
        case 300:
            swal(title,`There was an error in record selection`,"error");
        break;
        case "Failed to fetch":
          //  swal(title,`Server is not available, check and try again.`,"error");
        break;
        default:
           // swal(title,`Server is not available, check and try again.`,"error");
        break;
                                                   
    }
 }