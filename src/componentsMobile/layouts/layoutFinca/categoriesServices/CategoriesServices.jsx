import React, { useEffect, useState } from "react";
import Style from "./categoriesServices.module.css";

export const CategoriesServices = () => {
  const [data, setData] = useState([]);

  const getCategories = async () => {
    await fetch(
      "https://apimainejetravel.azurewebsites.net/api/MenuProduct/Lista/2"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { list } = data;
        setData(list[0]);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <h2 className={Style.titleMenu}>Nuestra carta</h2>
      <div className={Style.containerProducts}>
        {data.map((item) => (
          <div className={Style.breakfast}>
            <div className={Style.breakfast1}>
              <p className={Style.type}>{item.category}</p>
              <button className={Style.icon}>
                <img className={Style.img} src={item.image} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};