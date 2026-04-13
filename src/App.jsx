import { GrLocation } from "react-icons/gr";
import "./App.css";

export default function App() {
  const places = [
    {
      title: "The Highline",
      location: "Chelsea, Manhattan",
      desc: "An elevated park built on an old freight rail line in NYC with gardens and views.",
      tags: ["FREE", "SCENIC"],
    },
    {
      title: "Staten Island Ferry",
      location: "Staten Island, NY",
      desc: "Free ferry ride with amazing views of the Statue of Liberty and Manhattan skyline.",
      tags: ["FREE", "TOURIST SPOT", "SCENIC"],
    },
    {
      title: "Grand Central Terminal",
      location: "Midtown Manhattan, NY",
      desc: "Historic Beaux-Arts train station with famous ceiling and whispering gallery.",
      tags: ["FREE", "RAINY DAY", "SCENIC"],
    },
    {
      title: "The Highline Park",
      location: "Chelsea, Manhattan",
      desc: "A second scenic elevated park with gardens and art installations in NYC.",
      tags: ["FREE", "SCENIC"],
    },
    {
      title: "Brooklyn Bridge Walk",
      location: "Brooklyn, NY",
      desc: "Walk across one of NYC’s most famous bridges with skyline views.",
      tags: ["FREE", "TOURIST SPOT", "SCENIC"],
    },
    {
      title: "Central Park",
      location: "Manhattan, NY",
      desc: "Huge urban park in NYC with lakes, walking paths, and nature escape.",
      tags: ["FREE", "RAINY DAY", "SCENIC"],
    },
  ];

  return (
    <div className="grid">
      {places.map((place, index) => (
        <div className="card" key={index}>
          <div className="img"></div>

          <div className="card-body">
            {place.tags.map((tag, i) => (
              <span
                key={i}
                className={tag === "FREE" ? "badge" : "blackb"}
              >
                {tag}
              </span>
            ))}

            <h3>{place.title}</h3>
            <p>{place.desc}</p>

            <div className="location">
              <GrLocation />
              <span>{place.location}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
