import React, { useState, useRef } from "react";
import CardComponent from "./CardComponent";
import "./SliderComponent.css";

export default function SliderComponent() {
  const places = [
    {
      title: "The Highline",
      location: "Chelsea, Manhattan",
      description: "An elevated park built on historic freight rail line. Unique gardens, art installations, and city views—all completely free.",
      tags: ["free", "scenic"],
    },
    {
      title: "Staten Island Ferry",
      location: "Staten Island, New York",
      description: "Free ferry ride with incredible views of the Statue of Liberty and Manhattan skyline. Runs 24/7 and takes 25 minutes.",
      tags: ["free", "tourist-spot", "scenic"],
    },
    {
      title: "Grand Central Terminal",
      location: "Midtown Manhattan, New York",
      description: "Marvel at this Beaux-Arts masterpiece. Visit the whispering gallery and see the famous celestial ceiling for free.",
      tags: ["free", "rainy-day", "scenic"],
    },
    {
      title: "Brooklyn Bridge Walk",
      location: "Brooklyn, New York",
      description: "85 acres of waterfront park with stunning views of Manhattan and the Brooklyn Bridge.",
      tags: ["free", "tourist-spot", "scenic"],
    },
    {
      title: "Smorgasburg",
      location: "Williamsburg, New York",
      description: "NYC's largest weekly open-air food market with 100+ local vendors every weekend in Brooklyn.",
      tags: ["free", "rainy-day", "scenic"],
    },
    {
      title: "Jazz at Lincoln Center",
      location: "Columbus Circle, New York",
      description: "World-class jazz performances in an iconic venue. Free concerts at Dizzy's Club and the atrium.",
      tags: ["free", "rainy-day", "scenic"],
    }

  ];

  const [index, setIndex] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const cardRef = useRef(null);

  const nextIndex = (index + 1) % places.length;
  const thirdIndex = (index + 2) % places.length;

  const currentCard = places[index];
  const nextCard = places[nextIndex];
  const thirdCard = places[thirdIndex];

  const onStart = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || (e.touches && e.touches[0].clientX);
    if (cardRef.current) cardRef.current.style.transition = "none";
  };

  const onMove = (e) => {
    if (!isDragging.current) return;
    const walk = (e.pageX || e.touches[0].clientX) - startX.current;
    if (walk < 0 && cardRef.current) {
      cardRef.current.style.transform = `translateX(${walk}px) rotate(5deg)`;
    }
  };

  const onEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const walk =
      ((e.changedTouches && e.changedTouches[0].clientX) || e.pageX) -
      startX.current;

    if (!cardRef.current) return;

    if (walk < -100) {
      cardRef.current.style.transition = "0.4s ease-out";
      cardRef.current.style.transform = "translateX(-120vw) rotate(-20deg)";

      setTimeout(() => {
        setIndex(nextIndex);
        if (cardRef.current) {
          cardRef.current.style.transition = "none";
          cardRef.current.style.transform = "rotate(5deg)";
        }
      }, 400);
    } else {
      cardRef.current.style.transition = "0.2s ease-out";
      cardRef.current.style.transform = "translateX(0) rotate(5deg)";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
        background: "#f0f0f0",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "320px",
          height: "480px",
          userSelect: "none",
        }}
      >
        <div
          key={`third-${thirdIndex}`}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 1,
            transform: "rotate(3deg) scale(0.9)",
          }}
        >
          <CardComponent place={thirdCard} />
        </div>

        <div
          key={`next-${nextIndex}`}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 2,
            transform: "rotate(-5deg)",
          }}
        >
          <CardComponent place={nextCard} />
        </div>

        <div
          ref={cardRef}
          key={`current-${index}`}
          onMouseDown={onStart}
          onMouseMove={onMove}
          onMouseUp={onEnd}
          onMouseLeave={onEnd}
          onTouchStart={onStart}
          onTouchMove={onMove}
          onTouchEnd={onEnd}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 3,
            cursor: "grab",
            transform: "rotate(5deg)",
            transition: "all 0.3s ease-out",
          }}
        >
          <CardComponent place={currentCard} />
        </div>
      </div>
    </div>
  );
}