import React from 'react'
import Style from './products.module.css'

export const Products = () => {

  const imgtest = 'https://res.cloudinary.com/dmrq9n2im/image/upload/v1680041398/El%20caf%C3%A9%20de%20la%20esquina/download_lhgibn.jpg'

  return (
    <div className={Style.product}>
      <h2 className={Style.subtitle}>Desayunos</h2>
      <div className={Style.containerProductOne}>
        <div className={Style.containerInfoOne}>
          <p className={Style.nameProductOne}>Nombre producto</p>
          <p className={Style.descriptionProductOne}>Breve descripción</p>
          <button className={Style.btnPriceOne}>Precio</button>
        </div>
        <div className={Style.containerImageOne}>
          <img className={Style.imageProductOne} src={imgtest} alt="" />
        </div>
      </div>
      
      <div className={Style.containerProductTwo}>
        <div className={Style.containerImageTwo}>
          <img className={Style.imageProductTwo} src={imgtest} alt="" />
        </div>
        <div className={Style.containerInfoTwo}>
          <p className={Style.nameProductTwo}>Nombre producto</p>
          <p className={Style.descriptionProductTwo}>Breve descripción</p>
          <button className={Style.btnPriceTwo}>Precio</button>
        </div>
      </div>

      <div className={Style.containerProductOne}>
        <div className={Style.containerInfoOne}>
          <p className={Style.nameProductOne}>Nombre producto</p>
          <p className={Style.descriptionProductOne}>Breve descripción</p>
          <button className={Style.btnPriceOne}>Precio</button>
        </div>
        <div className={Style.containerImageOne}>
          <img className={Style.imageProductOne} src={imgtest} alt="" />
        </div>
      </div>
      
      <div className={Style.containerProductTwo}>
        <div className={Style.containerImageTwo}>
          <img className={Style.imageProductTwo} src={imgtest} alt="" />
        </div>
        <div className={Style.containerInfoTwo}>
          <p className={Style.nameProductTwo}>Nombre producto</p>
          <p className={Style.descriptionProductTwo}>Breve descripción</p>
          <button className={Style.btnPriceTwo}>Precio</button>
        </div>
      </div>
    </div>
  )
}
