import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


import { GrLocation } from "react-icons/gr";

export default function Example() {
  return (
    <div style={{ display: "flex" }}>
    	<button><GrLocation /></button>
    	<p>Location</p>
    </div>
  );
}

