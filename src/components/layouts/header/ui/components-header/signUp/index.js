import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const BtnSignUp  = () => {
  return (
    <>
        <Link to={'/PageRegistros'}><h2 className="h">Registrate</h2></Link>
        <h2 className="h">Ayuda</h2>

    </>
      
   
  )
}

export {BtnSignUp }
