import React from "react"
function InputText(props){
    return (
        <div className="form-group form-group-sm mb-3">
        <label htmlFor="exampleInputEmail1"    hidden={props.hidden ? true : false}>{props.label}</label>
        <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
        hidden={props.hidden ? true : false}
        disabled={props.disabled ? true : false}
        type={props.type} 
        value={props.value} 
        onChange={props.max ? (e) => props.onChange(e.target.value.slice(0,props.max)) : (e) => props.onChange(e.target.value)} 
        required ={props.required ? true : false }
         />
        
      </div>
    )
}
export default InputText;