import React from 'react'

function TableContainer(props) {
  return (
    
    <div className='table-wrap'>
        <table className='table-item'>
            {props.children}
        </table>
    </div>
  )
}

export default TableContainer