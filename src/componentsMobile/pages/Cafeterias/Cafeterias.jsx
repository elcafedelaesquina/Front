import React, { useEffect, useState } from "react";
import Style from "./cafeterias.module.css";
import { NavBar } from "../../layouts/navbar/Navbar";
import { Footer } from "../../layouts/footer/Footer";
import { SearchCafeterias } from "../../layouts/layoutsCafeterias/searchCafeterias/SearchCafeterias.jsx";
import { ItemsCafeterias } from "../../layouts/layoutsCafeterias/itemsCafeterias/ItemsCafeterias.jsx";
import { FincasCafeterias } from "../../layouts/layoutsCafeterias/fincasCafeterias/FincasCafeterias.jsx";
import { CommentsCafeterias } from "../../layouts/layoutsCafeterias/CommentsCafeterias/CommentsCafeterias.jsx";

export const Cafeterias = () => {
  const [data, setData] = useState([]);

  const getCafeterias = async () => {
    await fetch("https://apimainejetravel.azurewebsites.net/api/Coffee/Lista")
      .then((response) => response.json())
      .then((data) => {
        const { coffeeList } = data;
        setData(coffeeList[0]);
      });
  };

  useEffect(() => {
    getCafeterias();
  }, []);

  return (
    <>
      <NavBar />
      <div className={Style.sectionCafeterias}>
        <div className={Style.searchImg}>
          <div className={Style.filter}>
            <SearchCafeterias />
          </div>
        </div>

        <div className={Style.container}>
          {data.map((item) => {
            return (
              <ItemsCafeterias
                key={item.id_coffee}
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
              return <FincasCafeterias image={item.image} />;
            })}
          </div>
        </div>
            
        <CommentsCafeterias />
      </div>

      <Footer />
    </>
  );
};
