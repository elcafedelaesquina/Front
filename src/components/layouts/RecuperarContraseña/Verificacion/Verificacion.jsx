import React from "react";
import styles from "./Verificacion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Verificacion() {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.iconX}>
          <Link to={"/PageRegistros"}>
            <ion-icon name="close"></ion-icon>
          </Link>
        </div>
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
              <h2>Verificar</h2>
              <form>
                <div className={styles.inputBox}>
                  <i className="fas fa-envelope icon">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </i>
                  <input type="num" placeholder="Codigo de Verificación" />
                </div>

                <div className={styles.inputBox}>
                  <i className="fas fa-lock icon">
                    <FontAwesomeIcon icon={faLock} />
                  </i>
                  <input type="password" placeholder="Nueva Contraseña" />
                </div>

                <div className={styles.button}>
                  <button
                    className={styles["button-form"]}
                    type="submit"
                    value="Enviar"
                  >
                    Enviar
                  </button>
                </div>
                <p className={styles.forget}>
                  Ya tienes una cuenta?
                  <Link to={"/PageRegistros"}>
                    <a href="index.html">Iniciar sesión</a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
