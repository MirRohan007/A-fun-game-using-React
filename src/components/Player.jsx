import { useRef, useState } from "react";

export default function Player() {
  const [enterPlayerName, setEnterPlayerName] = useState("");
  const playerName = useRef();

  const handleSubmit = () => {
  setEnterPlayerName(playerName.current.value)
  playerName.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
