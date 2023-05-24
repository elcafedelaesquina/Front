import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { HeaderCafeteria } from '../../headerCafeteria'
import { FooterCafeteria } from '../../footerCafeteria'
import { Header } from '../../../../layouts/header/header'
import { Link } from 'react-router-dom'
import animacion from '../home/style.module.css'

const CartaCafeteria = () => {
    let x=JSON.parse(localStorage.getItem('coffee'))
    const [estado,setEstado]=useState([])
    const categorizedData = {};
    useEffect(()=>{
        
    fetch(`https://apimainejetravel.azurewebsites.net/api/MenuProduct/Lista/${x.id_coffee}`)
    .then(response => response.json())
    .then(data => {
      data.list[0].forEach(item => {
          const category = item.category;
        
          if (!categorizedData[category]) {
            categorizedData[category] = [];
          }
        
          categorizedData[category].push(item);
        });
        const array = Object.values(categorizedData)
        setEstado(array)
      
    })
    },[])
   
    estado.map((item,index)=>{
        console.log(item)
       /*  console.log(index) */
    })
  ;

   
  return (
    <>  
        <Header></Header>
        <HeaderCafeteria></HeaderCafeteria>
            <div className={styles.sectionCarta}>
            <div className={styles.imgCarta}>
                <img src='https://img.freepik.com/vector-premium/diseno-plantilla-menu-cafeteria-restaurante-menu-cafeteria-folleto-comida_514781-262.jpg?w=2000' alt=''></img>
                <h2>Nuestra Carta</h2>
                <h3>Para que disfrutes de nuestros mejores Productos...</h3>
            </div>
            <div className={styles.containerCarta}>
                    {
                        estado.map(item =>(
                            
                            <div className={styles.itemCarta}> 
                            <h3 className={styles.titleCarta}>{item[0].category}</h3>{
                            item.map(producto=>(
                                                  
                                    
                                    <div className={styles.itemPriceOne}><p>{producto.name}</p><p>${producto.price}</p></div>
                                    

                            )
                            )}
                            </div>
                            
                        ))

                    }
                
                
            </div>        
        </div>
        <div className={animacion.ads}>
            <Link to={'/'}><h2>¿Te interesa tener una Página Web como esta? Pues empieza ya con Nosotros... </h2></Link> 
        
        </div>
        <FooterCafeteria></FooterCafeteria>
    </>

  )
}

export { CartaCafeteria}
