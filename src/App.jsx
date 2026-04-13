import React, { useState, useRef } from 'react';
import { GrLocation } from "react-icons/gr";
import "./App.css";

export default function App() {
  const places = [
    { title: "The Highline", location: "Chelsea, Manhattan", desc: "An elevated park built on an old freight rail line.", tags: ["FREE", "SCENIC"] },
    { title: "Staten Island Ferry", location: "Staten Island, NY", desc: "Free ferry ride with amazing views.", tags: ["FREE", "TOURIST SPOT", "SCENIC"] },
    { title: "Grand Central Terminal", location: "Midtown Manhattan, NY", desc: "Historic Beaux-Arts train station.", tags: ["FREE", "RAINY DAY", "SCENIC"] },
    { title: "Brooklyn Bridge Walk", location: "Brooklyn, NY", desc: "Walk across NYC's most famous bridges.", tags: ["FREE", "TOURIST SPOT", "SCENIC"] },
    { title: "Central Park", location: "Manhattan, NY", desc: "Huge urban park.", tags: ["FREE", "RAINY DAY", "SCENIC"] },
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
    if (cardRef.current) cardRef.current.style.transition = 'none';
  };

  const onMove = (e) => {
    if (!isDragging.current) return;
    const walk = (e.pageX || e.touches[0].clientX) - startX.current;
    if (walk < 0 && cardRef.current)
      cardRef.current.style.transform = `translateX(${walk}px) rotate(5deg)`;
  };

  const onEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const walk = ((e.changedTouches && e.changedTouches[0].clientX) || e.pageX) - startX.current;
    if (!cardRef.current) return;
    if (walk < -100) {
      cardRef.current.style.transition = '0.4s ease-out';
      cardRef.current.style.transform = 'translateX(-120vw) rotate(-20deg)';
      setTimeout(() => {
        setIndex(nextIndex);
        if (cardRef.current) cardRef.current.style.transition = 'none';
      }, 400);
    } else {
      cardRef.current.style.transition = '0.2s ease-out';
      cardRef.current.style.transform = 'translateX(0) rotate(5deg)';
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      overflow: 'hidden',
      background: '#f0f0f0'
    }}>

      <div style={{
        position: 'relative',
        width: '320px',
        height: '480px',
        userSelect: 'none'
      }}>

        <div className="card" key={`third-${thirdIndex}`}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 1,
            transform: 'rotate(3deg) scale(0.9)'
          }}>
          <div className="img" style={{ height: '220px' }} />
          <div className="card-body">
            {thirdCard.tags.map((tag, i) => <span key={i} className={tag === "FREE" ? "badge" : "blackb"}>{tag}</span>)}
            <h3>{thirdCard.title}</h3>
            <p>{thirdCard.desc}</p>
            <div className="location"><GrLocation /><span>{thirdCard.location}</span></div>
          </div>
        </div>

        <div className="card" key={`next-${nextIndex}`}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 2,
            transform: 'rotate(-5deg)'
          }}>

          <div className="img" style={{ height: '220px' }} />
          <div className="card-body">
            {nextCard.tags.map((tag, i) => <span key={i} className={tag === "FREE" ? "badge" : "blackb"}>{tag}</span>)}
            <h3>{nextCard.title}</h3>
            <p>{nextCard.desc}</p>
            <div className="location"><GrLocation /><span>{nextCard.location}</span></div>
          </div>
        </div>

        <div className="card" ref={cardRef} key={`current-${index}`}
          onMouseDown={onStart} onMouseMove={onMove} onMouseUp={onEnd} onMouseLeave={onEnd}
          onTouchStart={onStart} onTouchMove={onMove} onTouchEnd={onEnd}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 3,
            cursor: 'grab',
            transform: 'rotate(5deg)',
            transition: 'all 0.3s ease-out'
          }}>

          <div className="img" style={{ height: '220px' }} />
          <div className="card-body">
            {currentCard.tags.map((tag, i) => <span key={i} className={tag === "FREE" ? "badge" : "blackb"}>{tag}</span>)}
            <h3>{currentCard.title}</h3>
            <p>{currentCard.desc}</p>
            <div className="location"><GrLocation /><span>{currentCard.location}</span></div>
          </div>
        </div>

      </div>
    </div>
  );
}