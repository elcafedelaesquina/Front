import React, { useEffect, useState } from "react";
import Style from "./cafeterias.module.css";
import { NavBar } from "../../layouts/navbar/Navbar";
import { Footer } from "../../layouts/footer/Footer";
import { SearchCafeterias } from "../../layouts/layoutsCafeterias/searchCafeterias/SearchCafeterias.jsx";
import { ItemsCafeterias } from "../../layouts/layoutsCafeterias/itemsCafeterias/ItemsCafeterias.jsx";

export const Cafeterias = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://apimainejetravel.azurewebsites.net/api/Coffee/Lista")
      .then((response) => response.json())
      .then((data) => {
        const { coffeeList } = data;
        setData(coffeeList[0]);
      });
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
      </div>

      <Footer />
    </>
  );
};
