import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu'>
        <ul>
        <Link to={`/`}><li><ion-icon name="globe-outline"></ion-icon><h2>Inicio</h2></li></Link>
        <Link to={`/cafeterias`}><li><ion-icon name="restaurant-outline"></ion-icon><h2>Cafeterias</h2></li></Link>
        <Link to={`/inicio`}><li><ion-icon name="images-outline"></ion-icon><h2>Fincas Cafeteras</h2></li></Link>
        
        </ul>
      
    </div>
  )
}

export {Menu}
