import React from 'react'
import styles from './style.module.css'

const SearchFincas= () => {
  return (
    <div className={styles.containerSearch}>
        <h3>"Visitanos y Conoce de Nuestra Historia"</h3>
        <h5>Descubre nuevas atracciones y experiencias que encajan con tus intereses y tu estilo de viaje</h5>
        <div className={styles.containerInput}>
            <input type="text" placeholder={'Buscar Fincas'}></input>
            <button>Buscar</button>
        </div>
        
    </div>
  )
}

export {SearchFincas}