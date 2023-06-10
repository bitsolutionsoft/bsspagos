import React from "react"
function InputTextMoney(props){
    return (
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">{props.label}</label>
        <div className="input-group mb-3">
        <span className="input-group-text">$</span>
  
  <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
        type="num" 
        value={props.value} 
        onChange={props.max ? (e) => props.onChange(e.target.value.slice(0,props.max)) : (e) => props.onChange(e.target.value)} 
        required ={props.required ? true : false }
         />
            
<span className="input-group-text">.00</span>
</div>
      
        
      </div>
    )
}
export default InputTextMoney;