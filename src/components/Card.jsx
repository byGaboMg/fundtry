import React, { useState } from "react";
import "./Card.css";

const Card = ({ titleFront, textFront, titleBack, textBack }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card" onClick={handleFlip}>
      <div className={`content ${isFlipped ? "flipped" : ""}`}>
        <div className="back">
          <div className="back-content">
            <strong>
              <div className="numeroTarjeta">{textBack}</div>
              <h2>{titleFront}</h2>
            </strong>
            <h6>{textFront}</h6>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>
          <div className="front-content">
            <small className="badge">{titleBack}</small>
            <div className="description">
              <div className="title">
                <p className="title">
                  <strong>{textBack}</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0,0,256,256"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: "normal" }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset={0}
                    strokeDasharray
                    strokeMiterlimit={10}
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth={1}
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                    </g>
                  </g>
                </svg>
              </div>
              <p className="card-footer">30s - 1min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
