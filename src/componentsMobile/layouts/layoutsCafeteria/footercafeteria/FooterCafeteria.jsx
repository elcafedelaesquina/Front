import React from 'react'
import Style from './footercafeteria.module.css'
import { Link } from 'react-router-dom'

export const FooterCafeteria = () => {
  return (
    <footer>
        <section className={Style.ads}>
            <Link className={Style.advertisement} to={'/'}><h2>¿Te interesa tener una Página Web como esta? Pues empieza ya con Nosotros... </h2></Link> 
        </section>

        <ul className={Style.footerCafeteria}>
            <section className={Style.itemsFooter}>
                <h3 className={Style.subtitle}>HORARIOS:</h3>
                <p className={Style.text}>Lunes - Viernes: 7am - 6pm</p>
                <p className={Style.text}>Sábado: 8am - 8pm</p>
                <p className={Style.text}>Domingo: 8am - 6pm</p>
            </section>

            <section className={Style.itemsFooter}>
                <h3 className={Style.subtitle}>ENCUÉNTRANOS EN:</h3>
                <h4 className={Style.info}>Dirección:<span className={Style.textModified}>Cra5-Parque Principal-Salento</span></h4>
                <h4 className={Style.info}>Tel:<span className={Style.textModified}> 123456789</span></h4>
                <h4 className={Style.info}>Email:<span className={Style.textModified}>ejetour@gmail.com</span></h4>
            </section>

            <section className={Style.itemsFooter}>
                <h3 className={Style.subtitle}>SÍGUENOS:</h3>
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