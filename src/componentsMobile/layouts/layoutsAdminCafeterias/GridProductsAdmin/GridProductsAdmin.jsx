import React, { useState, useEffect } from "react";
import Style from "./gridProductsAdmin.module.css";

export const GridProductsAdmin = ({valores, cardId, setIsVisible, isVisible }) => {
  return (
    <div className={Style.gridContainer}>
      {valores.map((item) => (
        <div
          className={Style.product}
          key={item.id_product}
          onClick={() => {
            setIsVisible(!isVisible)
            cardId(item)
          }}>
          <img src={item.image} alt="image product" className={Style.image} />
          {item.name}
        </div>
      ))}
    </div>
  );
};
