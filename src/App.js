import "./App.css";
import { ThreeByThree } from "./Components/ThreeByThree";
import { useContext } from "react";
import { PlayerContext } from "./contexts/Player";

function App() {
  const { player } = useContext(PlayerContext);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Tic Tac Toe</h1>
        <p className="player">{player}</p>
        
      </header>
      <ThreeByThree />
    </div>
  );
}

export default App;
