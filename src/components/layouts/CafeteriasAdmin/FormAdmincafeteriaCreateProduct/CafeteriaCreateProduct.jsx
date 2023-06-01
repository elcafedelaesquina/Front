import React, { useState } from "react";
import styles from "./CafeteriaCreateProduct.module.css"
import { Loader } from "../../loader";


export const CafeteriaCreateProduct = () => {

  const [loader,setLoader]=useState(false)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [idAdmin, setIdAdmin] = useState(123);

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
        setLoader(false)
      } else {
        // Error al guardar los datos
        console.log("Error al guardar los datos");
      }
      setLoader(false)
    } catch (error) {
      console.log("Error de conexión:", error);
    }
  };

  return (
    <div className={styles.cn}>
    {loader && <Loader></Loader>}
    {!loader && <div className={styles.container}>
   
    <form  id='formu' onSubmit={handleSubmit} className={styles['input-boxes']}>
      <div className={styles['form-content']}>
        <div className={styles['login-form']}>
          <div className={styles.title}>Crear Productos</div>

            <div className={styles['input-box']}>
              <input type="text" name='Name'  placeholder='Nombre' id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className={styles['input-box']}>
              <textarea name='Description' id="description" className={styles.textarea} placeholder='Enter your Description' value={description} onChange={(e) => setDescription(e.target.value)} />           
            </div>

            <div className={styles['input-box']}>
              <input type="number" name='Price' id="price" placeholder='Precio' value={price} onChange={(e) => setPrice(Number(e.target.value))}/>
            </div>

            <div className={styles['input-box']}>
              <input type="number" id="stock" name='Stock' placeholder='Stock' value={stock} onChange={(e) => setStock(Number(e.target.value))}/>
            </div>

            <div className={styles['input-box']}>
              <input type="text" name='Category' id="categery" placeholder='Categoría' value={category} onChange={(e) => setCategory(e.target.value)}/>
            </div>

            <div className={styles['input-box']}>
              <input type="file" name='name' id="image" value={image} onChange={(e) => setImage(e.target.value)}/>
            </div>

            <div className={styles['input-box']}>
              <input type="number" name='Id_admin' id="stock" value={idAdmin} onChange={(e) => setIdAdmin(Number(e.target.value))}/>
            </div>

            <div className={`${styles['button']} ${styles['input-box']}`}>
              <button className={styles['button-form']} type='submit'>Crear Producto</button>
            </div>

        </div>
      </div>
    </form>
  </div>}
  </div>
  );
};
