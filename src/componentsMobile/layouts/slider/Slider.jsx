import React from "react";
import { useState, useEffect } from "react";
import "./slider.css";
import { imagen } from "./data";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = imagen.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    console.log(slideLength);
    console.log(currentSlide);
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
      <div className="slider">
        {imagen.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img src={slide.img} alt="slide" />
                  <div className="content">
                    <h2>hola</h2>
                    <p>{slide.title}</p>
                    <hr />
                    <button className="--btn --btn-primary">Get Started</button>
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
