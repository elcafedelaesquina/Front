import React from "react";
import Style from "./itemsCafeterias.module.css";
import { Link } from "react-router-dom";

export const ItemsCafeterias = (props) => {
  return (
    <Link to={"/cafeterias/cafeteria"}>
      <div className={Style.itemCafeterias}>
        <div className={Style.imgItem}>
          <img className={Style.img} src={props.image} alt="" />
        </div>
        <div className={Style.infoItem}>
          <div className={Style.title}>
            <h4 className={Style.h4}>{props.name}</h4>
            <ion-icon name="heart"></ion-icon>
          </div>
          <h5 className={Style.h5}> {props.address} </h5>
          <p className={Style.p}>{props.description}</p>
          <div className={Style.titleBottom}>
            <h5 className={Style.h5}>Hace 3 Minutos</h5>
            <div className={Style.ranking}>5,2</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
