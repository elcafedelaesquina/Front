import React, { useRef, useState } from "react";
import Style from "./FormAdmincafeteriaUpdateProduct.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const FormAdmincafeteriaUpdateProduct = ({ card, setIsHidden, isHidden }) => {
  const [id_product, setId_product] = useState(card.id_product);
  const [idAdmin, setIdAdmin] = useState(1092455367);
  const [name, setName] = useState(card.name);
  const [description, setDescription] = useState(card.description);
  const [price, setPrice] = useState(card.price);
  const [stock, setStock] = useState(card.stock);
  const [category, setCategory] = useState(card.category);
  const [image, setImage] = useState(null);

  var image2=useRef(null)

  const [imagePreview, setImagePreview] = useState(null);

  function handleImageInputChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const handleButtonClick = () => {
    image2.current.click();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(e.target);
    console.log(formData);

    try {
      const response = await fetch("https://apimainejetravel.azurewebsites.net/api/Product/Actualizar", { method: "PUT", body: formData });
      if (response.ok) {
        // Datos guardados exitosamente
        console.log("Datos Actualizados exitosamente"+ response);
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
    <>
    <div className={Style.containerForm}>
      <div className={Style.containerClose} onClick={() => setIsHidden(!isHidden)} >
        <AiOutlineCloseCircle className={Style.iconCLose} />
      </div>

      <form className={Style.form} onSubmit={handleSubmit}>

      {/* <label className={Style.label} htmlFor="image">Imagen:</label>
        <div className={Style.container}>
          <div className={Style.containerFile} onClick={handleButtonClick}>
            <input type="file" ref={image2} id="imageupload" style={{display: 'none'}} onChange={handleImageInputChange} />
            {setImage && (
              <div className={Style.imagePreview}>
                <img src={image} alt="" className={Style.imgPreview} />
              </div>
            )}
          </div>
        </div> */}

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
        <input name="Image" type="file" id="imageupload" value={image} onChange={(e) => setImage(e.target.value)} />

        <input className={Style.id} name="Id_admin" type="number" id="stock" value={idAdmin} onChange={(e) => setIdAdmin(Number(e.target.value))} required />

        <input className={Style.id} name="Id_product" type="number" id="stock" value={id_product} onChange={(e) => setId_product(Number(e.target.value))} required />
        
        <div>
          <button className={Style.button} type="submit">Actualizar Producto</button>
        </div>
      </form>
    </div>
    </>
  );
};
