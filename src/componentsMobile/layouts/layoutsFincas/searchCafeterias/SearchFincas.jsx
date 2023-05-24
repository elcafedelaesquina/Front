import React from 'react'
import Style from './searchFincas.module.css'

export const SearchFincas = () => {
  return (
    <div className={Style.containerSearch}>
      <h3>"Visitanos y conoce mas sobre el Café"</h3>
      <h5>Descubre nuevas experiencias que encajan con tus intereses y tu estilo de viaje</h5>
      <div className={Style.containerInput}>
        <input type="text" placeholder={"Buscar fincas"}></input>
        <button>Buscar</button>
      </div>
    </div>
  );
};
