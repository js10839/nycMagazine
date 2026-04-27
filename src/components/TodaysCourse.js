import React from "react";
import SliderComponent from "./SliderComponent";
import "./TodaysCourse.css";

// todayCards: subset of places[] chosen for the featured slider
function TodaysCourse({ todayCards }) {
  return (
    <section className="todays-course">
      <h2 className="section-title">Today's Course</h2>
      {/* ── Slider designer plugs in here ── */}
      <SliderComponent cards={todayCards} />
    </section>
  );
}

export default TodaysCourse;
