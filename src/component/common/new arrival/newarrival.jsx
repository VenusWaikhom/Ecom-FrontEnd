import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import { useMediaQuery } from "@mui/material";
import "./newarrival.css";

function NewArrival({ title, data = [] }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div className="ProductWrapper NewArrivalProductWrapper">
      <div className="ProductHead NewArrivalProductHead">
        <div className="ProductHeader">{title}</div>
        <div className="ViewMore">View More</div>
      </div>
      <div className="NewArrivalWrapper">
        <div className="NewArrivalItemGap">
          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={isMobile ? 1 : 4}
              gutter={20}
              leftChevron={<button>{"<"}</button>}
              rightChevron={<button>{">"}</button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              {data.map((data, index) => {
                return (
                  <a href="/ProductPage" key={index}>
                    <div className="NewArrivalItemWrapper">
                      <div className="NNewArrivalImage">
                        <img src={data.image} alt="New Arrival" />
                      </div>
                      <div className="NewArrivalProduct">
                        {data.description}
                      </div>
                      <div className="NewArrivalPrice">{data.price}</div>
                    </div>
                  </a>
                );
              })}
            </ItemsCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
