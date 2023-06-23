import React, { useEffect, useState,useRef } from 'react';
import styles from './style.module.css';
import { Ordenes } from '../verOrdenes';
import { Link, useNavigate } from 'react-router-dom';
import { HubConnectionBuilder } from '@microsoft/signalr';


const ChatAdmin = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages,setMessages] = useState([])
  const navigate = useNavigate();
  const [load,setLoad]=useState([]);
  const containerRef = useRef(null);
  const [image_customer,setImage_customer] = useState('');
  const [name_customer,setName_customer] = useState('');
  


useEffect(()=>{
    try{
      //obtener el id de la cafeteria y pasarlo para filtrar los productos de una cafeteria
      
     
        let id_chat=JSON.parse(localStorage.getItem("id_chat"))
        let image=JSON.parse(localStorage.getItem("image_customer"))
        let name=JSON.parse(localStorage.getItem("name_customer"))
        setImage_customer(image)
        setName_customer(name)
        
        
      
        fetch(`https://apimainejetravel.azurewebsites.net/api/Chat/DetailsChats/${id_chat}`)
        .then(response => response.json())
        .then(data => {
          setMessages(data.list[0])
            /* setData(data)  */
        })

      

  }
  catch(e){
      console.log(e)

  }
  containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    

  },[load])
  const [textMessage,setTextMessage]=useState('')
  const changeMessage=(e)=>{
    setTextMessage(e.target.value)
  }
  let id_admin=JSON.parse(localStorage.getItem("id_admin"))
    let id_customer=JSON.parse(localStorage.getItem("id_customer"))
  const dataAddGroup = {Id_admin: id_admin,Id_customer: JSON.parse(id_customer)}
  const dataMessage={
    Message:textMessage,
    Type_user:1,
    Id_admin: id_admin,
    Id_costumer:JSON.parse(id_customer)
  }
  console.log(dataMessage)
  useEffect(() => {
    
    const connection = new HubConnectionBuilder()
      .withUrl('https://apimainejetravel.azurewebsites.net/chatHub') // Reemplaza '/chatHub' con la URL del punto de conexión de tu servidor SignalR
      .withAutomaticReconnect()
      .build();
 
    connection.start()
      .then(() => {
        console.log('Conexión exitosa');
        // Aquí puedes realizar acciones adicionales después de establecer la conexión
          connection.invoke('AddToGroup', dataAddGroup)
          .then(() => {
             console.log('Mensaje enviado al servidor');
             // Realiza acciones adicionales después de enviar el mensaje
          })
          .catch(error => {
             console.error('Error al enviar el mensaje:', error);
          });
 
 
      })
      .catch(error => {
        console.error('Error de conexión:', error);
        
      });
 
      connection.Closed += async (error) =>
     {
       // Espera un tiempo antes de intentar la reconexión
       
     
        // Intenta reconectar
       await connection.StartAsync();
     };
 
      
      connection.on('SendAllUserGroup', message => {
       console.log('Mensaje recibido:', message);
       setLoad([])

       // Actualizar el estado de tu componente o realizar acciones adicionales con el mensaje recibido
     });
      
       connection.on('SendMessageCustomer', message => {
       console.log('Mensaje recibido:', message);
       // Actualizar el estado de tu componente o realizar acciones adicionales con el mensaje recibido
     });
     connection.on('SendAllUserGroupPack', message => {
       console.log('Mensaje recibido:', message);
       // Actualizar el estado de tu componente o realizar acciones adicionales con el mensaje recibido
     });
     connection.on('JoinConnection', message => {
       console.log('Mensaje recibido:', message);
       // Actualizar el estado de tu componente o realizar acciones adicionales con el mensaje recibido
     });
 
 
    // Desconectar la conexión al desmontar el componente
    return () => {
      //connection.stop();
    };
  }, []);

  const toggleModal = () => {
    localStorage.removeItem("id_chat")
    navigate('/ordenes')
    setIsOpen(!isOpen);
  };
  

 

  const sendMessage = () => {
    const connection = new HubConnectionBuilder()
  .withUrl('https://apimainejetravel.azurewebsites.net/chatHub') 
  .withAutomaticReconnect() // Reemplaza '/chatHub' con la URL del punto de conexión de tu servidor SignalR
  .build();

  connection.start()
  .then(() => {
    console.log('Conexión exitosa');
    // Aquí puedes realizar acciones adicionales después de establecer la conexión
   
      connection.invoke('AddToGroup', dataAddGroup)
      .then(() => {
         console.log('Mensaje enviado al servidor');
         // Realiza acciones adicionales después de enviar el mensaje
      })
      .catch(error => {
         console.error('Error al enviar el mensaje:', error);
      });

      connection.invoke('SendMessage',dataMessage)
      .then(() => {
        console.log(dataMessage)
         console.log('MENSAJE ENVIAR');
         // Realiza acciones adicionales después de enviar el mensaje
      })
      .catch(error => {
         console.error('Error al enviar el mensaje:', error);
      });

  })
  .catch(error => {
    console.error('Error de conexión:', error);
    connection.start()
    
  });
     
connection.on('SendAllUserGroup', message => {
      console.log('Mensaje recibido:', message);
      // Actualizar el estado de tu componente o realizar acciones adicionales con el mensaje recibido
      setLoad([])
    });
connection.on('SendError', message => {
      console.log('Mensaje recibido:', message);
      // Actualizar el estado de tu componente o realizar acciones adicionales con el mensaje recibido
    });

connection.on('SendMessageCustomer', message => {
      console.log('Mensaje recibido para cliente:', message);
      // Actualizar el estado de tu componente o realizar acciones adicionales con el mensaje recibido
    });


    
  };
  
  

  return (<>
      <div>

    {isOpen && (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
            <img src={image_customer} className={styles.imgChat} alt=''></img> 
            <h2 className={styles.titleChat}>{name_customer}</h2>
            <button className={styles.closeBtn} onClick={toggleModal} >
              <Link to={'ordenes'}><ion-icon name="close"></ion-icon></Link>
            </button>

            </div>
            <div className={styles.containerMessage}>
              {
                messages.map((message=>{
                  let date=message.date_crt
                  let newDate=date.split(' ')
                  return(
                  <>
                  {message.type_message===1 && message.type_user===2 && (
                    
                    <div key={message.details_chat} ref={containerRef} className={styles.messagePurchase}>
                      <h3>Orden de Compra:<span></span></h3>
                      <div className={styles.containerItems}>
                       
                        {JSON.parse(message.message).map((product)=>{

                          return(
                            <div className={styles.messageItem}>
                              <img src={product.image} alt=""></img>
                              <p>Nombre: <span>{product.name}</span></p>
                              <p>Cantidad: <span>{product.quantity}</span></p>
                              <p>Total: <span>{product.price*product.quantity }</span></p>
                            </div>
                          )
                        })}
                      
                      </div>
                      {/* <h4>Total:
                        
                         </h4> */}
                    </div>

                  )}
                  { message.type_message===2 &&message.type_user===2   &&(
                    <div key={message.details_chat} ref={containerRef} className={styles.messageOne}>
                      <div className={styles.message}>
                        <p className={styles.messageText}>{message.message}</p>
                        <p className={styles.dateMessage}>{newDate[1]}</p>
                      </div> 
                  
                    </div>

                  )}
                  
                  { message.type_message===2 && message.type_user===1 &&(
                    <div key={message.details_chat} ref={containerRef} className={styles.messageTwo}>
                      <div className={styles.message}>
                        <p className={styles.messageTextTwo}>{message.message}</p>
                        <p className={styles.dateMessage}>{newDate[1]}</p>
                      </div>     
                    </div>

                  )

                  }
                  
                  </>

                  )
                }))

              }


            </div>
            
            <div className={styles.form} ref={containerRef} onClick={sendMessage}>
              <textarea
                placeholder="Escribe un mensaje..."
                value={textMessage}
                onChange={changeMessage}
                className={styles.textarea}
              />
              <button type="submit" className={styles.submitBtn}>
                <ion-icon name="arrow-redo"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      )}
      </div>



              <Ordenes></Ordenes>
  </>

  );
};

export {ChatAdmin};