import React, { useRef, useState } from "react";
import styles from "./CafeteriaCreateProduct.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import { Loader } from "../../loader";


export const CafeteriaCreateProduct = () => {

  //image
  function handleImageInputChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    function handleImageClear() {
      setImage('');
    }
  
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
      fileInputRef.current.click();
    }

  const [loader,setLoader]=useState(false)

  //
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [idAdmin, setIdAdmin] = useState(123);

  const handleSubmit = async (e) => {
    // e.preventDefault();
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
   
    <form  id='formu' onSubmit={handleSubmit}  className={`${styles['input-boxes']} ${'form-content'}`}>
      <div className={styles['form-content']}>
        <div className={styles['form-create']}>
          <div className={styles.title}>Crear Productos</div>

            <div className={styles['input-box']}>
              <input type="number" className={styles['input-admin']} name='Id_admin' id="stock" value={idAdmin} onChange={(e) => setIdAdmin(Number(e.target.value))}/>
            </div>

            <div className={styles['input-box']}>
              <input type="text" name='Name'  placeholder='Nombre' id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className={styles['input-box textarea-container']}>
              <textarea name='Description' id="description" className={styles.textarea} placeholder='Ingrese su descripción' value={description} onChange={(e) => setDescription(e.target.value)} />           
            </div>

            <div className={styles['input-box']}>
              <input type="text" name='Price' id="price" placeholder='Precio' value={price} onChange={(e) => {
                let x=parseInt(e.target.value) 
                setPrice(x)}}/>
            </div>

            <div className={styles['input-box']}>
              <input type="number" id="stock" name='Stock' placeholder='Existencias' value={stock} onChange={(e) => setStock(Number(e.target.value))}/>
            </div>

            <div className={styles['input-box']}>
              <input type="text" name='Category' id="categery" placeholder='Categoría' value={category} onChange={(e) => setCategory(e.target.value)}/>
            </div>

            <div className={styles['container-file']}>
              <div className={`${styles['input-boxx']} ${styles.box}`} onClick={handleButtonClick}>
              <i className={styles['icon']} ><FontAwesomeIcon icon={faCloudArrowUp} /></i>
                <input type="file" name='name' hidden placeholder="Choose your image" ref={fileInputRef} id="image"  onChange={(e) => { setImage(e.target.value); handleImageInputChange(e);}} />
                {image && (
                  <div className={styles['image-preview']}>
                    <img className={styles.imgPreview} src={image} alt="Imagen seleccionada" />
                    <button className={styles.btnPreview} onClick={handleImageClear}><i className={styles.iconX} class="fa-solid fa-circle-xmark"><FontAwesomeIcon icon={faCircleXmark} /></i></button>
                  </div>
                )}
              </div>
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
