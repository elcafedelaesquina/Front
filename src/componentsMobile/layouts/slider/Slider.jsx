import React from "react";
import { useState, useEffect } from "react";
import Style from  "./slider.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { info } from "./data";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = info.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 6000;

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
        {info.map((slide, index) => {
          return (
            <div className={index === currentSlide ? `${Style.slide} ${Style.current}` : `${Style.slide}`} key={index} >
              {index === currentSlide && (
                <div className={Style.card}>
                  <img src={slide.img} alt="slide" />
                  <div className={Style.content}>
                    <h2 className={Style.title}>{slide.title}</h2>
                    <p className={Style.text}>{slide.text}</p>
                    <button className={Style.btnStart}>{slide.price}</button>
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
