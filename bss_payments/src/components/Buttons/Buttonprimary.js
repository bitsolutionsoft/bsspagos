import React from "react"
function ButtonPrimary(props){
    return (
        <>
        <button type="button" className="btn btn-primary" onClick={props.onClick}>{props.label}</button>
        
      </>
    )
}
export default ButtonPrimary;