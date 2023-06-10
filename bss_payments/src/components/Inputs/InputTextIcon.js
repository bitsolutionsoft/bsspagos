import React from "react"
function InputTextIcon(props){
    return (
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">{props.label}</label>
        <div className="input-group mb-3">
            {props.iconLeft ?<span className="input-group-text"><i className={props.iconLeft}></i></span>:null}
  
  <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
        type={props.type} 
        value={props.value} 
        onChange={props.max ? (e) => props.onChange(e.target.value.slice(0,props.max)) : (e) => props.onChange(e.target.value)} 
        required ={props.required ? true : false }
         />
               {props.iconRigth ?  <span className="input-group-text"><i className={props.iconRigth}></i></span>:null}

</div>
      
        
      </div>
    )
}
export default InputTextIcon;