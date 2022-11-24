import "./App.css";
import React, { useState, useEffect } from "react";
import Box from "./components/Box.js";

const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, setGameState] = useState(initialState);
  const [isXChance, setisXchance] = useState(true);
  const [countX, setCountX] = useState(0);
  const [countO, setCountO] = useState(0);

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    strings[index] = isXChance ? "X" : "O";
    setGameState(strings);
    setisXchance(!isXChance);
  };

  const clearGame = () => {
    setGameState(initialState);
  };

  useEffect(() => {
    if (
      (gameState[0] &&
        gameState[0] === gameState[1] &&
        gameState[0] === gameState[2] &&
        gameState[0] === "X") ||
      (gameState[3] &&
        gameState[3] === gameState[4] &&
        gameState[3] === gameState[5] &&
        gameState[3] === "X") ||
      (gameState[6] &&
        gameState[6] === gameState[7] &&
        gameState[6] === gameState[8] &&
        gameState[6] === "X") ||
      (gameState[0] &&
        gameState[0] === gameState[3] &&
        gameState[0] === gameState[6] &&
        gameState[0] === "X") ||
      (gameState[1] &&
        gameState[1] === gameState[4] &&
        gameState[1] === gameState[7] &&
        gameState[1] === "X") ||
      (gameState[2] &&
        gameState[2] === gameState[5] &&
        gameState[2] === gameState[8] &&
        gameState[2] === "X") ||
      (gameState[0] &&
        gameState[0] === gameState[4] &&
        gameState[0] === gameState[8] &&
        gameState[0] === "X") ||
      (gameState[2] &&
        gameState[2] === gameState[4] &&
        gameState[2] === gameState[6] &&
        gameState[2] === "X")
    ) {
      setCountX(countX + 1);
      clearGame();
    } else if (
      (gameState[0] &&
        gameState[0] === gameState[1] &&
        gameState[0] === gameState[2] &&
        gameState[0] === "O") ||
      (gameState[3] &&
        gameState[3] === gameState[4] &&
        gameState[3] === gameState[5] &&
        gameState[3] === "O") ||
      (gameState[6] &&
        gameState[6] === gameState[7] &&
        gameState[6] === gameState[8] &&
        gameState[6] === "O") ||
      (gameState[0] &&
        gameState[0] === gameState[3] &&
        gameState[0] === gameState[6] &&
        gameState[0] === "O") ||
      (gameState[1] &&
        gameState[1] === gameState[4] &&
        gameState[1] === gameState[7] &&
        gameState[1] === "O") ||
      (gameState[2] &&
        gameState[2] === gameState[5] &&
        gameState[2] === gameState[8] &&
        gameState[2] === "O") ||
      (gameState[0] &&
        gameState[0] === gameState[4] &&
        gameState[0] === gameState[8] &&
        gameState[0] === "O") ||
      (gameState[2] &&
        gameState[2] === gameState[4] &&
        gameState[2] === gameState[6] &&
        gameState[2] === "O")
    ) {
      setCountO(countO + 1);
      clearGame();
    }
  }, [gameState]);

  return (
    <div className="App">
      <div className="header">
        <p className="headerText">React Tic Tac Toe- HARI</p>
        <div className="results">
          <p className="resultX">
            X- <span>{countX}</span>
          </p>
          <p className="resultO">
            O- <span>{countO}</span>
          </p>
        </div>

        <div className="row">
          <Box state={gameState[0]} onClick={() => onSquareClicked(0)} />
          <Box state={gameState[1]} onClick={() => onSquareClicked(1)} />
          <Box state={gameState[2]} onClick={() => onSquareClicked(2)} />
        </div>
        <div className="row">
          <Box state={gameState[3]} onClick={() => onSquareClicked(3)} />
          <Box state={gameState[4]} onClick={() => onSquareClicked(4)} />
          <Box state={gameState[5]} onClick={() => onSquareClicked(5)} />
        </div>
        <div className="row">
          <Box state={gameState[6]} onClick={() => onSquareClicked(6)} />
          <Box state={gameState[7]} onClick={() => onSquareClicked(7)} />
          <Box state={gameState[8]} onClick={() => onSquareClicked(8)} />
        </div>
        <button className="clear" onClick={() => clearGame()}>
          Clear Game
        </button>
      </div>
    </div>
  );
}

export default App;
