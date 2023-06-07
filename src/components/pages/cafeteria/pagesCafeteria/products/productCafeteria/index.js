import React from 'react'
import styles from './style.module.css'
import { useEffect,useState } from 'react'



const  ProductCafeteria= () => {
    const Swal = require('sweetalert2')
    const [data,setData]=useState([])
    useEffect(()=>{
        let coffee=JSON.parse(localStorage.getItem('coffee'))
        //obtener el id de la cafeteria y pasarlo para filtrar los productos de una cafeteria
        fetch(`https://apimainejetravel.azurewebsites.net/api/Product/Lista/${coffee.id_coffee}`)
        .then(response => response.json())
        .then(data => {
          setData(data.list[0])})
         
          
      },[])
       console.log(data) 
    const putCarrito=(product)=>{
        let createLocal = JSON.parse(localStorage.getItem('carrito')) || []; // Parsea la cadena JSON a un array o utiliza un array vacío por defecto
        createLocal.push(product); // Agrega el producto al array
        localStorage.setItem('carrito', JSON.stringify(createLocal));
        console.log(createLocal);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto Agregado al Carrito',
            showConfirmButton: false,
            timer: 1500
          })
       
    }
    

  return (
    <>
     {data.map(product=>{
                    return(
                        <div key={product.id} className={styles.card}>
                            <div className={styles['card-img']}>
                                <img className={styles.cardProduct}
                                src={product.image}
                                alt=''
                                ></img>
                            </div>
                            <div className={styles['card-info']}>
                                <p className={styles['text-title']}>{product.name} </p>
                                <p className={styles['text-body']}>{product.description}
                                </p>
                            </div>
                            <div className={styles['card-footer']}>
                                <span className={styles['text-title']}>${product.price}</span>
                                <div className={styles['card-button']} onClick={()=>{putCarrito(product)}}>
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </div>
                            </div>
                        </div>
                       

                    )
                })}

    </>
   

    
      
    
  )
}

export {ProductCafeteria}
