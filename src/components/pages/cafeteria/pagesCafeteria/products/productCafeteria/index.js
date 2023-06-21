import React, { useRef } from 'react'
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
          
            setData(data.list[0])
          
        }
          
          )
         
          
      },[])
      const [quantity,setQuantity]=useState('')
       const selectQuantity=(e)=>{
        setQuantity(e.target.value)

       }
    const putCarrito=(product)=>{
        
        let validation=JSON.parse(localStorage.getItem('id_customer'))
        if(validation){
            
            let createLocal = JSON.parse(localStorage.getItem('carrito')) || []; 
            let newProduct=product
            newProduct.quantity=parseInt(quantity)
            newProduct.id_product=parseInt(product.id_product)// Parsea la cadena JSON a un array o utiliza un array vacío por defecto
            createLocal.push(newProduct); // Agrega el producto al array
            localStorage.setItem('carrito', JSON.stringify(createLocal));
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto Agregado al Carrito',
                showConfirmButton: false,
                timer: 1500
            })
            
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Inicia sesión para agregar al Carrito',
                showConfirmButton: false,
                timer: 1500
            })
          
        }
        
       
    }
    

  return (
    <>
     {data.length>0 &&  data.map(product=>{
                    return(
                        <>
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
                                <select onChange={selectQuantity} className={styles.quantity} >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                </select>
                                <div className={styles['card-button']} onClick={()=>{putCarrito(product)}}>
                                <ion-icon name="bag-add-outline"></ion-icon>
                                </div>
                            </div>
                        </div>
                        </>
                       

                    )
                })}
        {data.length<=0&&<h2>Esta cafeteria no Tienes productos</h2>}

    </>
   

    
      
    
  )
}

export {ProductCafeteria}
