import { GrLocation } from "react-icons/gr";
import "./CardComponent.css";

function formatTag(tag = "") {
  return tag.replace(/-/g, " ").toUpperCase();
}

export default function CardComponent({ place }) {
  if (!place) {
    return null;
  }

  const { title, location, description, tags = [], image } = place;

  return (
    <article className="card">
      {image ? (
        <img className="img" src={image} alt={title} />
      ) : (
        <div className="img" aria-hidden="true" />
      )}

      <div className="card-body">
        <div className="card-tags">
          {tags.map((tag) => (
            <span
              key={tag}
              className={tag === "free" ? "badge" : "blackb"}
            >
              {formatTag(tag)}
            </span>
          ))}
        </div>

        <h3>{title}</h3>
        <p>{description}</p>

        <div className="location">
          <GrLocation />
          <span>{location}</span>
        </div>
      </div>
    </article>
  );
}