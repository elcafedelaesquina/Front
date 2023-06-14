import React, { useRef, useState, useEffect } from "react";
import styles from "./EditarPerfilAdmin.module.css"
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import { Loader } from "../../loader";



export const EditarPerfilAdmin = () => {
  

  const [loader,setLoader]=useState(false)

  const [id_coffee, setIdCoffe] = useState("id_coffee");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("")
 
  const fileInputRef = useRef(null);


  useEffect(() => {
    // Hacer una solicitud a la base de datos para obtener los datos del perfil del administrador
    // y asignar los valores recibidos a los estados correspondientes
    const fetchAdminProfile = async () => {
      try {
        const response = await fetch("https://apimainejetravel.azurewebsites.net/api/Coffee/Obtener/2");
        const data = await response.json();
        const adminProfile = data.adminProfile; // Supongamos que los datos del perfil se encuentran en una propiedad llamada "adminProfile"

        setIdCoffe(adminProfile.id_coffee);
        setName(adminProfile.name);
        setEmail(adminProfile.email);
        setPassword(adminProfile.password);
        setDescription(adminProfile.description);
        setAddress(adminProfile.address);
        setPhone(adminProfile.phone);
        setImage(adminProfile.image);
      } catch (error) {
        console.log("Error al obtener los datos del perfil del administrador:", error);
      }
    };

    fetchAdminProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

  const formData = new FormData(e.target);

  try {
    setLoader(true);

    const response = await fetch("https://apimainejetravel.azurewebsites.net/api/Admin/Actualizar", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      // Datos actualizados exitosamente
      console.log("Datos actualizados exitosamente");
      setLoader(false);
    } else {
      // Error al actualizar los datos
      console.log("Error al actualizar los datos");
      setLoader(false);
    }
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
    {loader && <Loader></Loader>}
    {!loader && <div className={styles.container}>
   
    <form  id='formu' onSubmit={handleSubmit}  className={`${styles['input-boxes']} ${'form-content'}`}>
      <div className={styles['form-content']}>
        <div className={styles['form-create']}>
          <div className={styles.title}>Editar Perfil</div>

            <div className={styles['input-box']}>
              <input type="number" className={styles['input-admin']} name='Id_admin' id="stock" value={id_coffee} onChange={(e) => setIdCoffe(Number(e.target.value))}/>
            </div>

            <div className={styles['input-box']}>
              <input type="text" name='Name'  placeholder='Nombre de la Cafeteria' id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className={styles['input-box']}>
              <input type="email" name='email'  placeholder='email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className={styles['input-box']}>
              <input type="password" name='password'  placeholder='Contraseña' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className={styles['input-box textarea-container']}>
              <textarea name='Description' id="description" className={styles.textarea} placeholder='Ingrese su descripción' value={description} onChange={(e) => setDescription(e.target.value)} />           
            </div>

            <div className={styles['input-box']}>
              <input type="text" name='address'  placeholder='Dirección' id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>

            <div className={styles['input-box']}>
              <input type="tel" name='phone' id="phone" placeholder='Telefono' value={phone} onChange={(e) => setPhone(e.target.value)}/>
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

export default EditarPerfilAdmin;