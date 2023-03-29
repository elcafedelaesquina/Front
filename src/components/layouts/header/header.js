import React from 'react'
import'./header.css';
import { ComponentsHeader } from './ui/components-header'



const Header = () => {
  return (
    <div className="header">
        <div className='logoHeader'>
        <ion-icon name="logo-gitlab"></ion-icon>
          

        <h1>Punto de Encuentro</h1>
      
        </div>
        <ComponentsHeader></ComponentsHeader>
      
    </div>
  )
}

export {Header}
