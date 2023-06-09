import React, { useRef, useState,useEffect } from "react";
import styles from "./CafeteriaCreateProduct.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import { Loader } from "../../loader";
import { ProductAdmin } from "./productAdmin";


export const CafeteriaCreateProduct = () => {
  const Swal = require('sweetalert2')

  //image
  function handleImageInputChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
    function handleImageClear() {
      setImage('');
    }
  
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
      fileInputRef.current.click();
    }

  const [loader,setLoader]=useState(false)

  //
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [idAdmin, setIdAdmin] = useState('');
  
  const [dataProduct,setDataProduct]=useState([])
  useEffect(()=>{
    let coffee=JSON.parse(localStorage.getItem('id_coffee'))
   
    //obtener el id de la cafeteria y pasarlo para filtrar los productos de una cafeteria
    if(coffee){
      fetch(`https://apimainejetravel.azurewebsites.net/api/Product/Lista/${coffee}`)
    .then(response => response.json())
    .then(data => {
       setDataProduct(data.list[0]) 
       console.log(data.list[0][0].idAdmin)
       setIdAdmin(data.list[0][0].idAdmin)
      })
    }
    
     
      
  },[])


  const handleSubmit = async (e) => {
     e.preventDefault();
    console.log(e.target);
    

    const formData = new FormData(e.target);
    formData.forEach(function (key,value){
      console.log(key,value);
    })

    try {
        
      const response = await fetch("https://apimainejetravel.azurewebsites.net/api/Product/Guardar", { method: "POST", body: formData } )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.result) {
          // Datos guardados exitosamente
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto guardado exitosamente',
            showConfirmButton: false,
            timer: 1500
          })
          
          setLoader(false)
        } else {
          // Error al guardar los datos
          Swal.fire({
            icon: 'error',
            title: 'Oops... No se pudo crear el producto',
            text: 'ingresa toda la información requerida!'
          })
        }
      })

      
      setLoader(false)
    } catch (error) {
      console.log("Error de conexión:", error);
    }
  };

  return (
    <div className={styles.cn}>
    {loader && <Loader></Loader>}
    
          
    
    
    {!loader &&<>
          <div className={styles.ProductsContainer}>
            <h2 className={styles.titleContainerProducts}>Mis Productos</h2>

               {dataProduct.length>0 && dataProduct.map(product=>{
                return(
                  <ProductAdmin key={product.id_product} data={product}></ProductAdmin>
                )
                 
              })
              }
              {!dataProduct.length>0 &&
                <h2>todavia no tienes productos</h2>
              }
            

         </div>
          <div className={styles.container}>

        <form  id='formu' onSubmit={handleSubmit}  className={`${styles['input-boxes']} ${'form-content'}`}>
          <div className={styles['form-content']}>
            <div className={styles['form-create']}>
              <div className={styles.title}>Crear Productos</div>

                <div className={styles['input-box']}>
                  <input type="number" className={styles['input-admin']} name='Id_admin' id="stock" value={idAdmin} />
                </div>

                <div className={styles['input-box']}>
                  <input type="text" name='Name'  placeholder='Nombre' id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className={styles['input-box textarea-container']}>
                  <textarea name='Description' id="description" className={styles.textarea} placeholder='Ingrese su descripción' value={description} onChange={(e) => setDescription(e.target.value)} />           
                </div>

                <div className={styles['input-box']}>
                  <input type="text" name='Price' id="price" placeholder='Precio' value={price} onChange={(e) => {
                    let x=parseInt(e.target.value) 
                    setPrice(x)}}/>
                </div>

                <div className={styles['input-box']}>
                  <input type="number" id="stock" name='Stock' placeholder='Existencias' value={stock} onChange={(e) => setStock(Number(e.target.value))}/>
                </div>

                <div className={styles['input-box']}>
                  <input type="text" name='Category' id="categery" placeholder='Categoría' value={category} onChange={(e) => setCategory(e.target.value)}/>
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
                  <button className={styles['button-form']} type='submit'>Crear Producto</button>
                </div>

            </div>
          </div>
        </form>
      </div>
    </>
       }
  </div>
  );
};
