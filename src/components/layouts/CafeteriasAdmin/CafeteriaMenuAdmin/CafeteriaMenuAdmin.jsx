import React, { useEffect, useState } from "react";
import Style from "./CafeteriaMenuAdmin.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {CafeteriaCreateProduct} from '../FormAdmincafeteriaCreateProduct/CafeteriaCreateProduct'

export const CafeteriaMenuAdmin = () => {
  const [data, setData] = useState([]);

  const getProductCafeteria = async () => {
    await fetch("https://apimainejetravel.azurewebsites.net/api/MenuProduct/Lista/3")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { list } = data;
        setData(list[0]);
      })
      .catch((error) => {
        // Manejar el error
        console.error(error);
      });
  };

  useEffect(() => {
    getProductCafeteria();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`https://apimainejetravel.azurewebsites.net/api/MenuProduct/Eliminar/${id}`, {
        method: 'DELETE'
        // headers: {
        //   'Content-Type': 'application/json', // Ajusta los encabezados según tus necesidades
        //   // Otros encabezados si es necesario
        // },
        
      });
      const data = await response.json();
      console.log(data); 
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const [createNewProduct, setCreateNewProduct] = useState(false);


  return (
    <>
      <Carousel className={Style.carousel}>
        {data.map((item) => (
        <div className={Style.card} key={item.cod_product}>
          <div>
            <img
              className={Style.productImage}
              src={item.image}
              alt="product image"
            />
          </div>
          <h2 className={Style.h2}>{item.name}</h2>
          <p className={Style.price}>${item.price}</p>
          <p className={Style.description}>{item.description}</p>
          <p className={Style.btns}>
            {/* <button>Actualizar</button> */}
            <button onClick={() => deleteProduct(item.id_menu_product)}>Eliminar</button>
          </p>
        </div>
      ))}
      </Carousel>

      <div className={Style.adminContainerCreateProduct}>
        <button
          className={Style.btnAdminCreateProduct}
          onClick={() => setCreateNewProduct(!createNewProduct)}
        >
          Crea un nuevo producto
        </button>
      </div>

      {createNewProduct && (
        <div className={Style.containerForm}>
          <div className={Style.containerClose} onClick={() => setCreateNewProduct(!createNewProduct)}>
            <AiOutlineCloseCircle className={Style.iconCLose} />
          </div>
          <CafeteriaCreateProduct/>
        </div>
      )}
    </>
  );
};