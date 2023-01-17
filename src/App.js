import Weatherapp from "./Weatherapp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weatherapp defaultCity="Berlin" />
      </header>
    </div>
  );
}

export default App;
