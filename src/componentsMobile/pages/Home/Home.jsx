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
              <button className={Style.btnStart}><Link rel="stylesheet" to='/PageRegistros'>Empieza con nosotros </Link></button>
            </div>
          </div>
        </div>

        <div className={Style.infoGray}>
            <h3>Card Title</h3>
          <img src="https://res.cloudinary.com/dmrq9n2im/image/upload/v1683225617/El%20caf%C3%A9%20de%20la%20esquina/imgtest3_m4hqtw.jpg" alt="h"></img>
          <div className={Style.containerInfo}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
              pulvinar lorem felis nec erat
            </p>
            <h5>Last updated 3 mins ago</h5>
          </div>
        </div>

        <Slider />
      </main>
      <Footer />
    </>
  );
};
