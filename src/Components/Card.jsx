import React, { useState } from "react";
import "./card.css";
const Card = () => {
  // sets the state to get the value
  const [name] = useState("Kobe-Bryant");
  //   position
  const [position] = useState("position:- Shooting Guard");
  //   stats
  const [about] = useState(
    "Kobe Bryant was a shooting guard — one of the best in this position to say the least. A shooting guard can also be called the SG, two, or two guard."
  );
  //   points
  const [pointsPerGame] = useState("PointsPerGame:- 25");
  //   assists
  const [assistsPerGame] = useState("AssistsPerGame:- 4.7");
  //   rebounds
  const [reboundsPerGame] = useState("ReboundsPerGame:- 1.1");

  return (
    // card container
    <div className="card">
      {/* upper image && background */}
      <div className="upper-container">
        {/* image */}
        <div className="image-container">
          {/* img */}
          <img src="../image.png" alt="" height={"100px"} width={"100px"} />
        </div>
      </div>
      {/* lower container which contains the details using array */}
      <div className="lower-container">
        {/* here only the values are calling from useState Hooks... */}
        <h2>{name}</h2>
        <h4>{position}</h4>
        <p>{about}</p>
        <p>{pointsPerGame}</p>
        <p>{assistsPerGame}</p>
        <p>{reboundsPerGame}</p>
      </div>
    </div>
  );
};

export default Card;
