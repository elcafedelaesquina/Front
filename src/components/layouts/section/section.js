import React from 'react'
import { Menu } from './menu'
import './section.css'
import logo from './uno.png'

const Section = () => {
  return (
    <div className='section'>
        <Menu></Menu>
        <div className='containerCarrousel'>
            <h1>"Nuestros Servicios a tu disposición"</h1>
            <img src="https://statics-cuidateplus.marca.com/cms/images/cafe-salud.jpg"></img>
        </div>
        <div className="infoGray">
            <img src='https://media.glamour.mx/photos/6190833f2d97bd4c522a9bdb/master/w_1600%2Cc_limit/213165.jpg'></img>
           <div className='containerInfo'>
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
        <div className='containerPlaces'>
            <h2>Tal vez te gusten </h2>
            <h4>visita estos sitios y haz tours cafeteros</h4>
            <div className='containerItems'>
                <div className='item'>
                    <img src='https://www.altonivel.com.mx/wp-content/uploads/2018/03/cafeteria.jpg'></img>
                    <h3>El Ocaso finca café</h3>
                    <div class="stars"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon></div>
                    <h5>visita estos sitios y haz tours cafeteros</h5>
                </div>
                <div className='item'>
                    <img src='https://www.altonivel.com.mx/wp-content/uploads/2018/03/cafeteria.jpg'></img>
                    <h3>El Ocaso finca café</h3>
                    <div class="stars"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon></div>
                    <h5>visita estos sitios y haz tours cafeteros</h5>
                </div>
                <div className='item'>
                    <img src='https://www.altonivel.com.mx/wp-content/uploads/2018/03/cafeteria.jpg'></img>
                    <h3>El Ocaso finca café</h3>
                    <div class="stars"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon></div>
                    <h5>visita estos sitios y haz tours cafeteros</h5>
                </div>
                <div className='item'>
                    <img src='https://www.altonivel.com.mx/wp-content/uploads/2018/03/cafeteria.jpg'></img>
                    <h3>El Ocaso finca café</h3>
                    <div class="stars"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon></div>
                    <h5>visita estos sitios y haz tours cafeteros</h5>
                </div>
            </div>
        </div>
        <div className="containerCards">
            <img src={logo}></img>
           

        </div>
      
    </div>
  )
}

export {Section}
