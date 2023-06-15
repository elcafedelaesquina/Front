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
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupAddress, setSignupAddress] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupDescription, setSignupDescription] = useState('');


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

  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Capturar los valores de los campos de entrada
    const loginData = {
      email: loginEmail,
      password: loginPassword
    };
    console.log(loginData)

    // Aquí puedes realizar la llamada a la API del backend para el inicio de sesión
    // backend.login(loginData);

    // Limpiar los campos de entrada después de enviar los datos
    setLoginEmail('');
    setLoginPassword('');
  };
  console.log(loginEmail)

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Capturar los valores de los campos de entrada
    const signupData = {
      name: signupName,
      email: signupEmail,
      phone: signupPhone,
      address: signupAddress,
      password: signupPassword,
      description: signupDescription

    };
    console.log(signupData)

    // Aquí puedes realizar la llamada a la API del backend para el registro
    // backend.signup(signupData);

    // Limpiar los campos de entrada después de enviar los datos
    setSignupName('');
    setSignupEmail('');
    setSignupPhone('');
    setSignupAddress('');
    setSignupPassword('');
    setSignupDescription('');
  };
    


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
     const {status,exepcion}=data;
      console.log(status)
      if(exepcion ||exepcion==='Account is registed'){
        Swal.fire({
          position: 'top-center',
          icon: 'warning',
          title: 'Oops...',
          text: 'Este E-mail ya está registrado!'
        })
        
        setLoader(false)
        setImagePreview('');

      }
      
      else if(status){ 
        Swal.fire({
          position: 'top-center',
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
          position: 'top-center',
          icon: 'error',
          title: 'Oops...',
          text: 'Contraseña o correo invalido!'
        })
        setLoader(false)

      }
      else if(!token){
        Swal.fire({
          position: 'top-center',
          icon: 'warning',
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
          position: 'top-center',
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
      <div className={styles.iconX}>
       <Link to={'/PageRegistros'}><ion-icon name="close"></ion-icon></Link>
      </div>
      
      
          {loader && <Loader></Loader>}
          {!loader && <div className={styles.container}>
    <input type="checkbox"  className={styles.flip} id="flip" />
    <div className={styles.cover}>
      <div className={styles.front}>
        <img className={styles['imgContainer']} src='https://metropoliabierta.elespanol.com/uploads/s1/83/27/49/cafeteri-a.jpeg' alt="" />
        <div className={styles.text}>
          <Link to={'/'}><img src={logo}  className={styles.logoForm} alt=''></img></Link>
          <span className={styles['text-1']}>Empieza con nosotros<br /> para que tengas una mejor experiencia</span>
          <span className={styles['text-2']}>Disfruta de los mejores servicios</span>
        </div>
      </div>
    </div>
    <form ref={formulario}>
      <div className={styles['form-content']}>
        <form ref={formularioLogin} className={styles['login-form']}>
          <div className={styles.titleContainer}><h4 className={styles.title}>Iniciar Sesión</h4></div>
          <div className={styles['input-boxes']}>
            <div className={styles['input-box']}>
              <i className={`fas fa-envelope ${styles['icon']}`}><FontAwesomeIcon icon={faEnvelope} /></i>

              <input type="text" className={styles.type} name="Type" readOnly  placeholder='Enter your name' value={1}/>
              <input type="text" name='Email' placeholder='E-mail' />

            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-lock ${styles['icon']}`}>
                <FontAwesomeIcon icon={faLock} />
              </i>

              <input type="password" name='Password' placeholder='Contraseña'  />

            </div>
            <div className={styles.text}><a href=''>¿Olvidaste la contraseña?</a></div>
            <div className={`${styles['button']} ${styles['input-box']}`}>
              <i className={`fas fa-envelope ${styles['icon']}`}></i>

              <button className={styles['button-form']} type='submit' onClick={login}>Inciar Sesión</button>

            </div>
            <div className={styles['text login-text']}>¿No tienes una cuenta? <label htmlFor="flip">Regístrate</label></div>
          </div>
        </form>

        <div className={styles['signup-form']}>
          <div className={styles.title}>Regístrate</div>
          <div className={styles['input-boxes']}>
            <div className={styles['input-box']}>
              <i className={`fas fa-user ${styles['icon']}`}>
                <FontAwesomeIcon icon={faUser} />
              </i>

              <input type="text" className={styles.type} name="Type" readOnly   value={1}/>
              <input type="text" className={styles.type} name="State" readOnly   value={'activo'}/>
              <input type="text" name='Name' placeholder='Nombre de Tu Cafetería'  />

            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-envelope ${styles['icon']}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>

              <input type="text" name='Email' placeholder='E-mail' />

            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-Phone ${styles['icon']}`}>
                <FontAwesomeIcon icon={faPhone} />
              </i>

              <input type="tel" name='Phone' placeholder='Telefono'  />

            </div>

            <div className={styles['input-box']}>
              <i className={`fas fa-Location-Dot ${styles['icon']}`}>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>

              <input type="tel" name='Address' placeholder='Dirección-ejemplo: Salento Cra 6 #5'  />

            </div>

            <div className={styles['input-box']}>
              <i className={`fas fa-lock ${styles['icon']}`}>
                <FontAwesomeIcon icon={faLock} />
              </i>

              <input type="password" name='Password' placeholder='Contraseña'  />
            </div>

            <div className={styles['input-box textarea-container']}>
              <input type="textarea" name='Description' className={styles.textarea} placeholder='Breve descripción de tu Cafetería'  />

            </div>
            
            <div className={styles['container-file']}>
            <div className={`${styles['input-boxx']} ${styles.box}`} onClick={handleButtonClick}>
              <i className={styles['icon']} ><FontAwesomeIcon icon={faCloudArrowUp} /></i>
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

              <button className={styles['button-form']} type='submit' onClick={register}>Regístrate</button>

            </div>
            <div className={styles['text signup-text']}>¿Ya tienes una cuenta? <label htmlFor="flip">Inicia sesión ya</label></div>
          </div>
        </div>
      </div>
    </form>
  </div>}
    </div>
    )
}
