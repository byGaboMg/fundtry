import logo from "./logo.svg";
import "./App.css";
import Grid from "./components/Grid";
import TimerComponent from "./components/TimerComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Exposición Fundamentos Económicos</title>
        <br />
        <h1>Teoría del consumidor</h1>
      </header>
      <body className="App-body">
        <TimerComponent />
        <Grid />
      </body>
    </div>
  );
}

export default App;
