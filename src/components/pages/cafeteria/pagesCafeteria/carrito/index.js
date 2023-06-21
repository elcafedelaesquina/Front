import React, { useEffect,useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
import { ChatModal } from '../../../../layouts/chat'
import { HubConnectionBuilder } from '@microsoft/signalr';

import { ProductsCafeteria } from '../products'


const Carrito = () => {
    const Swal = require('sweetalert2')
    const[carrito,setCarrito]=useState([])
    const [total,setTotal]=useState(0) 
    const [load,setLoad]=useState([])
    const [idAdmin,setIdAdmin]=useState('')
    const[idCustomer,setIdCustomer]=useState('')
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('carrito'))){
            setCarrito(JSON.parse(localStorage.getItem('carrito')) )
            
        }
        else{
            setCarrito([])
        }
        let customer=JSON.parse(localStorage.getItem('id_customer')) 
        setIdCustomer(customer)
        let coffee=JSON.parse(localStorage.getItem('coffee')) 
        fetch(`https://apimainejetravel.azurewebsites.net/api/Admin/Lista/1/${coffee.id_coffee}`)
        .then(response => response.json())
        .then(data => {
          console.log(data.list[0][0])
            setIdAdmin(data.list[0][0].id_admin)
  
          })

          console.log(idAdmin)
          console.log(idCustomer)
        

    },[])
    const deleteItem=(index)=>{
        console.log(index)
        let items=JSON.parse(localStorage.getItem('carrito')) 
        
        if(items.length!==0){
            let resta
            let multi=items[index].price*items[index].quantity
            resta=total-multi
            setTotal(resta)
        }else{
            
                setTotal(0)
            
        }
        items.splice(index,1)
        localStorage.setItem('carrito',JSON.stringify(items))
        setCarrito( JSON.parse(localStorage.getItem('carrito')) )
       
        setLoad([])
        

    }
   
   
   
    const purchase=()=>{
        let lista=JSON.parse(localStorage.getItem('carrito')) || []
        console.log(lista)
        
       console.log( lista)
        const packPurchase = {room: idAdmin+idCustomer,
                      ObjSale: {Id_user: 1,Id_coffee: 2,Iva: 19},
                      ListDetailsSale: lista
                    }
        const dataAddGroup = {Id_admin: idAdmin,Id_customer: parseInt(idCustomer)}

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
      
            connection.invoke('SendDataPurchase',packPurchase)
            .then(() => {
               console.log('COMPRA ENVIADA AL CHAT');
               // Realiza acciones adicionales después de enviar el mensaje
               Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Pedido realizado con éxito',
                showConfirmButton: false,
                timer: 2500
            })
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
    


    }
    useEffect(()=>{
        let car=JSON.parse(localStorage.getItem('carrito'))
        
        if(car.length !==0){
            let suma=0
            for (let item of car  ){
                console.log(item.price)
                suma=item.price *item.quantity+suma
                
                
    
            }
            setTotal(suma)
        }else{
            setTotal(0)
        }

    },[load])
    const showAlert=()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'No tienes ningún producto en el carrito',
            showConfirmButton: false,
            timer: 2500
        })

    }

  return (
    <>
    <div className={styles.carrito}>
        <div className={styles.cerrar}>{<Link to={`/cafeterias/cafeteria/productos`}><ion-icon name="close-outline"></ion-icon></Link>}</div>
        <h2 className={styles.titleCarrito}>Carrito</h2>
        <div className={styles.itemsCarrito}>
            {carrito.map((product,index)=>{
               
                return(
                    <div className={styles.itemCarrito} /* onLoad={()=>{calculate(product.price)}} */>
                    <img src={product.image} alt='' className={styles.imgItem}></img>
                    <div className={styles.infoItem}>
                        <h4 className={styles.name}>{product.name}</h4>
                        <p className={styles.description}>Descripción:  <span>{product.description}</span></p>
                        <p>Cantidad: 
                            {product.quantity}
                            
                        </p>
                        <p>Precio: $<span >{product.price}</span></p>
                        
                        <div className={styles.btnDelete} onClick={()=>{deleteItem(index)}}><ion-icon name="trash-outline"></ion-icon></div>
                    </div>
                </div>
                )
            })}
            {carrito.length===0 &&  <>
                                    <h2 className={styles.itemsAd}>¡Carrito vacio! Agrega un Producto</h2>
                                     <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className={styles['wheel-and-hamster']}>
                                        <div className={styles.wheel}></div>
                                        <div className={styles.hamster}>
                                            <div className={styles['hamster__body']}>
                                            <div className={styles['hamster__head']}>
                                                <div className={styles['hamster__ear']}></div>
                                                <div className={styles['hamster__eye']}></div>
                                                <div className={styles['hamster__nose']}></div>
                                            </div>
                                            <div className={`${styles['hamster__limb']} ${styles['hamster__limb--fr']}`}></div>
                                            <div className={`${styles['hamster__limb']} ${styles['hamster__limb--fl']}`}></div>
                                            <div className={`${styles['hamster__limb']} ${styles['hamster__limb--br']}`}></div>
                                            <div className={`${styles['hamster__limb']} ${styles['hamster__limb--bl']}`}></div>
                                            <div className={styles['hamster__tail']}></div>
                                            </div>
                                        </div>
                                        <div className={styles.spoke}></div>
                                    </div>
                                    </>
                           
    }

   
            
        </div>
        <div>
            <div className={styles.total}>
                <h4>Subtotal:</h4><h4>${total}</h4>
            </div>
            <div className={styles.total}>
                <p>Iva:</p><p>19%</p>
            </div>
            <div className={styles.total}>
                <h4>Total:</h4><h4>${total+total*0.19}</h4>
            </div>
        </div>
        <p className={styles.infoPay}>El pago del envío se ajustará a la compra</p>
        {carrito.length>0 && <button className={styles.button} onClick={purchase}>Realizar Compra</button>}
        {!carrito.length>0 && <button className={styles.button} onClick={showAlert}>Realizar Compra</button>}


    </div>
    

    <ProductsCafeteria></ProductsCafeteria>
    


    </>  
    )
}

export {Carrito}
