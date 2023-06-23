import React, { useEffect, useState } from 'react'
import { BtnSignUp } from './signUp'
import { BtnSingIn } from './btn-signIn'
import { LogoUser } from './logo-user'
import'./style.css' 
import Swal from 'sweetalert2'
const ComponentsHeader = () => {
  const Swal = require('sweetalert2')
  const [validateToken,setValidateToken]=useState(false)
  let name=JSON.parse(localStorage.getItem('name'))
 
  const close=()=>{
      
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title:'Adiós '+name ,
        showConfirmButton: false,
        timer: 1500
      })
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      localStorage.removeItem('image')
      localStorage.removeItem('id_customer')
      localStorage.removeItem('id_coffee')
      localStorage.removeItem('id_admin')
      
      setValidateToken(false)
  }
  useEffect(() =>{
    let token=localStorage.getItem('token')
    if(token){
      setValidateToken(true)
    }else{
      setValidateToken(false)

    }
    
  },[validateToken])
   
  
  return (
    <div className='componentsHeader'>
      {validateToken && <LogoUser close={close}></LogoUser>}
      {
        !validateToken && <><BtnSignUp></BtnSignUp>
        <BtnSingIn></BtnSingIn></>
        
      }
      
  
      
    </div>
  )
}

export {ComponentsHeader}
