import logo from "./logo.svg";
import "./App.css";
import ReactWeather, { useOpenWeather } from "react-open-weather";

function App() {
  return (
    <div className="App">
      <input type={"text"} style={{ padding: 10 }} />
      <button style={{ padding: 10, borderRadius: 5, backgroundColor: "red" }}>
        Add btn
      </button>
      <p>asff</p>
    </div>
  );
}

export default App;
