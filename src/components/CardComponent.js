import React from "react";
import "./CardComponent.css";
import { CiLocationOn } from "react-icons/ci";

const TAG_LABELS = {
  free: "FREE",
  scenic: "SCENIC",
  "tourist-spot": "TOURIST SPOT",
  "rainy-day": "RAINY DAY",
  food: "FOOD",
  budget: "BUDGET",
  nightlife: "NIGHTLIFE",
};

function CardComponent({ place }) {
  const { title, description, location, tags = [], image } = place;

  return (
    <div className="card">
      <div className="card__image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="card__image-placeholder" />
        )}
      </div>
      <div className="card__body">
        <div className="card__tags">
          {tags.map((tag) => (
            <span key={tag} className={`card__tag card__tag--${tag}`}>
              {TAG_LABELS[tag] ?? tag.toUpperCase()}
            </span>
          ))}
        </div>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <p className="card__location">
          <CiLocationOn /> {location}
        </p>
      </div>
    </div>
  );
}

export default CardComponent;
