import React from "react";
import Style from "./HeaderAdminCafeterias.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaDoorOpen } from "react-icons/fa";

const Logo =
  "https://res.cloudinary.com/dmrq9n2im/image/upload/v1683321911/El%20caf%C3%A9%20de%20la%20esquina/ejeTravel_nnf3ra.png";
const Items = [
  {
    title: "Editar perfil",
    url: "/EditarPerfilAdmin",
    ic: <AiOutlineUser className={Style.iconMenu} />,
  },
  {
    title: "Crear Administrador",
    url: "/CreateAdminCafeteria",
    ic: <AiOutlineUsergroupAdd className={Style.iconMenu} />,
  },
  {
    title: "Mi Menu",
    url: "/CreateProductsCarta",
    ic: <MdOutlineRestaurantMenu className={Style.iconMenu} />,
  },
  {
    title: "Mis Productos",
    url: "/CreateProductsCafeteria",
    ic: <GiBoxUnpacking className={Style.iconMenu} />,
  },
  {
    title: "Mis Chat",
    url: "/ChatsAdmin",
    ic: <IoChatbubblesSharp className={Style.iconMenu} />,
  },
  {
    title: "Cerrar Sesión",
    url: "/",
    ic: <FaDoorOpen className={Style.iconMenu} />,
  },
];

export const HeaderAdminCafeterias = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={Style.header}>
        <nav className={Style.nav}>
          <div className={Style.containerLogoTitle}>
            <img className={Style.logo} src={Logo} alt="" />
            <h2 className={Style.title}>Eje Travel</h2>
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
        <div className={Style.menu}>
          <ul className={Style.ul}>
            {Items.map((item) => (
              <li className={Style.li}>
                {item.ic}
                <Link className={Style.link} to={item.url}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
