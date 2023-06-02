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
              <h2 className={Style.title}>Crea tu Tienda Virtual con Nosotros</h2>
              <p className={Style.text}>
              ¡Bienvenid@ a nuestra página de inicio! Aquí en nuestro sitio web, nos especializamos en la creación de páginas web para cafeterías y fincas. Te ofrecemos soluciones personalizadas para destacar tu negocio y capturar la esencia de tu café o finca en línea.
              </p>
              <Link rel="stylesheet" to='/PageRegistros'><button className={Style.btnStart}>Empieza con nosotros</button></Link>
            </div>
          </div>
        </div>

        <div className={Style.infoGray}>
          <h3>"Crea una tienda virtual perfecta para que tus clientes"</h3>
          <img src="https://res.cloudinary.com/dmrq9n2im/image/upload/v1683225617/El%20caf%C3%A9%20de%20la%20esquina/imgtest3_m4hqtw.jpg" alt="h"></img>
          <div className={Style.containerInfo}>
            <p>
            Desde el diseño atractivo y funcional de tu página web, hasta la integración de herramientas de reserva y pedidos en línea, te ayudaremos a establecer una presencia en línea impactante que refleje la personalidad y el encanto de tu tienda virtual.
            </p>
            {/* <h5>Last updated 3 mins ago</h5> */}
          </div>
        </div>

        <Slider />
      </main>
      <Footer />
    </>
  );
};
