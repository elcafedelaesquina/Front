import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { ChatModal } from '../../layouts/chat'
import { Link } from 'react-router-dom';

const Compras = () => {
  const [chats,setChats]=useState([]);
  const [id_chat,setId_chat]=useState('')
    /* const [data,setData]=useState([]) */
    useEffect(()=>{
        try{
            let customer=JSON.parse(localStorage.getItem('id_customer'))

            //obtener el id de la cafeteria y pasarlo para filtrar los productos de una cafeteria
            if(customer){
              fetch(`https://apimainejetravel.azurewebsites.net/api/Chat/CustomerChats/${customer}`)
            .then(response => response.json())
            .then(data => {
              console.log(data)
              setChats(data.list[0])
                /* setData(data)  */
              
            })}

        }
        catch(e){
            console.log(e)

        }
    },[])
   /*  const toggleModal = () => {
      setIsOpen(!isOpen);
    }; */
    const showChat=(id,id_admin,image,name)=>{
      localStorage.setItem(
        "id_chat",
        JSON.stringify(id)
      );
      localStorage.setItem(
        "id_admin",
        JSON.stringify(id_admin)
      );
      localStorage.setItem(
        "image_admin",
        JSON.stringify(image)
      );
      localStorage.setItem(
        "name_admin",
        JSON.stringify(name)
      );
      setId_chat(id)
      
      

    }
  return (
    
    <div className={styles.cn}>
      <div className={styles.iconX}>
       <Link to={'/'}><ion-icon name="close"></ion-icon></Link>
      </div>
       <div className={styles.container}>
       <div className={styles.ProductsContainer}>
            <h2 className={styles.titleContainerProducts} >Mis Chats</h2>

            {
              chats.map((chat)=>{
                return(
                  <div key={chat.id_chat} className={styles.card}>
                    <div className={styles.cardBorderTop}></div>
                    <div className={styles.img}>
                      <img src={chat.image} className={styles.image} alt=''></img>
                    </div>
                    <p className={styles.job}>Chat Con:</p>
                    <span>{chat.name}</span>
                   <button className={styles.button} onClick={()=>showChat(chat.id_chat,chat.id_admin,chat.image,chat.name)}><Link to={'/chat'} >Ver Chat</Link> </button>
                    
                  </div>
                )

              })
            }

        </div>
        

       </div>
    </div>
  )
}

export {Compras}
