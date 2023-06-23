import React, { useRef, useState, useEffect } from "react";
import styles from "./EditarPerfilAdmin.module.css"
import { Link,useNavigate } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import { Loader } from "../../loader";



export const EditarPerfilAdmin = () => {
  const Swal = require('sweetalert2')
  const navigate = useNavigate();

  const [loader,setLoader]=useState(false)

  const [id_coffee, setIdCoffe] = useState("");
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
    let id_coffee=JSON.parse(localStorage.getItem('id_coffee'))
      try {
        fetch(`https://apimainejetravel.azurewebsites.net/api/Coffee/Obtener/${id_coffee}`)
        .then(response=> response.json())
        .then(data=>{
          setIdCoffe(data[0][0].id_coffee);
          setName(data[0][0].name);
          setEmail(data[0][0].email);
          setPassword(data[0][0].password);
          setDescription(data[0][0].description);
          setAddress(data[0][0].address);
          setPhone(data[0][0].phone);
        
        }
          );
        
        
        
;// Supongamos que los datos del perfil se encuentran en una propiedad llamada "adminProfile"

       
        
       
      } catch (error) {
        console.log("Error al obtener los datos del perfil del administrador:", error);
      }
    

    
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target)
  const formData = new FormData(e.target);

  try {

    setLoader(true);

    const response = await fetch("https://apimainejetravel.azurewebsites.net/api/Coffee/Actualizar", {
      method: "PUT",
      body: formData
    }).then(response=>response.json())
    .then(data=>{
      if(data.result==="exito al actualizar") {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Usuario actualizado exitosamente',
          showConfirmButton: false,
          timer: 1500
        })
        localStorage.setItem('name',JSON.stringify(name))
        localStorage.setItem('image',JSON.stringify(image))
        localStorage.setItem('id_coffee',JSON.stringify(id_coffee))
      }else{
        Swal.fire({
          position: 'top-center',
          icon: 'warning',
          title: 'Selecciona una imagen',
          showConfirmButton: false,
          timer: 1500
        })

      }
     
      
      console.log(data)
      if (response.ok) {
        // Datos actualizados exitosamente
        console.log("Datos actualizados exitosamente");
        setLoader(false);
      } else {
        // Error al actualizar los datos
        setImage(image)
        console.log("Error al actualizar los datos");
        setLoader(false);
      }
    }
    )
    navigate('/EditarPerfilAdmin')


    /* */
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
      
    {loader && <Loader></Loader>}
    {!loader && <div className={styles.container}>
   
    <form  id='formu'  onSubmit={handleSubmit}  className={`${styles['input-boxes']} ${'form-content'}`}>
      <div className={styles['form-content']}>
        <div className={styles['form-create']}>
          <div className={styles.title}>Editar Perfil <div className={styles.iconX}>
       <Link to={'/'}><ion-icon name="close"></ion-icon></Link>
      </div></div>
              <input type="text" className={styles['input-admin']} name='Id_coffee' id="stock" value={parseInt(id_coffee)} onChange={() =>{} }/>
              <input type="text" className={styles['input-admin']} name='State' id="stock" value={'activo'} onChange={() =>{} }/>
              
            

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
              <i className={styles['icon']} ><FontAwesomeIcon icon={faCloudArrowUp} /></i>
                <input type="file" name='Image' hidden placeholder="Choose your image"  ref={fileInputRef} id="image" onLoad={(e) => { setImage(e.target.value); handleImageInputChange(e)}} onChange={(e) => { setImage(e.target.value); handleImageInputChange(e);}} />
                {image && (
                  <div className={styles['image-preview']}>
                    <img className={styles.imgPreview} src={image} alt="Imagen seleccionada" />
                    <button className={styles.btnPreview} onClick={handleImageClear}><i className={styles.iconX} ><FontAwesomeIcon icon={faCircleXmark} /></i></button>
                  </div>
                )}
                {!image && (
                  <div className={styles['image-preview']}>
                    
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