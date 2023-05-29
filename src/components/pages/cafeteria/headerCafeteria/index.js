import React,{useEffect,useState}from 'react'
import styles from './style.module.css'
import {Link} from 'react-router-dom'

 const HeaderCafeteria = () => {
  const [coffee,setCoffee]=useState(JSON.parse(localStorage.getItem('coffee')))
  useEffect(()=>{
    let data=JSON.parse(localStorage.getItem('coffee'))
    setCoffee(data)
    console.log(data)
    
    
  },[])
  let name=coffee.name
  return (
    <div className={styles.header} >
        <div className={styles.logo}>
        
           <img src={coffee.image} className={styles.logoImg} alt=''></img>
           <h3>{name.toUpperCase()}</h3>
          </div>
           
           
        <ul className={styles.ul}>
            <li className={styles.li}><Link to={`/cafeterias/cafeteria`}><ion-icon name="storefront-outline"></ion-icon>Inicio</Link></li>
            <li className={styles.li}><Link to={`/cafeterias/cafeteria/carta`}><ion-icon name="fast-food-outline"></ion-icon>Carta</Link></li>
            <li className={styles.li}><Link to={`/cafeterias/cafeteria/productos`}><ion-icon name="bag-add-outline"></ion-icon>Productos</Link></li>
            <li className={styles.li}><ion-icon name="cart-outline"></ion-icon>Compras</li>
        </ul>
    </div>
  )
}

export{HeaderCafeteria};
