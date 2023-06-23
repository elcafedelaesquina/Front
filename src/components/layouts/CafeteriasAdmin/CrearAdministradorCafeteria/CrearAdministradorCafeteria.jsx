import React, { useEffect, useState,useRef} from "react";
import styles from "./CrearAdministradorCafeteria.module.css"
import { Link, useNavigate } from 'react-router-dom';

export function CrearAdministradorCafeteria() {
  const [dataProduct, setDataProduct]=useState([])
  const [id_coffee,setId]=useState('')
  const navigate = useNavigate();
  const Swal = require('sweetalert2')

  useEffect(()=>{
    
    setTimeout(()=>{
      let id=JSON.parse(localStorage.getItem('id_coffee'))
      setId(id)
    },2000)
  },[])
  var formularioLogin=useRef(null)
  console.log(id_coffee)
  const createAdmin=()=>{
    console.log(id_coffee)
    formularioLogin=formularioLogin.current
    formularioLogin.addEventListener('submit',(e)=>{
      e.preventDefault()
      const formData=new FormData(formularioLogin)
  
      formData.forEach(function(value, key) {
        console.log(key + ': ' + value);
      });
      
      fetch('https://apimainejetravel.azurewebsites.net/api/Admin/Guardar', {
        method: 'POST',
        body:formData
      })
      .then(response => response.json())
      .then(data=>{
        // Manejar la respuesta de la petición
        console.log(data)
        localStorage.removeItem(id_coffee)
        if(data.result==='exito al insertar '){
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Éxito al registrar al administrador',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/Cafe')
        }else{
          navigate('/CrearAdministradorCafeteria')
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Ingresa la información de todos los campos',
            showConfirmButton: false,
            timer: 1500
          })
          

        }
      }
        
        )})
       
    


  }


var formularioLogin=useRef(null)








 return (
    <div className={styles.cn}>

    {/* loader && <Loader></Loader> */}
    
    {/* !loader && */<>
         <div className={styles.containerForms}>
         <div className={styles.container}>
              <form  id='formu' /* onSubmit={handleSubmit} */ ref={formularioLogin} className={`${styles['input-boxes']} ${'form-content'}`}>
                <div className={styles['form-content']}>
                  <div className={styles['form-create']}>
                  <div className={styles.iconX}>
       <Link to={'/'}><ion-icon name="close"></ion-icon></Link>
      </div>
                    <div className={styles.titleContainer}><h4 className={styles.title}>Registrar Administrador</h4></div>
                        <input type="text" className={styles['input-admin']} name='Type_admin' value={1} readOnly />
                        <input type="text" className={styles['input-admin']} name='Id_business' value={id_coffee} readOnly/>
                      <div className={styles['input-box']}>
                        <input type="text" name='Name'  placeholder='Nombre' id="name" />
                      </div>

                      <div className={styles['input-box']}>
                        <input type="text" name='Id_admin'  placeholder='Cédula' id="Cedula" />
                      </div>

                      <div className={`${styles['button']} ${styles['input-box']}`}>
                        <button className={styles['button-form']} type='submit' onClick={createAdmin}>Crear Administrador</button>
                      </div>

                  </div>
                </div>
              </form>
              </div>


         </div>  
    </>
       }
  </div>
  );
}
