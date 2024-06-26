import React from "react";
import { useState } from "react";
import ImageSliderData from "./imagesliderData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../home/ImageSlider.css";

const delay = 1500;
function ImageSlider() {
  const [Slideindex, setSlideindex] = useState(1);
  const [index, setindex] = useState(0);
  const timeoutRef = React.useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setindex((previndex) =>
          previndex === ImageSliderData.length - 1 ? 0 : previndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  const nextSlide = () => {
    if (Slideindex !== ImageSliderData.length) setSlideindex(Slideindex + 1);
    else if (Slideindex === ImageSliderData.length) setSlideindex(1);
    setindex((nextindex) =>
      nextindex === ImageSliderData.length - 1 ? 0 : nextindex + 1
    );
  };
  const previousSlide = () => {
    if (Slideindex !== 1) setSlideindex(Slideindex - 1);
    else if (Slideindex === 1) setSlideindex(ImageSliderData.length);

    setindex((previndex) =>
      previndex === ImageSliderData.length - 1 ? 0 : previndex - 1
    );
  };
  return (
    <div className="SliderContainer-Wrapper">
      <div className="SlideContainer">
        {ImageSliderData.map((ImageSliderData, Index) => {
          return (
            <div className="Slide-Wrapper" key={Index}>
              <div
                key={Index}
                className={index === Index ? "slide activeSlide" : "slide"}
                style={{ backgroundImage: `url(${ImageSliderData.image})` }}
              ></div>
            </div>
          );
        })}
        <div className="radio-wrapper">
          {ImageSliderData.map((imageData, Index) => {
            return (
              <div
                className={index === Index ? "radio radioActive" : "radio"}
                onClick={() => {
                  setindex(Index);
                }}
              ></div>
            );
          })}
        </div>
        <div className="arrow-wrapper">
          <IoIosArrowBack
            onClick={previousSlide}
            className={index === 0 ? "" : "arrow left"}
          />
          <IoIosArrowForward
            onClick={nextSlide}
            className={
              index === ImageSliderData.length - 1 ? "" : "arrow right"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
