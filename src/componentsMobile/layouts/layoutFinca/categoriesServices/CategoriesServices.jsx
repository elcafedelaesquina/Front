import React from "react";
import Style from "./categoriesServices.module.css";

export const CategoriesServices = () => {

  const Items = [
    {
      title: "Cafes",
      url: "/AdminCafeteria/DescripcionCafeteria",
      img: "https://www.fincaelocasosalento.com/w/wp-content/uploads/2022/11/image-product-bag-salento-250g-coffee-free-shipping-fincaocassosalento.com_.jpg",
    },
    {
      title: "Nuestro sitio ",
      url: "/AdminCafeteria/ProductosCarta",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/3b/66/87/photo5jpg.jpg?w=700&h=-1&s=1",
    },
    {
      title: "Panaderia",
      url: "/AdminCafeteria/ProductosCafeteria",
      img: "https://static01.nyt.com/images/2021/10/29/well/07sci-ASKWELL-GLUTENFREE-BREAD-ESP-1/askwell-glutenfree-bread1-videoSixteenByNineJumbo1600.jpg",
    },
    {
      title: "Desayunos",
      url: "/AdminCafeteria/VentasCafeteria",
      img: "https://okdiario.com/img/recetas/2016/12/29/desayunos-alrededor-del-mundo-2.jpg",
    },
  ];

  return (
    <>
      <h2 className={Style.titleMenu}>Nuestra carta</h2>
      <div className={Style.containerProducts}>
          <div className={Style.breakfast}>
            {Items.map((item) =>
            <div className={Style.breakfast1}>
              <p className={Style.type}>{item.title}</p>
              <button className={Style.icon}>
                <img className={Style.img} src={item.img} alt="" />
              </button>
            </div>
            )}
          </div>
      </div>
    </>
  );
};
