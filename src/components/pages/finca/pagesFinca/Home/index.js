import React from 'react'
import styles from './style.module.css'
import { Link } from 'react-router-dom'

 const HomeFinca = () => {
  return (
    <div className={styles.home}>
      <div className={styles.section}>
          <div className={styles.slider}>
          <div className={styles.slide}><img className={styles.slideImg} src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/06/f5/f9/finca-el-ocaso-salento.jpg?w=1200&h=-1&s=1' alt=''></img></div>
          <div className={styles.slide}><img className={styles.slideImg} src='https://rutasdelpaisajeculturalcafetero.com/wp-content/uploads/2017/07/Finca-El-Ocaso-13.jpg' alt=''></img></div>
          <div className={styles.slide}><img className={styles.slideImg} src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/06/f5/f9/finca-el-ocaso-salento.jpg?w=1200&h=-1&s=1' alt=''></img></div>
          <div className={styles.slide}><img className={styles.slideImg} src='https://rutasdelpaisajeculturalcafetero.com/wp-content/uploads/2017/07/Finca-El-Ocaso-13.jpg' alt=''></img></div>
          <div className={styles.slide}>
            <h2 className={styles.cafeteriaTitle}>Finca El Ocaso</h2>
            <h3>los mejores recorridos de colombia a tu alcance</h3>
          </div>    
        </div>
        <div className={styles.infoCafeteria}>
          <h2>Pagina Web administrable para Fincas Caferetas</h2>
          <p>Un lugar agradable en donde podrá disfrutar de los mejores recorridos…             
              Demo de Página web administrable para Fincas, 
              desarrollada en WordPress, con páginas como La Carta, Reservas, 
              Galería de imágenes y Página contactos con Formulario de consultas y mapa de 
              ubicación, enlaces a Redes sociales y botón para Chat de Whatsapp.
          </p>

        </div>
        <div className={styles.ImgHome}>

          <img className={styles.imgHome} src='https://www.fincaelocasosalento.com/w/wp-content/uploads/2022/11/home-2-80.jpg' alt=''></img>
          <h2 className={styles.filterHome}>El mejor lugar para disfrutar</h2>
        </div>
        
        <div className={styles.homeCarta}>
            <h3> .............   <span >Lo mas Destacado</span>   ..............</h3>
            <div className={styles.itemHome}>
              <img className={styles.imgFocus} src='https://media-cdn.tripadvisor.com/media/photo-m/1280/28/19/b7/35/caption.jpg' alt=''></img>
              <h4>Cafes</h4>

            </div>
            <div className={styles.itemHome}>
              <img className={styles.imgFocus} src='https://lh3.googleusercontent.com/p/AF1QipMZnwFaCmtNlCje57CapkBlpX6Pck3DGlqd_sE=s680-w680-h510' alt=''></img>
              <h4>Nuestro
                  sitio
                </h4>

            </div>
            <div className={styles.itemHome}>
              <img className={styles.imgFocus} src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxqI_fedJrZOAAUoL80PzM-xKOZMKSy0EdgHlSdORM13HT514v' alt=''></img>
              <h4>Panaderia</h4>

            </div>
            <div className={styles.itemHome}>
              <img className={styles.imgFocus} src='https://scontent.feoh2-1.fna.fbcdn.net/v/t1.6435-9/108382776_1898170260332392_2072568592902953679_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeE3nWFgoelLjxbIp3D1vTsmV4-YZUyusedXj5hlTK6x54BHZ7gM4sczF8toVQHjKqILOcRVf77ZJvX6WUX0nF5N&_nc_ohc=g0kYLd8sgX4AX8rzNwp&_nc_ht=scontent.feoh2-1.fna&oh=00_AfD7F4ChIhKlKbv5ToOMvNN0JBDwH8qeEglfjFejYS4zKQ&oe=64951188' alt=''></img>
              <h4>Desayunos</h4>

            </div>
            <h3> .............   <span >Productos Destacados</span>   ..............</h3>
           
            
        </div>
        <div className={styles.homeProduct}>
        
          <div className={styles.imgProduct}>
            <img className={styles.imgProduct}  src='https://tripincolombia.com/resources/uploaded/products/258/Caf__%20Ocaso.jpg' alt=''></img>
          </div>
          <div className={styles.infoProduct}>
            <h3>Prueba el mejor Café y los mejores Tour</h3>
            <h4>El Coffee Tour que ofrece la Finca El Ocaso es un 
              recorrido de aproximadamente 1 hora en donde se explica 
              el proceso del café interactuando con la plantación.
            </h4>
            <button className={styles.btninfoProduct}>Conoce Más</button>
          </div>
        </div>  
      </div>
      <div className={styles.ads}>
      <Link to={'/'}><h2>¿Te interesa tener una Página Web como esta? Pues empieza ya con Nosotros... </h2></Link> 
        
      </div>
      

    </div>
  )
}

export {HomeFinca};