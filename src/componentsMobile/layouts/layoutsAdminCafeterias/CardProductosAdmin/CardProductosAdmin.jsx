import React, { useEffect, useState } from "react";
import Style from "./CardProductosAdmin.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FormAdmincafeteriaCreateProduct } from "../FormAdmincafeteriaCreateProduct/FormAdmincafeteriaCreateProduct.jsx" 

export const CardProductosAdmin = () => {
  const [data, setData] = useState([]);

  const getProductsCafeterias = async () => {
    await fetch("https://apimainejetravel.azurewebsites.net/api/Product/Lista/2")
      .then((response) => response.json())
      .then((data) => {
        const { list } = data;
        setData(list[0]);
      })
      .catch((error) => {
        // Manejar el error
        console.error(error);
      });
  };

  useEffect(() => {
    getProductsCafeterias();
  }, []);

  const [createNewProduct, setCreateNewProduct] = useState(false);

  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`https://apimainejetravel.azurewebsites.net/api/Product/Eliminar/${id}`, { method: 'DELETE' });
      const data = await response.json();
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Carousel className={Style.carousel} responsive={responsive}>
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
              <button onClick={() => deleteProduct(item.cod_product)} >Eliminar</button>
            </p>
          </div>
        ))}
      </Carousel>

      <div className={Style.adminContainerCreateProduct}>
        <button className={Style.btnAdminCreateProduct} onClick={() => setCreateNewProduct(!createNewProduct)}>Crea un nuevo producto</button>
      </div>

      {createNewProduct && (
        <div className={Style.containerForm}>
          <div className={Style.containerClose} onClick={() => setCreateNewProduct(!createNewProduct)}>
            <AiOutlineCloseCircle className={Style.iconCLose} />
          </div>
          <FormAdmincafeteriaCreateProduct />
        </div>
      )}
    </>
  );
};
