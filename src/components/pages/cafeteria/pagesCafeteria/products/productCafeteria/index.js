import React from 'react'
import styles from './style.module.css'

const  ProductCafeteria= () => {
  return (
    <>
     {/* {DataTransfer.map(product=>{
                    return(
                        <ProductCafeteria key={producto.id}></ProductCafeteria>

                    )
                })} */}

    <div className={styles.card}>
        <div className={styles['card-img']}>
            <img className={styles.cardProduct}
             src='https://media.informabtl.com/wp-content/uploads/2020/06/561b2d2f-starbucks-y-nestl%C3%A9-lanzan-campa%C3%B1a-para-sus-productos-destinados-al-hogar.jpg' 
             alt=''
            ></img>
        </div>
        <div className={styles['card-info']}>
            <p className={styles['text-title']}>Coffee Starbucks </p>
            <p className={styles['text-body']}>Product description and details and details
            </p>
        </div>
        <div className={styles['card-footer']}>
            <span className={styles['text-title']}>$499.49</span>
            <div className={styles['card-button']}>
            <ion-icon name="bag-add-outline"></ion-icon>
            </div>
        </div>
    </div>
   
    </>
   

    
      
    
  )
}

export {ProductCafeteria}
