import React, { useEffect, useState } from 'react'
import styles from'./cafeterias.module.css'
import { Comments } from './cafeterias/comments'
import { Header } from '../layouts/header/header'
import { Footer } from '../layouts/footer/footer'
import { Menu } from '../layouts/menu'
import { SearchCafeterias } from './cafeterias/search'
import { Item } from './cafeterias/items'
import { FilterCafeterias } from './cafeterias/filter'
import { Link } from 'react-router-dom'


const Cafeterias = () => {
  const [dataFinca,setDataFinca]=useState([])

  useEffect(()=>{
    fetch('https://apimainejetravel.azurewebsites.net/api/Farm/Lista')
    .then(response => response.json())
    .then(data => {
      const {farmList}=data
      setDataFinca(farmList[0])})
      
  },[])

  const [data,setData]=useState([])

  useEffect(()=>{
    fetch('https://apimainejetravel.azurewebsites.net/api/Coffee/Lista')
    .then(response => response.json())
    .then(data => {
      const {coffeeList}=data
      setData(coffeeList[0])})
      
  },[])
  return (
    <>
    <Header></Header>
    <div className={styles.sectionCafeterias}>
    <Link to={'/cafeterias/cafeteria'}  ><div className={styles.whatsapp}><ion-icon name="chatbubble-ellipses-outline"></ion-icon>Contactanos </div></Link>
    <Menu></Menu>
      <div className={styles.searchImg}>
        <div className={styles.filter}>
          <SearchCafeterias></SearchCafeterias>
        </div>
      </div>
      <div className={styles.itemsContainer}>
        
        <div className={styles.filter}>
        <FilterCafeterias></FilterCafeterias>

        </div>
        <div className={styles.container}>
          {data.map(item=>{
            return (<Item 
              key={item.id_coffee} 
              id={item.id_coffee}
              name={item.name} 
              description={item.description} 
              image={item.image} 
              address={item.address}>

            </Item>)

          })}
          

        </div>

      </div>
      <div className={styles.containerImg}>
        <h2>Fincas Cafeteras que te van a interesar para visitar</h2>
       
        {dataFinca.map((item,index)=>{
           if (index>=7 ) {
            return null; // Detiene la iteración
          }
            return (
              <div  className={styles.divImg} key={item.id_farm}>
              <img alt='' src={item.image}>
               </img>
               </div>
            )

          })}


      </div>

      <Comments></Comments>
      
      

    </div>
    <Footer></Footer>
    </>
    
  )
}

export {Cafeterias}
