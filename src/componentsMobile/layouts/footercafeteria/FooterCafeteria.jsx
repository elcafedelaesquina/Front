import React from 'react'
import Style from './footercafeteria.module.css'
import { Link } from 'react-router-dom'

export const FooterCafeteria = () => {
  return (
    <footer>
        <section className={Style.ads}>
            <Link to={'/'}><h2>¿Te interesa tener una Página Web como esta? Pues empieza ya con Nosotros... </h2></Link> 
        </section>

        <ul className={Style.footerCafeteria}>
            <section className={Style.itemsFooter}>
                <h3>HORARIOS:</h3>
                <p>Lunes - Viernes: 7am - 6pm</p>
                <p>Sábado: 8am - 8pm</p>
                <p>Domingo: 8am - 6pm</p>
            </section>

            <section className={Style.itemsFooter}>
                <h3>ENCUÉNTRANOS EN:</h3>
                <h4>Dirección:<span>Cra5-Parque Principal-Salento</span></h4>
                <h4>Tel:<span>123456789</span></h4>
                <h4>Email:<span>ejetour@gmail.com</span></h4>
            </section>

            <section className={Style.itemsFooter}>
                <h3>SÍGUENOS:</h3>
                <div className={Style.iconsFooter}>
                    <ion-icon className={Style.footerLogo} name="logo-octocat"></ion-icon>
                    <ion-icon className={Style.footerLogo} name="logo-facebook"></ion-icon>
                    <ion-icon className={Style.footerLogo} name="logo-instagram"></ion-icon>
                </div>
            </section>
        </ul>
    </footer>
  )
}
