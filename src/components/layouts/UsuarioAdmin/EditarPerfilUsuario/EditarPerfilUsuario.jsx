import React, { useRef, useState, useEffect } from "react";
import styles from "./EditarPerfilUsuario.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import { Loader } from "../../loader";
import { Link } from 'react-router-dom';



export const EditarPerfilUsuario = () => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const[id_customer,setIdCustomer]=useState('')
  
  const [image, setImage] = useState("");
  const fileInputRef = useRef(null);

  useEffect(()=>{
    let id=JSON.parse(localStorage.getItem('id_customer'))
    setIdCustomer(id)
    console.log(typeof id)
    fetch(`https://apimainejetravel.azurewebsites.net/api/Customer/Obtener/7`, {
      method: 'GET'
      
    })
    .then(response => response.json())
    .then(data=>{
      setName(data[0][0].name)
      setEmail(data[0][0].email)
      setPassword(data[0][0].password)})

  },[])

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

  var formulario=useRef(null)

  const register=()=>{
    
  formulario=formulario.current
  
  formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const formData=new FormData(formulario)


      formData.forEach(function(value, key) {
      console.log(key + ': ' + value);
    });
    
    
    fetch('https://apimainejetravel.azurewebsites.net/api/Customer/Actualizar', {
      method: 'PUT',
      body:formData
    })
    .then(response => response.json())
    .then(data=>{
      // Manejar la respuesta de la petición
      /* console.log(data.status) */
      const {status,exepcion}=data;
      console.log(data)
   
    })
    ;
  })
  
}



  return (
    <div className={styles.cn}>
      <div className={styles.iconX}>
       <Link to={'/'}><ion-icon name="close"></ion-icon></Link>
      </div>
      
    {/* loader && <Loader></Loader> */}
    {/* !loader &&  */<div className={styles.container}>
   
    <form  id='formu' /* onSubmit={handleSubmit} */ ref={formulario}  className={`${styles['input-boxes']} ${'form-content'}`}>
      <div className={styles['form-content']}>
        <div className={styles['form-create']}>
          <div className={styles.title}>Editar Perfil del Usuario</div>

            <div className={styles['input-box']}>
              <input type="number" className={styles['input-user']} value={id_customer} readOnly name='Id_customer' id="stock" />
            </div>

            <div className={styles['input-box']}>
              <input type="text" name='Name' value={name}  placeholder='Nombre' id="name" />
            </div>

            <div className={styles['input-box']}>
              <input type="email" name='Email' value={email} placeholder='email' id="email" />
            </div>

            <div className={styles['input-box']}>
              <input type="password" name='Password' value={password}   placeholder='Contraseña' id="password"  />
            </div>

            <div className={styles['container-file']}>
              <div className={`${styles['input-boxx']} ${styles.box}`} onClick={handleButtonClick}>
              <i className={styles['icon']} ><FontAwesomeIcon icon={faCloudArrowUp} /></i>
                <input type="file" name='Image' hidden placeholder="Choose your image" ref={fileInputRef} id="image"  onChange={(e) => { setImage(e.target.value); handleImageInputChange(e);}} />
                {image && (
                  <div className={styles['image-preview']}>
                    <img className={styles.imgPreview} src={image} alt="Imagen seleccionada" />
                    <button className={styles.btnPreview} onClick={handleImageClear}><i className={styles.iconX} class="fa-solid fa-circle-xmark"><FontAwesomeIcon icon={faCircleXmark} /></i></button>
                  </div>
                )}
              </div>
            </div>

            <div className={`${styles['button']} ${styles['input-box']}`}>
              <button className={styles['button-form']} type='submit' onClick={register}>Guardar Cambios</button>
            </div>

        </div>
      </div>
    </form>
  </div>}
  </div>
  );
};

export default EditarPerfilUsuario;