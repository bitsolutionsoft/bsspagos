import React from 'react'

function InputState(props) {
  return (
    <>
        <div className="form-outline mb-3 center">
       <label className="form-label" htmlFor="form1Example1">{props.label}</label>
       <div className="form-outline mb-3">
        <div className="form-check form-check-inline">
  <input className="form-check-input" 
  type="radio" name="estado" id="inlineRadio3" 
  value={props.value} checked={props.value === "Active" ? true : false} 
  onChange={() => props.onChange("Active")} selected/>
  <label className="form-check-label" htmlFor="inlineRadio3">Active</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="estado" id="inlineRadio4" 
  value={props.value} checked={props.value === "Inactive" ? true : false} 
  onChange={() => props.onChange("Inactive")}/>
  <label className="form-check-label" htmlFor="inlineRadio4">Inactive</label>
  </div>
</div>
  </div>
    </>
    
  )
}

export default InputState