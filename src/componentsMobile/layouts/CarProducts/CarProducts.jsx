import React from "react";
import Style from "./carproducts.module.css";

export const CarProducts = () => {
  const imgtest =
    "https://res.cloudinary.com/dmrq9n2im/image/upload/v1680041398/El%20caf%C3%A9%20de%20la%20esquina/download_lhgibn.jpg";

  return (
    <div className={Style.carproducts}>
      <h2 className={Style.subtitle}>Tus productos selecionados</h2>
      <div className={Style.containerProduct}>
        <div className={Style.containerInfo}>
          <p className={Style.nameProduct}>Nombre producto</p>
          <p className={Style.descriptionProduct}>Cantidad selecionada</p>
          <button className={Style.btnPrice}>Valor unidad</button>
        </div>
        <div className={Style.containerImage}>
          <img className={Style.imageProduct} src={imgtest} alt="" />
        </div>
      </div>

      <div className={Style.containerProduct}>
        <div className={Style.containerInfo}>
          <p className={Style.nameProduct}>Nombre producto</p>
          <p className={Style.descriptionProduct}>Cantidad selecionada</p>
          <button className={Style.btnPrice}>Valor unidad</button>
        </div>
        <div className={Style.containerImage}>
          <img className={Style.imageProduct} src={imgtest} alt="" />
        </div>
      </div>

      <div className={Style.containerProduct}>
        <div className={Style.containerInfo}>
          <p className={Style.nameProduct}>Nombre producto</p>
          <p className={Style.descriptionProduct}>Cantidad selecionada</p>
          <button className={Style.btnPrice}>Valor unidad</button>
        </div>
        <div className={Style.containerImage}>
          <img className={Style.imageProduct} src={imgtest} alt="" />
        </div>
      </div>

      <p className={Style.txt}>Total de productos: xx</p>
      <p className={Style.txt}>Valor total: xx</p>
    </div>
  );
};
