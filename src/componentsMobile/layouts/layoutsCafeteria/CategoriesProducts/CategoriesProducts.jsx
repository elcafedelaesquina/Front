import React, { useEffect, useState } from "react";
import Style from "./categoriesproducts.module.css";
import { Link } from 'react-router-dom'

export const CategoriesProducts = () => {

  const Items = [
    {
      category: "Cafés",
      image: 'https://www.elespectador.com/resizer/Z28ceEm87lkRDk4QKJtw55k0nQk=/arc-anglerfish-arc2-prod-elespectador/public/LY3ZTJZS5ZBUJL63BODAZ72L7U.png',
    },
    {
      category: "Otras bebidas",
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/bf/56/03/nuestras-bebidas-frias.jpg',
    },
    {
      category: "Panaderia",
      image: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/WhatsApp-Image-2021-10-22-at-3.04.14-PM.jpeg',
    },
    {
      category: "Desayunos",
      image: 'https://www.cubahora.cu/uploads/resources/images/2018/03/27/desayunar-huevo.jpg',
    },
  ];

  return (
    <>
      <h2 className={Style.titleMenu}>Nuestra carta</h2>
      <div className={Style.containerProducts}>
        <div className={Style.breakfast}>
        {Items.map((item) => (
          <div className={Style.breakfast1}>
            <p className={Style.type}>{item.category}</p>
            <button className={Style.icon}>
              <img className={Style.img} src={item.image} alt="" />
              <link to={'cafeterias/cafeteria/menu'} />
            </button>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};
