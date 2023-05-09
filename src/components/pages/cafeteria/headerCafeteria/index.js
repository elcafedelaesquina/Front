import React from 'react'
import styles from './style.module.css'
import {Link} from 'react-router-dom'

 const HeaderCafeteria = () => {
  return (
    <div className={styles.header} >
        <div className={styles.logo}>
        
           <img src='https://ir-dweb.com/webdemocafe/wp-content/uploads/logo-webdemocafe.png' alt=''></img>
           <h3>El cafe de la esquina</h3>
          </div>
           
           
        <ul className={styles.ul}>
            <li className={styles.li}><Link to={`/cafeterias/cafeteria`}><ion-icon name="storefront-outline"></ion-icon>Inicio</Link></li>
            <li className={styles.li}><Link to={`/cafeterias/cafeteria/carta`}><ion-icon name="fast-food-outline"></ion-icon>Carta</Link></li>
            <li className={styles.li}><ion-icon name="bag-add-outline"></ion-icon>Productos</li>
            <li className={styles.li}><ion-icon name="cart-outline"></ion-icon>Compras</li>
        </ul>
    </div>
  )
}

export{HeaderCafeteria};
