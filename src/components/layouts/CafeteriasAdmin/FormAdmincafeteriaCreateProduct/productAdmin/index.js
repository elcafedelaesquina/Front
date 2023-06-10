import React from 'react'
import styles from './style.module.css'
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react'



const ProductAdmin = ({data,deleteProp}) => {
    
   

    return (
        <div className={styles.card}>
            <div className={styles['card-img']}>
                <img className={styles.cardProduct}
                    src={data.image}
                    alt=''
                ></img>
            </div>
            <div className={styles['card-info']}>
                <p className={styles['text-title']}>{data.name} </p>
                <p className={styles['text-body']}>{data.description}
                </p>
            </div>
            <div className={styles['card-footer']}>
                <span className={styles['text-title']}>${data.price}</span>
                
                <div className={styles['card-button-update']} >                    
                    <ion-icon name="color-wand" onClick={()=>{deleteProp[1](data.id_product)}}></ion-icon>
                   
                </div>
                <div className={styles['card-button-delete'] } onClick={()=>{deleteProp[0](data.id_product)}}>                    
                    <ion-icon name="trash-outline" ></ion-icon>
                </div>
            </div>
        </div>


    )
}

export { ProductAdmin };
