import React, {useState} from 'react'
import styles from'./item.module.css'
import { Link } from 'react-router-dom'

const Item = (props) => {

  const [comment,setComment]=useState([])

  const coffee=()=>{
    fetch(`https://apimainejetravel.azurewebsites.net/api/Coffee/Obtener/${props.id}`)
  .then(response => response.json())
  .then(data => {
    let coffee=data[0][0]
    localStorage.setItem('coffee',JSON.stringify(coffee))
/*     window.location.href = 'http://localhost:3000/cafeterias/cafeteria'
 */  })
  }

  const comments=()=>{
    fetch(`https://apimainejetravel.azurewebsites.net/api/Comment/Lista/1/${props.id}`)
          .then(response => response.json())
          .then(data => {
            const { list } = data
            console.log(list)
            setComment(list[0])
  
          })
          
  }

  return (
  <>
    
    <div className={styles.itemCafeterias} onLoad={()=>comments()}>
        <div className={styles.imgItem}><img className={styles.img} src={props.image} alt=''></img></div>
        <div className={styles.infoItem}>
        <Link to={'/cafeterias/cafeteria'}  onClick={coffee}>
            <div className={styles.title}><h4>{props.name}</h4> {/* <ion-icon name="heart"></ion-icon> */}</div>
            </Link>
            <h5>{props.address}</h5>
            <p>{props.description}
            </p>
            <div className={styles.titleBottom}>
              <div className={styles.containerImgComment} onLoad={()=>{comments()}}>
                {comment.map((comment,index)=>{
                  if(index>=5){
                    return null
                  }
                  return(<img className={styles.imgComment} key={comment.id_comment} src={comment.user_image}></img>)
                  
                })}
                <div className={styles.imgCommentPlus}>+{comment.length-5}</div>
              </div>
              <Link to={'/cafeterias/cafeteria'}  onClick={coffee}>
              <button className={styles['learn-more']+ ' '+ styles.button}>
                <span className={styles.circle} aria-hidden="true">
                  <span className={styles.icon + ' ' + styles.arrow}></span>
                </span>
                <span className={styles['button-text']}>Visitar</span>
              </button>
              </Link>
            </div>
        </div>
        
      
    </div>
    
  </>
    
    
    
  )
}

export {Item}
