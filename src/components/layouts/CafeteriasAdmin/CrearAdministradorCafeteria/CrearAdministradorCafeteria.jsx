import React, { useState,} from "react";
import styles from "./CrearAdministradorCafeteria.module.css"
import { Link } from 'react-router-dom';

export function CrearAdministradorCafeteria() {
  const [dataProduct, setDataProduct]=useState([])





 return (
    <div className={styles.cn}>
      <div className={styles.iconX}>
       <Link to={'/'}><ion-icon name="close"></ion-icon></Link>
      </div>
    {/* loader && <Loader></Loader> */}
    
    {/* !loader && */<>
          <div className={styles.ProductsContainer}>
            <h2 className={styles.titleContainerProducts} /* onClick={updateProduct} */>Compras</h2>

               {dataProduct.length>0 && dataProduct.map(product=>{
                return(
                  {/* <ProductAdmin key={product.id_product} data={product} deleteProp={[deleteProduct,updateProduct]} ></ProductAdmin> */}
                )
                 
              })
              }
              {!dataProduct.length>0 &&
                <h2>Todavia no Tienes Ninguna Compra</h2>
              }
            

         </div>
         <div className={styles.containerForms}>
         <div className={styles.container}>
              <form  id='formu' /* onSubmit={handleSubmit} */  className={`${styles['input-boxes']} ${'form-content'}`}>
                <div className={styles['form-content']}>
                  <div className={styles['form-create']}>
                    <div className={styles.titleContainer}><h4 className={styles.title}>Crear Administrador</h4></div>

                        <input type="number" className={styles['input-admin']} name='Id_admin' id="stock"  />

                      <div className={styles['input-box']}>
                        <input type="text" name='Name'  placeholder='Nombre' id="name" />
                      </div>

                      <div className={styles['input-box']}>
                        <input type="number" name='cedula'  placeholder='Cédula' id="Cedula" />
                      </div>

                      <div className={`${styles['button']} ${styles['input-box']}`}>
                        <button className={styles['button-form']} type='submit'>Crear Administrador</button>
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
