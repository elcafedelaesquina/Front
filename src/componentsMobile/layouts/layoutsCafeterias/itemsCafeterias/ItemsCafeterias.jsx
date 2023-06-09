import React from "react";
import Style from "./itemsCafeterias.module.css";
import { Link } from "react-router-dom";

export const ItemsCafeterias = (props) => {

  const lenght = 35;

  const textLimite = (text) => {
    if (text <=  lenght ) {
      return text
    }else{
      return text.slice(0, lenght) + '...'
    }
  }

  return (
    <Link to={"/cafeterias/cafeteria"}>
      <div className={Style.itemCafeterias}>
        <div className={Style.imgItem}>
          <img className={Style.img} src={props.image} alt="" />
        </div>
        <div className={Style.infoItem}>
          <div className={Style.title}>
            <h4 className={Style.h4}>{props.name}</h4>
          </div>
          <h5 className={Style.h5}> {props.address} </h5>
          <p className={Style.p}>{textLimite(props.description)}</p>
        </div>
      </div>
    </Link>
  );
};
