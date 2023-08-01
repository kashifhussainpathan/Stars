import "./styles.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useState } from "react";

export default function App() {
  const stars = [1, 2, 3, 4, 5];

  const [hoveredStar, setHoveredStar] = useState(null);
  const [clickedStars, setClickedStars] = useState(null);

  const handleStarHover = (star) => {
    setHoveredStar(star);
  };

  const persistClickStars = (star) => {
    if (star === clickedStars) {
      setClickedStars();
    } else {
      setClickedStars(star);
    }
  };

  return (
    <div className="App">
      <div className="stars" onMouseOver={() => setHoveredStar()}>
        {stars.map((star) => (
          <div
            key={star}
            className="stars-wrapper"
            onMouseOver={(e) => {
              e.stopPropagation();
              handleStarHover(star);
            }}
            onClick={(e) => {
              e.stopPropagation();
              persistClickStars(star);
            }}
          >
            {star <= hoveredStar || star <= clickedStars ? (
              <AiFillStar />
            ) : (
              <AiOutlineStar />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
