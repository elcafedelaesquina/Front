import React, { useEffect, useRef, useState } from "react";
import styles from "./User.module.css";
import img_front from "./img/Image_front.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "./Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../../loader";

export function User() {
  const Swal = require("sweetalert2");

  const [imagePreview, setImagePreview] = useState("");
  const [validateImg, setValidateImg] = useState(false);

  function handleImageInputChange(e) {
    console.log(e.target.files);

    if (e.target.files.length !== 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        /*  console.log(reader.result) */
      };
      reader.readAsDataURL(file);
      setValidateImg(true);
    } else {
      setValidateImg(false);
    }
  }
  function handleImageClear() {
    setImagePreview("");
    setValidateImg(false);
  }

  //boton images
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    image.current.click();
  };
  //

  const [loader, setLoader] = useState(false);

  //botones enviar
  var btnRegister = useRef();
  var btnSingIn = useRef();
  //inputs
  var image = useRef();
  var email = useRef();
  var password = useRef();
  var name = useRef();

  // Crear instancia de FormData
  var formulario = useRef(null);

  const navigate = useNavigate();
  const [validate, setValidate] = useState(false);
  function register() {
    try {
      formulario = formulario.current;
      formulario.addEventListener("submit", (e) => {
        if (e && validate && validateImg) {
          e.preventDefault();
          const formData = new FormData(formulario);
          /*   formData.forEach(function(value, key) {
          console.log(key + ': ' +typeof  value);
        }); */
          setLoader(true);

          fetch(
            "https://apimainejetravel.azurewebsites.net/api/Customer/Guardar",
            {
              method: "POST",
              body: formData,
            }
          )
            .then((response) => response.json())
            .then((data) => {
              // Manejar la respuesta de la petición
              /* console.log(data.status) */
              const { status, exepcion } = data;
              /*   console.log(data) */
              if (exepcion || exepcion === "Account is registed") {
                Swal.fire({
                  position: "top-center",
                  icon: "error",
                  title: "Oops...",
                  text: "Este E-mail ya está registrado!",
                });

                setLoader(false);
              } else if (status) {
                Swal.fire({
                  position: "top-center",
                  icon: "warning",
                  title: "Oops...",
                  text: "Ingresa la informacion de todos los campos!",
                });
                setLoader(false);
              } else {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Éxito al registrarse",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/User");
                setLoader(false);
              }
            })
            .catch((error) => {
              // Manejar el error de la petición
              /*  console.log(error) */
              Swal.fire({
                position: "top-center",
                icon: "warning",
                title: "Oops...",
                text: "Ingresa la imagen!",
              });
            });
        }
      });
    } catch (e) {
      console.log(e);
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Oops...",
        text: "Ingresa la imagen!",
      });
    }
    handleImageClear();
  }
  var formularioLogin = useRef(null);

  function login() {
    formularioLogin = formularioLogin.current;
    console.log(formularioLogin);
    formularioLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(formularioLogin);

      /* formData.forEach(function(value, key) {
      console.log(key + ': ' + value);
    }); */
      setLoader(true);

      fetch(
        "https://apimainejetravel.azurewebsites.net/api/Autenticacion/Validar",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // Manejar la respuesta de la petición
          const { token, mensaje } = data;
          if (mensaje === "Correo o contraseña invalida") {
            Swal.fire({
              position: "top-center",
              icon: "error",
              title: "Oops...",
              text: "Contraseña o correo invalido!",
            });
            setLoader(false);
          } else if (!token) {
            Swal.fire({
              position: "top-center",
              icon: "warning",
              title: "Oops...",
              text: "Ingresa la informacion de todos los campos!",
            });
            setLoader(false);
          } else {
            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem(
              "name",
              JSON.stringify(data.listCustomer[0].name)
            );
            localStorage.setItem(
              "image",
              JSON.stringify(data.listCustomer[0].image)
            );
            localStorage.setItem(
              "id_customer",
              JSON.stringify(data.listCustomer[0].id_customer)
            );
            let name = JSON.parse(localStorage.getItem("name"));
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Bienvenido " + name,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
            setLoader(false);
          }
        })
        .catch((error) => {
          // Manejar el error de la petición
          console.log(error);
        });
    });
  }

  const validatePassword = (e) => {
    if (e.target.value.length > 5) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  };

  const showAlert = () => {
    if (!validate && validateImg) {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Oops...",
        text: "Ingresa una contraseña de 6 o más de caracteres!",
      });
    } else if (!validate || !validateImg) {
      Swal.fire({
        position: "top-center",
        icon: "warning",
        title: "Oops...",
        text: "Ingresa la informacion de todos los campos!",
      });
    }
  };

  return (
    <div className={styles.cn}>
      <section>
        <div className={styles.jk}>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
          <div className={styles.iconX}>
            <Link to={"/PageRegistros"}>
              <ion-icon name="close"></ion-icon>
            </Link>
          </div>

          {loader && <Loader></Loader>}
          {!loader && (
            <div className={styles.container}>
              <input type="checkbox" className={styles.flip} id="flip" />
              <div className={styles.cover}>
                <div className={styles.front}>
                  <img className={styles.imgContainer} src={img_front} alt="" />

                  <div className={styles.text}>
                    <li>
                      <Link to={"/"}>
                        <img
                          src={logo}
                          className={styles.logoForm}
                          alt=""
                        ></img>
                      </Link>
                    </li>
                    <span className={styles["text-1"]}>
                      Empieza con nosotros
                      <br /> para que tengas una mejor experiencia
                    </span>
                    <span className={styles["text-2"]}>
                      Disfruta de los mejores servicios
                    </span>
                  </div>
                </div>
              </div>
              <form id="formu" ref={formulario}>
                <div className={styles["form-content"]}>
                  <div className={styles["login-form"]}>
                    <div className={styles.title}>Inicia Sesión</div>
                    <form
                      ref={formularioLogin}
                      className={styles["input-boxes"]}
                    >
                      <div className={styles["input-box"]}>
                        <i className="fas fa-envelope icon">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </i>
                        <input
                          type="text"
                          className={styles.type}
                          name="Type"
                          readOnly
                          placeholder="Nombre"
                          value={3}
                        />
                        <input type="email" name="Email" placeholder="E-mail" />
                      </div>
                      <div className={styles["input-box"]}>
                        <i className="fas fa-lock icon">
                          <FontAwesomeIcon icon={faLock} />
                        </i>
                        <input
                          type="password"
                          name="Password"
                          placeholder="Contraseña"
                        />
                      </div>
                      <div className={styles.text}>
                        {" "}
                        <Link to={"/Recuperar"}>
                          <label>¿Olvidaste la contraseña?</label>
                        </Link>{" "}
                      </div>
                      <div
                        className={`${styles["button"]} ${styles["input-box"]}`}
                      >
                        <button
                          className={styles["button-form"]}
                          onClick={login}
                          type="submit"
                        >
                          Iniciar Sesión
                        </button>
                      </div>
                      <div className={styles["text login-text"]}>
                        ¿No tienes una cuenta?{" "}
                        <label htmlFor="flip">Regístrate</label>
                      </div>
                    </form>
                  </div>

                  <div className={styles["signup-form"]}>
                    <div className={styles.title}>Regístrate</div>
                    <div className={styles["input-boxes"]}>
                      <div className={styles["input-box"]}>
                        <i className="fas fa-user icon">
                          <FontAwesomeIcon icon={faUser} />
                        </i>
                        <input
                          type="text"
                          className={styles.type}
                          name="Type"
                          readOnly
                          placeholder="Enter your name"
                          value={3}
                        />
                        <input
                          type="text"
                          ref={name}
                          name="Name"
                          placeholder="Nombre"
                          required
                        />
                      </div>
                      <div className={styles["input-box"]}>
                        <i className={`fas fa-envelope ${styles["icon"]}`}>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </i>
                        <input
                          type="email"
                          ref={email}
                          name="Email"
                          placeholder="E-mail"
                          required
                        />
                      </div>
                      <div className={styles["input-box"]}>
                        <i className="fas fa-lock icon">
                          <FontAwesomeIcon icon={faLock} />
                        </i>
                        <input
                          onChange={validatePassword}
                          onInvalid={() => setValidate(false)}
                          type="password"
                          className={styles.password}
                          ref={password}
                          name="Password"
                          required
                          placeholder="Contraseña"
                          pattern="[a-zA-Z0-999]{6,10}"
                          title="La contraseña debe contener mas de 5 caracteres, mayusculas y numeros"
                        />
                      </div>

                      <div className={styles["container-file"]}>
                        <div
                          className={`${styles["input-boxx"]} ${styles.box}`}
                          onClick={handleButtonClick}
                        >
                          <i className={styles["icon"]}>
                            <FontAwesomeIcon icon={faCloudArrowUp} />
                          </i>
                          <input
                            type="file"
                            alt=""
                            ref={image}
                            name="Image"
                            hidden
                            placeholder="Choose your image"
                            required
                            onClick={handleImageInputChange}
                            onChange={handleImageInputChange}
                          />
                          {imagePreview && (
                            <div className={styles["image-preview"]}>
                              <img
                                className={styles.imgPreview}
                                src={imagePreview}
                                alt="Imagen seleccionada"
                              />
                              <button
                                className={styles.btnPreview}
                                onClick={handleImageClear}
                              >
                                <i className={styles.iconX}>
                                  <FontAwesomeIcon icon={faCircleXmark} />
                                </i>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div id="selectedFile"></div>
                      <div
                        className={`${styles["button"]} ${styles["input-box"]}`}
                      >
                        {validate && (
                          <button
                            className={styles["button-form"]}
                            type="submit"
                            onClick={register}
                            ref={btnRegister}
                          >
                            Regístrate
                          </button>
                        )}
                        {!validate && (
                          <button
                            className={styles["buttonDiv-form"]}
                            type="button"
                            onClick={showAlert}
                            ref={btnRegister}
                          >
                            Regístrate
                          </button>
                        )}
                      </div>
                      <div className={styles["text signup-text"]}>
                        ¿Ya tienes una cuenta?{" "}
                        <label htmlFor="flip">Inicia Sesión ya</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
