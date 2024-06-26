import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import "./RatingStarStyle.css";

const RatingStar = ({ value }) => {
  const [map, setMap] = useState([null, null, null, null, null]);

  useEffect(() => {
    if (value === 0 || value > 5) {
      setMap([null, null, null, null, null]);
      return;
    }
    let newMap = map.map((i, index) => {
      if (index + 1 <= value) {
        return 1;
      } else {
        return null;
      }
    });
    setMap(newMap);
  }, [value, map]);

  return (
    <div className="RatingStars">
      {map.map((i) => {
        if (!i) {
          return <AiFillStar className="RatingOutlineStar" />;
        } else {
          return <AiFillStar className="RatingFillStar" />;
        }
      })}
    </div>
  );
};

export default RatingStar;
