import { useState } from "react";
import { GrLocation } from "react-icons/gr";
import "./App.css";

const featuredPlaces = [
  {
    title: "Course at The High Line",
    location: "Chelsea, Manhattan",
    desc: "An elevated park built on historic freight rail line. Unique gardens, art installations, and city views—all completely free.",
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
  {
    title: "Course at Brooklyn Bridge",
    location: "Brooklyn, NY",
    desc: "Walk across one of NYC's most famous bridges with skyline views.",
    tags: ["FREE", "SCENIC", "TOURIST SPOT"],
  },
  {
    title: "Course at Central Park",
    location: "Manhattan, NY",
    desc: "Huge urban park in NYC with lakes, walking paths, and nature escape.",
    tags: ["FREE", "SCENIC"],
  },
  {
    title: "Course at DUMBO Waterfront",
    location: "Brooklyn, NY",
    desc: "One of the best skyline views in the city with cobblestone streets.",
    tags: ["FREE", "SCENIC", "TOURIST SPOT"],
  },
  {
    title: "Course at The Vessel",
    location: "Hudson Yards",
    desc: "Climb the 2,500 steps of this honeycomb sculpture for panoramic Hudson River views.",
    tags: ["TOURIST SPOT"],
  },
  {
    title: "Course at Governors Island",
    location: "New York Harbor",
    desc: "A car-free island with sweeping views of lower Manhattan and the Statue of Liberty.",
    tags: ["FREE", "SCENIC"],
  },
  {
    title: "Course at Tenement Museum",
    location: "Lower East Side",
    desc: "Experience immigrant history firsthand through guided tours of a preserved tenement building.",
    tags: ["TOURIST SPOT", "RAINY DAY"],
  },
];

const places = [
  {
    title: "The High Line",
    location: "Chelsea, Manhattan",
    desc: "An elevated park built on an old freight rail line in NYC with gardens, art installations, and city views—all completely free.",
    tags: ["FREE", "SCENIC"],
  },
  {
    title: "Staten Island Ferry",
    location: "Lower Manhattan",
    desc: "Free ferry ride with incredible views of the Statue of Liberty and Manhattan skyline. Runs 24/7 and takes 25 minutes.",
    tags: ["FREE", "SCENIC", "TOURIST SPOT"],
  },
  {
    title: "Grand Central Terminal",
    location: "Midtown East",
    desc: "Marvel at this Beaux-Arts masterpiece. Visit the whispering gallery and see the famous celestial ceiling for free.",
    tags: ["FREE", "TOURIST SPOT", "RAINY DAY"],
  },
  {
    title: "The High Line",
    location: "Chelsea, Manhattan",
    desc: "An elevated park built on an old freight rail line in NYC with gardens, art installations, and city views—all completely free.",
    tags: ["FREE", "SCENIC"],
  },
  {
    title: "Staten Island Ferry",
    location: "Lower Manhattan",
    desc: "Free ferry ride with incredible views of the Statue of Liberty and Manhattan skyline. Runs 24/7 and takes 25 minutes.",
    tags: ["FREE", "SCENIC", "TOURIST SPOT"],
  },
  {
    title: "Grand Central Terminal",
    location: "Midtown East",
    desc: "Marvel at this Beaux-Arts masterpiece. Visit the whispering gallery and see the famous celestial ceiling for free.",
    tags: ["FREE", "TOURIST SPOT", "RAINY DAY"],
  },
  {
    title: "The High Line",
    location: "Chelsea, Manhattan",
    desc: "An elevated park built on an old freight rail line in NYC with gardens, art installations, and city views—all completely free.",
    tags: ["FREE", "SCENIC"],
  },
  {
    title: "Staten Island Ferry",
    location: "Lower Manhattan",
    desc: "Free ferry ride with incredible views of the Statue of Liberty and Manhattan skyline. Runs 24/7 and takes 25 minutes.",
    tags: ["FREE", "SCENIC", "TOURIST SPOT"],
  },
  {
    title: "Grand Central Terminal",
    location: "Midtown East",
    desc: "Marvel at this Beaux-Arts masterpiece. Visit the whispering gallery and see the famous celestial ceiling for free.",
    tags: ["FREE", "TOURIST SPOT", "RAINY DAY"],
  },
];

const VISIBLE = 3;

function getCardStyle(offset) {
  const base = {
    position: "absolute",
    width: "75%",
    top: 0,
    left: 0,
    height: "100%",
    transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.45s ease",
  };
  if (offset === 0) return { ...base, transform: "translateX(0%)", zIndex: 10, opacity: 1, cursor: "grab" };
  if (offset === 1) return { ...base, transform: "translateX(80%)", zIndex: 6, opacity: 1, cursor: "pointer" };
  if (offset === 2) return { ...base, transform: "translateX(90%)", zIndex: 3, opacity: 1, cursor: "pointer" };
  return { ...base, transform: "translateX(100%)", zIndex: 1, opacity: 0, pointerEvents: "none" };
}

export default function App() {
  const [current, setCurrent] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);

  const goTo = (idx) => { if (idx !== current) setCurrent(idx); };
  const next = () => { if (current < featuredPlaces.length - 1) setCurrent(c => c + 1); };
  const prev = () => { if (current > 0) setCurrent(c => c - 1); };

  const handleMouseDown = (e) => setDragStartX(e.clientX);
  const handleMouseUp = (e) => {
    if (dragStartX === null) return;
    const diff = dragStartX - e.clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    setDragStartX(null);
  };
  const handleTouchStart = (e) => setDragStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (dragStartX === null) return;
    const diff = dragStartX - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    setDragStartX(null);
  };

  const visibleCards = Array.from({ length: VISIBLE }, (_, i) => {
    const idx = current + i;
    if (idx >= featuredPlaces.length) return null;
    return { ...featuredPlaces[idx], idx, offset: i };
  }).filter(Boolean).reverse();

  return (
    <>

      <nav className="nav">
        <span className="nav-brand">NYC EDIT</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </nav>
      <div className="nav-line" />


      <div className="section-label">
        <span>TODAY'S COURSE</span>
        <span className="arrow">→</span>
      </div>


      <div className="course-section">


        <div className="slider-col">
          <div
            className="slider-window"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="stack-container">
              {visibleCards.map(({ idx, offset, title, location, desc, tags }) => (
                <div
                  key={idx}
                  className="card"
                  style={getCardStyle(offset)}
                  onClick={() => offset > 0 && goTo(idx)}
                >
                  <div className="img" />
                  <div className="card-body">
                    {tags.map((tag, i) => (
                      <span key={i} className={tag === "FREE" ? "badge" : "blackb"}>
                        {tag}
                      </span>
                    ))}
                    <h3>{title.replace("Course at ", "")}</h3>
                    <p>{desc}</p>
                    <div className="location">
                      <GrLocation className="location-icon" />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-dots">
            {featuredPlaces.map((_, i) => (
              <button
                key={i}
                className="dot"
                onClick={() => goTo(i)}
                style={{
                  backgroundColor: i === current ? "#ff007a" : "#ccc",
                  width: i === current ? 20 : 8,
                }}
              />
            ))}
          </div>
        </div>


        <div className="desc-panel">
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
              6-8 hours
            </span>
            <span>4.2 miles</span>
            <span>$ 15</span>
          </div>
        </div>
      </div>


      <div className="explore-section">
        <div className="section-label" style={{ padding: 0 }}>
          <span>EXPLORE</span>
        </div>


        <div className="filter-row">
          {["ALL", "FOOD", "TOURIST SPOTS", "RAINY DAY", "NIGHTLIFE", "BUDGET"].map((f) => (
            <button key={f} className="filter-pill">{f}</button>
          ))}
        </div>


        <div className="grid">
          {places.map((place, index) => (
            <div
              className={`card ${index % 2 === 0 ? "hover-pink" : "hover-light"}`}
              key={index}
            >
              <div className="img" />
              <div className="card-body">
                {place.tags.map((tag, i) => (
                  <span key={i} className={tag === "FREE" ? "badge" : "blackb"}>
                    {tag}
                  </span>
                ))}
                <h3>{place.title}</h3>
                <p>{place.desc}</p>
                <div className="location">
                  <GrLocation className="location-icon" />
                  <span>{place.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}