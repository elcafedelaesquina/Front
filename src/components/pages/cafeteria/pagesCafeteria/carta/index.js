import React from 'react'
import styles from './style.module.css'
import { HeaderCafeteria } from '../../headerCafeteria'
import { FooterCafeteria } from '../../footerCafeteria'
import { Header } from '../../../../layouts/header/header'
import { Link } from 'react-router-dom'
import animacion from '../home/style.module.css'

const CartaCafeteria = () => {
  return (
    <>  
        <Header></Header>
        <HeaderCafeteria></HeaderCafeteria>
            <div className={styles.sectionCarta}>
            <div className={styles.imgCarta}>
                <img src='https://img.freepik.com/vector-premium/diseno-plantilla-menu-cafeteria-restaurante-menu-cafeteria-folleto-comida_514781-262.jpg?w=2000' alt=''></img>
                <h2>Nuestra Carta</h2>
                <h3>Para que disfrutes de nuestros mejores Productos...</h3>
            </div>
            <div className={styles.containerCarta}>
                <div className={styles.itemCarta}>
                    <h3 className={styles.titleCarta}>Café</h3>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>

                </div>
                <div className={styles.itemCarta}>
                    <h3 className={styles.titleCarta}>Panaderia</h3>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>

                </div>
                <div className={styles.itemCarta}>
                    <h3 className={styles.titleCarta}>Bebidas Frias</h3>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPriceOne}><p>Latte</p><p>S/. 15.00</p></div>
                    <div className={styles.itemPricetwo}><p>Latte</p><p>S/. 15.00</p></div>

                </div>
                <div className={styles.itemCarta}>
                    <h3 className={styles.titleCarta}>Desayunos</h3>
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
        <FooterCafeteria></FooterCafeteria>
    </>

  )
}

export { CartaCafeteria}
