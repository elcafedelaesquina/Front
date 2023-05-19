import React from 'react'
import styles from './style.module.css'
import {Link} from 'react-router-dom'

 const HeaderFinca = () => {
  return (
    <div className={styles.header} >
        <div className={styles.logo}>
        
           <img src='https://b2bmarketplace.procolombia.co/sites/default/files/styles/max_325x325/public/companies/cafe-ocaso-04.png' alt=''></img>
           <h3>Finca El Ocaso</h3>
          </div>
           
           
        <ul className={styles.ul}>
            <li className={styles.li}><Link to={`/fincas/finca`}><ion-icon name="storefront-outline"></ion-icon>Inicio</Link></li>
            <li className={styles.li}><ion-icon name="bag-add-outline"></ion-icon>Productos</li>
            <li className={styles.li}><ion-icon name="cart-outline"></ion-icon>Compras</li>
        </ul>
    </div>
  )
}

export{HeaderFinca};
