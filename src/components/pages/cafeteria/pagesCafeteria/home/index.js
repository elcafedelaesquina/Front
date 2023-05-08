import React from 'react'
import styles from './style.module.css'

 const HomeCafeteria = () => {
  return (
    <div className={styles.home}>
      <div className={styles.section}>
          <div className={styles.slider}>
          <div className={styles.slide}><img src='https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800' alt=''></img></div>
          <div className={styles.slide}><img src='https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg' alt=''></img></div>
          <div className={styles.slide}><img src='https://us.123rf.com/450wm/aprillrain/aprillrain2209/aprillrain220900194/191556087-imagen-abstracta-de-los-cielos-abiertos-el-camino-el-camino-al-cielo-ilustraci%C3%B3n-de-alta-calidad.jpg?ver=6' alt=''></img></div>
          <div className={styles.slide}><img src='https://i.pinimg.com/736x/b0/e9/11/b0e91175f0772af0f80ab3a544587443.jpg' alt=''></img></div>
          <div className={styles.slide}>
            <h2 className={styles.cafeteriaTitle}>El cafe de la esquina</h2>
            <h3>los mejores cafes de colombia a tu alcance</h3>
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
              <img src='https://www.elespectador.com/resizer/Z28ceEm87lkRDk4QKJtw55k0nQk=/arc-anglerfish-arc2-prod-elespectador/public/LY3ZTJZS5ZBUJL63BODAZ72L7U.png' alt=''></img>
              <h4>Cafes</h4>

            </div>
            <div className={styles.itemHome}>
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/1b/bf/56/03/nuestras-bebidas-frias.jpg' alt=''></img>
              <h4>Otras 
                bebidas
                </h4>

            </div>
            <div className={styles.itemHome}>
              <img src='https://d100mj7v0l85u5.cloudfront.net/s3fs-public/WhatsApp-Image-2021-10-22-at-3.04.14-PM.jpeg' alt=''></img>
              <h4>Panaderia</h4>

            </div>
            <div className={styles.itemHome}>
              <img src='https://www.cubahora.cu/uploads/resources/images/2018/03/27/desayunar-huevo.jpg' alt=''></img>
              <h4>Desayunos</h4>

            </div>
           
            
        </div>
        <div className={styles.homeProduct}>
          <div className={styles.imgProduct}>
            <img src='https://revistadiners.com.co/wp-content/uploads/2022/10/cafe_taza_receta_1200x800_2022-1-optimized.jpg' alt=''></img>
          </div>
          <div className={styles.infoProduct}>
            <h3>Prueba el mejor Café</h3>
            <h4>Si disfrutas el Café, no puedes dejar de probar nuestro 
              Cappuccino o Expresso, asi como los mejores acompañamientos 
              como Galletas o Kekes especiales que tenemos para ti .
            </h4>
            <button>Conoce Más</button>
          </div>


        </div>
        
      </div>

      <div className={styles.ads}>
        <h2>¿Te interesa tener una Página Web como esta? Pues empieza ya con Nosotros... </h2>
        
      </div>
      

    </div>
  )
}

export {HomeCafeteria};