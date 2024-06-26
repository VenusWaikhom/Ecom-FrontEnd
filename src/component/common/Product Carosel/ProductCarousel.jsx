import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeProductCarouselData from "./HomeProductCarouselData";
import "./ProductCarousel.css";
import { useState } from "react";

const ProductCarousel = () => {
  const [current, setCurrent] = useState(0);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      swipeable={true}
      autoPlay={false}
      responsive={responsive}
      centerMode
      afterChange={(previousSlide, { currentSlide, onMove }) => {
        setCurrent(currentSlide);
        console.log(currentSlide);
      }}
      className="ProductCarouselWrapper"
    >
      {HomeProductCarouselData.map((HomeProductCarouselData, index) => {
        return (
          <div className="ProductCarouselImage" key={index}>
            <img
              style={{
                transform: current === index ? "scale(1)" : "scale(0.9)",
              }}
              src={HomeProductCarouselData.image}
              className="carouselImage"
              alt="Product Item"
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ProductCarousel;
