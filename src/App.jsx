import GameBoard from "./components/GameBoard";
import Players from "./components/Players";
import {useState} from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer) => curActivePlayer === "X"?"O":"X");
  }

  return (
    <main>
      <header><img src="game-logo.png"/>
      <h1>Tic Tac Toe</h1>
      </header>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <Players initialPlayerName="Max" symbol="X" isActive={activePlayer==="X"}/>
        <Players initialPlayerName="John" symbol="O" isActive={activePlayer==="O"}/>
        </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol= {activePlayer} />
      </div>
      LOG
    </main>
  );
}

export default App
