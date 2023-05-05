import React from 'react'
import Style from './categoriesproducts.module.css'

export const CategoriesProducts = () => {

  const img1 = 'https://res.cloudinary.com/dymawfuwu/image/upload/v1680016625/download_xsap5q.jpg'
  const img2 = 'https://res.cloudinary.com/dymawfuwu/image/upload/v1680017215/download_hxtf7p.jpg'

  return (
    <div className={Style.containerProducts}>
        <h2 className={Style.titleMenu}>Nuestro menú para que te des gusto</h2>
        <h3 className={Style.subtitle}>Desayunos</h3>
        <div className={Style.breakfast} >
            <div className={Style.breakfast1}>
               <button className={Style.icon}><img  className={Style.img} src={img1} alt="" /></button>
                <p className={Style.type}>Huevos</p>
            </div>
            <div className={Style.breakfast2}>
                <button className={Style.icon}><img  className={Style.img} src={img2} alt="" /></button>
                <p className={Style.type}>Caldos</p>
            </div>            
        </div>
        
        <h3 className={Style.subtitle}>Desayunos</h3>
        <div className={Style.breakfast} >
            <div className={Style.breakfast1}>
               <button className={Style.icon}><img  className={Style.img} src={img1} alt="" /></button>
                <p className={Style.type}>Huevos</p>
            </div>
            <div className={Style.breakfast2}>
                <button className={Style.icon}><img  className={Style.img} src={img2} alt="" /></button>
                <p className={Style.type}>Caldos</p>
            </div>            
        </div>

        <h3 className={Style.subtitle}>Desayunos</h3>
        <div className={Style.breakfast} >
            <div className={Style.breakfast1}>
               <button className={Style.icon}><img  className={Style.img} src={img1} alt="" /></button>
                <p className={Style.type}>Huevos</p>
            </div>
            <div className={Style.breakfast2}>
                <button className={Style.icon}><img  className={Style.img} src={img2} alt="" /></button>
                <p className={Style.type}>Caldos</p>
            </div>            
        </div>
    </div>
  )
}
