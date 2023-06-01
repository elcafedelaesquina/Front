import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

import { ProductsCafeteria } from '../products'


const Carrito = () => {

  return (
    <>
    <div className={styles.carrito}>
        <div className={styles.cerrar}><Link to={`/cafeterias/cafeteria/productos`}><ion-icon name="close-outline"></ion-icon></Link></div>
        <h2 className={styles.titleCarrito}>Carrito</h2>
        <div className={styles.itemsCarrito}>
            <div className={styles.itemCarrito}>
                <img src={'https://underarmourcol.vtexassets.com/arquivos/ids/500461-800-1200?v=637963745915370000&width=800&height=1200&aspect=true'} alt='' className={styles.imgItem}></img>
                <div className={styles.infoItem}>
                    <h4 className={styles.name}>Tenis Under Armour</h4>
                    <p>Descripción:  <span>muy bonitos</span></p>
                    <p>Cantidad: 
                        <select className={styles.quantity}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </p>
                    <p>Precio: $<span>150.000</span></p>
                    <div className={styles.btnDelete}><ion-icon name="trash-outline"></ion-icon></div>
                </div>
            </div>
            <div className={styles.itemCarrito}>
                <img src={'https://underarmourcol.vtexassets.com/arquivos/ids/500461-800-1200?v=637963745915370000&width=800&height=1200&aspect=true'} alt='' className={styles.imgItem}></img>
                <div className={styles.infoItem}>
                    <h4 className={styles.name}>Tenis Under Armour</h4>
                    <p>Descripción:  <span>muy bonitos</span></p>
                    <p>Cantidad: 
                        <select className={styles.quantity}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </p>
                    <p>Precio: $<span>150.000</span></p>
                    <div className={styles.btnDelete}><ion-icon name="trash-outline"></ion-icon></div>
                </div>
            </div>
            <div className={styles.itemCarrito}>
                <img src={'https://underarmourcol.vtexassets.com/arquivos/ids/500461-800-1200?v=637963745915370000&width=800&height=1200&aspect=true'} alt='' className={styles.imgItem}></img>
                <div className={styles.infoItem}>
                    <h4 className={styles.name}>Tenis Under Armour</h4>
                    <p>Descripción:  <span>muy bonitos</span></p>
                    <p>Cantidad: 
                        <select className={styles.quantity}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </p>
                    <p>Precio: $<span>150.000</span></p>
                    <div className={styles.btnDelete}><ion-icon name="trash-outline"></ion-icon></div>
                </div>
            </div>
            
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
        <p>El pago del envio se ajustará a la compra</p>
        <button className={styles.button}>Realizar Compra</button>


    </div>

    <ProductsCafeteria></ProductsCafeteria>
    


    </>  
    )
}

export {Carrito}
