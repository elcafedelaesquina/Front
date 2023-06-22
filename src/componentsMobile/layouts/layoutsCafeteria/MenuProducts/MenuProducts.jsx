import React, { useEffect, useState } from 'react'
import Style from './menu.module.css'

export const MenuProducts = () => {
      
  let items=JSON.parse(localStorage.getItem('coffee'))
  const [estado,setEstado]=useState([])
  const categorizedData = {};
  useEffect(()=>{
    
      
  fetch(`https://apimainejetravel.azurewebsites.net/api/MenuProduct/Lista/${items.id_coffee}`)
  .then(response => response.json())
  .then(data => {
    data.list[0].forEach(item => {
        const category = item.category;
      
        if (!categorizedData[category]) {
          categorizedData[category] = [];
        }
      
        categorizedData[category].push(item);
      });
      const array = Object.values(categorizedData)
      setEstado(array)
    
  })
  },[])
 
  estado.map((item,index)=>{
      console.log(item)
     /*  console.log(index) */
  });

  return (
    <section className={Style.menu}>
      <h2 className={Style.title}>Nuestra Carta</h2>
       {estado.map(item => (
          <table>
            <h3 className={Style.subTitle}>{item[0].category}</h3>
            <tr className={Style.row}>
              {item.map(producto => (
                <td className={Style.item} key={producto.id_menu_product}><p>{producto.name}</p><p>${producto.price}</p></td>
              ))}
            </tr>
          </table>
          ))}
    </section>
  )
}
