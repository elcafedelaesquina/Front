import React, { useEffect, useState } from 'react'
import Style from "./navBar.module.css";
import { Link } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { CiCoffeeCup } from "react-icons/ci";
import { GiFarmer } from "react-icons/gi";
import { FaDoorOpen } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";
import { IoChatbubblesSharp } from "react-icons/io5";

export const NavBar = () => {
  const Swal = require('sweetalert2')
  const [isOpen, setIsOpen] = useState(false);
  const [validateToken,setValidateToken]=useState(false)
  const Logo = "https://res.cloudinary.com/dmrq9n2im/image/upload/v1683321911/El%20caf%C3%A9%20de%20la%20esquina/ejeTravel_nnf3ra.png";
  let userName = "Eje travel";
  let name=JSON.parse(localStorage.getItem('name'))
  let image=JSON.parse(localStorage.getItem('image'))
  let nombre = "";
  let img = null;
  let id=JSON.parse(localStorage.getItem('id_customer'))
  let id_coffee=JSON.parse(localStorage.getItem('id_coffee'))

  if(id || id_coffee){
    nombre = name;
    img = image;
    console.log(img);
  }else{
    nombre = userName;
    img = Logo;
  }
 
  const close=()=>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title:'Adiós '+name ,
      showConfirmButton: false,
      timer: 1500
    })
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('image')
    localStorage.removeItem('id_customer')
    localStorage.removeItem('id_coffee')
    setValidateToken(false)
    setIsOpen(false)
  }

  useEffect(() =>{
    let token=localStorage.getItem('token')
    if(token){
      setValidateToken(true)
    }else{
      setValidateToken(false)
    }
  },[validateToken])

  return (
    <>
      {!id_coffee ? (
        <>
          <header className={Style.header}>
            <nav className={Style.nav}>
              <div className={Style.containerLogoTitle}>
                <img className={Style.logo} src={img} alt="" />
                <h2 className={Style.title}>{nombre}</h2>
              </div>
              <div className={Style.containerMenu}>
                {isOpen ? (
                  <AiOutlineCloseCircle
                    className={Style.iconMenu}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                ) : (
                  <AiOutlineMenu
                    className={Style.iconMenu}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                )}
              </div>
            </nav>
          </header>

          {isOpen && (
            <div className={Style.menu} >
              <ul className={Style.ul} >
                <li className={Style.li}>
                  <AiOutlineHome className={ Style.iconMenu } />
                  <Link className={Style.link} to="/">Inicio</Link>
                </li>

                {id && (
                  <>
                    <li className={Style.li}>
                      <GoPencil className={ Style.iconMenu } />
                      <Link className={Style.link} to="/EditarPerfilUser">Editar Perfil</Link>
                    </li>

                    <li className={Style.li}>
                      <AiOutlineShoppingCart className={ Style.iconMenu } />
                      <Link className={Style.link} to="/cafeterias/cafeteria/carrito">Mi carrito</Link>
                    </li>

                    <li className={Style.li}>
                      <IoChatbubblesSharp className={ Style.iconMenu } />
                      <Link className={Style.link} to="/ChatsUser">Mis Chat</Link>
                    </li>
                  </> 
                )}

                {!validateToken && (
                  <li className={Style.li}>
                    <AiOutlineLogin className={ Style.iconMenu } />
                    <Link className={Style.link} to="/PageRegistros">Iniciar Sesión</Link>
                  </li>
                )}

                <li className={Style.li}>
                  <CiCoffeeCup className={ Style.iconMenu } />
                  <Link className={Style.link} to="/Cafeterias">Cafeterias</Link>
                </li>

                <li className={Style.li}>
                  <GiFarmer className={ Style.iconMenu } />
                  <Link className={Style.link} to="/Fincas">Fincas</Link>
                </li>

                {id && (
                  <li className={Style.li}>
                    <FaDoorOpen className={Style.iconMenu} />
                    <Link className={Style.link} onClick={close} to="/">Cerrar Sesión</Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </>
      ):(
        <>
          <header className={Style.header}>
            <nav className={Style.nav}>
              <div className={Style.containerLogoTitle}>
                <img className={Style.logo} src={img} alt="" />
                <h2 className={Style.title}>{nombre}</h2>
              </div>
              <div className={Style.containerMenu}>
                {!isOpen ? (
                  <AiOutlineCloseCircle
                    className={Style.iconMenu}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                ) : (
                  <AiOutlineMenu
                    className={Style.iconMenu}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                )}
              </div>
            </nav>
          </header>

        {!isOpen && (
          <>
            <div className={Style.menu} >
            <ul className={Style.ul} >
            <li className={Style.li}>
              <AiOutlineUser className={Style.iconMenu} />
              <Link className={Style.link} to="/EditarPerfilAdmin">Editar perfil</Link>
            </li>

            <li className={Style.li}>
              <AiOutlineUsergroupAdd className={Style.iconMenu} />
              <Link className={Style.link} to="/CreateAdminCafeteria">Crear Administrador</Link>
            </li>

            <li className={Style.li}>
              <MdOutlineRestaurantMenu className={Style.iconMenu} />
              <Link className={Style.link} to="/CreateProductsCarta">Mi Menu</Link>
            </li>

            <li className={Style.li}>
              <GiBoxUnpacking className={Style.iconMenu} />
              <Link className={Style.link} to="/CreateProductsCafeteria">Mis Productos</Link>
            </li>

            <li className={Style.li}>
              <IoChatbubblesSharp className={Style.iconMenu} />
              <Link className={Style.link} to="/ChatsAdmin">Mis Chat</Link>
            </li>
            
            <li className={Style.li}>
              <FaDoorOpen className={Style.iconMenu} />
              <Link className={Style.link} onClick={close} to="/">Cerrar Sesión</Link>
            </li>
          </ul>
          </div>
        </>
          )}
        </>
      )}
    </>
  );
};
