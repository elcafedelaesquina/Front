import React from 'react'
import styles from './style.module.css'

const SearchCafeterias= (props) => {
  return (
    <div className={styles.containerSearch}>
        <h3>"Visitanos y Tómate un Buen Café"</h3>
        <h5>¡Descubre nuestras increíbles cafeterías! Sumérgete en un mundo de aromas y sabores, donde el café se convierte en una experiencia única!</h5>
        <div className={styles.containerInput}>
            <input type="text" value={props.filter} onChange={props.handleFilterChange} placeholder={'Buscar Cafeterias'}></input>
            <button>Buscar</button>
        </div>
        
    </div>
  )
}

export {SearchCafeterias}
