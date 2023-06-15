import React, { useEffect, useState,useRef} from "react";
import styles from "./CrearAdministradorCafeteria.module.css"
import { Link } from 'react-router-dom';

export function CrearAdministradorCafeteria() {
  const [dataProduct, setDataProduct]=useState([])
  const [id_coffee,setId]=useState('')

  useEffect(()=>{
    let id=JSON.parse(localStorage.getItem('id_coffee'))
    setId(id)


  },[])
  var formularioLogin=useRef(null)

  const createAdmin=()=>{
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
        console.log(data)})})
    


  }


var formularioLogin=useRef(null)








 return (
    <div className={styles.cn}>
      <div className={styles.iconX}>
       <Link to={'/'}><ion-icon name="close"></ion-icon></Link>
      </div>
    {/* loader && <Loader></Loader> */}
    
    {/* !loader && */<>
          <div className={styles.ProductsContainer}>
            <h2 className={styles.titleContainerProducts} /* onClick={updateProduct} */>Mis Pedidos</h2>

               {dataProduct.length>0 && dataProduct.map(product=>{
                return(
                  {/* <ProductAdmin key={product.id_product} data={product} deleteProp={[deleteProduct,updateProduct]} ></ProductAdmin> */}
                )
                 
              })
              }
              {!dataProduct.length>0 &&
                <h2>Todavia no Tienes Ningún Pedido</h2>
              }
            

         </div>
         <div className={styles.containerForms}>
         <div className={styles.container}>
              <form  id='formu' /* onSubmit={handleSubmit} */ ref={formularioLogin} className={`${styles['input-boxes']} ${'form-content'}`}>
                <div className={styles['form-content']}>
                  <div className={styles['form-create']}>
                    <div className={styles.titleContainer}><h4 className={styles.title}>Registrar Administrador</h4></div>
                        <input type="text" className={styles['input-admin']} name='Type_admin' value={1}  />
                        <input type="text" className={styles['input-admin']} name='Id_business' value={id_coffee} />
                      <div className={styles['input-box']}>
                        <input type="text" name='Name'  placeholder='Nombre' id="name" />
                      </div>

                      <div className={styles['input-box']}>
                        <input type="text" name='Id_admin'  placeholder='Cédula' id="Cedula" />
                      </div>

                      <div className={`${styles['button']} ${styles['input-box']}`}>
                        <button className={styles['button-form']} type='submit' onClick={()=>{
                          createAdmin()
                        }}>Crear Administrador</button>
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
