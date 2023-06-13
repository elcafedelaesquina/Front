import React from 'react'
import Style from './featuredServices.module.css'

export const FeaturedServices  = () => {

const imgtest = 'https://res.cloudinary.com/dmrq9n2im/image/upload/v1683225148/El%20caf%C3%A9%20de%20la%20esquina/Finca-tematica-Quindio-Colombia_oj1lyo.jpg'

  return (
    <div className={Style.containerFeatured}>
      <div className={Style.aboutus}>
        <h2 className={Style.title}>Productos Destacados</h2>
        <section className={Style.imgMain}>
        <img className={Style.imgReference} src={imgtest} alt="" />
        </section>
        <h3 className={Style.subtitle}>Prueba el mejor café</h3>
        <p className={Style.txt}>Si disfrutas el Café, no puedes dejar de probar nuestro Cappuccino o Expresso, asi como los mejores acompañamientos como Galletas o Kekes especiales que tenemos para ti .</p>
        <button className={Style.btn}>Conoce mas</button>
      </div>
    </div>
  )
}
