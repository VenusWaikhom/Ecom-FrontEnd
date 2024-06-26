import React from "react";
import { useState } from "react";
import imageData from "./imagedata";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./ImageSlider.css";

const delay = 1500;
function ImageSlider() {
  const [Slideindex, setSlideindex] = useState(1);
  const [index, setindex] = React.useState(0);
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
          previndex === imageData.length - 1 ? 0 : previndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  const nextSlide = () => {
    if (Slideindex !== imageData.length) setSlideindex(Slideindex + 1);
    else if (Slideindex === imageData.length) setSlideindex(1);
    setindex((nextindex) =>
      nextindex === imageData.length - 1 ? 0 : nextindex + 1
    );
  };
  const previousSlide = () => {
    if (Slideindex !== 1) setSlideindex(Slideindex - 1);
    else if (Slideindex === 1) setSlideindex(imageData.length);

    setindex((previndex) =>
      previndex === imageData.length - 1 ? 0 : previndex - 1
    );
  };
  return (
    <div className="SliderContainer-Wrapper">
      <div className="SlideContainer">
        {imageData.map((imageData, Index) => {
          return (
            <div className="Slide-Wrapper" key={Index}>
              <div
                className={index === Index ? "slide activeSlide" : "slide"}
                style={{ backgroundImage: `url(${imageData.image})` }}
              ></div>
            </div>
          );
        })}
        <div className="radio-wrapper">
          {imageData.map((imageData, Index) => {
            return (
              <div
                className={index === Index ? "radio radioActive" : "radio"}
                onClick={() => {
                  setindex(Index);
                }}
                key={Index}
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
            className={index === imageData.length - 1 ? "" : "arrow right"}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
