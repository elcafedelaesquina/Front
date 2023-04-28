import React from 'react'
import './style.css'

const SearchCafeterias= () => {
  return (
    <div className='containerSearch'>
        <h3>"Visitanos y Tómate un Buen Café"</h3>
        <h5>Descubre nuevas atracciones y experiencias que encajan con tus intereses y tu estilo de viaje</h5>
        <div className="containerInput">
            <input type="text" placeholder={'Buscar Cafeterias'}></input>
            <button>Buscar</button>
        </div>
        
    </div>
  )
}

export {SearchCafeterias}
