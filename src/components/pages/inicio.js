import React from 'react'
import { Header } from '../layouts/header/header.js';
import { Footer } from '../layouts/footer/footer.js';
import { ContentHome } from './Inicio/index.js';



const Inicio = () => {
  return (
    <>  
    <Header></Header>
     <ContentHome></ContentHome>
     <Footer></Footer>
      
    </>
  )
}

export{Inicio};
