import React from "react";
import Style from "./navBar.module.css";
import { Link } from "react-router-dom"
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { CiCoffeeCup } from "react-icons/ci";
import { GiFarmer } from "react-icons/gi";

const Logo = "https://res.cloudinary.com/dmrq9n2im/image/upload/v1683321911/El%20caf%C3%A9%20de%20la%20esquina/ejeTravel_nnf3ra.png";
const Items = [
  {title: "Inicio", url : "/", ic: <AiOutlineHome className={ Style.iconMenu } /> },
  {title: "Iniciar Sesión", url : "#", ic: <AiOutlineLogin className={ Style.iconMenu } /> },
  {title: "Cafeterias", url : "/Cafeteria", ic: <CiCoffeeCup className={ Style.iconMenu } /> },
  {title: "Fincas", url : "#", ic: <GiFarmer className={ Style.iconMenu } /> },
]

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={Style.header}>
        <nav className={Style.nav}>
          <div className={Style.containerLogoTitle}>
            <img className={Style.logo} src={Logo} alt="" />
            <h2 className={Style.title}>
              Eje Travel
            </h2>
          </div>
          <div className={Style.containerMenu}>
            { isOpen ? 
            <AiOutlineCloseCircle className={Style.iconMenu}  onClick={() => setIsOpen(!isOpen)} /> 
              : 
            <AiOutlineMenu className={Style.iconMenu} onClick={() => setIsOpen(!isOpen)} /> 
            }
          </div>
        </nav>
      </header>

      {isOpen && (
        <div className={Style.menu} >
          <ul className={Style.ul} >
            {
              Items.map((item) =>(
                <li className={Style.li}>
                  {item.ic}
                  <Link className={Style.link} to={item.url}>{item.title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      )}
    </>
  );
};