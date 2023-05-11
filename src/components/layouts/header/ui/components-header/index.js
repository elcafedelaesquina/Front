import React from 'react'
import { BtnSignUp } from './signUp'
import { BtnSingIn } from './btn-signIn'
import'./style.css' 
const ComponentsHeader = () => {
  return (
    <div className='componentsHeader'>
      <BtnSignUp></BtnSignUp>
      <BtnSingIn></BtnSingIn>
  
      
    </div>
  )
}

export {ComponentsHeader}
