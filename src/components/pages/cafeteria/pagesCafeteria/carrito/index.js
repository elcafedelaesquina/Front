import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

import { ProductsCafeteria } from '../products'


const Carrito = () => {
    const[carrito,setCarrito]=useState([])
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('carrito'))){
            setCarrito(JSON.parse(localStorage.getItem('carrito')) )
        }
        else{
            setCarrito([])
        }
        

    },[])

    const deleteItem=(index)=>{
        let items=JSON.parse(localStorage.getItem('carrito')) 
        items.splice(index,1)
        localStorage.setItem('carrito',JSON.stringify(items))
        setCarrito( JSON.parse(localStorage.getItem('carrito')) )
        

    }
    const purchase=()=>{

        //organizar los productos para ser enviados a la compra 


        fetch('https://localhost:7002/api/MakePurchase/HacerCompra', {
      method: 'POST',
      body:'objeto con info de los productos de la compra'
    })
    .then(response => response.json())
    .then(data=>data)


    }

  return (
    <>
    <div className={styles.carrito}>
        <div className={styles.cerrar}><Link to={`/cafeterias/cafeteria/productos`}><ion-icon name="close-outline"></ion-icon></Link></div>
        <h2 className={styles.titleCarrito}>Carrito</h2>
        <div className={styles.itemsCarrito}>
            {carrito.map((product,index)=>{
                return(
                    <div className={styles.itemCarrito}>
                    <img src={product.image} alt='' className={styles.imgItem}></img>
                    <div className={styles.infoItem}>
                        <h4 className={styles.name}>{product.name}</h4>
                        <p className={styles.description}>Descripción:  <span>{product.description}</span></p>
                        <p>Cantidad: 
                            <select className={styles.quantity}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </p>
                        <p>Precio: $<span>{product.price}</span></p>
                        <div className={styles.btnDelete} onClick={()=>{deleteItem(index)}}><ion-icon name="trash-outline"></ion-icon></div>
                    </div>
                </div>
                )
            })}
            {carrito.length===0 &&  <>
                                    <h2 className={styles.itemsAd}>¡Carrito vacio! Agrega un Producto</h2>
                                     <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className={styles['wheel-and-hamster']}>
                                        <div className={styles.wheel}></div>
                                        <div className={styles.hamster}>
                                            <div className={styles['hamster__body']}>
                                            <div className={styles['hamster__head']}>
                                                <div className={styles['hamster__ear']}></div>
                                                <div className={styles['hamster__eye']}></div>
                                                <div className={styles['hamster__nose']}></div>
                                            </div>
                                            <div className={`${styles['hamster__limb']} ${styles['hamster__limb--fr']}`}></div>
                                            <div className={`${styles['hamster__limb']} ${styles['hamster__limb--fl']}`}></div>
                                            <div className={`${styles['hamster__limb']} ${styles['hamster__limb--br']}`}></div>
                                            <div className={`${styles['hamster__limb']} ${styles['hamster__limb--bl']}`}></div>
                                            <div className={styles['hamster__tail']}></div>
                                            </div>
                                        </div>
                                        <div className={styles.spoke}></div>
                                    </div>
                                    </>
                           
    }

   
            
        </div>
        <div>
            <div className={styles.total}>
                <h4>Subtotal:</h4><h4>$150.000</h4>
            </div>
            <div className={styles.total}>
                <p>Iva:</p><p>$15.000</p>
            </div>
            <div className={styles.total}>
                <h4>Total:</h4><h4>$150.000</h4>
            </div>
        </div>
        <p className={styles.infoPay}>El pago del envio se ajustará a la compra</p>
        <button className={styles.button}>Realizar Compra</button>


    </div>

    <ProductsCafeteria></ProductsCafeteria>
    


    </>  
    )
}

export {Carrito}
