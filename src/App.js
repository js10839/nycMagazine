import "./App.css";
import Navbar from "./components/Navbar";
import TodaysCourse from "./components/TodaysCourse";
import Contents from "./components/Contents";
import places from "./data/places";

// First 3 places are featured in the slider
const todayCards = places.slice(0, 3);

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <TodaysCourse todayCards={todayCards} />
        <Contents places={places} />
      </main>
    </div>
  );
}

export default App;
