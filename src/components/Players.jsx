import { useState } from "react";

export default function Players({ initialPlayerName, symbol }) {

  const [playerName, setPlayerName] = useState(initialPlayerName);
  const [isEditing, setisEditing] = useState(false);

  function handleEdit(){
    setisEditing(editing => !editing);
  }

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  let playerNameArea = <span className="player-name">{playerName}</span>;
  if(isEditing){
    playerNameArea = <input type="text" required defaultValue={playerName} onChange={handleChange}/>
  }

  return (
    <li>
      <span className="player">
        {playerNameArea}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}> {isEditing?"Save":"Edit"} </button>
    </li>
  );
}
