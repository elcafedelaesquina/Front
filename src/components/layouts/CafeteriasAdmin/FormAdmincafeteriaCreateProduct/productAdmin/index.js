import React from 'react'
import styles from './style.module.css'
import { useEffect, useState } from 'react'



const ProductAdmin = ({data}) => {
    const Swal = require('sweetalert2')
   

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
                <div className={styles['card-button']} >
                    <ion-icon name="bag-add-outline"></ion-icon>
                </div>
            </div>
        </div>


    )
}

export { ProductAdmin };
