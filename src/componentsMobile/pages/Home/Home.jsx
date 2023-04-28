import React from "react";
import "./home.css";
import { NavBar } from "../../layouts/navbar/Navbar";
import { Slider } from "../../layouts/slider/Slider";
import { Footer } from "../../layouts/footer/Footer";

export const Home = () => {
  return (
    <>
      <NavBar />
      <main className="">
        <Slider />
      </main>
      <Footer />
    </>
  );
};
