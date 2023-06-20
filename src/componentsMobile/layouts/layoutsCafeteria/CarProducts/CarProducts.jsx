import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import Style from "./carproducts.module.css";

export const CarProducts = () => {

  const[carrito,setCarrito]=useState([])
  const [total,setTotal]=useState(0)
  useEffect(()=>{
      if(JSON.parse(localStorage.getItem('carrito'))){
          setCarrito(JSON.parse(localStorage.getItem('carrito')) )
      }
      else{
          setCarrito([])
      }
  },[])

  let [sum,setSum]=useState(0)
  const calculate=(precio)=>{  
      sum+=precio
      setTotal(sum)
  }

  const deleteItem=(index)=>{
      let items=JSON.parse(localStorage.getItem('carrito')) 
      items.splice(index,1)
      if(items.length!==0){
          let resta
          resta=total-items[index].price
          setTotal(resta)
      }
      localStorage.setItem('carrito',JSON.stringify(items))
      setCarrito( JSON.parse(localStorage.getItem('carrito')) )
  }

  const purchase=()=>{
      //organizar los productos para ser enviados a la compra 
  fetch('https://localhost:7002/api/MakePurchase/HacerCompra', {
    method: 'POST',
    body:'objeto con info de los productos de la compra'
  })
  .then(response => response.json())
  .then(data=>data)


  }

  return (
    <>
    <div className={Style.carrito}>
        <div className={Style.cerrar}><Link to={`/cafeterias/cafeteria/productos`}><ion-icon name="close-outline"></ion-icon></Link></div>
        <h2 className={Style.titleCarrito}>Carrito</h2>
        <div className={Style.itemsCarrito}>
            {carrito.map((product,index)=>{
               
                return(
                    <div className={Style.itemCarrito} onLoad={()=>{calculate(product.price)}}>
                    <img src={product.image} alt='' className={Style.imgItem}></img>
                    <div className={Style.infoItem}>
                        <h4 className={Style.name}>{product.name}</h4>
                        <p className={Style.description}>Descripción:  <span>{product.description}</span></p>
                        <p>Cantidad: 
                            <select className={Style.quantity}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </p>
                        <p>Precio: $<span >{product.price}</span></p>
                        
                        <div className={Style.btnDelete} onClick={()=>{deleteItem(index)
                         }}><ion-icon name="trash-outline"></ion-icon></div>
                    </div>
                </div>
                )
            })}
            {carrito.length===0 &&  <>
                                      <h2 className={Style.itemsAd}>¡Carrito vacio! Agrega un Producto</h2>
                                      <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className={Style['wheel-and-hamster']}>
                                        <div className={Style.wheel}></div>
                                          <div className={Style.hamster}>
                                              <div className={Style['hamster__body']}>
                                                <div className={Style['hamster__head']}>
                                                  <div className={Style['hamster__ear']}></div>
                                                  <div className={Style['hamster__eye']}></div>
                                                  <div className={Style['hamster__nose']}></div>
                                                </div>
                                                <div className={`${Style['hamster__limb']} ${Style['hamster__limb--fr']}`}></div>
                                                <div className={`${Style['hamster__limb']} ${Style['hamster__limb--fl']}`}></div>
                                                <div className={`${Style['hamster__limb']} ${Style['hamster__limb--br']}`}></div>
                                                <div className={`${Style['hamster__limb']} ${Style['hamster__limb--bl']}`}></div>
                                                <div className={Style['hamster__tail']}></div>
                                              </div>
                                            </div>
                                          <div className={Style.spoke}></div>
                                        </div>
                                    </>
                           
            }
        </div>
        <div>
            <div className={Style.total}>
                <h4>Subtotal:</h4><h4>${total}</h4>
            </div>
            <div className={Style.total}>
                <p>Iva:</p><p>19%</p>
            </div>
            <div className={Style.total}>
                <h4>Total:</h4><h4>${total+total*0.19}</h4>
            </div>
        </div>
        <p className={Style.infoPay}>El pago del envío se ajustará a la compra</p>
        <button className={Style.button} onClick={purchase}>Realizar Compra</button>
    </div>
    </>  
    // <div className={Style.carproducts}>
    //   <h2 className={Style.subtitle}>Tus productos selecionados</h2>
    //   <div className={Style.containerProduct}>
    //     <div className={Style.containerImage}>
    //       <img className={Style.imageProduct} src={imgtest} alt="" />
    //     </div>
    //     <div className={Style.containerInfo}>
    //       <p className={Style.nameProduct}>Nombre producto</p>
    //       <p className={Style.descriptionProduct}>Descripción</p>
    //       <p className={Style.descriptionProduct}>Cantidad:
    //         <select className={Style.quantity}>
    //           <option value={1}>1</option>
    //           <option value={2}>2</option>
    //           <option value={3}>3</option>
    //           <option value={4}>4</option>
    //         </select>
    //       </p>
    //       <p className={Style.descriptionProduct}>Precio: $</p>
    //     </div>
    //   </div>

    //   <p className={Style.txt}>Subtotal:</p>
    //   <p className={Style.txt}>Iva:</p>
    //   <p className={Style.txt}>Total:</p>
    //   <p className={Style.txtSend}>El costo del envio se ajustará al valor de la compra</p>
    //   <div className={Style.containerBtn}>
    //   <button className={Style.btnConfirm}>REALIZAR COMPRA</button>
    //   </div>
    // </div>
  );
};
