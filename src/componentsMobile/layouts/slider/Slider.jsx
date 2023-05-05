import React from "react";
import { useState, useEffect } from "react";
import Style from  "./slider.module.css";
import { imagen } from "./data";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = imagen.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    // console.log(slideLength);
    // console.log(currentSlide);
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }

    return () => clearInterval(slideInterval);
  }, [currentSlide]);
  
  return (
    <>
      <div className={Style.slider}>
        {imagen.map((slide, index) => {
          return (
            <div className={index === currentSlide ? `${Style.slide} ${Style.current}` : `${Style.slide}`} key={index} >
              {index === currentSlide && (
                <div className={Style.card}>
                  <img src={slide.img} alt="slide" />
                  <div className={Style.content}>
                    <h2>hola</h2>
                    <p>{slide.title}</p>
                    <hr />
                    <button className={Style.btnStart}>Get Started</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
