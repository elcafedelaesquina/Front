import React from 'react'
import styles from'./item.module.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
  <>
    <Link to={'/cafeterias/cafeteria'}>
    <div className={styles.itemCafeterias}>
        <div className={styles.imgItem}><img className={styles.img} src={props.image} alt=''></img></div>
        <div className={styles.infoItem}>
            <div className={styles.title}><h4>{props.name}</h4> <ion-icon name="heart"></ion-icon></div>
            <h5>{props.address}</h5>
            <p>{props.description}
            </p>
            <div className={styles.titleBottom}><h5>Last updated 3 mins ago</h5> <div className={styles.ranking}>5,2</div></div>
        </div>
      
    </div>
    </Link>
    
   

    
    

  </>
    
    
    
  )
}

export {Item}
