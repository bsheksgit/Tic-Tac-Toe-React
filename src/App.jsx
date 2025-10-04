import Players from "./components/Players"

function App() {
  

  return (
    <main>
      <header><img src="game-logo.png"/>
      <h1>Tic Tac Toe</h1>
      </header>
      <div id="game-container">
        <ol id="players">
        <Players initialPlayerName="Max" symbol="X"/>
        <Players initialPlayerName="John" symbol="O"/>
        </ol>
      GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App
