import React, { useEffect, useState } from 'react'
import HeaderBar from '../../components/Header/HeaderBar'

import imgError from '../../assets/img/nodata.jpg'
import Loader from '../../components/Loader/Loader'

function ErrorPage() {

  const [loading, setLoading] = useState(true)
useEffect(()=>{
  setTimeout(()=>{
    console.log(loading)
setLoading(false)
  },3000)
})


  return (
    <>
   
      
       {loading ? <Loader/>:  
       <div className='div-body'>
              <div className='d-flex flex-column  justify-content-center align-items-center '>
                 <h1>No Data!</h1> 
                 {/**       <h2>please add data, clicking on the upper left button! </h2> */}
           
                     <img src={imgError} alt="img" className='img-error'/>
              </div>
            
            </div>
               }
       
    
       
    </>
  )
}

export default ErrorPage
