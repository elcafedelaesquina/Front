import React from 'react'
import styles from'./footer.module.css'
import logo from './Logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <ul>
            <li><Link to={'/'}><img src={logo} alt=''></img></Link>  </li>
            <li>
             <h3>Contactanos</h3>  
              <p>Llamanos:<span>+57-3004524535 </span></p>
              <p>E-mail:<span>Ejetravel@gmail.com</span></p>
              <p>Dirección:<span>Armenia-Quindio</span></p>
            </li>
            <li>
              <h3>Siguenos</h3>
              <div className={styles.icons}>
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="logo-youtube"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>


              </div>
            </li>
            <li>
              <h3>Acerca de nosotros</h3> 
              <p>-Quienes somos</p>
              <p>-Nuestro Objetivo</p>
              <p>-Alcance</p>
              
             
            </li>
            <li>
              <h3>Información legal</h3>
              <p>-Este sitio web puede incluir enlaces a sitios web de terceros. </p>
              <p>-El contenido de este sitio web es únicamente para información general.</p>
            </li>  
        </ul>
       
      
    </div>
  )
}

export {Footer}
