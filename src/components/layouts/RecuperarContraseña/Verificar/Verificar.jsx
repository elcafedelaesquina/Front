import React from "react";
import styles from "./Verificar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Verificar() {
  return (
    <div>
      <div className={styles.iconX}>
        <Link to={"/Recuperar"}>
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
              <h2>Verificar y Actualizar Contraseña</h2>
              <form>
                <div className={styles.inputBox}>
                  <i className="fas fa-envelope icon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </i>
                  <input type="num" placeholder="Codigo de Verificación" />
                </div>
                <div className={styles.inputBox}>
                  <i className="fas fa-envelope icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <input type="password" placeholder="Nueva Contraseña" />
                </div>
                <div className={styles.button}>
                  <button className={styles["button-form"]} type="submit">
                    Enviar
                  </button>
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
