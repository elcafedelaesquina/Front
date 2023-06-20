import React from "react";
import styles from "./Recuperar.module.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export function Recuperar() {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.box}>
          <div className={styles.square} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square} ></div>
          <div className={styles.square} ></div>
          <div className={styles.container}>
            <div className={styles.form}>
              <h2>Recuperar contraseña</h2>
              <form>
                <div className={styles.inputBox}>
                <i className='fas fa-envelope icon'><FontAwesomeIcon icon={faEnvelope} /></i>
                  <input type="text" placeholder="Correo electronico" />
                </div>
                <div className={styles.button}>
                  <button className={styles['button-form']} type="submit" value="Enviar">Enviar</button>
                </div>
                <p className={styles.forget}>
                  Ya tienes una cuenta? 
                  <Link to={'/PageRegistros'}><a href="index.html">Iniciar sesión</a></Link> 
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
