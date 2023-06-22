import React from "react";
import styles from "./Recuperar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Recuperar() {
  return (
    <div>
      <div className={styles.iconX}>
        <Link to={"/PageRegistros"}>
          <ion-icon name="close"></ion-icon>
        </Link>
      </div>
      <section>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.box}>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.container}>
            <div className={styles.form}>
              <h2>Recuperar contraseña</h2>
              <form>
                <div className={styles.inputBox}>
                  <i className="fas fa-envelope icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <input type="text" placeholder="Correo electronico" />
                </div>
                <div className={styles.button}>
                  <Link to={'/Verificar'}><button className={styles["button-form"]} type="submit">Enviar</button></Link>  
                </div>
                <p className={styles.forget}>
                  Ya tienes una cuenta?
                  <Link to={"/PageRegistros"}></Link>
                  <a href="index.html">Iniciar sesión</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
