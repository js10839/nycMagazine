import { GrLocation } from "react-icons/gr";
import "./App.css";


export default function App() {
  const featuredPlaces = [
    {
      title: "Course at The High Line",
      location: "Chelsea, Manhattan",
      desc: "An elevated park built on historic freight rail line.",
      tags: ["FREE", "SCENIC"],
    },
    {
      title: "Course at Staten Island Ferry",
      location: "Lower Manhattan",
      desc: "Free ferry ride with incredible views of the Statue of Liberty and Manhattan skyline.",
      tags: ["FREE", "SCENIC", "TOURIST SPOT"],
    },
    {
      title: "Course at Grand Central Terminal",
      location: "Midtown East",
      desc: "Marvel at this Beaux-Arts masterpiece. Visit the whispering gallery and see the famous celestial ceiling for free.",
      tags: ["FREE", "TOURIST SPOT", "RAINY DAY"],
    },
  ];

  // 위에는 코스 아래는 원래 카드 

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
    <>
      <div className="top-section">
        <h1>Lower Manhattan Budget Day</h1>
        <p>
          A full day exploring downtown Manhattan's most iconic spots without
          breaking the bank. This route takes you from Battery Park through the
          Financial District to Brooklyn Bridge, with budget-friendly food stops
          along the way.
        </p>

        <div className="top-info">
          <span>
           <GrLocation className="location-icon" />
            4.2 miles
          </span>
        </div>
      </div>

      <div className="grid">
        {featuredPlaces.map((place, index) => (
          <div
            className={`card ${index % 2 === 0 ? "hover-pink" : "hover-light"}`}
            key={index}
          >
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

              <h3>{place.title.replace("Course at ", "")}</h3>
              <p>{place.desc}</p>

              <div className="location">
                <GrLocation />
                <span>{place.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 이 아래부터 걍 세 개 카드 위에는 코스 */}

      <div className="grid">
        {places.map((place, index) => (
          <div
            className={`card ${index % 2 === 0 ? "hover-pink" : "hover-light"}`}
            key={index}
          >
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
    </>
  );
}
