import React, { useEffect, useState } from 'react'
import Style from './menu.module.css'

export const Menu = () => {

  const [data, setData] = useState([]);

  const getCategories = async () => {
    await fetch("https://apimainejetravel.azurewebsites.net/api/MenuProduct/Lista")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.list);
        const { list } = data;
        setData(list[0]);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className={Style.menu}>
      <h2 className={Style.title}>Nuestra Carta</h2>
      {data.map((item =>

        <table>
          <h3 className={Style.subTitle}>{item.category}</h3>
          <tr className={Style.row}>
            <td className={Style.item}>{item.name}            {item.price}</td>
          </tr>
        </table>

      ))
      }
    </section>
  )
}
