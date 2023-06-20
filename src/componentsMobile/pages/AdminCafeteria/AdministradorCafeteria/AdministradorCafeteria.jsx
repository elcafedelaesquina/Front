import React, { useEffect, useState, useRef } from "react";
import Style from "./AdministradorCafeteria.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HeaderAdminCafeterias } from "../../../layouts/layoutsAdminCafeterias/HeaderAdminCafeterias/HeaderAdminCafeterias";

export const AdministradorCafeteria = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [createNewAdmin, setcreateNewAdmin] = useState(false);
  const [id_coffee, setId] = useState("");

  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("id_coffee"));
    setId(id);
    if (id) {
      fetch(
        `https://apimainejetravel.azurewebsites.net/api/Admin/Lista/1/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
        const { list } = data;
        const valores = list[0]
        setDataProduct(valores);
        });
    }
  }, []);
  var formularioLogin = useRef(null);

  const createAdmin = () => {
    formularioLogin = formularioLogin.current;
    formularioLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(formularioLogin);

      formData.forEach(function (value, key) {
        console.log(key + ": " + value);
      });

      fetch("https://apimainejetravel.azurewebsites.net/api/Admin/Guardar", {method: "POST", body: formData})
        .then((response) => response.json())
        .then((data) => {
          // Manejar la respuesta de la petición
          console.log(data);
        });
      });
      window.location.reload();
  };

  var formularioLogin = useRef(null);
  return (
    <>
      <HeaderAdminCafeterias />
      <main className={Style.main}>
        {/* loader && <Loader />*/}
        {/* !loader && */ 
          <>
            {!createNewAdmin ? (
              <div className={Style.ProductsContainer}>
                <h2 className={Style.titleContainerProducts } /* onClick={updateProduct} */>Mi Administrador</h2>

                {dataProduct.length > 0 &&
                  dataProduct.map(() => {
                    return (
                      <>
                      <h2>{dataProduct[0].name}</h2>
                      <h2>{dataProduct[0].id_admin}</h2>
                      </>
                    )
                  })}
                {!dataProduct.length > 0 && (
                  <button className={Style.btnStart} onClick={() => setcreateNewAdmin(!createNewAdmin)} >Crea un Administrador</button>
                )}
              </div>
            ):(
              <>
                <div onClick={() => setcreateNewAdmin(!createNewAdmin)} className={Style.iconX}>
                  <AiOutlineCloseCircle className={Style.close} />
                </div>

                <div className={Style.containerForms}>
                  <div className={Style.container}>
                    <form id="formu" /* onSubmit={handleSubmit} */ ref={formularioLogin} className={`${Style["input-boxes"]} ${"form-content"}`} >
                      <div className={Style["form-content"]}>
                        <div className={Style["form-create"]}>
                          <div className={Style.titleContainer}>
                            <h4 className={Style.title}>Registrar Administrador</h4>
                          </div>

                          <input type="text" className={Style["input-admin"]} name="Type_admin" value={1} />

                          <input type="text" className={Style["input-admin"]} name="Id_business" value={id_coffee} />
                          
                          <div className={Style["input-box"]}>
                            <input type="text" name="Name" placeholder="Nombre" id="name" />
                          </div>

                          <div className={Style["input-box"]}>
                            <input type="text" name="Id_admin" placeholder="Cédula" id="Cedula" />
                          </div>

                          <div className={`${Style["button"]} ${Style["input-box"]}`} >
                            <button className={Style["button-form"]} type="submit" onClick={() => {createAdmin();}}>
                              Crear Administrador
                            </button>
                          </div>

                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </>
              )}
          </>
        }
      </main>
    </>
  );
};
