import React from "react";
import Style from "./searchCafeterias.module.css";

export const SearchCafeterias = ({ filterName, handleFilterChage }) => {
  return (
    <div className={Style.containerSearch}>
      <h3>"Visitanos y Tómate un Buen Café"</h3>
      <h5>Descubre nuevas atracciones y experiencias que encajan con tus intereses y tu estilo de viaje</h5>
      <div className={Style.containerInput}>
        <input type="text" placeholder={"Buscar Cafeterias"} value={filterName} onChange={handleFilterChage} />
      </div>
    </div>
  );
};
