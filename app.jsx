import { GrLocation } from "react-icons/gr";
import "./App.css";

export default function App() {
  return (
    <div className="grid">


      <div className="card">
        <div className="img"></div>

        <div className="card-body">
          <span className="badge">FREE</span>
          <span className="blackb">SCENIC</span>

          <h3>The Highline</h3>
          <p>
            An elevated park built on an old freight rail line in NYC with gardens and views.
          </p>

          <div className="location">
            <GrLocation />
            <span>Location</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="img"></div>

        <div className="card-body">
          <span className="badge">FREE</span>
          <span className="blackb">TOURIST SPOT</span>
          <span className="blackb">SCENIC</span>

          <h3>Staten Island Ferry</h3>
          <p>
            Free ferry ride with amazing views of the Statue of Liberty and Manhattan skyline.
          </p>

          <div className="location">
            <GrLocation />
            <span>Location</span>
          </div>
        </div>
      </div>

   
      <div className="card">
        <div className="img"></div>

        <div className="card-body">
          <span className="badge">FREE</span>
          <span className="blackb">RAINY DAY</span>
          <span className="blackb">SCENIC</span>

          <h3>Grand Central Terminal</h3>
          <p>
            Historic Beaux-Arts train station with famous ceiling and whispering gallery.
          </p>

          <div className="location">
            <GrLocation />
            <span>Location</span>
          </div>
        </div>
      </div>


      <div className="card">
        <div className="img"></div>

        <div className="card-body">
          <span className="badge">FREE</span>
          <span className="blackb">SCENIC</span>

          <h3>The Highline Park</h3>
          <p>
            A second scenic elevated park with gardens and art installations in NYC.
          </p>

          <div className="location">
            <GrLocation />
            <span>Location</span>
          </div>
        </div>
      </div>


      <div className="card">
        <div className="img"></div>

        <div className="card-body">
          <span className="badge">FREE</span>
          <span className="blackb">TOURIST SPOT</span>
          <span className="blackb">SCENIC</span>

          <h3>Brooklyn Bridge Walk</h3>
          <p>
            Walk across one of NYC’s most famous bridges with skyline views.
          </p>

          <div className="location">
            <GrLocation />
            <span>Location</span>
          </div>
        </div>
      </div>


      <div className="card">
        <div className="img"></div>

        <div className="card-body">
          <span className="badge">FREE</span>
          <span className="blackb">RAINY DAY</span>
          <span className="blackb">SCENIC</span>

          <h3>Central Park</h3>
          <p>
            Huge urban park in NYC with lakes, walking paths, and nature escape.
          </p>

          <div className="location">
            <GrLocation />
            <span>Location</span>
          </div>
        </div>
      </div>

    </div>
  );
}
