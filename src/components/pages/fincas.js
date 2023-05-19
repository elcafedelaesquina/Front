import React, { useEffect, useState } from "react";
import styles from './fincas.module.css';
import { CommentsFicas } from "./fincas/comments";
import { SearchFincas } from './fincas/search'
import { ItemFincas } from "./fincas/items";
import { FilterFincas } from "./fincas/filter";
import { Header } from "../layouts/header/header";
import { Footer } from "../layouts/footer/footer";
import { Menu } from "../layouts/menu";

const Fincas = () => {

  const [data,setData]=useState([])

  useEffect(()=>{
    fetch('https://apimainejetravel.azurewebsites.net/api/Farm/Lista')
    .then(response => response.json())
    .then(data => {
      const {farmList}=data
      setData(farmList[0])})
      
  },[])

  return(
    <>
    <Header></Header>
    <div className={styles.sectionCafeterias}>
      <div className={styles.whatsapp}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>Contactanos </div>
    <Menu></Menu>
      <div className={styles.searchImg}>
        <div className={styles.filter}>
          <SearchFincas></SearchFincas>
        </div>
      </div>
      <div className={styles.itemsContainer}>
        
        <div className={styles.filter}>
        <FilterFincas></FilterFincas>

        </div>
        <div className={styles.container}>
          {data.map(item=>{
            return (<ItemFincas
              key={item.id_farm} 
              name={item.name} 
              description={item.description} 
              image={item.image} 
              address={item.address}>

            </ItemFincas>)

          })}
          

        </div>

      </div>
      <div className={styles.containerImg}>
        <h2>Otros sitios que te van a interesar para visitar</h2>
       <div className='' >
       <img alt='' src="https://www.comparaonline.cl/blog-statics/cl/uploads/2016/12/lugares-turisticos-de-colombia.png">
        </img>
        </div> 
        <div className=''>
        <img  alt='' src="https://ecommerceapi.assistcard.com/Api/ImagesHandler/GetImage?freeImageCode=lugares%20turisticos%20colombia">
        </img>

        </div>
        <div className='' >
        <img   alt=''src="https://travelgrafia.co/wp-content/uploads/2020/02/Sitios-turisticos-de-la-Piedra-del-penol.jpg">
        </img>
        </div>
        <div className=''>
        <img   alt='' src="https://www.elcolombiano.com/binrepository/998x639/0c39/998d562/none/11101/OAQB/whatsapp-image-2021-01-21-at-10-59-59-am_37061558_20210121110108.jpg">
        </img>
        </div>
        <div className='' >
        <img alt='' src="https://www.wradio.com.co/resizer/UpUfe56rcOvclY3i88hBsDzw5nA=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/CT3V63LOOBBJBMDL22HG5LGKXI.jpg">
        </img>

        </div>
        <div className='' >
       <img alt='' src="https://www.comparaonline.cl/blog-statics/cl/uploads/2016/12/lugares-turisticos-de-colombia.png">
        </img>
        </div> 
        <div className=''>
        <img  alt='' src="https://ecommerceapi.assistcard.com/Api/ImagesHandler/GetImage?freeImageCode=lugares%20turisticos%20colombia">
        </img>

        </div>
        <div className='' >
        <img   alt=''src="https://travelgrafia.co/wp-content/uploads/2020/02/Sitios-turisticos-de-la-Piedra-del-penol.jpg">
        </img>
        </div>
        
        
      </div>
      <div className={styles.containerSubs}>
      
        <div className={styles.sub}>
          <div className={styles.sub1} ><ion-icon name="rocket-outline"></ion-icon></div>
          <h3>Prueba Gratis por un mes</h3>
          <ul className={styles.listSub}>
            <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
            <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
            <li><ion-icon name="close-outline"></ion-icon>crear productos</li>
            <li><ion-icon name="close-outline"></ion-icon>crear productos</li>
          </ul>
          <button className={styles.btnSub1 }>$0/Month</button>

        </div>
        <div className={styles.sub}>
          <div className={styles.sub2}><ion-icon name="telescope-outline"></ion-icon></div>
          <h3>Suscripción   Basica</h3>
          <ul className={styles.listSub}>
            <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
            <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
            <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
            <li><ion-icon name="close-outline"></ion-icon>crear productos</li>
          </ul>
          <button className={styles.btnSub2 }>$30/Month</button>

        </div>
        <div className={styles.sub}>
          <div className={styles.headerSub}><ion-icon name="diamond-outline"></ion-icon></div>
          <h3>Suscripción premium</h3>
          <ul className={styles.listSub}>
            <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
            <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
            <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
            <li><ion-icon name="checkmark-outline"></ion-icon>crear productos</li>
          </ul>
          <button className={styles.buttonSub }>$50/Month</button>

        </div>
      </div>
      <CommentsFicas></CommentsFicas>
      
      

    </div>
    <Footer></Footer>
    </>
  )
}

export {Fincas}