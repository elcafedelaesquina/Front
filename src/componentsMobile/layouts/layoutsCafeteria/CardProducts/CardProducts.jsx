import React, { useEffect, useState } from "react";
import Style from "./CardProducts.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";


export const CardProducts = ({ card, setIsVisible, isVisible }) => {

  console.log(card)

  const Swal = require('sweetalert2')
  const [data,setData]=useState([])
  const [dataProduct, setDataProduct] = useState()
  useEffect(()=>{
      let coffee=JSON.parse(localStorage.getItem('coffee'))
      //obtener el id de la cafeteria y pasarlo para filtrar los productos de una cafeteria
      fetch(`https://apimainejetravel.azurewebsites.net/api/Product/Lista/${coffee.id_coffee}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        // console.log(data.list[0])
          setData(data.list[0])
        data.list.map((product)=>{
          const filterProduct = product.filter((item)=> item.id_product === card.id_product)
          console.log(filterProduct[0])
          setDataProduct(filterProduct[0])
        })
      })
    },[card])

  const putCarrito=(product)=>{
      let createLocal = JSON.parse(localStorage.getItem('carrito')) || []; // Parsea la cadena JSON a un array o utiliza un array vacío por defecto
      createLocal.push(product); // Agrega el producto al array
      localStorage.setItem('carrito', JSON.stringify(createLocal));
      console.log(createLocal);
      Swal.fire({
          position: 'top',
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
            {/* {data.length>0 && data.map(product=>( */}
                <div className={Style['card-button']} onClick={()=>{putCarrito(dataProduct)}}>
                  <ion-icon name="bag-add-outline" />
                </div>
            {/* ))}  */}
          </div>
        </div>
      )}
    {data.length==0&&<h2>Esta cafeteria no Tienes productos</h2>}
    </>
  );
};
