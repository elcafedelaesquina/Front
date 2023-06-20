import React,{useState,useEffect} from 'react'
import styles from './style.module.css'
import { Menu } from '../../layouts/menu'
import {Link} from 'react-router-dom'


const ContentHome = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('https://apimainejetravel.azurewebsites.net/api/Coffee/Lista')
    .then(response => response.json())
    .then(data => {
      const {coffeeList}=data
      setData(coffeeList[0])})
      
  },[])
  return (
    <div className="content-home">
              <Link to={'/cafeterias/cafeteria'} ><div className={styles.whatsapp}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png' alt=''className={styles.whatsappImg} ></img></div></Link>
        <div className={styles.imgInicio}>
            <div className={styles.filtro}>
                <h2 className={styles.h2}>Crea tu Tienda virtual con nosotros</h2> 
                <h3 className={styles.h3}>¡Bienvenid@ a nuestra página de inicio! Aquí en nuestro sitio web, nos especializamos en la creación de páginas web para cafeterías y fincas. Te ofrecemos soluciones personalizadas para destacar tu negocio y capturar la esencia de tu café o finca en línea.</h3>
                <Link to={'/PageRegistros'}><button className={styles.button}>Empieza Con Nosotros</button></Link>

            </div>
            
        </div>
        <div className={styles.infoGray}>
          <h2 className={styles.infoTitle}>¿Por qué Eje Travel?</h2>
            <div className={styles.itemInfo}>
              <img className={styles.itemImg} src='https://sense-digital.co/wp-content/uploads/2020/08/man-1-medium.png'></img>
              <h2>Tu satisfacción es garantizada</h2>
              <p>El desarrollo y diseño de nuestras tiendas es realizado por profesionales.</p>
              <p>¡Comienza a vender ahora!</p>
            </div>
            <div className={styles.itemInfo}>
              <img className={styles.itemImg} src='https://sense-digital.co/wp-content/uploads/2020/08/customer-service-medium.png' ></img>
              <h2>Te damos atención personalizada</h2>
              <p>Desde el momento cero tendrás a tu disposición un asesor comercial para resolver tus dudas y un líder de desarrollo para dar soporte a tu sitio cuando sea necesario</p>
            </div>
            <div className={styles.itemInfo}>
              <img className={styles.itemImg} src='https://sense-digital.co/wp-content/uploads/2020/08/website-design-medium.png'></img>
              <h2>¡Al final te enseñamos a editar por ti mismo!</h2>
              <p>La tecnología usada para crear tu tienda (WordPress) te permitirá editar hasta el más mínimo detalle a través de un editor intuitivo . Tecnología usada por grandes marcas en todo el mundo (Disney, MTV, Blomberg, Microsoft)</p>
           
            </div>
            <div className={styles.brands}>
              <div className={styles.carusel}>
              <div className={styles.brand}>
                <img src='https://seeklogo.com/images/J/Juan_Valdez_Cafe-logo-9D9A5C862E-seeklogo.com.png' alt=''></img>
              </div>
              <div className={styles.brand}>
                <img src='https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png' alt=''></img>
              </div>
              <div className={styles.brand}>
                <img src='https://quindio.federaciondecafeteros.org/app/uploads/sites/10/2020/09/Logo-plan-cosecha-2023-04-300x300.png' alt=''></img>
              </div>
              <div className={styles.brand}>
                <img src='https://www.nestleprofessional.pl/sites/default/files/2022-06/Nescafe%20logo.png' alt=''></img>
              </div>
              <div className={styles.brand}>
                <img src='https://images.rappi.pe/marketplace/cafquindoporlafinca_mt_nc-1677275568340.jpeg' alt=''></img>
              </div>
              <div className={styles.brand}>
                <img src='https://seeklogo.com/images/J/Juan_Valdez_Cafe-logo-9D9A5C862E-seeklogo.com.png' alt=''></img>
              </div>
              <div className={styles.brand}>
                <img src='https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png' alt=''></img>
              </div>
              <div className={styles.brand}>
                <img src='https://quindio.federaciondecafeteros.org/app/uploads/sites/10/2020/09/Logo-plan-cosecha-2023-04-300x300.png' alt=''></img>
              </div>
              <div className={styles.brand}>
                <img src='https://www.nestleprofessional.pl/sites/default/files/2022-06/Nescafe%20logo.png' alt=''></img>
              </div>
              <div className={styles.brand}>
                <img src='https://images.rappi.pe/marketplace/cafquindoporlafinca_mt_nc-1677275568340.jpeg' alt=''></img>
              </div>
              
              </div>
            </div>

        </div>
      <div>
      <div className={styles.containerMenu}>     
        <h2>Nuestro servicios a tu disposición</h2> 
          <Menu></Menu>
      </div>
      <div className={styles.containerSubs}>
      
      <div className={styles.sub}>
        <div className={styles.sub1} ><ion-icon name="rocket-outline"></ion-icon></div>
        <h3>Prueba Gratis por un Mes</h3>
        <ul className={styles.listSub}>
          <li><ion-icon name="checkmark-outline"></ion-icon>Crear Tienda</li>
          <li><ion-icon name="checkmark-outline"></ion-icon>Crear productos</li>
          <li><ion-icon name="close-outline"></ion-icon>Editar Información</li>
          <li><ion-icon name="close-outline"></ion-icon>Eliminar Información</li>
        </ul>
        <button className={styles.btnSub1 }>$0/Mes</button>

      </div>
      <div className={styles.sub}>
        <div className={styles.headerSub}><ion-icon name="diamond-outline"></ion-icon></div>
        <h3>Suscripción Premium</h3>
        <ul className={styles.listSub}>
         <li><ion-icon name="checkmark-outline"></ion-icon>Crear Tienda</li>
          <li><ion-icon name="checkmark-outline"></ion-icon>Crear productos</li>
          <li><ion-icon name="checkmark-outline"></ion-icon>Editar Información</li>
          <li><ion-icon name="checkmark-outline"></ion-icon>Eliminar Información</li>
        </ul>
        <button className={styles.buttonSub }>$50/Mes</button>

      </div>
      <div className={styles.sub}>
        <div className={styles.sub2}><ion-icon name="telescope-outline"></ion-icon></div>
        <h3>Suscripción  Básica</h3>
        <ul className={styles.listSub}>
          <li><ion-icon name="checkmark-outline"></ion-icon>Crear Tienda</li>
          <li><ion-icon name="checkmark-outline"></ion-icon>Crear productos</li>
          <li><ion-icon name="checkmark-outline"></ion-icon>Editar Información</li>
          <li><ion-icon name="close-outline"></ion-icon>Eliminar Información</li>
        </ul>
        <button className={styles.btnSub2 }>$30/Mes</button>

      </div>
      </div>
        <div className={styles.containerPlaces}>
            <h2>Tal vez te gusten </h2>
            <h4>Visita estos sitios y Vive la mejor experiencia del Café </h4>
            <div className={styles.containerItems}>
              {
                data.reverse().map((item,index)=>{
                  if(index>=4){
                    return null
                  }
                  return(
                    <div className={styles.card}>
                    <img src={item.image} alt='' className={styles.imgCard}>
                     
                    </img>
                    <div className={styles.card_content}>
                      <span className={styles.card_title}>{item.name}</span>
                      <span className={styles.card_subtitle}>{item.address}</span>
                      <p className={styles.card_description}>{item.description}</p>
                    </div>
                  </div>                 
                  )
                })
              }
            </div>
      </div>
   
    
    </div>
    </div>

        

  )
}

export {ContentHome}
