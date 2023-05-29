import React, { useEffect,useState } from 'react'
import styles from './style.module.css'
import { Link } from 'react-router-dom'


 const HomeCafeteria = () => {
  const [coffee,setCoffee]=useState(JSON.parse(localStorage.getItem('coffee')))
  useEffect(()=>{
    let data=JSON.parse(localStorage.getItem('coffee'))
    setCoffee(data)
    console.log(data)
    
  },[])
  return (
    <div className={styles.home}>
      <div className={styles.section}>
          <div className={styles.slider}>
          <div className={styles.slide}><img className={styles.slideImg}  src='https://mexicorutamagica.mx/wp-content/uploads/2021/06/cafeterias-mas-famosas-del-mundo.jpg' alt=''></img></div>
          <div className={styles.slide}><img className={styles.slideImg} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpxk5bSlsWR5Hxe3TwkRtW3FwCqwYpA29iA&usqp=CAU' alt=''></img></div>
          <div className={styles.slide}><img className={styles.slideImg} src='https://m.media-amazon.com/images/I/81+fcigeNMS._AC_UF894,1000_QL80_.jpg' alt=''></img></div>
          <div className={styles.slide}><img className={styles.slideImg} src='https://ae01.alicdn.com/kf/Sbb35b5f72e95428ea498d4252b4f952d6/Papel-Tapiz-de-caf-pintado-a-mano-Mural-de-decoraci-n-Industrial-caf-t-de-la.jpg' alt=''></img></div>
          <div className={styles.slide}>
            <h2 className={styles.cafeteriaTitle}>{coffee.name}</h2>
            <h3>Los mejores cafés de colombia a tu alcance</h3>
          </div>
          
        </div>
        <div className={styles.infoCafeteria}>
          <h2>Pagina Web administrable para Cafés, Pastelerías y Restaurantes</h2>
          <p>Un lugar agradable en donde podrá disfrutar el mejor Café…             
              Demo de Página web administrable para Cafés o Restaurantes, 
              desarrollada en WordPress, con páginas como La Carta, Reservas, 
              Galería de imágenes y Página contactos con Formulario de consultas y mapa de 
              ubicación, enlaces a Redes sociales y botón para Chat de Whatsapp.
          </p>

        </div>
        <div className={styles.ImgHome}>

          <img className={styles.imgHome} src='https://universidadlaconcordia.edu.mx/blog/wp-content/uploads/2022/08/ULC_tipos-de-restaurantes.jpg' alt=''></img>
          <h2 className={styles.filterHome}>El mejor lugar para disfrutar tu Café</h2>
        </div>
        
        <div className={styles.homeCarta}>
            <h3> .............   <span >Nuestra Carta</span>   ..............</h3>
            <div className={styles.itemHome}>
              <img className={styles.imgFocus} src='https://www.elespectador.com/resizer/Z28ceEm87lkRDk4QKJtw55k0nQk=/arc-anglerfish-arc2-prod-elespectador/public/LY3ZTJZS5ZBUJL63BODAZ72L7U.png' alt=''></img>
              <h4>Cafés</h4>

            </div>
            <div className={styles.itemHome}>
              <img className={styles.imgFocus} src='https://media-cdn.tripadvisor.com/media/photo-s/1b/bf/56/03/nuestras-bebidas-frias.jpg' alt=''></img>
              <h4>Otras 
                Bebidas
                </h4>

            </div>
            <div className={styles.itemHome}>
              <img className={styles.imgFocus} src='https://d100mj7v0l85u5.cloudfront.net/s3fs-public/WhatsApp-Image-2021-10-22-at-3.04.14-PM.jpeg' alt=''></img>
              <h4>Panaderia</h4>

            </div>
            <div className={styles.itemHome}>
              <img className={styles.imgFocus} src='https://www.cubahora.cu/uploads/resources/images/2018/03/27/desayunar-huevo.jpg' alt=''></img>
              <h4>Desayunos</h4>

            </div>
            <h3> .............   <span >Productos Destacados</span>   ..............</h3>
           
            
        </div>
        <div className={styles.homeProduct}>
        
          <div className={styles.imgProduct}>
            <img className={styles.imgProduct}  src='https://revistadiners.com.co/wp-content/uploads/2022/10/cafe_taza_receta_1200x800_2022-1-optimized.jpg' alt=''></img>
          </div>
          <div className={styles.infoProduct}>
            <h3>Prueba el mejor Café</h3>
            <h4>Si disfrutas el Café, no puedes dejar de probar nuestro 
              Cappuccino o Expresso, asi como los mejores acompañamientos 
              como Galletas o Kekes especiales que tenemos para ti .
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

export {HomeCafeteria};