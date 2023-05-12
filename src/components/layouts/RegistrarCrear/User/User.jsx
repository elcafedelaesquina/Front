import React, { useEffect, useRef, useState } from 'react'
import styles from './User.module.css';
import img_front from "./img/Image_front.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import logo from "./Logo.png"
import { Link } from 'react-router-dom'


export function User() {
  const [imagePreview, setImagePreview] = useState('');
  function handleImageInputChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  }
  function handleImageClear() {
    setImagePreview('');
  }
  
  //boton images
 const fileInputRef = useRef(null);
 const handleButtonClick = () => {
   image.current.click();
 }
  //
  const [userName,setUserName]=useState('')
  const [userEmail,setUserEmail]=useState('')
  const [userPassword,setUserPassword]=useState('')
  const [userImage,setUserImage]=useState('')
  //botones enviar
  var btnRegister=useRef()
  var btnSingIn=useRef()
  //inputs
  var image=useRef()
  var email=useRef()
  var password=useRef()
  var name=useRef()
  


 function cargarDatos(){
  setUserName(password.current.value)
  setUserEmail(email.current.value)
  setUserPassword(name.current.value)
  setUserImage(image.current.value)
 }

/*  console.log(userImage)
 console.log(userName)
 console.log(userPassword)
 console.log(userEmail) */

  // Crear instancia de FormData
  var formulario=useRef(null)
function register(){
  formulario=formulario.current
  formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    const formData=new FormData(formulario)

    formData.forEach(function(value, key) {
      console.log(key + ': ' + value);
    });
    
    fetch('https://apimainejetravel.azurewebsites.net/api/Customer/Guardar', {
      method: 'POST',
      body:formData
    })
    .then(response => response.json())
    .then(data=>{
      // Manejar la respuesta de la petición
      console.log(data)
    })
    .catch(error => {
      // Manejar el error de la petición
      console.log(error)
    });
  })
  
}

  // Agregar los datos a enviar en la petición


  // Realizar la petición POST


return (
<div className={styles.cn}>
    <div className={styles.container}>
    <input type="checkbox" className={styles.flip} id='flip' />
    <div className={styles.cover}>
      <div className={styles.front}>
        <img className={styles.imgContainer} src={img_front} alt="" />
        
        <div className={styles.text}>
          <li><Link to={'/'}><img src={logo}  className={styles.logoForm} alt=''></img></Link></li>
          <span className={styles['text-1']}>Every new friend is <br /> a new adventure</span>
          <span className={styles['text-2']}>Let's get connected</span>
        </div>
      </div>
    </div>
    <form  id='formu' ref={formulario}>
      <div className={styles['form-content']}>
        <div className={styles['login-form']}>
          <div className={styles.title}>Login User</div>
          <div className={styles['input-boxes']}>
            <div className={styles['input-box']}>
              <i className='fas fa-envelope icon'><FontAwesomeIcon icon={faEnvelope} /></i>
              <input type="email"  placeholder='Enter your email'  />
            </div>
            <div className={styles['input-box']}>
              <i className='fas fa-lock icon'><FontAwesomeIcon icon={faLock} /></i>
              <input type="password"  placeholder='Enter your password' />
            </div>
            <div className={styles.text}><a href=''>Forget password?</a></div>
            <div className={`${styles['button']} ${styles['input-box']}`}>
              <button className={styles['button-form']} ref={btnSingIn} type='submit'>Log In</button>
            </div>
            <div className={styles['text login-text']}>Don't have an account? <label htmlFor="flip">SigUp now</label></div>
          </div>
        </div>

        <div className={styles['signup-form']}>
          <div className={styles.title}>SignUp User</div>
          <div className={styles['input-boxes']}>
            <div className={styles['input-box']}>
              <i className='fas fa-user icon'><FontAwesomeIcon icon={faUser} /></i>
              <input type="text" ref={name} name="Name"  placeholder='Enter your name' required />
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-envelope ${styles['icon']}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <input type="text" ref={email}name="Email" placeholder='Enter your email' required />
            </div>
            <div className={styles['input-box']}>
              <i className='fas fa-lock icon'><FontAwesomeIcon icon={faLock} /></i>
              <input type="password" ref={password} name="Password"  placeholder='Enter your password' required />
            </div>

            <div className={styles['container-file']}>
            <div className={`${styles['input-boxx']} ${styles.box}`} onClick={handleButtonClick}>
              <i className={styles['icon']} class="fa-solid fa-cloud-arrow-up"><FontAwesomeIcon icon={faCloudArrowUp} /></i>
              <input type="file" alt='' ref={image} name="Image" hidden placeholder='Choose your image' required onChange={handleImageInputChange} />
              {imagePreview && (
                <div className={styles['image-preview']}>
                  <img className={styles.imgPreview} src={imagePreview} alt="Imagen seleccionada" />
                  <button className={styles.btnPreview} onClick={handleImageClear}><i className={styles.iconX} class="fa-solid fa-circle-xmark"><FontAwesomeIcon icon={faCircleXmark} /></i></button>
                </div>
              )}
            </div>
            </div>

            <div id='selectedFile'></div>
            <div className={`${styles['button']} ${styles['input-box']}`}>
              <button className={styles['button-form']} type='submit' onClick={register}  ref={btnRegister}>Sig Up</button>
            </div>
            <div className={styles['text signup-text']}>Already have an account? <label htmlFor="flip">Login now</label></div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
    )
}
