import React, { useEffect, useState } from "react";
import Style from "./AdminChats.module.css";
import { HubConnectionBuilder } from '@microsoft/signalr';
import { NavBar } from "../../../layouts/navbar/Navbar";
import { Chat } from "../../../layouts/layoutsCafeteria/Chat/Chat";

export const AdminChats = () => {
  const [data, setData] = useState([]);

const dataAddGroup = {Id_admin: "1092455367",Id_customer: 1}
const dataMessage={
  Message:'mensaje',
  Type_user:2,
  Id_admin:"1092455367",
  Id_costumer:1
}

const getChatsAdmin = async () => {
    await fetch("https://apimainejetravel.azurewebsites.net/api/Chat/AdminChats/1092455367")
      .then((response) => response.json())
      .then((data) => {
          const { list } = data;
          setData(list[0]);
      });
  };


  useEffect(() => {
    getChatsAdmin()


    // const connection = new HubConnectionBuilder()
    //   .withUrl('https://apimainejetravel.azurewebsites.net/chatHub') // Reemplaza '/chatHub' con la URL del punto de conexión de tu servidor SignalR
    //   .withAutomaticReconnect()
    //   .build();

    // connection
    //   .start()
    //   .then(() => {
    //     console.log('Conexión exitosa');
    //     // Aquí puedes realizar acciones adicionales después de establecer la conexión
    //     connection
    //       .invoke('AddToGroup', dataAddGroup)
    //       .then(() => {
    //         console.log('Mensaje enviado al servidor');
    //         // Realiza acciones adicionales después de enviar el mensaje
    //       })
    //       .catch(error => {
    //         console.error('Error al enviar el mensaje:', error);
    //       });
    //   })
    //   .catch(error => {
    //     console.error('Error de conexión:', error);
    //   });

    // connection.on('SendAllUserGroup', message => {
    //   console.log('Mensaje recibido:', message);
    //   // Actualizar el estado de tu componente o realizar acciones adicionales con el mensaje recibido
    // });
    // connection.on('SendAllUserGroupPack', message => {
    //   console.log('Mensaje recibido:', message);
    //   // Actualizar el estado de tu componente o realizar acciones adicionales con el mensaje recibido
    // });
    // connection.on('SendMessageAdmin', message => {
    //   console.log('Mensaje recibido para administrador:', message);
    //   // Actualizar el estado de tu componente o realizar acciones adicionales con el mensaje recibido
    // });
    // connection.on('JoinConnection', message => {
    //   console.log('Mensaje recibido:', message);
    //   // Actualizar el estado de tu componente o realizar acciones adicionales con el mensaje recibido
    // });

    // connection.Closed += async error => {
    //   // Espera un tiempo antes de intentar la reconexión
    // //   await Task.Delay(TimeSpan.FromSeconds(5));

    //   // Intenta reconectar
    //   await connection.StartAsync();
    // };

    // // Desconectar la conexión al desmontar el componente
    // return () => {
    //   //connection.stop();
    // };
  }, []);

  const sendMessage = ()=>{
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
    });
    connection.on('SendError', message => {
      console.log('Mensaje recibido:', message);
      // Actualizar el estado de tu componente o realizar acciones adicionales con el mensaje recibido
    });

    connection.on('SendMessageCustomer', message => {
      console.log('Mensaje recibido para cliente:', message);
      // Actualizar el estado de tu componente o realizar acciones adicionales con el mensaje recibido
    });
  }

  return (
    <>
      <NavBar />
      <main className={Style.main}>
          <div className={Style.phone}>
            <div className={Style.phoneHead}>
              <div className={Style.title}> Mis Chats </div>
            </div>
            {data.map((item =>{   
                return(
                <>
                    <div className={Style.phoneBody} key={item.id_chat}>
                        <div className={Style.chat}>
                            <img className={Style.chatAvatar} src={item.image} />
                            <div className={Style.chatInfo}>
                                <div className={Style.contactName}>{item.name} </div>
                                <Chat id_chat={item.id_chat} />
                            </div>
                            <div className={Style.chatStatus}>
                                <div className={Style.chatDate}>{item.date_crt}</div>
                                {/* <div className={`${Style.chatNew} ${Style.grad}`}> New </div> */}
                            </div>
                        </div>
                    </div>
                </>
                )
            }))}

            {/* <div className={Style.phoneFooter} /> */}
        </div>
      </main>
    </>
  );
};
