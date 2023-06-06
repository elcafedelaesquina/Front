import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const LogoUser= (props) => {
  const [user,setUser]=useState(true)
  let name=JSON.parse(localStorage.getItem('name'))
  let image=JSON.parse(localStorage.getItem('image'))
  let id=JSON.parse(localStorage.getItem('id_customer'))
  let id_coffee=JSON.parse(localStorage.getItem('id_coffee'))


  
 

  return (
    <div className='divlogo'>
        <h2>{name}</h2>
        <img className='imglogo' src={image} alt=''></img>
        {id && (
          <div className='menuContainer'>
           <ul className='menuUser'>
              <li className='itemMenu'>Ver compras</li>
              <li className='itemMenu'>Editar Perfil</li>
              <li className='itemMenu' onClick={props.close}>Cerrar Sesion</li>
            </ul>
          </div>)}
        {id_coffee && (
          <div className='menuContainer'>
            <ul className='menuUser'>
              <Link to={'/CafeteriaCreateProduct'}><li className='itemMenu'>Crear Productos</li></Link>
              <li className='itemMenu'>Productos</li>
              <Link to={'/EditarPerfilAdmin'}><li className='itemMenu'>Editar Perfil</li></Link>
              <li className='itemMenu' onClick={props.close}>Cerrar Sesion</li>
            </ul>
          </div>
          )}   
      </div>
  )
}

export {LogoUser}
