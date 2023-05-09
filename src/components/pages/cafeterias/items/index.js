import React from 'react'
import styles from'./item.module.css'
import { Link } from 'react-router-dom'

const Item = () => {
  return (
  <>
    <Link to={'/cafeterias/cafeteria'}>
    <div className={styles.itemCafeterias}>
        <div className={styles.imgItem}><img className={styles.img} src='https://concesionariodealimentoscanreyna.com/wp-content/uploads/2021/12/Cafeter%C3%ADas-para-Empresas.jpg' alt=''></img></div>
        <div className={styles.infoItem}>
            <div className={styles.title}><h4>El café de la esquina</h4> <ion-icon name="heart"></ion-icon></div>
            <h5>Salento-Quindio</h5>
            <p>Esta cafeteria esta situada 
               en una esquina en el parque principal de salento, 
               esta tiene una de las grecas más antiguas del pais
            </p>
            <div className={styles.titleBottom}><h5>Last updated 3 mins ago</h5> <div className={styles.ranking}>5,2</div></div>
        </div>
      
    </div>
    </Link>
    
    <div className={styles.itemCafeterias}>
        <div className={styles.imgItem}><img src='https://concesionariodealimentoscanreyna.com/wp-content/uploads/2021/12/Cafeter%C3%ADas-para-Empresas.jpg' alt=''></img></div>
        <div className={styles.infoItem}>
            <div className={styles.title}><h4>El café de la esquina</h4> <ion-icon name="heart"></ion-icon></div>
            <h5>Salento-Quindio</h5>
            <p>Esta cafeteria esta situada 
               en una esquina en el parque principal de salento, 
               esta tiene una de las grecas más antiguas del pais
            </p>
            <div className={styles.titleBottom}><h5>Last updated 3 mins ago</h5> <div className={styles.ranking}>5,2</div></div>
        </div>
      
    </div>
    <div className={styles.itemCafeterias}>
        <div className={styles.imgItem}><img src='https://concesionariodealimentoscanreyna.com/wp-content/uploads/2021/12/Cafeter%C3%ADas-para-Empresas.jpg' alt=''></img></div>
        <div className={styles.infoItem}>
            <div className={styles.title}><h4>El café de la esquina</h4> <ion-icon name="heart"></ion-icon></div>
            <h5>Salento-Quindio</h5>
            <p>Esta cafeteria esta situada 
               en una esquina en el parque principal de salento, 
               esta tiene una de las grecas más antiguas del pais
            </p>
            <div className={styles.titleBottom}><h5>Last updated 3 mins ago</h5> <div className={styles.ranking}>5,2</div></div>
        </div>
      
    </div>

    
    

  </>
    
    
    
  )
}

export {Item}
