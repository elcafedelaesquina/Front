import React, { useRef, useState, useEffect } from "react";
import Style from "./PerfilCafeteria.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { HeaderAdminCafeterias } from "../../../layouts/layoutsAdminCafeterias/HeaderAdminCafeterias/HeaderAdminCafeterias";
import { Loader } from "../../../layouts/loader/Loader";

export const PerfilCafeteria = () => {
  const Swal = require("sweetalert2");

  const [loader, setLoader] = useState(false);
  const [id_coffee, setIdCoffe] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    // Hacer una solicitud a la base de datos para obtener los datos del perfil del administrador
    // y asignar los valores recibidos a los estados correspondientes
    let id_coffee = JSON.parse(localStorage.getItem("id_coffee"));
    try {
      fetch(
        `https://apimainejetravel.azurewebsites.net/api/Coffee/Obtener/${id_coffee}`
      )
        .then((response) => response.json())
        .then((data) => {
          setIdCoffe(data[0][0].id_coffee);
          setName(data[0][0].name);
          setEmail(data[0][0].email);
          setPassword(data[0][0].password);
          setDescription(data[0][0].description);
          setAddress(data[0][0].address);
          setPhone(data[0][0].phone);
          setImage(data[0][0].image);
        }); // Supongamos que los datos del perfil se encuentran en una propiedad llamada "adminProfile"
    } catch (error) {
      console.log(
        "Error al obtener los datos del perfil del administrador:",
        error
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);

    try {
      setLoader(true);
      const response = await fetch(
        "https://apimainejetravel.azurewebsites.net/api/Coffee/Actualizar",
        {
          method: "PUT",
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.result === "exito al actualizar") {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Usuario actualizado exitosamente",
              showConfirmButton: false,
              timer: 1500,
            });
            localStorage.setItem("name", JSON.stringify(name));
            localStorage.setItem("image", JSON.stringify(image));
            localStorage.setItem("id_coffee", JSON.stringify(id_coffee));
          }
          console.log(data);
          if (response.ok) {
            // Datos actualizados exitosamente
            console.log("Datos actualizados exitosamente");
            setLoader(false);
          } else {
            // Error al actualizar los datos
            console.log("Error al actualizar los datos");
            setLoader(false);
          }
        });
    } catch (error) {
      console.log("Error de conexión:", error);
      setLoader(false);
    }
  };

  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageClear = () => {
    setImage("");
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <HeaderAdminCafeterias />
      <main className={Style.main}>
        {loader && <Loader/>}
        {!loader && (
          <div className={Style.container}>
            <form id="formu" onSubmit={handleSubmit} className={`${Style["input-boxes"]} ${"form-content"}`} >
              <div className={Style["form-content"]}>
                <div className={Style["form-create"]}>
                  <div className={Style.title}>
                    Editar Perfil{" "}
                    <div className={Style.iconX}>
                      <Link to={"/"}>
                        <ion-icon name="close"></ion-icon>
                      </Link>
                    </div>
                  </div>

                  <input type="text" className={Style["input-admin"]} name="Id_coffee" id="stock" value={parseInt(id_coffee)} onChange={() => {}} />

                  <input type="text" className={Style["input-admin"]} name="State" id="stock" value={"activo"} onChange={() => {}} />

                  <div className={Style["input-box"]}>
                    <input type="text" name="Name" placeholder="Nombre de la Cafeteria" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>

                  <div className={Style["input-box"]}>
                    <input type="email" name="email" placeholder="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div className={Style["input-box"]}>
                    <input type="password" name="password" placeholder="Contraseña" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>

                  <div className={Style["input-box textarea-container"]}>
                    <textarea name="Description" id="description" className={Style.textarea} placeholder="Ingrese su descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
                  </div>

                  <div className={Style["input-box"]}>
                    <input type="text" name="address" placeholder="Dirección" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                  </div>

                  <div className={Style["input-box"]}>
                    <input type="tel" name="phone" id="phone" placeholder="Telefono" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>

                  <div className={Style["container-file"]}>
                    <div className={`${Style["input-boxx"]} ${Style.box}`} onClick={handleButtonClick} >
                      <i className={Style["icon"]}>
                        <FontAwesomeIcon icon={faCloudArrowUp} />
                      </i>

                      <input type="file" name="Image" hidden placeholder="Choose your image" ref={fileInputRef} id="image" onLoad={(e) => {setImage(e.target.value); handleImageInputChange(e)}} onChange={(e) => {setImage(e.target.value); handleImageInputChange(e)}} />
                      {image && (
                        <div className={Style["image-preview"]}>
                          <img className={Style.imgPreview} src={image} alt="Imagen seleccionada" />
                          <button className={Style.btnPreview} onClick={handleImageClear} >
                            <i className={Style.iconX}>
                              <FontAwesomeIcon icon={faCircleXmark} />
                            </i>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className={`${Style["button"]} ${Style["input-box"]}`}>
                    <button className={Style["button-form"]} type="submit">
                      Guardar Cambios
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </main>
    </>
  );
};
