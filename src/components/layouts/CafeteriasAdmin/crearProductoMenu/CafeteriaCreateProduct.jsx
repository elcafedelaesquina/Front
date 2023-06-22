import React, { useRef, useState,useEffect } from "react";
import styles from "./CafeteriaCreateProduct.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import { Loader } from "../../loader";
import { Link } from "react-router-dom";

export const CafeteriaCreateMenuProduct = () => {
  const Swal = require('sweetalert2')
  const [estado,setEstado]=useState([])
    const categorizedData = {};

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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [idAdmin, setIdAdmin] = useState(""); 
  const [idCoffee, setIdCoffee] = useState(""); 
  const [dataProduct,setDataProduct]=useState([])
  
  useEffect(()=>{
    let coffee=JSON.parse(localStorage.getItem('id_coffee'))
    setIdCoffee(coffee)
   
    //obtener el id de la cafeteria y pasarlo para filtrar los productos de una cafeteria
    if(coffee){
      fetch(`https://apimainejetravel.azurewebsites.net/api/MenuProduct/Lista/${coffee}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        
      })

    }
    setDataProduct([])
    
     
      
  },[])
  const [load,setLoad]=useState([])

  const handleSubmit = async (e) => {
     e.preventDefault();
    const formData = new FormData(e.target);
    formData.forEach(function (key,value){
      console.log(key,value);
    })

    try {
        
        await fetch("https://apimainejetravel.azurewebsites.net/api/MenuProduct/Guardar", { method: "POST", body: formData } )
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
          setName('');
          setDescription('');
          setPrice('');
          setStock('');
          setCategory('');
          setImage('');
          setIdAdmin(''); 
          
        } else {
          // Error al guardar los datos
          Swal.fire({
            icon: 'error',
            title: 'Oops... No se pudo crear el producto',
            text: 'ingresa toda la información requerida!'
          })
        }
      })
      setEstado([])
      setLoad([])

     
      setLoader(false)
    } catch (error) {
      console.log("Error de conexión:", error);
    }

    
    
  };
  const putPrice=(e) => {
      if(e.target.value>0){
        let x=parseInt(e.target.value) 
        setPrice(x)
      }else{
        setPrice("")
        
      }
    }
  const deleteProduct=(id_product)=>{
    fetch(`https://apimainejetravel.azurewebsites.net/api/MenuProduct/Eliminar/${id_product}`,
     { method: "DELETE"} )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if(data.mensaje) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto eliminado exitosamente',
            showConfirmButton: false,
            timer: 1500
          })
        }
        setLoad([])
      })

  }
  useEffect(()=>{
    let coffee=JSON.parse(localStorage.getItem('id_coffee'))
    //obtener el id de la cafeteria y pasarlo para filtrar los productos de una cafeteria
     if(coffee){
      fetch(`https://apimainejetravel.azurewebsites.net/api/MenuProduct/Lista/${coffee}`)
    .then(response => response.json())
    .then(data => {
      
        data.list[0].forEach(item => {
          const category = item.category;
        
          if (!categorizedData[category]) {
            categorizedData[category] = [];
          }
        
          categorizedData[category].push(item);
        });
        const array = Object.values(categorizedData)
       
        setEstado(array)
      })
      

    } 

  },[load])

  const updateProduct = (id_product) => {
    fetch(`https://apimainejetravel.azurewebsites.net/api/Product/Obtener/${id_product}`)
      .then(response => response.json())
      .then(data => {
        console.log(data[0][0]);
  
        Swal.fire({
          title: 'Editar Producto',
          html: `
          <input id="swal-name" class="swal2-input" placeholder="Nombre" value="${data[0][0].name}">
          <input id="swal-description" class="swal2-input" placeholder="Descripción" value="${data[0][0].description}">
          <input id="swal-category" class="swal2-input" type="text" placeholder="Categoría" value="${data[0][0].category}">
          <input id="swal-price" class="swal2-input" type="number" placeholder="Precio" value="${data[0][0].price}">
          <input id="swal-stock" class="swal2-input" type="number" placeholder="Stock" value="${data[0][0].stock}">
          <input id="swal-image" class="swal2-file" type="file" required>
          `,
          focusConfirm: false,
          showCancelButton: true,
          confirmButtonText: 'Actualizar',
        
        }).then((result) => {
          if (!result.dismiss) {
            const name = document.getElementById('swal-name').value;
            const description = document.getElementById('swal-description').value;
            const category= document.getElementById('swal-category').value;
            const price = document.getElementById('swal-price').value;
            const stock = document.getElementById('swal-stock').value;
            const image = document.getElementById('swal-image').files[0];
  
            show({
              name: name,
              description: description,
              price: price,
              stock: stock,
              image: image,
              id_admin: idAdmin,
              category: category,
              id_product: id_product,
            })
           
          }
        });
      });
      
  };
  const show=(prop)=>{
    
     const formData = new FormData();
     for (const key in prop) {
       if (prop.hasOwnProperty(key)) {
         formData.append(key, prop[key]);
       }
     }
     fetch(`https://apimainejetravel.azurewebsites.net/api/Product/Actualizar`,
    { method: "PUT",
     body:formData
   }
     )
     .then(response => response.json())
     .then(data => {console.log(data);
       if(data.result){
         Swal.fire({
           position: 'top-end',
           icon: 'success',
           title: 'Producto eliminado exitosamente',
           showConfirmButton: false,
           timer: 1500
         })

         setLoad([])

       }
       else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...error al actualizar',
          text: 'Llena todos los campos!'
        })
        

       }
     })

   

           

     
 }
  return (
    <div className={styles.cn}>
      
    {loader && <Loader></Loader>}
    
          
    
    
    {!loader &&<>
          <div className={styles.ProductsContainer}>
            <h2 className={styles.titleContainerProducts} >Mis Productos</h2>
            {
                        estado.map(item =>(
                            
                            <div className={styles.itemCarta}> 
                            <h3 className={styles.titleCarta}>{item[0].category}</h3>{
                            item.map((producto,index)=>(
                                                  
                                    
                                    <div key={index} className={styles.itemPriceOne}><p>{producto.name}</p><p>${producto.price}</p> <ion-icon name="trash-outline"onClick={()=>{deleteProduct(producto.id_menu_product)}} ></ion-icon></div>
                                    

                            )
                            )}
                            </div>
                            
                        ))

                    }

               
              
            

         </div>
         <div className={styles.containerForms}>
         <div className={styles.container}>
              <form  id='formu' onSubmit={handleSubmit}  className={`${styles['input-boxes']} ${'form-content'}`}>
                <div className={styles['form-content']}>
                  <div className={styles['form-create']}>
                    <div className={styles.titleContainer}><h4 className={styles.title}>Crear Productos </h4><div className={styles.iconX}>
                    <Link to={'/'}><ion-icon name="close"></ion-icon></Link>
                    </div></div>
                        <input type="number" className={styles['input-admin']} name='Id_coffee' id="stock" value={idCoffee} onChange={()=>{}}  />

                      <div className={styles['input-box']}>
                        <input type="text" name='Name'  placeholder='Nombre' id="Name" value={name} onChange={(e) => setName(e.target.value)} />
                      </div>

                      <div className={styles['input-box textarea-container']}>
                        <textarea name='Description' id="description" className={styles.textarea} placeholder='Ingrese la descripción del producto' value={description} onChange={(e) => setDescription(e.target.value)} />           
                      </div>

                      <div className={styles['input-box']}>
                        <input type="text" name='Price' id="price" placeholder='Precio' value={price} onChange={putPrice}/>
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


         </div>
         
          
    </>
       }
  </div>
  );
};
