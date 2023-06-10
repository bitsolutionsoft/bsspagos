//const Token=""//JSON.parse(window.localStorage.getItem("usuario"));
const Token= JSON.parse(window.localStorage.getItem("usuario"))


class Headers {
headerGet(){
 // console.log(Token.token)
    const header={
        method:'GET',
        headers:{
            authorization:`Baerer `+Token.token,
            accept:'application/json',
            'Content-Type':"application/json"
        }       
    }
    return header;
}
headerGetprivilege(token){
    // console.log(Token.token)
       const header={
           method:'GET',
           headers:{
               authorization:`Baerer `+token,
               accept:'application/json',
               'Content-Type':"application/json"
           }       
       }
       return header;
   }
headerPost(){
    const header={
        method:'POST',
        headers:{
            authorization:`Baerer `+Token.token,
            accept:'application/json',
            'Content-Type':"application/json"
        }       
    }
    return header;
}
headerPostBody(data){
    const header={
        method:'POST',
        headers:{
            authorization:`Baerer `+Token.token,
            accept:'application/json',
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data)       
    }
    return header;
}


headerPostBodyNoToken(data){
    const header={
        method:'POST',
        headers:{      
            accept:'application/json',
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data)       
    }
    return header;
}

headerGetNoToken(data){
    const header={
        method:'GET',
        headers:{      
            accept:'application/json',
            'Content-Type':"application/json"
        },
         
    }
    return header;
}

}
export default new Headers();