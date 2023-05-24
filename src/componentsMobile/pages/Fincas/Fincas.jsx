import React, { useEffect, useState } from "react";
import Style from "./fincas.module.css";
import { NavBar } from "../../layouts/navbar/Navbar";
import { Footer } from "../../layouts/footer/Footer";
import { SearchFincas } from "../../layouts/layoutsFincas/searchCafeterias/SearchFincas";
import { ItemsFincas } from "../../layouts/layoutsFincas/itemsCafeterias/ItemsFincas";
import { CafeteriasFincas } from "../../layouts/layoutsFincas/fincasCafeterias/CafeteriasFincas";
import { CommentsFincas } from "../../layouts/layoutsFincas/CommentsFincas/CommentsFincas";

export const Fincas = () => {
  const [data, setData] = useState([]);

  const getFincas = async () => {
    await fetch("https://apimainejetravel.azurewebsites.net/api/Farm/Lista")
      .then((response) => response.json())
      .then((data) => {
        const { farmList } = data;
        setData(farmList[0]);
      });
  };

  useEffect(() => {
    getFincas();
  }, []);

  return (
    <>
      <NavBar />
      <div className={Style.sectionCafeterias}>
        <div className={Style.searchImg}>
          <div className={Style.filter}>
            <SearchFincas />
          </div>
        </div>

        <div className={Style.container}>
          {data.map((item) => {
            return (
              <ItemsFincas
                key={item.id_farm}
                name={item.name}
                description={item.description}
                image={item.image}
                address={item.address}
              />
            );
          })}
        </div>

        <div className={Style.containerImg}>
          <h2 className={Style.h2}>
            Otros sitios que te van a interesar visitar
          </h2>
          <div className={Style.grid}>
            {data.map((item) => {
              console.log(item);
              return <CafeteriasFincas image={item.image} />;
            })}
          </div>
        </div>
            
        <CommentsFincas />
      </div>

      <Footer />
    </>
  );
};
