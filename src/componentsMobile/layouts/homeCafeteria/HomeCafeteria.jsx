import React from 'react'
import Style from './homeCafeteria.module.css'

export const HomeCafeteria = () => {

  let img1 = 'https://res.cloudinary.com/dmrq9n2im/image/upload/v1683225617/El%20caf%C3%A9%20de%20la%20esquina/imgtest3_m4hqtw.jpg'

  return (
    <div className={Style.homeCafeteria}>
        <h2 className={Style.title}>Pagina Web administrable</h2>
        <div className={Style.line}/>
        <p className={Style.text}>
        Un lugar agradable en donde podrá disfrutar el mejor Café… Demo de Página web administrable para Cafés o Restaurantes, desarrollada en WordPress, con páginas como La Carta, Reservas, Galería de imágenes y Página contactos con Formulario de consultas y mapa de ubicación, enlaces a Redes sociales y botón para Chat de Whatsapp.
        </p>
        <section className={Style.containerImg}>
        <img className={Style.imgRef} src={img1} alt="" />
        <h3 className={Style.txtImg}>El mejor lugar para disfrutar tu Café</h3>
        </section>
    </div>
  )
}
