import React, { useState } from "react";
import Style from "./FormAdmincafeteriaCreateMenuProducts.module.css"

export const FormAdmincafeteriaCreateMenuProducts = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [idAdmin, setIdAdmin] = useState(2);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log(e.target);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://apimainejetravel.azurewebsites.net/api/MenuProduct/Guardar", { method: "POST", body: formData } );
      if (response.ok) {
        // Datos guardados exitosamente
        console.log("Datos guardados exitosamente");
        window.location.reload();
      } else {
        // Error al guardar los datos
        console.log("Error al guardar los datos");
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

      <label className={Style.label} htmlFor="category">Categoría:</label>
      <input className={Style.input} name="Category" type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />

      <label className={Style.label} htmlFor="image">Imagen:</label>
      <input className={Style.input} name="Image" type="file" id="image" value={image} onChange={(e) => setImage(e.target.value)} required />
      
      <input className={Style.id} name="Id_coffee" type="number" id="stock" value={idAdmin} onChange={(e) => setIdAdmin(Number(e.target.value))} required />

      <button className={Style.button} type="submit">Crear Producto</button>
    </form>
  );
};