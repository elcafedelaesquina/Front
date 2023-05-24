import React from 'react'
import styles from './style.module.css'
import { HeaderFinca } from '../../headerFinca' 
import { FooterFinca } from '../../footerFinca'
import { Header } from '../../../../layouts/header/header'
import { Link } from 'react-router-dom'
import animacion from '../Home/style.module.css'

const TousFincas = () => {
  return (
    <>  
        <Header></Header>
        <HeaderFinca></HeaderFinca>
            <div className={styles.sectionCarta}>
            <div className={styles.imgCarta}>
                <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/06/f5/f9/finca-el-ocaso-salento.jpg?w=1200&h=-1&s=1' alt=''></img>
                <h2>Nuestros Tour</h2>
                <h3>Para que disfrutes de nuestros mejores Tours...</h3>
            </div>
            <div className={styles.containerCarta}>
                <div className={styles.itemCarta}>
                    <h3 className={styles.titleCarta}>Coffee tour tradicional</h3>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>

                </div>
                <div className={styles.itemCarta}>
                    <h3 className={styles.titleCarta}>Coffee tour tradicional</h3>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>

                </div>
            </div>        
        </div>
        <div className={animacion.ads}>
            <Link to={'/'}><h2>¿Te interesa tener una Página Web como esta? Pues empieza ya con Nosotros... </h2></Link> 
        
        </div>
        <FooterFinca></FooterFinca>
    </>

  )
}

export {TousFincas}
