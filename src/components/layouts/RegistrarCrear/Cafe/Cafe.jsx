import styles from './Cafe.module.css';
import React, {useRef, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import logo from "./Logo.png"
import { Loader } from '../../loader';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export function Cafe() {
  const Swal = require('sweetalert2')
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
   fileInputRef.current.click();
 }


 const [loader,setLoader]=useState(false)

 var formulario=useRef(null)
 const navigate = useNavigate();
 
function register(){
 formulario=formulario.current
 formulario.addEventListener('submit',(e)=>{
   e.preventDefault()
   const formData=new FormData(formulario)

   formData.forEach(function(value, key) {
     console.log(key + ': ' + value);
   });
   setLoader(true)
   
   fetch('https://apimainejetravel.azurewebsites.net/api/Coffee/Guardar', {
     method: 'POST',
     body:formData
   })
   .then(response => response.json())
   .then(data=>{
     // Manejar la respuesta de la petición
     console.log(data)
     const {status}=data;
      console.log(status)
      if(status){ 
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ingresa la informacion de todos los campos!'
        })
        setLoader(false)
      }else{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Éxito al registrarse',
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/Cafe')
        setLoader(false)

      }
   })
   .catch(error => {
     // Manejar el error de la petición
     console.log(error)
   });
 })
 
}
var formularioLogin=useRef(null)

 function login(){
  formularioLogin=formularioLogin.current
  formularioLogin.addEventListener('submit',(e)=>{
    e.preventDefault()
    const formData=new FormData(formularioLogin)

    formData.forEach(function(value, key) {
      console.log(key + ': ' + value);
    });
    setLoader(true)
    
    fetch('https://apimainejetravel.azurewebsites.net/api/Autenticacion/Validar', {
      method: 'POST',
      body:formData
    })
    .then(response => response.json())
    .then(data=>{
      // Manejar la respuesta de la petición
      console.log(data)
      
      const {token, mensaje}=data;
      console.log(data)
      if(mensaje==='Correo o contraseña invalida'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Contraseña o correo invalido!'
        })
        setLoader(false)

      }
      else if(!token){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ingresa la informacion de todos los campos!'
        })
        setLoader(false)
      }else{
        localStorage.setItem('token',JSON.stringify(data.token))
        localStorage.setItem('name',JSON.stringify(data.listCoffee[0].name))
        localStorage.setItem('image',JSON.stringify(data.listCoffee[0].image))
        localStorage.setItem('id_coffee',JSON.stringify(data.listCoffee[0].id_coffee))
        let name=JSON.parse(localStorage.getItem('name'))
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Bienvenido '+name,
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/')
        setLoader(false)

      }
    })
    .catch(error => {
      // Manejar el error de la petición
      console.log(error)
    });
  })
  
}
  return (
    <div className={styles.cn}>
          {loader && <Loader></Loader>}
          {!loader && <div className={styles.container}>
    <input type="checkbox"  className={styles.flip} id="flip" />
    <div className={styles.cover}>
      <div className={styles.front}>
        <img className={styles['imgContainer']} src='https://metropoliabierta.elespanol.com/uploads/s1/83/27/49/cafeteri-a.jpeg' alt="" />
        <div className={styles.text}>
          <Link to={'/'}><img src={logo}  className={styles.logoForm} alt=''></img></Link>
          <span className={styles['text-1']}>Every new friend is <br /> a new adventure</span>
          <span className={styles['text-2']}>Let's get connected</span>
        </div>
      </div>
    </div>
    <form ref={formulario}>
      <div className={styles['form-content']}>
        <form ref={formularioLogin} className={styles['login-form']}>
          <div className={styles.title}>Login Cafe</div>
          <div className={styles['input-boxes']}>
            <div className={styles['input-box']}>
              <i className={`fas fa-envelope ${styles['icon']}`}><FontAwesomeIcon icon={faEnvelope} /></i>
              <input type="text" className={styles.type} name="Type"  placeholder='Enter your name' value={1}/>
              <input type="text" name='Email' placeholder='Enter your email' />
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-lock ${styles['icon']}`}>
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" name='Password' placeholder='Enter your password'  />
            </div>
            <div className={styles.text}><a href=''>Forget password?</a></div>
            <div className={`${styles['button']} ${styles['input-box']}`}>
              <i className={`fas fa-envelope ${styles['icon']}`}></i>
              <button className={styles['button-form']} type='submit' onClick={login}>Log In</button>
            </div>
            <div className={styles['text login-text']}>Don't have an account? <label htmlFor="flip">SigUp now</label></div>
          </div>
        </form>

        <div className={styles['signup-form']}>
          <div className={styles.title}>SignUp Cafe</div>
          <div className={styles['input-boxes']}>
            <div className={styles['input-box']}>
              <i className={`fas fa-user ${styles['icon']}`}>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <input type="text" className={styles.type} name="Type"   value={1}/>
              <input type="text" className={styles.type} name="State"   value={'activo'}/>
              <input type="text" name='Name' placeholder='Enter your name'  />
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-envelope ${styles['icon']}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <input type="text" name='Email' placeholder='Enter your email' />
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-Phone ${styles['icon']}`}>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <input type="tel" name='Phone' placeholder='Enter your phone'  />
            </div>

            <div className={styles['input-box']}>
              <i className={`fas fa-Location-Dot ${styles['icon']}`}>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              <input type="tel" name='Address' placeholder='Enter your address'  />
            </div>

            <div className={styles['input-box']}>
              <i className={`fas fa-lock ${styles['icon']}`}>
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" name='Password' placeholder='Enter your password'  />
            </div>

            <div className={styles['input-box textarea-container']}>
              <input type="textarea" name='Description' className={styles.textarea} placeholder='Enter your short description'  />
            </div>
            
            <div className={styles['container-file']}>
            <div className={`${styles['input-boxx']} ${styles.box}`} onClick={handleButtonClick}>
              <i className={styles['icon']} class="fa-solid fa-cloud-arrow-up"><FontAwesomeIcon icon={faCloudArrowUp} /></i>
              <input type="file" alt='' ref={fileInputRef} name="Image" hidden placeholder='Choose your image'  onChange={handleImageInputChange} />
              {imagePreview && (
                <div className={styles['image-preview']}>
                  <img className={styles.imgPreview} src={imagePreview} alt="Imagen seleccionada" />
                  <button className={styles.btnPreview} onClick={handleImageClear}><i className={styles.iconX} class="fa-solid fa-circle-xmark"><FontAwesomeIcon icon={faCircleXmark} /></i></button>
                </div>
              )}
            </div>
            </div>

            <div className={`${styles['button']} ${styles['input-box']}`}>
              <i className={`fas fa-envelope ${styles['icon']}`}></i>
              <button className={styles['button-form']} type='submit' onClick={register}>Sig Up</button>
            </div>
            <div className={styles['text signup-text']}>Already have an account? <label htmlFor="flip">Login now</label></div>
          </div>
        </div>
      </div>
    </form>
  </div>}
    </div>
    )
}
