import React from 'react'
import { Header } from '../../../../layouts/header/header'
import { HeaderCafeteria } from '../../headerCafeteria'
import { FooterCafeteria } from '../../footerCafeteria'
import { ProductCafeteria } from './productCafeteria'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const ProductsCafeteria= () => {
  return (
    <>
    <Header></Header>
    <HeaderCafeteria></HeaderCafeteria>
    <div className={styles.section}>

        <div className={styles.imgProductsCafeteria} >
            
        </div>

        <div className={styles.container}>
            <h2 className={styles.title}>Nuestros Mejores Productos</h2>
            
            <div className={styles.ProductsContainer}>
                <ProductCafeteria key={1}></ProductCafeteria>
                

            </div>
        </div>


    </div>
    <div className={styles.ads}>
      <Link to={'/'}><h2>¿Te interesa tener una Página Web como esta? Pues empieza ya con Nosotros... </h2></Link> 
        
      </div>


    <FooterCafeteria></FooterCafeteria>

    </>  
    )
}

export {ProductsCafeteria}