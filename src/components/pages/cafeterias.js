import React, { useEffect, useState } from 'react'
import styles from'./cafeterias.module.css'
import { Comments } from './cafeterias/comments'
import { Header } from '../layouts/header/header'
import { Footer } from '../layouts/footer/footer'
import { Menu } from '../layouts/menu'

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
  const [realData,setRealData]=useState([])
  const [load,setLoad]=useState([])
  const recargar=()=>{
    setLoad([])
   
  }
  useEffect(()=>{
    fetch('https://apimainejetravel.azurewebsites.net/api/Coffee/Lista')
    .then(response => response.json())
    .then(data => {
      const {coffeeList}=data
      setData(coffeeList[0])
      setRealData(coffeeList[0])
      })
      
      
  },[load])
  const [filter, setFilter] = useState('');
  const filteredData = data.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  function handleFilterChange(event) {
    const inputValue = event.target.value;
    setFilter(inputValue);
    if(event.target.value<='0'){
      setData(realData)

    }else{
      setData(filteredData);

    }
    
    
    
  }

  
  
  return (
    <>
    <Header></Header>
    <div className={styles.sectionCafeterias}>
    <Link to={'/cafeterias/cafeteria'} ><div className={styles.whatsapp}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png' alt=''className={styles.whatsappImg} ></img></div></Link>
    <Menu></Menu>
      <div className={styles.searchImg}>
        <div className={styles.filter}>
        <div className={styles.containerSearch}>
        <h3>"Visitanos y Tómate un Buen Café"</h3>
        <h5>¡Descubre nuestras increíbles cafeterías! Sumérgete en un mundo de aromas y sabores, donde el café se convierte en una experiencia única!</h5>
        <div className={styles.containerInput}>
            <input type="text" value={filter} onChange={handleFilterChange}  placeholder={'Buscar Cafeterias'}></input>
            
        </div>
        
    </div>
        </div>
      </div>
      <div className={styles.itemsContainer}>       
        
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
           if (index>=5 ) {
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

      <Comments recargar={recargar}></Comments>
      
      

    </div>
    <Footer></Footer>
    </>
    
  )
}

export {Cafeterias}
