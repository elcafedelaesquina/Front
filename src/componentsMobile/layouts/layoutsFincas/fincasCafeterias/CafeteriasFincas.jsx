import React from "react";
import Style from "./cafeteriasFincas.module.css";
import { Link } from "react-router-dom";

export const CafeteriasFincas = (prop) => {
  return (
    <Link to={"/"}>
      <div className={Style.div}>
        <img className={Style.img} alt="Finca" src={prop.image} />
      </div>
    </Link>
  );
};
