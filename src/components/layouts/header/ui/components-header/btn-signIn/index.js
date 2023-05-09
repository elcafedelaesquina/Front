import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';


const BtnSingIn = () => {
  return (
    
     <Link to={'/PageRegistros'}><button className='BtnSingIn'>Sign In</button></Link>
    
  )
}

export  {BtnSingIn}
