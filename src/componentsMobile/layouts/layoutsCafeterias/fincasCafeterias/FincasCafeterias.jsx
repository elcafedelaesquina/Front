import React from "react";
import Style from "./fincasCafeterias.module.css";
import { Link } from "react-router-dom";

export const FincasCafeterias = (prop) => {
  return (
    <Link to={"/"}>
      <div className={Style.div}>
        <img className={Style.img} alt="Cafeteria" src={prop.image} />
      </div>
    </Link>
  );
};
