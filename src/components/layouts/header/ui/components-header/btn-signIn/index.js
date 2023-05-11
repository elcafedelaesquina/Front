import React from 'react'
import { Link } from 'react-router-dom';
import styles from './style.module.css'


const BtnSingIn = () => {
  return (
    
     <Link to={'/PageRegistros'}><button className={styles.BtnSingIn}>Sign In</button></Link>
    
  )
}

export  {BtnSingIn}
