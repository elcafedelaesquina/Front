import React, { useEffect, useState } from 'react'
import styles from './style.module.css'

const Compras = () => {
    /* const [data,setData]=useState([]) */
    useEffect(()=>{
        try{
            let customer=JSON.parse(localStorage.getItem('id_customer'))

            //obtener el id de la cafeteria y pasarlo para filtrar los productos de una cafeteria
            if(customer){
              fetch(`https://apimainejetravel.azurewebsites.net/chatHub`)
            .then(response => response.json())
            .then(data => {
              console.log(data)
                /* setData(data)  */
              
            })}

        }
        catch(e){
            console.log(e)

        }
    },[])
  return (
    <div className={styles.cn}>
        <div className={styles.ProductsContainer}>
            <h2 className={styles.titleContainerProducts} >Mis Ordenes</h2>

        </div>
    </div>
  )
}

export {Compras}
