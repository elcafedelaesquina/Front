import React, { useEffect, useState } from "react";
import Style from "./CardProductosAdmin.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const CardProductosAdmin = ({ card, setIsVisible, isVisible, deleteProduct }) => {
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
            <p className={Style.price}>${card.price}</p>
            <p className={Style.description}>{card.description}</p>
            <p className={Style.btns}>
              <button>Actualizar</button>
              <button onClick={() => deleteProduct(card.id_product)}>Eliminar</button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
