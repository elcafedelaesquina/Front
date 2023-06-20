import React, { useEffect, useState } from "react";
import Style from "./CardProducts.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";


export const CardProducts = ({ card, setIsVisible, isVisible }) => {

  const Swal = require('sweetalert2')
  const [data,setData]=useState([])
  useEffect(()=>{
      let coffee=JSON.parse(localStorage.getItem('coffee'))
      //obtener el id de la cafeteria y pasarlo para filtrar los productos de una cafeteria
      fetch(`https://apimainejetravel.azurewebsites.net/api/Product/Lista/${coffee.id_coffee}`)
      .then(response => response.json())
      .then(data => {
          setData(data.list[0])
      })
    },[])

  const putCarrito=(product)=>{
      let createLocal = JSON.parse(localStorage.getItem('carrito')) || []; // Parsea la cadena JSON a un array o utiliza un array vacío por defecto
      createLocal.push(product); // Agrega el producto al array
      localStorage.setItem('carrito', JSON.stringify(createLocal));
      console.log(createLocal);
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto Agregado al Carrito',
          showConfirmButton: false,
          timer: 1500
        }) 
  }
  

  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      {isVisible && (
        <div className={Style.carousel}>
          <div className={Style.containerClose} onClick={() => setIsVisible(!isVisible)} >
            <AiOutlineCloseCircle className={Style.iconCLose} />
          </div>
          <div className={Style.card} key={card.id_product}>
            <div>
              <img className={Style.productImage} src={card.image} alt="product image" />
            </div>
            <h2 className={Style.h2}>{card.name}</h2>
            <p className={Style.price}>Precio: ${card.price}</p>
            <p className={Style.description}>{card.description}</p>
            {data.length>0 &&  data.map(product=>(
                <div className={Style['card-button']} onClick={()=>{putCarrito(product)}}>
                <ion-icon name="bag-add-outline"></ion-icon>
              </div>
            ))} 
          </div>
        </div>
      )}
    {data.length==0&&<h2>Esta cafeteria no Tienes productos</h2>}
    </>
  );
};
