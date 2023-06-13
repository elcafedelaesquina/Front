import React, { useRef, useState, useEffect } from "react";
import styles from "./EditarPerfilUsuario.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import { Loader } from "../../loader";
import { Link } from 'react-router-dom';



export const EditarPerfilUsuario = () => {
  
  const [image, setImage] = useState("");
  const fileInputRef = useRef(null);

  //image
  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
  };
  reader.readAsDataURL(file);
};

  const handleImageClear = () => {
    setImage('');
  };


  const handleButtonClick = () => {
    fileInputRef.current.click();
  };



  return (
    <div className={styles.cn}>
      <div className={styles.iconX}>
       <Link to={'/'}><ion-icon name="close"></ion-icon></Link>
      </div>
      
    {/* loader && <Loader></Loader> */}
    {/* !loader &&  */<div className={styles.container}>
   
    <form  id='formu' /* onSubmit={handleSubmit} */  className={`${styles['input-boxes']} ${'form-content'}`}>
      <div className={styles['form-content']}>
        <div className={styles['form-create']}>
          <div className={styles.title}>Editar Perfil del Usuario</div>

            <div className={styles['input-box']}>
              <input type="number" className={styles['input-user']} name='Id_user' id="stock" />
            </div>

            <div className={styles['input-box']}>
              <input type="text" name='Name'  placeholder='Nombre' id="name" />
            </div>

            <div className={styles['input-box']}>
              <input type="email" name='email'  placeholder='email' id="email" />
            </div>

            <div className={styles['input-box']}>
              <input type="password" name='password'  placeholder='Contraseña' id="password"  />
            </div>

            <div className={styles['container-file']}>
              <div className={`${styles['input-boxx']} ${styles.box}`} onClick={handleButtonClick}>
              <i className={styles['icon']} class="fa-solid fa-cloud-arrow-up"><FontAwesomeIcon icon={faCloudArrowUp} /></i>
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
              <button className={styles['button-form']} type='submit'>Guardar Cambios</button>
            </div>

        </div>
      </div>
    </form>
  </div>}
  </div>
  );
};

export default EditarPerfilUsuario;