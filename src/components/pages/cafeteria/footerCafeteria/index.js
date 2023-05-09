import React from 'react'
import styles from './style.module.css'

const FooterCafeteria = () => {
  return (
    <ul className={styles.footerCafeteria}>
        <div className={styles.itemsFooter}>
            <h3>HORARIOS:</h3>
            <p>Lunes - Viernes: 7am - 6pm</p>
            <p>Sábado: 8am - 8pm</p>
            <p>Domingo: 8am - 6pm</p>
        </div>
        <div className={styles.itemsFooter}>
            <h3>ENCUÉNTRANOS EN:</h3>
            <h4>Dirección:<span>Cra5-Parque Principal-Salento</span></h4>
            <h4>Tel:<span>123456789</span></h4>
            <h4>Email:<span>ejetour@gmail.com</span></h4>
            

        </div>
        <div className={styles.itemsFooter}>
            <h3>SÍGUENOS:</h3>
            <div className={styles.iconsFooter}>
                <ion-icon className={styles.footerLogo} name="logo-octocat"></ion-icon>
                <ion-icon className={styles.footerLogo} name="logo-facebook"></ion-icon>
                <ion-icon className={styles.footerLogo} name="logo-instagram"></ion-icon>
            </div>


        </div>

      
    </ul>
  )
}

export  {FooterCafeteria};
