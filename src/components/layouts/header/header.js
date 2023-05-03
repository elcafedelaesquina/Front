import React from 'react'
import styles from './header.module.css';
import { ComponentsHeader } from './ui/components-header'



const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logoHeader}>
        <ion-icon name="logo-gitlab"></ion-icon>
          

        <h1>Punto de Encuentro</h1>
      
        </div>
        <ComponentsHeader></ComponentsHeader>
      
    </div>
  )
}

export {Header}
