import logo from "./logo.svg";
import "./App.css";
import KakaoMap from "./components/KakaoMap";
import DaumPostcode from "./components/DaumPostcode";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;
