import React from "react";
import Style from "./footer.module.css";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

const Logo =
  "https://res.cloudinary.com/dmrq9n2im/image/upload/v1683321911/El%20caf%C3%A9%20de%20la%20esquina/ejeTravel_nnf3ra.png";

const Items = [
  {
    ic: <BsFacebook className={Style.footerIcon} />,
    url: "/",
  },
  {
    ic: <FaTwitter className={Style.footerIcon} />,
    url: "/",
  },
  {
    ic: <BsInstagram className={Style.footerIcon} />,
    url: "/",
  },
  { 
    ic: <SiTiktok className={Style.footerIcon} /> ,
    url: "/", 
  }
];

export const Footer = () => {
  return (
    <>
      <footer className={Style.footer}>
        <img className={Style.logo} src={Logo} alt="" srcset="" />
        <div className={Style.footerContainer}>
          <div className={Style.footerContactUs}>
            <h3 className={Style.h3}>Contactenos</h3>
            <p className={Style.p}>
              Call Us <span> +57 36455411 </span>
            </p>
            <p className={Style.p}>
              E-mail <span> Punto@gmail.com </span>
            </p>
          </div>
          <div className={Style.footerLegalInformation}>
            <h3 className={Style.h3}>Información legal</h3>
            <p className={Style.p}>Términos y Condiciones</p>
          </div>
        </div>
        <div className={Style.footerIcons}>
          {Items.map((item) => (
            <li className={Style.li}>
              <Link className={Style.link} to={item.url}>
              {item.ic}
              </Link>
            </li>
          ))}
        </div>
      </footer>
    </>
  );
};
