import React, { useRef, useState } from 'react'
import styles from './Farm.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import logo from "./Logo.png"
import { Link } from 'react-router-dom';


export function Farm() {

  //inputs
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
  
  //boton images
 const fileInputRef = useRef(null);
 const handleButtonClick = () => {
  fileInputRef.current.click();
 }

 function handleLoginSubmit(e) {
  e.preventDefault();
  // Aquí puedes enviar los valores de inicio de sesión al backend
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

function handleSignupSubmit(e) {
  e.preventDefault();
  // Aquí puedes enviar los valores de registro al backend
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
}

  return (
    <div className={styles.cn}>
          <div className={styles.container}>
    <input type="checkbox" className={styles.flip} id="flip" />
    <div className={styles.cover}>
      <div className={styles.front}>
        <img className={styles['imgContainer']} src='https://media-cdn.tripadvisor.com/media/photo-s/07/19/08/26/finca-el-ocaso-salento.jpg' alt="" />
        <div className={styles.text}>
          <Link to={'/'}><img src={logo}  className={styles.logoForm} alt=''></img></Link>
          <span className={styles['text-1']}>Every new friend is <br /> a new adventure</span>
          <span className={styles['text-2']}>Let's get connected</span>
        </div>
      </div>
    </div>
    <form action="#">
      <div className={styles['form-content']}>
        <div className={styles['login-form']}>
          <div className={styles.title}>Login Farm</div>
          <div className={styles['input-boxes']}>
            <div className={styles['input-box']}>
              <i className={`fas fa-envelope ${styles['icon']}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <input type="text" placeholder='Enter your email' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-lock ${styles['icon']}`}>
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" placeholder='Enter your password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            </div>
            <div className={styles.text}><a href=''>Forget password?</a></div>
            <div className={`${styles['button']} ${styles['input-box']}`}>
              <i className={`fas fa-envelope ${styles['icon']}`}></i>
              <button className={styles['button-form']} type='submit'onClick={handleLoginSubmit}>Log In</button>
            </div>
            <div className={styles['text login-text']}>Don't have an account? <label htmlFor="flip">SigUp now</label></div>
          </div>
        </div>

        <div className={styles['signup-form']}>
          <div className={styles.title}>SignUp Farm</div>
          <div className={styles['input-boxes']}>
            <div className={styles['input-box']}>
              <i className={`fas fa-user ${styles['icon']}`}>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <input type="text" placeholder='Enter your name' value={signupName} onChange={(e) => setSignupName(e.target.value)} />
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-envelope ${styles['icon']}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <input type="text" placeholder='Enter your email' value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-Phone ${styles['icon']}`}>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <input type="tel" placeholder='Enter your phone' value={signupPhone} onChange={(e) => setSignupPhone(e.target.value)}/>
            </div>

            <div className={styles['input-box']}>
              <i className={`fas fa-Location-Dot ${styles['icon']}`}>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              <input type="tel" placeholder='Enter your address' value={signupAddress} onChange={(e) => setSignupAddress(e.target.value)} />
            </div>

            <div className={styles['input-box']}>
              <i className={`fas fa-lock ${styles['icon']}`}>
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" placeholder='Enter your password' value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
            </div>

            <div className={styles['input-box textarea-container']}>
              <input type="textarea" className={styles.textarea} placeholder='Enter your short description' value={signupDescription} onChange={(e) => setSignupDescription(e.target.value)} />
            </div>

            <div className={styles['container-file']}>
            <div className={`${styles['input-boxx']} ${styles.box}`} onClick={handleButtonClick}>
              <i className={styles['icon']} class="fa-solid fa-cloud-arrow-up"><FontAwesomeIcon icon={faCloudArrowUp} /></i>
              <input type="file" alt='' ref={fileInputRef} name="Image" hidden placeholder='Choose your image' required onChange={handleImageInputChange} />
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
              <button className={styles['button-form']} type='submit' onClick={handleSignupSubmit}>Sig Up</button>
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
