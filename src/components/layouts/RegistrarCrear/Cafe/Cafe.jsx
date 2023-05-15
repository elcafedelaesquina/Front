import styles from './Cafe.module.css';
import React, {useRef, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from "./Logo.png"
import { Link } from 'react-router-dom';

export function Cafe() {
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

  return (
    <div className={styles.cn}>
          <div className={styles.container}>
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
    <form action="#">
      <div className={styles['form-content']}>
        <div className={styles['login-form']}>
          <div className={styles.title}>Login Cafe</div>
          <div className={styles['input-boxes']}>
            <div className={styles['input-box']}>
              <i className={`fas fa-envelope ${styles['icon']}`}><FontAwesomeIcon icon={faEnvelope} /></i>
              <input type="text" placeholder='Enter your email' />
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-lock ${styles['icon']}`}>
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" placeholder='Enter your password'  />
            </div>
            <div className={styles.text}><a href=''>Forget password?</a></div>
            <div className={`${styles['button']} ${styles['input-box']}`}>
              <i className={`fas fa-envelope ${styles['icon']}`}></i>
              <button className={styles['button-form']} type='submit'>Log In</button>
            </div>
            <div className={styles['text login-text']}>Don't have an account? <label htmlFor="flip">SigUp now</label></div>
          </div>
        </div>

        <div className={styles['signup-form']}>
          <div className={styles.title}>SignUp Cafe</div>
          <div className={styles['input-boxes']}>
            <div className={styles['input-box']}>
              <i className={`fas fa-user ${styles['icon']}`}>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <input type="text" placeholder='Enter your name'  />
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-envelope ${styles['icon']}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <input type="text" placeholder='Enter your email' />
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-Phone ${styles['icon']}`}>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <input type="tel" placeholder='Enter your phone'  />
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-lock ${styles['icon']}`}>
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" placeholder='Enter your password'  />
            </div>

            <div className={styles['input-box textarea-container']}>
              <input type="textarea"  className={styles.textarea} placeholder='Enter your short description'  />
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
              <button className={styles['button-form']} type='submit'>Sig Up</button>
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
