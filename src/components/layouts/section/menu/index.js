import React from 'react'
import './style.css'

const Menu = () => {
  return (
    <div className='menu'>
        <ul>
            <li><ion-icon name="globe-outline"></ion-icon><h2>Inicio</h2></li>
            <li>/<ion-icon name="restaurant-outline"></ion-icon><h2>Cafeterias</h2></li>
            <li>/<ion-icon name="images-outline"></ion-icon><h2>Fincas Cafeteras</h2></li>
        </ul>
      
    </div>
  )
}

export {Menu}
