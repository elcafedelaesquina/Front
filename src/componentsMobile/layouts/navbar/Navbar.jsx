import React from "react";
import Style from "./navBar.module.css";
import { Link } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
const Logo = "https://res.cloudinary.com/dqzq2hemz/image/upload/v1676059971/Notas-react/learning_x0evwu.png";
const Items = [
  {title: "Inicio", url : "/"},
  {title: "Iniciar Sesión", url : "#"},
  {title: "Cafeterias", url : "/Cafeteria"},
  {title: "Fincas", url : "#"},
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
              La Esquina Del Cafe
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
                  <AiOutlineHome className={Style.iconMenu} />
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