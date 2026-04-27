import React, { useState } from "react";
import CardComponent from "./CardComponent";
import "./Contents.css";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "food", label: "Food" },
  { key: "tourist-spot", label: "Tourist Spots" },
  { key: "budget", label: "Budget" },
  { key: "rainy-day", label: "Rainy Day" },
  { key: "nightlife", label: "Nightlife" },
];

function Contents({ places }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? places
      : places.filter((p) => p.tags.includes(activeFilter));

  return (
    <section className="contents">
      <div className="contents__header">
        <h2 className="section-title">Contents</h2>
        <div className="contents__filters">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              className={`filter-btn${activeFilter === key ? " filter-btn--active" : ""}`}
              onClick={() => setActiveFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Card designer's component is rendered here ── */}
      <div className="contents__grid">
        {filtered.map((place) => (
          <CardComponent key={place.id} place={place} />
        ))}
      </div>
    </section>
  );
}

export default Contents;
