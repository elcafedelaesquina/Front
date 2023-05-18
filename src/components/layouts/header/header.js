import React from 'react'
import styles from './header.module.css';
import { ComponentsHeader } from './ui/components-header'
import logo from './Logo.png'
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logoHeader}>
        <Link to={'/'}><img src={logo} alt=''></img></Link> 
        <h1>Eje Travel</h1>
      
        </div>
        <ComponentsHeader></ComponentsHeader>
      
    </div>
  )
}

export {Header}
