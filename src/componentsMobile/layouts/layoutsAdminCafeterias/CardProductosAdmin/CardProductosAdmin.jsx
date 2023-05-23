import React, { useEffect, useState } from "react";
import Style from "./CardProductosAdmin.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const CardProductosAdmin = () => {
  const [data, setData] = useState([]);

  const getProductsCafeterias = async () => {
    await fetch("https://apimainejetravel.azurewebsites.net/api/Product/Lista")
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

  let img1 =
    "https://res.cloudinary.com/dmrq9n2im/image/upload/v1683225617/El%20caf%C3%A9%20de%20la%20esquina/imgtest3_m4hqtw.jpg";

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
          <p className={Style.price}>{item.price}</p>
          <p>{item.description}</p>
          <p className={Style.btns}>
            <button>Actualizar</button>
            <button>Eliminar</button>
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
        <div>
            <form className={Style.adminFormCreateProduct} method="POST">
              <h1>
                Hola mundo
              </h1>
            </form>
        </div>
      )}
    </>
  );
};

// https://apimainejetravel.azurewebsites.net/api/Product/Guardar