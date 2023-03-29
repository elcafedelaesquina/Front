import React from 'react'
import { LogoUser } from './logo-user'
import { BtnSignUp } from './signUp'
import { BtnSingIn } from './btn-signIn'
import'./style.css' 
const ComponentsHeader = () => {
  return (
    <div className='componentsHeader'>
      <BtnSignUp></BtnSignUp>
      <BtnSingIn></BtnSingIn>
     {/*  <LogoUser></LogoUser> */}
      
    </div>
  )
}

export {ComponentsHeader}
