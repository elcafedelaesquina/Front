/* 
import React, { useRef, useState,useEffect } from "react";
import styles from "./style.module.css"
import { Link } from "react-router-dom";

export const OrdersCostumer = () => {
  const Swal = require('sweetalert2')

useEffect(()=>{
    let id=JSON.parse(localStorage.getItem('id_customer'))
    fetch(`https://apimainejetravel.azurewebsites.net/api/Product/Eliminar/${id}`,
    { method: "GET"} )
     .then(response => response.json())
     .then(data => {data})

},[])

const sendMessage=()=>{
    fetch(`https://apimainejetravel.azurewebsites.net/api/Product/Eliminar`,
    { method: "POST"} )
     .then(response => response.json())
     .then(data => {data})

}

  return (
    <div className={styles.cn}>

    
    {<>
          <div className={styles.ProductsContainer}>
            <h2 className={styles.titleContainerProducts} onClick={updateProduct}>Mis Pedidos</h2>

               {dataChats.length>0 && dataProduct.map(product=>{
                return(<>
                </>)
                 
              })
              }
              {!dataProduct.length>0 &&
                <h2>Todavia no tienes Pedidos</h2>
              }
            

         </div>
         

         
         
          
    </>
       }
  </div>
  );
};
 */