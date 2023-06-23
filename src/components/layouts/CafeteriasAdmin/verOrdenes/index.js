import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { Link } from 'react-router-dom';

const Ordenes = () => {
  const [chats,setChats]=useState([]);
  const [id_chat,setId_chat]=useState('')
  const [id_admin,setId_admin]=useState('')
    /* const [data,setData]=useState([]) */
    useEffect(()=>{
        try{
            let id_coffee=JSON.parse(localStorage.getItem('id_coffee'))
            

            fetch(`https://apimainejetravel.azurewebsites.net/api/Admin/Lista/1/${id_coffee}`)
            .then(response => response.json())
            .then(data => {
    
              localStorage.setItem('id_admin', JSON.stringify(data.list[0][0].id_admin))
              setId_admin(data.list[0][0].id_admin)
              console.log(data.list[0][0].id_admin)
    
            })

            //obtener el id de la cafeteria y pasarlo para filtrar los productos de una cafeteria
           setTimeout(()=>{
              let id=JSON.parse(localStorage.getItem('id_admin'))
            fetch(`https://apimainejetravel.azurewebsites.net/api/Chat/AdminChats/${id}`)
            .then(response => response.json())
            .then(data => {
              console.log(data)
              setChats(data.list[0])
                /* setData(data)  */
              
            })

           },1000)

        }
        catch(e){
            console.log(e)

        }
    },[])
   /*  const toggleModal = () => {
      setIsOpen(!isOpen);
    }; */
    const showChat=(id,id_customer,image,name)=>{
    


      localStorage.setItem(
        "id_chat",
        JSON.stringify(id)
      );
      localStorage.setItem(
        "id_customer",
        JSON.stringify(id_customer)
      );
      localStorage.setItem(
        "image_customer",
        JSON.stringify(image)
      );
      localStorage.setItem(
        "name_customer",
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
                   <button className={styles.button} onClick={()=>showChat(chat.id_chat,chat.id_customer,chat.image,chat.name)}><Link to={'/chatAdmin'} >Ver Chat</Link> </button>
                    
                  </div>
                )

              })
            }

        </div>
        

       </div>
    </div>
  )
}

export {Ordenes}
