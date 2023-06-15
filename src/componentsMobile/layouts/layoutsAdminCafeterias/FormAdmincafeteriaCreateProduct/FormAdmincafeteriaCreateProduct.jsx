import React, { useState, useEffect } from "react";
import Style from "./FormAdmincafeteriaCreateProduct.module.css"

export const FormAdmincafeteriaCreateProduct = () => {
  
  let item = JSON.parse(localStorage.getItem("id_coffee"));
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [idAdmin, setIdAdmin] = useState("");

  const getAdmin = async () => {
    await fetch(
      `https://apimainejetravel.azurewebsites.net/api/Admin/Lista/1/${item}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIdAdmin(data.list[0][0].id_admin) 
        console.log(data.list[0][0].id_admin)
      });
    };
    
    useEffect(() => {
      getAdmin();
    }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://apimainejetravel.azurewebsites.net/api/Product/Guardar", { method: "POST", body: formData } );
      if (response.ok) {
        // Datos guardados exitosamente
        console.log("Datos guardados exitosamente");
        window.location.reload();
      } else {
        // Error al guardar los datos
        console.log(response);
      }
    } catch (error) {
      console.log("Error de conexión:", error);
    }
  };

  return (
    <form className={Style.form} onSubmit={handleSubmit}>
      <label className={Style.label} htmlFor="name">Nombre:</label>
      <input className={Style.input} name="Name" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label className={Style.label} htmlFor="description">Descripción:</label>
      <textarea className={Style.textarea} name="Description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label className={Style.label} htmlFor="price">Precio:</label>
      <input className={Style.input} name="Price" type="number" id="price" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />

      <label className={Style.label} htmlFor="stock">Stock:</label>
      <input className={Style.input} name="Stock" type="number" id="stock" value={stock} onChange={(e) => setStock(Number(e.target.value))} required />

      <label className={Style.label} htmlFor="category">Categoría:</label>
      <input className={Style.input} name="Category" type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />

      <label className={Style.label} htmlFor="image">Imagen:</label>
      <input className={Style.input} name="Image" type="file" id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
      
      <input className={Style.id} name="Id_admin" type="number" id="stock" value={idAdmin} onChange={(e) => setIdAdmin(Number(e.target.value))} required />

      <button className={Style.button} type="submit">Crear Producto</button>
    </form>
  );
};
