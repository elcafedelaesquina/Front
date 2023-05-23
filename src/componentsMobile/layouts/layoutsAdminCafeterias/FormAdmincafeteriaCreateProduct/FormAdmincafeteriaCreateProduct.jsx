import React, { useState } from "react";
import Style from "./FormAdmincafeteriaCreateProduct.module.css"

export const FormAdmincafeteriaCreateProduct = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Description", description);
    formData.append("Price", price);
    formData.append("Stock", stock);
    formData.append("Category", category);
    formData.append("image", image);

    try {
        
      const response = await fetch("https://apimainejetravel.azurewebsites.net/api/Product/Guardar", { method: "POST", body: formData, } );

      if (response.ok) {
        // Datos guardados exitosamente
        console.log("Datos guardados exitosamente");
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
      <input className={Style.input} type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label className={Style.label} htmlFor="description">Descripción:</label>
      <textarea className={Style.textarea} id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label className={Style.label} htmlFor="price">Precio:</label>
      <input className={Style.input} type="number" id="price" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />

      <label className={Style.label} htmlFor="stock">Stock:</label>
      <input className={Style.input} type="number" id="stock" value={stock} onChange={(e) => setStock(Number(e.target.value))} required />

      <label className={Style.label} htmlFor="category">Categoría:</label>
      <input className={Style.input} type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />

      <label className={Style.label} htmlFor="image">Imagen:</label>
      <input className={Style.input} type="file" id="image" value={image} onChange={(e) => setImage(e.target.value)} required />

      <button className={Style.button} type="submit">Crear Producto</button>
    </form>
  );
};
