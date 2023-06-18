import React, { useEffect, useState, useRef } from "react";
import Style from "./AdministradorCafeteria.module.css";
import { Link } from "react-router-dom";
import { HeaderAdminCafeterias } from "../../../layouts/layoutsAdminCafeterias/HeaderAdminCafeterias/HeaderAdminCafeterias";

export const AdministradorCafeteria = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [id_coffee, setId] = useState("");

  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("id_coffee"));
    setId(id);
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

      fetch("https://apimainejetravel.azurewebsites.net/api/Admin/Guardar", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          // Manejar la respuesta de la petición
          console.log(data);
        });
    });
  };

  var formularioLogin = useRef(null);
  return (
    <>
      <HeaderAdminCafeterias />
      <main></main>
    </>
  );
};
