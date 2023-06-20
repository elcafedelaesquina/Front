import React, { useState, useEffect} from "react";
import Style from "./gridProducts.module.css";
import { CardProducts } from "../CardProducts/CardProducts";

export const GridProducts = () => {

  const [data, setData] = useState([]);
  const [card, setCard] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  let item=JSON.parse(localStorage.getItem('coffee'))

  const getProducts = async () => {
    await fetch(`https://apimainejetravel.azurewebsites.net/api/Product/Lista/${item.id_coffee}`)
      .then((response) => response.json())
      .then((data) => {
        const { list } = data;
        setData(list[0]);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const cardId = (item) => {
    setCard(item);
  };

  return (
    <div className={Style.gridContainer}>
      {data.map((item) => (
        <div
          className={Style.product}
          key={item.id_product}
          onClick={() => {
            setIsVisible(!isVisible)
            cardId(item)
          }}>
          <img src={item.image} alt="image product" className={Style.image} />
        </div>
      ))}

      <CardProducts card={card} setIsVisible={setIsVisible} isVisible={isVisible}/>
    </div>
  );
};
