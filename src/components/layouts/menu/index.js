import React from 'react'
import styles from'./style.module.css'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div className={styles.containerMenu}>
    <div className={styles.itemMenu}>
        <img src='https://www.fcmmobiliario.com/blog/wp-content/uploads/2019/04/mobiliario-cafeterias-vintage.jpg' alt=""></img>
        <div className={styles.link}>
        <Link to={`/`}><h2>Inicio</h2></Link>
            <p>
            Explora nuestro sitio web y descubre todo lo que ofrecemos en nuestra página de inicio. Obtén información sobre nuestros servicios, productos y novedades más recientes
            </p>
        </div>
    </div>
    <div className={styles.itemMenu}>
        <img src='https://t2.uc.ltmcdn.com/es/posts/6/7/0/nombres_para_cafeterias_en_ingles_51076_2_600.jpg' alt=""></img>
        <div className={styles.link}>
        <Link to={`/cafeterias`}><h2>Cafeterías</h2></Link>
            <p>
            Descubre nuestras acogedoras cafeterías donde podrás disfrutar de deliciosas bebidas y aperitivos. Sumérgete en un ambiente relajante mientras disfrutas de un café de calidad y experimentas la pasión por el café en cada sorbo
            </p>
        </div>
    </div>
    <div className={styles.itemMenu}>
        <img src='https://img.rezdy.com/PRODUCT_IMAGE/146961/Selina_Quindio_RoadTrip_03_2021__chrisgarzoncph__1__lg.jpg' alt=""></img>
        <div className={styles.link}>
        <Link to={`/Fincas`}><h2>Fincas</h2></Link>
            <p>
            Explora nuestras fincas y sumérgete 
            en la belleza de la naturaleza. Descubre entornos tranquilos
             y exuberantes donde puedes disfrutar de actividades al aire libre, 
             como Tours cafeteros, Cabalgatas o simplemente relajarte rodeado
              de paisajes impresionantes

            </p>
        </div>
    </div>

</div>
  )
}

export {Menu}
