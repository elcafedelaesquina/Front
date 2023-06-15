import React, { useEffect, useState } from "react";
import Style from "./ProductosCafeteria.module.css";
import { HeaderAdminCafeterias } from "../../../layouts/layoutsAdminCafeterias/HeaderAdminCafeterias/HeaderAdminCafeterias";
import { CardProductosAdmin } from "../../../layouts/layoutsAdminCafeterias/CardProductosAdmin/CardProductosAdmin";
import { GridProductsAdmin } from "../../../layouts/layoutsAdminCafeterias/GridProductsAdmin/GridProductsAdmin";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FormAdmincafeteriaCreateProduct } from "../../../layouts/layoutsAdminCafeterias/FormAdmincafeteriaCreateProduct/FormAdmincafeteriaCreateProduct";

export const ProductosCafeteria = () => {
  let items = JSON.parse(localStorage.getItem("id_coffee")); // ${items.id_coffee}
  const [data, setData] = useState([]);
  const [card, setCard] = useState([]);
  const [createNewProduct, setCreateNewProduct] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const getProductsCafeterias = async () => {
    await fetch(
      `https://apimainejetravel.azurewebsites.net/api/Product/Lista/${items}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { list } = data;
        const valores = list[0].reverse();
        setData(valores);
      })
      .catch((error) => {
        // Manejar el error
        console.log("error");
      });
  };

  useEffect(() => {
    getProductsCafeterias();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`https://apimainejetravel.azurewebsites.net/api/Product/Eliminar/${id}`, { method: "DELETE" });
      const data = await response.json();
      console.log(data);
      getProductsCafeterias();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const cardId = (item) => {
    setCard(item);
  };

  return (
    <>
      <HeaderAdminCafeterias />
      <main className={Style.main}>
        <div className={Style.adminContainerCreateProduct}>
          <button className={Style.btnAdminCreateProduct} onClick={() => setCreateNewProduct(!createNewProduct)}>Crea un nuevo producto</button>
        </div>

        <GridProductsAdmin valores={data} cardId={cardId} setIsVisible={setIsVisible} isVisible={isVisible} />

        {createNewProduct && (
          <div className={Style.containerForm}>
            <div className={Style.containerClose} onClick={() => setCreateNewProduct(!createNewProduct)} >
              <AiOutlineCloseCircle className={Style.iconCLose} />
            </div>
            <FormAdmincafeteriaCreateProduct />
          </div>
        )}
        
        <CardProductosAdmin card={card} setIsVisible={setIsVisible} isVisible={isVisible} deleteProduct={deleteProduct} />
      </main>
    </>
  );
};
