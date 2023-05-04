import './App.css';
import { ThreeByThree } from './Components/ThreeByThree';
import { useContext } from 'react';
import { PlayerContext } from './contexts/Player'


function App() {
  const {player, setPlayer} = useContext(PlayerContext);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Tic Tac Toe
          {player}
        </p>
      </header>
      <ThreeByThree/>
    </div>
  );
}

export default App;
