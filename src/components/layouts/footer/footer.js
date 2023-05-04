import React from 'react'
import styles from'./footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <ul>
            <li ><ion-icon name="logo-gitlab"></ion-icon></li>
            <li>
             <h3>Contactanos</h3>  
              <p>Call Us<span>+57 36455411</span></p>
              <p>E-mail<span>Punto@gmail.com</span></p>
              <p>Call Us<span>+57 36455411</span></p>
            </li>
            <li>
              <h3>Siguenos</h3>
              <div className={styles.icons}>
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="logo-youtube"></ion-icon>
              <ion-icon name="logo-github"></ion-icon>
              <ion-icon name="logo-instagram"></ion-icon>
              <ion-icon name="logo-google"></ion-icon>
              <ion-icon name="logo-facebook"></ion-icon>
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
