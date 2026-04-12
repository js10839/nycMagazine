import React from "react";
import "./SliderComponent.css";

function SliderComponent({ cards = [] }) {
  return (
    <div className="slider-placeholder">
      <p className="slider-placeholder__label">[ Slider goes here ]</p>
      <p className="slider-placeholder__sub">{cards.length} cards</p>
    </div>
  );
}

export default SliderComponent;
