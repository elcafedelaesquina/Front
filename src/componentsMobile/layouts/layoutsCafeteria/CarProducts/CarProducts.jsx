import React from "react";
import Style from "./carproducts.module.css";

export const CarProducts = () => {
  const imgtest = "https://res.cloudinary.com/dmrq9n2im/image/upload/v1680041398/El%20caf%C3%A9%20de%20la%20esquina/download_lhgibn.jpg";

  return (
    <div className={Style.carproducts}>
      <h2 className={Style.subtitle}>Tus productos selecionados</h2>
      <div className={Style.containerProduct}>
        <div className={Style.containerImage}>
          <img className={Style.imageProduct} src={imgtest} alt="" />
        </div>
        <div className={Style.containerInfo}>
          <p className={Style.nameProduct}>Nombre producto</p>
          <p className={Style.descriptionProduct}>Descripción</p>
          <p className={Style.descriptionProduct}>Cantidad:
            <select className={Style.quantity}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </p>
          <p className={Style.descriptionProduct}>Precio: $</p>
        </div>
      </div>

      <p className={Style.txt}>Subtotal:</p>
      <p className={Style.txt}>Iva:</p>
      <p className={Style.txt}>Total:</p>
      <p className={Style.txtSend}>El costo del envio se ajustará al valor de la compra</p>
      <div className={Style.containerBtn}>
      <button className={Style.btnConfirm}>REALIZAR COMPRA</button>
      </div>
    </div>
  );
};
