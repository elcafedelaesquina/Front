import React from "react";
import Style from "./home.module.css";
import { Link } from "react-router-dom"
import { NavBar } from "../../layouts/navbar/Navbar";
import { Slider } from "../../layouts/slider/Slider";
import { Footer } from "../../layouts/footer/Footer";

export const Home = () => {
  return (
    <>
      <NavBar />
      <main className={Style.main}>
        <div className={Style.imgInicio}>
          <div className={Style.filter}>
            <div className={Style.content}>
              <h2 className={Style.title2}>Crea tu Tienda Virtual con Nosotros</h2>
              <p className={Style.text}>
              ¡Bienvenid@ a nuestra página de inicio! Aquí en nuestro sitio web, nos especializamos en la creación de páginas web para cafeterías y fincas. Te ofrecemos soluciones personalizadas para destacar tu negocio y capturar la esencia de tu café o finca en línea.
              </p>
              <Link rel="stylesheet" to='/PageRegistros'><button className={Style.btnStart}>Empieza con nosotros</button></Link>
            </div>
          </div>
        </div>

        <div className={Style.ContainerTarjetas}>
          <h2 className={Style.infoTitle}>¿Por qué Eje Travel?</h2>
            <div className={Style.itemInfo}>
              <img className={Style.itemImg} alt='' src='https://sense-digital.co/wp-content/uploads/2020/08/man-1-medium.png'></img>
              <h2>Tu satisfacción es garantizada</h2>
              <p>El desarrollo y diseño de nuestras tiendas es realizado por profesionales.</p>
              <p>¡Comienza a vender ahora!</p>
            </div>
            <div className={Style.itemInfo}>
              <img className={Style.itemImg} alt='' src='https://sense-digital.co/wp-content/uploads/2020/08/customer-service-medium.png' ></img>
              <h2>Nuestra herramienta resolverá todas tus dudas</h2>
              <p>Desde el momento cero tendrás a tu disposición una herramienta de inteligencia artificial para resolver tus dudas o ayudarte con el manejo de tu pagina.</p>
            </div>
            <div className={Style.itemInfo}>
              <img className={Style.itemImg}  alt=''src='https://sense-digital.co/wp-content/uploads/2020/08/website-design-medium.png'></img>
              <h2>¡Al final te enseñamos a editar por ti mismo!</h2>
              <p>La tecnología usada para crear tu tienda te permitirá editar la información  a través de un editor  . Tecnología usada por grandes marcas en todo el mundo.</p>
            </div>
        </div>

        <div className={Style.brands}>
              <div className={Style.carusel}>
              <div className={Style.brand}>
                <img src='https://seeklogo.com/images/J/Juan_Valdez_Cafe-logo-9D9A5C862E-seeklogo.com.png' alt=''></img>
              </div>
              <div className={Style.brand}>
                <img src='https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png' alt=''></img>
              </div>
              <div className={Style.brand}>
                <img src='https://quindio.federaciondecafeteros.org/app/uploads/sites/10/2020/09/Logo-plan-cosecha-2023-04-300x300.png' alt=''></img>
              </div>
              <div className={Style.brand}>
                <img src='https://www.nestleprofessional.pl/sites/default/files/2022-06/Nescafe%20logo.png' alt=''></img>
              </div>
              <div className={Style.brand}>
                <img src='https://images.rappi.pe/marketplace/cafquindoporlafinca_mt_nc-1677275568340.jpeg' alt=''></img>
              </div>
              <div className={Style.brand}>
                <img src='https://seeklogo.com/images/J/Juan_Valdez_Cafe-logo-9D9A5C862E-seeklogo.com.png' alt=''></img>
              </div>
              <div className={Style.brand}>
                <img src='https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png' alt=''></img>
              </div>
              <div className={Style.brand}>
                <img src='https://quindio.federaciondecafeteros.org/app/uploads/sites/10/2020/09/Logo-plan-cosecha-2023-04-300x300.png' alt=''></img>
              </div>
              <div className={Style.brand}>
                <img src='https://www.nestleprofessional.pl/sites/default/files/2022-06/Nescafe%20logo.png' alt=''></img>
              </div>
              <div className={Style.brand}>
                <img src='https://images.rappi.pe/marketplace/cafquindoporlafinca_mt_nc-1677275568340.jpeg' alt=''></img>
              </div>
              
              </div>
            </div>

        <Slider />
      </main>
      <Footer />
    </>
  );
};
