import React, {useState, useEffect} from 'react'
import Style from './gridProductsAdmin.module.css'

export const GridProductsAdmin = () => {

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

      const valores = data.reverse();

  return (
    <div className={Style.gridContainer}>
        {valores.map((item) => (
            <div className={Style.product} key={item.cod_product}><img src={item.image} alt="image product" className={Style.image} /> {item.name}</div>
        ))}
    </div>
  )
}
