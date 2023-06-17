import React, { useEffect, useState } from "react";
import Style from "./CardProducts.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";


export const CardProducts = ({ card, setIsVisible, isVisible }) => {
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
          </div>
        </div>
      )}
    </>
  );
};
