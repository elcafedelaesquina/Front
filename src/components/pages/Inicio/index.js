import React from 'react'
import './style.css'

import {Link} from 'react-router-dom'

const ContentHome = () => {
  return (
    <div className="content-home">
        <div className='containerMenu'>
            <div className='itemMenu'>
                <img src='https://www.fcmmobiliario.com/blog/wp-content/uploads/2019/04/mobiliario-cafeterias-vintage.jpg' alt=""></img>
                <div className='link'>
                <Link to={`/`}><h2>Inicio</h2></Link>
                    <p>
                        visita estos sitios y haz tours cafeteros
                        visita estos sitios y haz tours cafeteros
                        visita estos sitios y haz tours cafeteros
                        visita estos sitios y haz tours cafeteros
                    </p>
                </div>
            </div>
            <div className='itemMenu'>
                <img src='https://t2.uc.ltmcdn.com/es/posts/6/7/0/nombres_para_cafeterias_en_ingles_51076_2_600.jpg' alt=""></img>
                <div className='link'>
                <Link to={`/cafeterias`}><h2>Cafeterias</h2></Link>
                    <p>
                        visita estos sitios y haz tours cafeteros
                        visita estos sitios y haz tours cafeteros
                        visita estos sitios y haz tours cafeteros
                        visita estos sitios y haz tours cafeteros
                    </p>
                </div>
            </div>
            <div className='itemMenu'>
                <img src='https://img.rezdy.com/PRODUCT_IMAGE/146961/Selina_Quindio_RoadTrip_03_2021__chrisgarzoncph__1__lg.jpg' alt=""></img>
                <div className='link'>
                <Link to={`/`}><h2>Fincas</h2></Link>
                    <p>
                        visita estos sitios y haz tours cafeteros
                        visita estos sitios y haz tours cafeteros
                        visita estos sitios y haz tours cafeteros
                        visita estos sitios y haz tours cafeteros
                    </p>
                </div>
            </div>
            <div className='itemMenu'>
                <img src='https://milcienmillas.com/wp-content/uploads/2020/09/Casa-ti%CC%81pica-Salento-Quindi%CC%81o-Colombia-milcienmillas-1024x768.jpg?6bfec1&6bfec1' alt=""></img>
                <div className='link'>
                <Link to={`/`}><h2>Hoteles</h2></Link>
                    <p>
                        visita estos sitios y haz tours cafeteros
                        visita estos sitios y haz tours cafeteros
                        visita estos sitios y haz tours cafeteros
                        visita estos sitios y haz tours cafeteros
                    </p>
                </div>
            </div>
            
           
  
            
         
        </div>
        <div className='imgInicio'>
            <div className='filtro'>
                <h2>Crea tu Tienda virtual con nosotros</h2> 
                <h3>lorem ipsum dolor sit amet, consectet</h3>
                <button>Empieza con nosotros</button>

            </div>
            
        </div>
        <div className="infoGray">
            <img src='https://media.glamour.mx/photos/6190833f2d97bd4c522a9bdb/master/w_1600%2Cc_limit/213165.jpg' alt='h'></img>
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
                    <img src='https://www.altonivel.com.mx/wp-content/uploads/2018/03/cafeteria.jpg' alt='hola'></img>
                    <h3>El Ocaso finca café</h3>
                    <div class="stars"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon></div>
                    <h5>visita estos sitios y haz tours cafeteros</h5>
                </div>
                <div className='item'>
                    <img src='https://www.altonivel.com.mx/wp-content/uploads/2018/03/cafeteria.jpg' alt='hola'></img>
                    <h3>El Ocaso finca café</h3>
                    <div class="stars"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon></div>
                    <h5>visita estos sitios y haz tours cafeteros</h5>
                </div>
                <div className='item'>
                    <img src='https://www.altonivel.com.mx/wp-content/uploads/2018/03/cafeteria.jpg' alt='hola'></img>
                    <h3>El Ocaso finca café</h3>
                    <div class="stars"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon></div>
                    <h5>visita estos sitios y haz tours cafeteros</h5>
                </div>
                <div className='item'>
                    <img src='https://www.altonivel.com.mx/wp-content/uploads/2018/03/cafeteria.jpg' alt='hola'></img>
                    <h3>El Ocaso finca café</h3>
                    <div class="stars"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon></div>
                    <h5>visita estos sitios y haz tours cafeteros</h5>
                </div>
               
          
            </div>
        </div>
       
    </div>
  )
}

export {ContentHome}
