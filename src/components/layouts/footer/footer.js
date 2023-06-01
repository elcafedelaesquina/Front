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
              <h3>Herramientas</h3>
              <div className={styles.iconsCreators}>
              <ion-icon name="logo-npm"></ion-icon>
              <ion-icon name="logo-react"></ion-icon>
              <ion-icon name="logo-javascript"></ion-icon>

              </div>
            </li>
            <li>
              <h3>Información legal</h3>
              <span>Términos y configuración Privacidad y cookiesTérminos y condiciones
            Términos y configuración Privacidad y cookiesTérminos y condiciones</span>
            </li>  
        </ul>
       
      
    </div>
  )
}

export {Footer}
