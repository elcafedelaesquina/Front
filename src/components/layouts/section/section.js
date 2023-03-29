import React from 'react'
import { Menu } from './menu'
import './section.css'
import logo from './uno.png'

const Section = () => {
  return (
    <div className='section'>
        <Menu></Menu>
        <div className='containerCarousel'>
            <h1>"Nuestros Servicios a tu disposición"</h1>
            <div className="carousel-container">
            {/* <div className='title_carrusel'>
                    <h2>Cafeterias que Trabajan con nostros</h2>
                    <p>Al crear tu tienda virtual con nosotros podras recibir más visitas e incrementar las ventas en tu negocio</p>
                </div> */}
             
                <ul className="carousel">
                
                    
                
                    <li><img src="https://media.istockphoto.com/id/1286692956/photo/empty-cafe-interior-with-chairs-and-tables.jpg?s=612x612&w=0&k=20&c=8rBA3ZWw6Cc4usSNj4QOkXRMfclmOlOU_HpH9emZLRA="></img></li>
                    <li><img src="https://media.istockphoto.com/id/847023200/photo/empty-wooden-table-for-present-product-on-coffee-shop-or-soft-drink-bar-blur-background-with.jpg?s=612x612&w=0&k=20&c=Btufwfec5UQNjkZx-h9RceAa2XyhMsT6aVFVn5bKLN4="></img></li>
                    <li><img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhZmV8ZW58MHx8MHx8&w=1000&q=80"></img></li>
                    <li><img src="https://img.freepik.com/premium-photo/restaurant-cafe-coffee-shop-interior-with-people-abstract-defocused-blur-background_293060-3973.jpg?w=2000"></img></li>
                    <li><img src="https://media.istockphoto.com/id/1286692956/photo/empty-cafe-interior-with-chairs-and-tables.jpg?s=612x612&w=0&k=20&c=8rBA3ZWw6Cc4usSNj4QOkXRMfclmOlOU_HpH9emZLRA="></img></li>
                    <li><img src="https://media.istockphoto.com/id/847023200/photo/empty-wooden-table-for-present-product-on-coffee-shop-or-soft-drink-bar-blur-background-with.jpg?s=612x612&w=0&k=20&c=Btufwfec5UQNjkZx-h9RceAa2XyhMsT6aVFVn5bKLN4="></img></li>
                    <li><img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhZmV8ZW58MHx8MHx8&w=1000&q=80"></img></li>
                    <li><img src="https://img.freepik.com/premium-photo/restaurant-cafe-coffee-shop-interior-with-people-abstract-defocused-blur-background_293060-3973.jpg?w=2000"></img></li>
                </ul>
                
            </div>
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
