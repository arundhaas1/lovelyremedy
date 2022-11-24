import './App.css';
import React, { useState } from 'react';
import Box from "./components/Box.js";       

const initialState=["","","","","","","","",""];

function App(){
  
  const [gameState, setGameState]=useState(initialState);

  // const increment = ()=>{
  //   setData(data+1)
  // }
  return(
    <div className='App'>
      <div className='header'>
        <p className='headerText'>React Tic Tac Toe- HARI</p>

      <div className='row'>
        <Box state={gameState[0]}/>
        <Box state={gameState[1]}/>
        <Box state={gameState[2]}/>
       </div>
       <div className='row'>
        <Box state={gameState[3]}/>
        <Box state={gameState[4]}/>
        <Box state={gameState[5]}/>
       </div>
       <div className='row'>
        <Box state={gameState[6]}/>
        <Box state={gameState[7]}/>
        <Box state={gameState[8]}/>
       </div>
        {/* <p>{data}</p>
        <button onClick={increment}>up</button> */}
      </div>
       <button className='clear'>Clear Game</button>
    </div>
    
  );
}

export default App;
