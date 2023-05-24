import React from 'react'
import styles from './style.module.css'
import { Menu } from '../../layouts/menu'
import {Link} from 'react-router-dom'

const ContentHome = () => {
  return (
    <div className="content-home">
        <Menu></Menu>

        <div className={styles.imgInicio}>
            <div className={styles.filtro}>
                <h2>Crea tu Tienda virtual con nosotros</h2> 
                <h3>lorem ipsum dolor sit amet, consectet</h3>
                <Link to={'/PageRegistros'}><button className={styles.BtnEmpieza}>Empieza con nosotros</button></Link>

            </div>
            
        </div>
        <div className={styles.infoGray}>
            <img src='https://media.glamour.mx/photos/6190833f2d97bd4c522a9bdb/master/w_1600%2Cc_limit/213165.jpg' alt='h'></img>
           <div className={styles.containerInfo}>
            <h3>Card Title</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
            maximus, nulla ut commodo sagittis, 
            sapien dui mattis dui, non 
            pulvinar lorem felis nec erat
            </p>
            <h5>Last updated 3 mins ago</h5>

           </div>

        </div>
        <div className={styles.containerPlaces}>
            <h2>Tal vez te gusten </h2>
            <h4>visita estos sitios y haz tours cafeteros</h4>
            <div className={styles.containerItems}>
            <div className={styles.item}>
                    <img src='https://www.altonivel.com.mx/wp-content/uploads/2018/03/cafeteria.jpg' alt='hola'></img>
                    <div className={styles.infoPlaces}>
                        <h3>El Ocaso finca café</h3>
                        <div className="stars"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon></div>
                      <h5>visita estos sitios y haz tours cafeteros</h5>

                    </div>
                    
                </div>
                <div className={styles.item}>
                    <img src='https://www.altonivel.com.mx/wp-content/uploads/2018/03/cafeteria.jpg' alt='hola'></img>
                    <div className={styles.infoPlaces}>
                        <h3>El Ocaso finca café</h3>
                        <div className="stars"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon></div>
                      <h5>visita estos sitios y haz tours cafeteros</h5>

                    </div>
                    
                </div>
                <div className={styles.item}>
                    <img src='https://www.altonivel.com.mx/wp-content/uploads/2018/03/cafeteria.jpg' alt='hola'></img>
                    <div className={styles.infoPlaces}>
                        <h3>El Ocaso finca café</h3>
                        <div className="stars"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon></div>
                      <h5>visita estos sitios y haz tours cafeteros</h5>

                    </div>
                    
                </div>
                <div className={styles.item}>
                    <img src='https://www.altonivel.com.mx/wp-content/uploads/2018/03/cafeteria.jpg' alt='hola'></img>
                    <div className={styles.infoPlaces}>
                        <h3>El Ocaso finca café</h3>
                        <div class="stars"><ion-icon name="star" ></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon></div>
                      <h5>visita estos sitios y haz tours cafeteros</h5>

                    </div>
                   
                    
                </div>

               
          
            </div>
        </div>
        <div className={styles.containerSubs}>
      
      <div className={styles.sub}>
        <div className={styles.sub1} ><ion-icon name="rocket-outline"></ion-icon></div>
        <h3>Prueba Gratis por un mes</h3>
        <ul className={styles.listSub}>
          <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
          <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
          <li><ion-icon name="close-outline"></ion-icon>crear productos</li>
          <li><ion-icon name="close-outline"></ion-icon>crear productos</li>
        </ul>
        <button className={styles.btnSub1 }>$0/Month</button>

      </div>
      <div className={styles.sub}>
        <div className={styles.sub2}><ion-icon name="telescope-outline"></ion-icon></div>
        <h3>Suscripción   Basica</h3>
        <ul className={styles.listSub}>
          <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
          <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
          <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
          <li><ion-icon name="close-outline"></ion-icon>crear productos</li>
        </ul>
        <button className={styles.btnSub2 }>$30/Month</button>

      </div>
      <div className={styles.sub}>
        <div className={styles.headerSub}><ion-icon name="diamond-outline"></ion-icon></div>
        <h3>Suscripción premium</h3>
        <ul className={styles.listSub}>
          <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
          <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
          <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
          <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
        </ul>
        <button className={styles.buttonSub }>$50/Month</button>

      </div>
    </div>
       
    </div>
  )
}

export {ContentHome}
