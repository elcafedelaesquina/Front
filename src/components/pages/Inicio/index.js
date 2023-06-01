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
        <Menu></Menu>

        <div className={styles.imgInicio}>
            <div className={styles.filtro}>
                <h2 className={styles.h2}>Crea tu Tienda virtual con nosotros</h2> 
                <h3 className={styles.h3}>¡Bienvenid@ a nuestra página de inicio! Aquí en nuestro sitio web, nos especializamos en la creación de páginas web para cafeterías y fincas. Te ofrecemos soluciones personalizadas para destacar tu negocio y capturar la esencia de tu café o finca en línea.</h3>
                <Link to={'/PageRegistros'}><button className={styles.button}>Realizar Compra</button></Link>

            </div>
            
        </div>
        <div className={styles.infoGray}>
            <img className={styles.imgInicio}src='https://media.glamour.mx/photos/6190833f2d97bd4c522a9bdb/master/w_1600%2Cc_limit/213165.jpg' alt='h'></img>
           <div className={styles.containerInfo}>
            <h3>"Crea una tienda virtual perfecta para que tus clientes tengan una excelente experiencia"</h3>
            <p>
            Desde el diseño atractivo y funcional de tu página web, hasta la integración de herramientas de reserva y pedidos en línea, te ayudaremos a establecer una presencia en línea impactante que refleje la personalidad y el encanto de tu tienda virtual.
            </p>
            <h5>Última Actualización hace 3min </h5>

           </div>

        </div>
        <div className={styles.containerPlaces}>
            <h2>Tal vez te gusten </h2>
            <h4>visita estos sitios y haz tours cafeteros</h4>
            <div className={styles.containerItems}>
              {/* {DataTransfer.map(item=>{return()})} */}
              {
                data.map((item,index)=>{
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
        <button className={styles.btnSub1 }>$0/Month</button>

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
        <button className={styles.btnSub2 }>$30/Month</button>

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
        <button className={styles.buttonSub }>$50/Month</button>

      </div>
    </div>
       
    </div>
  )
}

export {ContentHome}
